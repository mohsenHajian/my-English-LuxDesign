import { Icon } from '@iconify/react';
import React from 'react';
import Input from '../../components/input';
import './checkout.style.scss'

const Checkout = () => {
    return (
        <div className="d-flex flex-column checkout">
            <div className="checkout-header d-flex align-items-center p-3 flex-column mb-3">
                <span className='fs-2 checkout-title'>LUX DISIGN</span>
                <div className="d-flex justify-content-between w-75 my-4">
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
            <div className="d-flex justify-content-between">
                <div className="address-time p-3 py-4">
                    <div className="d-flex align-items-center gap-1">
                        <Icon icon="ep:location" color="#666" width="25" />
                        <span className='text-secondary'>آدرس تحویل سفارش</span>
                    </div>
                    <Input placeholder="آدرس خود را درج کنید" className='my-2' />
                    <div className="d-flex align-items-center gap-1 mt-4">
                        <Icon icon="ion:time-outline" color="#666" width="25" />
                        <span className='text-secondary'>انتخاب زمان ارسال</span>
                    </div>
                    <Input placeholder="زمان تحویل کالا را درج کنید" className='my-2' />
                </div>
                <div className="payment px-4">
                    <div className="d-flex justify-content-between align-items-center border-bottom py-3">
                        <span className='text-secondary'>قیمت کالا ها (2)</span>
                        <span className='text-secondary'>200000 تومان</span>
                    </div>
                    <div className="border-bottom">
                        <div className="d-flex justify-content-between align-items-center py-3">
                            <span>هزینه ارسال</span>
                            <span>200 تومان</span>
                        </div>
                        <p>هزینه ارسال براساس آدرس، زمان تحویل، وزن و حجم مرسوله شما محاسبه شده</p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center py-3">
                        <span>قابل پرداخت</span>
                        <span>300000 تومان</span>
                    </div>
                    <button className="payment-btn p-3 my-3 mb-4">
                        پرداخت    
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Checkout;