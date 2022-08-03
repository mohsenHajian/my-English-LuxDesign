import { Icon } from '@iconify/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import Input from '../../components/input';
import { resetCartList } from '../../redux/slice/cartListSlice';
import './checkout.style.scss'

const Checkout = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { uniqueArr } = useSelector(state => state.uniqueArr)
    const { userToken } = useSelector(state => state.userToken)
    const [totalPrice, setTotalPrice] = useState(0)
    const [address,setAddress] = useState('')
    const [discount,setDiscount] = useState('')
    const [deliveryTime,setDeliveryTime] = useState('')
    const [deliveryPhoneNumber,setDeliveryPhoneNumber] = useState('')
    const [paymentMethod,setPaymentMethod] = useState('')


    useEffect(() => {
        let total = 0
        uniqueArr.forEach((a) => total += Number(a.price))
        setTotalPrice(total)
    }, [uniqueArr])


    const peymentHandler = () => {
        let order = {
            id : Date.now(),
            date : Date.now(),
            token : userToken,
            cart : uniqueArr,
            address,
            discount,
            deliveryTime,
            deliveryPhoneNumber,
            paymentMethod
        }
        axios.post('http://localhost:8000/orderList',order)
        navigate('/')
        toast.success("سفارش شما با موفقیت ثبت شد", {
            position: "top-right",
            closeOnClick: true,
        });
        dispatch(resetCartList([]))
    }

    return (
        <div className="d-flex flex-column checkout">
            <div className="checkout-header d-flex align-items-center p-3 flex-column mb-3">
                <span className='fs-2 checkout-title'>LUX DISIGN</span>
                <div className="checkout-header-text d-flex justify-content-between w-100 my-4">
                    <div className="d-flex align-items-center opacity active-color befor-borde position-relative gap-1">
                        <Icon icon="clarity:shopping-cart-line" color="#00bffe" width="25" />
                        <span>سبد خرید</span>
                    </div>
                    <div className="d-flex align-items-center active-color active-size position-relative gap-1">
                        <Icon icon="clarity:shopping-cart-line" color="#00bffe" width="30" />
                        <span>زمان و نحوه ارسال</span>
                    </div>
                    <div className="d-flex align-items-center opacity position-relative gap-1">
                        <Icon icon="entypo:wallet" color="#666" width="25" />
                        <span>پرداخت</span>
                    </div>
                </div>
            </div>
            <div className="checkout-details d-flex justify-content-between">
                <div className="address-time p-3 py-4">
                    <div className="d-flex align-items-center gap-1">
                        <Icon icon="ep:location" color="#666" width="25" />
                        <span className='text-secondary'>آدرس تحویل سفارش</span>
                    </div>
                    <Input placeholder="آدرس خود را درج کنید" className='my-2' value={address} onChangeFun={setAddress} />

                    <div className="details-row d-flex w-100 gap-3 align-items-center">
                        <div className="w-50 w-res-100">
                            <div className="d-flex align-items-center gap-1">
                                <Icon icon="teenyicons:discount-outline" color="#666" width="25" />
                                <span className='text-secondary'>کد تخفیف</span>
                            </div>
                            <Input placeholder=" کد تخفیف خود را درج کنید" className='my-2 w-100' value={discount} onChangeFun={setDiscount} />
                        </div>
                        <div className="w-50 w-res-100">
                            <div className="d-flex align-items-center gap-1">
                                <Icon icon="ion:time-outline" color="#666" width="25" />
                                <span className='text-secondary'>انتخاب زمان ارسال</span>
                            </div>
                            <Input placeholder="زمان تحویل کالا را درج کنید" className='my-2 w-100' value={deliveryTime} onChangeFun={setDeliveryTime} />
                        </div>
                    </div>
                    <div className="details-row d-flex w-100 gap-3 align-items-center">
                        <div className="w-50 w-res-100">
                            <div className="d-flex align-items-center gap-1">
                                <Icon icon="carbon:phone" color="#666" width="25" />
                                <span className='text-secondary'>شماره تلفت تحویل گیرنده</span>
                            </div>
                            <Input placeholder=" شماره تلفت تحویل گیرنده خود را درج کنید" className='my-2 w-100' value={deliveryPhoneNumber} onChangeFun={setDeliveryPhoneNumber} />
                        </div>
                        <div className="w-50 w-res-100">
                            <div className="d-flex align-items-center gap-1">
                                <Icon icon="fluent:payment-28-regular" color="#666" width="25" />
                                <span className='text-secondary'>روش پرداخت</span>
                            </div>
                            <div className="d-flex gap-3">
                                <button className='payment-method-btn p-2 px-3 my-2' value='internet' onClick={(e)=>setPaymentMethod(e.target.value)}>اینترنتی</button>
                                <button className='payment-method-btn p-2 px-3 my-2' value='cash' onClick={(e)=>setPaymentMethod(e.target.value)}>نقدی</button>
                                <button className='payment-method-btn p-2 px-3 my-2' value='score' onClick={(e)=>setPaymentMethod(e.target.value)}>امتیاز لوکس دیزاین</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="payment px-4">
                    <div className="d-flex justify-content-between align-items-center border-bottom py-3">
                        <span className='text-secondary'>قیمت کالا ها ({uniqueArr.length})</span>
                        <span className='text-secondary'>{totalPrice} تومان</span>
                    </div>
                    <div className="border-bottom">
                        <div className="d-flex justify-content-between align-items-center py-3">
                            <span>هزینه ارسال</span>
                            <span>25000 تومان</span>
                        </div>
                        <p>هزینه ارسال براساس آدرس، زمان تحویل، وزن و حجم مرسوله شما محاسبه شده</p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center py-3">
                        <span>قابل پرداخت</span>
                        <span>{totalPrice + 25000} تومان</span>
                    </div>
                    <button className="payment-btn p-3 my-3 mb-4" onClick={peymentHandler}>
                        پرداخت
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Checkout;