import { Icon } from "@iconify/react";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { setCartList } from "../../redux/slice/cartListSlice";
import { setSinglePageData } from "../../redux/slice/dataToRenderSlice";
import { textHandler } from "../../utils/textHandler";
import AddToCartIcon from "../addToCartIcon";
import "./card.style.scss";

const Card = ({ card, boxSh, width }) => {
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
    <section className="card-item" onClick={eventCardHandler} style={boxSh ? Dstyle : null}>
      <div class="hoverBtn"></div>
      <div class="hoverBtn-bottom"></div>
      <img src={card?.imgURL} alt="" />
      <div className="d-flex flex-column px-3 my-4">
        <h6>{textHandler(card?.title)}</h6>
        <div className="d-flex card-details justify-content-between align-items-center">
          <AddToCartIcon card={card} />
          <span className="fa-num">{card?.price} تومان</span>
        </div>
      </div>
    </section>
  );
};

export default Card;
