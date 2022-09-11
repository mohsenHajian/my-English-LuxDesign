import React from 'react';
import { priceHandler } from '../../utils/priceHandler';
import './SearchResultsCard.style.scss'
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { setSinglePageData } from "../../redux/slice/dataToRenderSlice";

const SearchResultsCard = ({card}) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const eventCardHandler = () => {
        dispatch(setSinglePageData(card))
        navigate('/single-page')
    }
    return ( 
        <div className="SearchResultsCard d-flex my-2 gap-3" onClick={eventCardHandler}>
            <img src={card.imgURL} alt="" /> 
            <div className="d-flex flex-column justify-content-around">
                <p>{card.title}</p>    
                <p className='fa-num'>قیمت : {priceHandler(card.price)} تومان</p>    
            </div>   
        </div>
     );
}
 
export default SearchResultsCard;