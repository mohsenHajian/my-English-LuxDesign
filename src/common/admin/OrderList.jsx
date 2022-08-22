import { Icon } from '@iconify/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import FactureCard from '../../components/factureCard';
import OrderAdminCard from '../../components/orderAdminCard';
import { miladi_be_shamsi } from '../../utils/dateConvert';

const OrderList = () => {
    const [dateString, setDataString] = useState()
    const [deliverStatus, setDeliverStatus] = useState()
    const [orderListData, setOrderListData] = useState()
    const [orderList, setOrderList] = useState(orderListData)
    const [currentOrder, setCurrentOrder] = useState()
    const [sccessfulDelivery, setSccessfulDelivery] = useState(0)





    useEffect(() => {
        axios.get('http://localhost:8000/orderList').then(({ data }) => { setOrderListData(data); setOrderList(data) })
    }, [sccessfulDelivery])


    useEffect(() => {
        const moment = require('moment');
        let date = moment(currentOrder?.date).format('YYYY/M/D').split('/').map(num => Number(num));
        if (date) {
            setDataString(miladi_be_shamsi(date[0], date[1], date[2]))
        }
    }, [currentOrder])


    useEffect(() => {
        let data = orderListData ? [...orderListData] : null
        let filterData = data?.filter(order => {
            if (deliverStatus) {
                return order.status === deliverStatus
            } else {
                return order
            }
        })
        setOrderList(filterData)
    }, [deliverStatus])




    const oldestOrderHandler = () => {
        let data = [...orderListData]
        let sortArr = data.sort((a, b) => parseFloat(b.date) - parseFloat(a.date));
        setOrderList(sortArr)
    }


    const newstOrderHandler = () => {
        let data = [...orderListData]
        let sortArr = data.sort((a, b) => parseFloat(a.date) - parseFloat(b.date));
        setOrderList(sortArr)
    }

    const totalPriceHandler = () => {
        let sum = currentOrder?.cart.reduce((prev, current) => prev + (Number(current.price) * current.stock), 0)
        switch (currentOrder?.discount) {
            case 'GOLD':
                return sum - (sum * 40 / 100) + 25000
            case 'SILVER':
                return sum - (sum * 20 / 100) + 25000
            case 'BRONZE':
                return sum - (sum * 10 / 100) + 25000
            default:
                return sum + 25000
        }
    }

    const totalProductsHandler = () => {
        return currentOrder?.cart.reduce((prev, current) => prev + current.stock, 0)
    }


    const deliveryHandler = () => {
        axios.put(`http://localhost:8000/orderList/${currentOrder.id}`,{...currentOrder,status:'delivered'})
        setSccessfulDelivery(sccessfulDelivery+1)
        toast.success("کالا با موفقیت تحویل داده شد", {
            position: "top-right",
            closeOnClick: true,
        });
    }


    console.log(orderList)

    return (
        <>
            <div class="modal fade" id="orderModal" tabindex="-1" aria-labelledby="orderModalLabel" aria-hidden="true" >
                <div class="modal-dialog border-0">
                    <div class="modal-content border-0">
                        <h4 className='p-3 border-bottom'>سفارش</h4>
                        <div className="d-flex flex-wrap">
                            <div className="col-6 d-flex flex-column p-3 gap-3">
                                <span className='fa-num'>نام کاربری : {currentOrder?.userInfo[0].username}</span>
                                <span className='fa-num'>شماره تلفن : {currentOrder?.userInfo[0].phoneNumber}</span>
                                <span className='fa-num'>آدرس : {currentOrder?.address}</span>
                                <span className='fa-num'>تعداد کالا ها : {totalProductsHandler()}</span>
                                <span className='fa-num'>تاریخ ثبت سفارش : {dateString}</span>
                            </div>
                            <div className="col-6 d-flex flex-column p-3 gap-3">
                                <span className='fa-num'>ایمیل : {currentOrder?.userInfo[0].email}</span>
                                <span className='fa-num'>شماره تلفن گیرنده محصول : {currentOrder?.deliveryPhoneNumber}</span>
                                <span className='fa-num'>ساعت تحویل : {currentOrder?.deliveryTime}</span>
                                <span className='fa-num'>مبلغ کل : {totalPriceHandler()} تومان</span>
                                <span className='fa-num'>وضعیت سفارش : {currentOrder?.status === 'delivered' ? 'تحویل داده شده' : 'تحویل داده نشده'} </span>
                            </div>
                            <div className="col-12 d-flex flex-column p-3 gap-3 border-bottom">
                                {currentOrder?.cart.map(card => <FactureCard card={card} />)}
                                {currentOrder?.status === 'notDelivered' ? <button className='bg-success text-white p-3 rounded-3 border-0' data-bs-dismiss="modal" onClick={deliveryHandler}>تحویل داده شد</button> : null}
                            </div>
                        </div>
                        <div class="modal-footer d-flex justify-content-between border-0">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">بستن</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="OrderList py-3 w-100 d-flex flex-column">
                <p className='OrderList-title text-center py-3 rounded-3 text-white'>لیست سفارشات</p>
                <div className="d-flex justify-content-between">
                    <h4>مدریت سفارش ها</h4>
                    <div className="d-flex gap-5 p-2" onChange={(e) => setDeliverStatus(e.target.value)}>
                        <div>
                            <label htmlFor="">همه</label>
                            <input className='mx-2' type="radio" value="" name="gender" />
                        </div>
                        <div>
                            <label htmlFor="">تحویل داده شده</label>
                            <input className='mx-2' type="radio" value="delivered" name="gender" />
                        </div>
                        <div>
                            <label htmlFor="">تحویل داده نشده</label>
                            <input className='mx-2' type="radio" value="notDelivered" name="gender" />
                        </div>
                    </div>
                </div>
                <div className="d-flex flex-column p-2">
                    <div className="d-flex border-bottom justify-content-between py-3">
                        <span className='col-2'>نام کاربر</span>
                        <span className='col-3 text-center'>مجموع مبلغ</span>
                        <div className="d-flex col-5 justify-content-center">
                            <span>زمان ثبت سفارش</span>
                            <Icon icon="ant-design:arrow-up-outlined" color="#666" width="25" cursor='pointer' onClick={oldestOrderHandler} />
                            <Icon icon="ant-design:arrow-down-outlined" color="#666" width="25" cursor='pointer' onClick={newstOrderHandler} />
                        </div>
                        <span className='col-2 text-center'>نمایش</span>
                    </div>
                    {orderList?.map(order => <OrderAdminCard key={order.id} order={order} setCurrentOrder={setCurrentOrder} />)}
                </div>
            </div>
        </>
    );
}

export default OrderList;