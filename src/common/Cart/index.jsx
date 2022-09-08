import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router';
import CartCard from '../../components/cartCard';
import { setUniqueArr } from '../../redux/slice/cartListSlice';
import { priceHandler } from '../../utils/priceHandler';
import './cart.style.scss'

const Cart = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const location = useLocation()
    const { pathname } = location
    const { cartList } = useSelector(state => state.cartList)
    const {uniqueArr} = useSelector(state=>state.uniqueArr)
    const { userToken } = useSelector(state => state.userToken)
    const [totalPrice, setTotalPrice] = useState(0)
    const [totalProduct, settotalProduct] = useState(0)

    useEffect(() => {
        let uniqueList = []
        const cartListCopy = [...cartList]
        cartListCopy.forEach(el => {
            if (!uniqueList.includes(el)) {
                uniqueList.push(el)
            }
        })
        let shppingList = uniqueList.map(card => {
            return { ...card, stock: 1 }
        })
        dispatch(setUniqueArr(shppingList))
    }, [])




    useEffect(()=>{
        let total = 0
        uniqueArr.forEach((a) => total += Number(a.price)*a.stock)
        setTotalPrice(total)
        let products = 0
        uniqueArr.forEach((a) => products += Number(a.stock))
        settotalProduct(products)
    },[uniqueArr])



    const continuation = () => {
        if (userToken) {
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
                    <span className='text-secondary fa-num'>{totalProduct} عدد</span>
                </div>
                <div className="d-flex justify-content-between my-3">
                    <span>جمع سبد خرید</span>
                    <span className='fa-num'>{priceHandler(totalPrice)} تومان</span>
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