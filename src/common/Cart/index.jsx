import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import CartCard from '../../components/cartCard';
import './cart.style.scss'

const Cart = () => {
    const { cartList } = useSelector(state => state.cartList)
    const [totalPrice,setTotalPrice] = useState(0)

    useEffect(()=>{
        let total = 0
        cartList.forEach((a)=>total += Number(a.price))
        setTotalPrice(total)
    },[])


    return (
        <div className="cart d-flex justify-content-between">
            <div className="order-list">
                {cartList.map(card => <CartCard key={card.id} card={card} />)}
            </div>
            <div className="total p-3 px-4">
                <div className="d-flex justify-content-between my-3">
                    <span className='text-secondary'>تعداد کالا ها</span>
                    <span className='text-secondary fa-num'>{cartList.length} عدد</span>
                </div>
                <div className="d-flex justify-content-between my-3">
                    <span>جمع سبد خرید</span>
                    <span className='fa-num'>{totalPrice} تومان</span>
                </div>
                <p className='text-secondary my-3'>هزینه ارسال براساس آدرس، زمان تحویل، وزن و حجم مرسوله شما محاسبه می‌شود</p>
                <button className="cart-continuation w-100 p-3 mt-4">
                    ادامه
                </button>
            </div>
        </div>
    );
}

export default Cart;