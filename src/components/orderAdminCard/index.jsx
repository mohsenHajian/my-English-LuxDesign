import React, { useState } from 'react';
import { miladi_be_shamsi } from '../../utils/dateConvert';
import './orderAdminCard.style.scss'

const OrderAdminCard = ({ order , setCurrentOrder}) => {


    const moment = require('moment');



    let dateString = moment(order.date).format('YYYY/M/D').split('/').map(num=>Number(num));

    




    
    const totalPriceHandler = () => {
        let sum = order.cart.reduce((prev, current) => prev + (Number(current.price)*current.stock), 0)
        switch (order.discount) {
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
    return (
        <div className="order-card d-flex justify-content-between align-items-center py-2">
            <span className='col-2'>{order.userInfo[0].username}</span>
            <span className='col-3 text-center fa-num'>{totalPriceHandler()}</span>
            <span className='col-5 text-center fa-num'>{miladi_be_shamsi(dateString[0],dateString[1],dateString[2])}</span>
            <button className='col-2 text-center border-0 bg-primary text-white py-2 rounded-3' data-bs-toggle="modal" data-bs-target="#orderModal" onClick={()=>setCurrentOrder(order)}>نمایش</button>
        </div>
    );
}

export default OrderAdminCard;