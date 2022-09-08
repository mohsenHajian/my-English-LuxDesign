import React from 'react';
import { priceHandler } from '../../utils/priceHandler';
import './SearchResultsCard.style.scss'

const SearchResultsCard = ({card}) => {
    return ( 
        <div className="SearchResultsCard d-flex my-2 gap-3">
            <img src={card.imgURL} alt="" /> 
            <div className="d-flex flex-column justify-content-around">
                <p>{card.title}</p>    
                <p className='fa-num'>قیمت : {priceHandler(card.price)} تومان</p>    
            </div>   
        </div>
     );
}
 
export default SearchResultsCard;