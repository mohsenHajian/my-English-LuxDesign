import { Icon } from "@iconify/react";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { setCartList } from "../../redux/slice/cartListSlice";
import { setSinglePageData } from "../../redux/slice/dataToRenderSlice";
import { textHandler } from "../../utils/textHandler";
import AddToCartIcon from "../addToCartIcon";
import Skeleton from 'react-loading-skeleton'
import "./card.style.scss";
import UserSkeleton from "../Skeleton/userCardSkeleton";
import { priceHandler } from "../../utils/priceHandler";

const Card = ({ card, boxSh, width, length }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const Dstyle = {
    boxShadow: '0 0 5px 2px #d6d6d6'
  }


  const eventCardHandler = () => {
    dispatch(setSinglePageData(card))
    navigate('/single-page')
  }


  return (
    <>
      {card.title ? (
        <section className="card-item"  style={boxSh ? Dstyle : null} onClick={eventCardHandler}>
          <div class="hoverBtn"></div>
          <div class="hoverBtn-bottom"></div>
          <img src={card.imgURL} alt="" />
          <div className="d-flex flex-column px-3 my-4">
            <h6>{textHandler(card.title, length)}</h6>
            <div className="d-flex card-details justify-content-between align-items-center">
              <span className="fa-num">{priceHandler(card.price)} $</span>
              <AddToCartIcon card={card} />
            </div>
          </div>
        </section>
      ) : <UserSkeleton />}
    </>

  );
};

export default Card;
