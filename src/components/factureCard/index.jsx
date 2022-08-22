import React from 'react';
import './FactureCard.style.scss'

const FactureCard = ({card}) => {
    return ( 
        <div className="d-flex FactureCard w-100">
            <img src={card.imgURL} alt="" />    
            <div className="d-flex col-4 flex-column p-2">
                <p>{card.title}</p>
                <div className="d-flex gap-5">
                    <span className='fa-num'>قیمت : {card.price} تومان</span>    
                    <span className='fa-num'>تعداد : {card.stock}</span>    
                </div>
            </div>
        </div>
     );
}
 
export default FactureCard;