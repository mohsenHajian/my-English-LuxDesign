import { Icon } from '@iconify/react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCartList, setUniqueArr } from '../../redux/slice/cartListSlice';
import './cart-card.scss'

const CartCard = ({ card }) => {
    const dispatch = useDispatch()

    const {uniqueArr} = useSelector(state=>state.uniqueArr)

    const removeCardHandler = () =>{
        let removedArr = uniqueArr.filter(el=>el.id !== card.id)
        dispatch(setUniqueArr(removedArr))
    }

    return (
        <div className='cart-card'>
            <div className="d-flex py-4">
                <div className="col-3">
                    <img src={card.imgURL} alt="" />
                </div>
                <div className="col-8 d-flex flex-column cart-card-details gap-1">
                    <span className='fs-2 mb-5'>{card.title}</span>
                    <div className="d-flex gap-2">
                        <Icon icon="ant-design:safety-outlined" color="#666" width="20" />
                        <span className='text-secondary'>گارانتی اصالت و سلامت فیزیکی کالا</span>
                    </div>
                    <div className="d-flex gap-2">
                        <Icon icon="fluent:building-shop-20-regular" color="#666" width="20" />
                        <span className='text-secondary'>عرضه کالا</span>
                    </div>
                    <div className="d-flex gap-2">
                        <Icon icon="icon-park-outline:hard-disk-one" color="#666" width="20" />
                        <span className='text-secondary'>موجود در انبار فروشنده</span>
                    </div>
                    <div className="d-flex gap-2 mt-2 align-items-center">
                        <div className="bg-secondary rounded-circle circle mx-2"></div>
                        <Icon icon="clarity:truck-line" color="#666" width="20" />
                        <span className='text-secondary'>ارسال دیجی‌کالا از ۲ روز کاری دیگر</span>
                    </div>
                </div>
                <div className="col-1 d-flex justify-content-center">
                    <div class="dropdown">
                        <div type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            <Icon icon="akar-icons:more-vertical" color="#666" width="20" />
                        </div>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a class="dropdown-item" href="#" onClick={removeCardHandler}>حذف</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="d-flex mb-4">
                <div className="col-3 px-5 d-flex justify-content-center">
                    {/* <div className=" d-flex cart-btn-container justify-content-between align-items-center p-2 px-3 gap-4">
                        <Icon icon="carbon:add" color="#00bffe" width="25" cursor='pointer' />
                        <span>1</span>
                        <Icon icon="bi:trash" color="#00bffe" width="22" cursor='pointer' />
                    </div> */}
                    <span className='fs-4'>قیمت: </span>
                </div>
                <div className="col-9">
                    <span className='fs-4 fa-num'>{card.price} تومان</span>
                </div>
            </div>
        </div>
    );
}

export default CartCard;