import { Icon } from "@iconify/react";
import React from "react";
import { useNavigate } from "react-router";
import "./card.style.scss";

const Card = ({card , boxSh }) => {
  const navigate = useNavigate()
  const Dstyle = {
    boxShadow: '0 0 5px 2px #d6d6d6'
  }
  const eventCardHandler = () => {
    navigate('/single-page')
  }
  return (
    <section className="card-item" onClick={eventCardHandler} style={boxSh ? Dstyle : null}>
      <img src={card?.imgURL} alt="" />
      <div className="d-flex flex-column px-3 my-4">
        <h6>{card?.title}</h6>
        <div className="d-flex card-details justify-content-between align-items-center">
          <Icon icon="carbon:add-alt" color="#6c63ff" width='30px' cursor='pointer' />
          <span className="fa-num">{card?.price} تومان</span>
        </div>
      </div>
    </section>
  );
};

export default Card;
