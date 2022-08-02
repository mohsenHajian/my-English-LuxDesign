import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router';
import CartCard from '../../components/cartCard';
import { setUniqueArr } from '../../redux/slice/cartListSlice';
import './cart.style.scss'

const Cart = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const location = useLocation()
    const { pathname } = location
    const { cartList } = useSelector(state => state.cartList)
    const {uniqueArr} = useSelector(state=>state.uniqueArr)
    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        let uniqueList = []
        const cartListCopy = [...cartList]
        cartListCopy.forEach(el => {
            if (!uniqueList.includes(el)) {
                uniqueList.push(el)
            }
        })
        dispatch(setUniqueArr(uniqueList))
    }, [])


    useEffect(()=>{
        let total = 0
        uniqueArr.forEach((a) => total += Number(a.price))
        setTotalPrice(total)
    },[uniqueArr])



    const continuation = () => {
        if (localStorage.getItem('token')) {
            navigate(`${pathname}/checkout`)
        } else {
            navigate('/login')
        }
    }


    return (
        <div className="cart d-flex justify-content-between">
            <div className="order-list">
                {uniqueArr.map(card => <CartCard key={card.id} card={card} />)}
            </div>
            <div className="total p-3 px-4">
                <div className="d-flex justify-content-between my-3">
                    <span className='text-secondary'>تعداد کالا ها</span>
                    <span className='text-secondary fa-num'>{uniqueArr.length} عدد</span>
                </div>
                <div className="d-flex justify-content-between my-3">
                    <span>جمع سبد خرید</span>
                    <span className='fa-num'>{totalPrice} تومان</span>
                </div>
                <p className='text-secondary my-3'>هزینه ارسال براساس آدرس، زمان تحویل، وزن و حجم مرسوله شما محاسبه می‌شود</p>
                <button className="cart-continuation w-100 p-3 mt-4" onClick={continuation}>
                    ادامه
                </button>
            </div>
        </div>
    );
}

export default Cart;