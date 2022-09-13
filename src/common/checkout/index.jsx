import { Icon } from '@iconify/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import Input from '../../components/input';
import { resetCartList } from '../../redux/slice/cartListSlice';
import { BaceUrl, configAccess, configMaster } from '../../servises/Urlservises';
import { priceHandler } from '../../utils/priceHandler';
import './checkout.style.scss'

const Checkout = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { uniqueArr } = useSelector(state => state.uniqueArr)
    const { userToken } = useSelector(state => state.userToken)
    const { userInfo } = useSelector(state => state.userInfo)
    const [totalPrice, setTotalPrice] = useState(0)
    const [address, setAddress] = useState()
    const [allDiscount, setAllDiscount] = useState([])
    const [orderListData, setOrderListData] = useState([])
    const [validDiscount, setValidDiscount] = useState()
    const [discount, setDiscount] = useState('')
    const [deliveryTime, setDeliveryTime] = useState()
    const [deliveryPhoneNumber, setDeliveryPhoneNumber] = useState()
    const [paymentMethod, setPaymentMethod] = useState('')


    useEffect(() => {
        let total = 0
        uniqueArr.forEach((a) => total += Number(a.price)*a.stock)
        setTotalPrice(total)
    }, [uniqueArr])
    useEffect(() => {
        axios.get(`${BaceUrl}63035e9aa1610e638609eca0` , configAccess).then(({ data }) => setOrderListData(data.record))
        axios.get(`${BaceUrl}63035eb05c146d63ca7a438b` , configAccess).then(({ data }) => setAllDiscount(data.record))
    }, [])


    const discountHandler = () => {
        let selectedDiscount = allDiscount.filter(item => item.name === discount ? discount : null)
        if (selectedDiscount.length > 0) {
            setValidDiscount(selectedDiscount)
        }
    }


    const peymentHandler = () => {
        if (address && deliveryPhoneNumber && deliveryTime && paymentMethod) {
            let numAllProducts = uniqueArr.reduce((prev,current)=>prev+current.stock,0)
            let order = {
                id: Date.now(),
                date: Date.now(),
                status : 'notDelivered',
                token: userToken,
                numAllProducts,
                userInfo,
                cart: uniqueArr,
                address,
                discount,
                deliveryTime,
                deliveryPhoneNumber,
                paymentMethod
            }
            axios.put(`${BaceUrl}63035e9aa1610e638609eca0` , [...orderListData , order], configMaster)
            navigate('/')
            setValidDiscount('')
            toast.success("Your order has been successfully placed", {
                position: "top-left",
                closeOnClick: true,
            });
            dispatch(resetCartList([]))
        } else {
            toast.error("There is something wrong", {
                position: "top-left",
                closeOnClick: true,
            });
        }
    }

    return (
        <div className="d-flex flex-column checkout">
            <div className="checkout-header d-flex align-items-center p-3 flex-column mb-3">
                <span className='fs-2 checkout-title'>LUX DISIGN</span>
                <div className="checkout-header-text d-flex justify-content-between w-100 my-4">
                    <div className="d-flex align-items-center responsive-icon opacity active-color befor-borde position-relative gap-1">
                        <Icon icon="clarity:shopping-cart-line" color="#00bffe" width="25" />
                        <span>Cart</span>
                    </div>
                    <div className="d-flex align-items-center checkout-header-text-master  active-color active-size position-relative gap-1">
                        <Icon icon="clarity:shopping-cart-line" color="#00bffe" width="30" />
                        <span>Time and method of sending</span>
                    </div>
                    <div className="d-flex align-items-center responsive-icon opacity position-relative gap-1">
                        <Icon icon="entypo:wallet" color="#666" width="25" />
                        <span>Payment</span>
                    </div>
                </div>
            </div>
            <div className="checkout-details d-flex justify-content-between">
                <div className="address-time p-3 py-4">
                    <div className="d-flex align-items-center gap-1">
                        <Icon icon="ep:location" color="#666" width="25" />
                        <span className='text-secondary'>Order delivery address *</span>
                    </div>
                    <Input placeholder="Enter your address" className='my-2' value={address} onChangeFun={setAddress} validation={address === '' ? 'Please fill in the address field' : null} />

                    <div className="details-row d-flex w-100 gap-3 align-items-center">
                        <div className="w-50 w-res-100">
                            <div className="d-flex align-items-center gap-1">
                                <Icon icon="teenyicons:discount-outline" color="#666" width="25" />
                                <div className="d-flex justify-content-between w-100">
                                    <span className='text-secondary'>discount code</span>
                                    <button className='discount-btn' onClick={discountHandler}>submit</button>
                                </div>
                            </div>
                            <Input placeholder=" Enter your discount code" className='my-2 w-100' value={discount} onChangeFun={setDiscount} />
                        </div>
                        <div className="w-50 w-res-100">
                            <div className="d-flex align-items-center gap-1">
                                <Icon icon="ion:time-outline" color="#666" width="25" />
                                <span className='text-secondary'>Choose a time to send *</span>
                            </div>
                            <Input placeholder="Enter the delivery time" className='my-2 w-100' value={deliveryTime} onChangeFun={setDeliveryTime} validation={deliveryTime === '' ? 'Please fill in the delivery time field' : null} />
                        </div>
                    </div>
                    <div className="details-row d-flex w-100 gap-3 align-items-center">
                        <div className="w-50 w-res-100">
                            <div className="d-flex align-items-center gap-1">
                                <Icon icon="carbon:phone" color="#666" width="25" />
                                <span className='text-secondary'>Phone number of the recipient *</span>
                            </div>
                            <Input placeholder=" Enter your recipient's phone number" className='my-2 w-100' value={deliveryPhoneNumber} onChangeFun={setDeliveryPhoneNumber} validation={deliveryPhoneNumber === '' ? "Please fill in the recipient's phone number field" : null} />
                        </div>
                        <div className="w-50 w-res-100" style={{ alignSelf: 'flex-start' }}>
                            <div className="d-flex align-items-center gap-1">
                                <Icon icon="fluent:payment-28-regular" color="#666" width="25" />
                                <span className='text-secondary'>Payment Method *</span>
                            </div>
                            <div className="d-flex gap-3">
                                <button className='payment-method-btn p-2 px-3 my-2' value='internet' onClick={(e) => setPaymentMethod(e.target.value)}>internet</button>
                                <button className='payment-method-btn p-2 px-3 my-2' value='cash' onClick={(e) => setPaymentMethod(e.target.value)}>cash</button>
                                <button className='payment-method-btn p-2 px-3 my-2' value='score' onClick={(e) => setPaymentMethod(e.target.value)}>Lux score</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="payment px-4">
                    <div className="d-flex justify-content-between align-items-center py-3">
                        <span className='fa-num text-secondary'>commodity prices ({uniqueArr.length})</span>
                        <span className='fa-num text-secondary'>{priceHandler(totalPrice)} $</span>
                    </div>
                    {validDiscount ? (
                        <>
                            <div className="discount-text d-flex justify-content-between align-items-center">
                                <span>discount code</span>
                                <span className='fa-num'>{validDiscount[0].discount} percent</span>
                            </div>
                            <div className="discount-price d-flex justify-content-between align-items-center py-3">
                                <span>The final price</span>
                                <span className='fa-num'>{priceHandler(Number(totalPrice) - Number(totalPrice) * validDiscount[0].discount / 100)} $</span>
                            </div>
                        </>
                    ) : null}
                    <hr />
                    <div className="border-bottom">
                        <div className="d-flex justify-content-between align-items-center py-3">
                            <span>shipping cost</span>
                            <span className='fa-num'>25 $</span>
                        </div>
                        <p>The shipping cost is calculated based on the address, delivery time, weight and volume of your shipment</p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center py-3">
                        <span>Payable</span>
                        <span className='fa-num'>{priceHandler(validDiscount ? Number(totalPrice) - Number(totalPrice) * validDiscount[0].discount / 100 + 25000 :totalPrice + 25000)} $</span>
                    </div>
                    <button className="payment-btn p-3 my-3 mb-4" onClick={peymentHandler}>
                        Payment
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Checkout;