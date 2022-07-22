import { Icon } from "@iconify/react";
import React from "react";
import { useNavigate } from "react-router";
import "./card.style.scss";

const Card = ({ img , boxSh }) => {
  const navigate = useNavigate()
  const Dstyle = {
    boxShadow: '0 0 7px 3px #d6d6d6'
  }
  const eventCardHandler = () => {
    navigate('/single-page')
  }
  return (
    <section className="card-item" onClick={eventCardHandler} style={boxSh ? Dstyle : null}>
      <img src={img} alt="" />
      <div className="d-flex flex-column px-3 my-4">
        <h6>پیراهن آستین بلند مردانه جوتی </h6>
        <div className="d-flex card-details justify-content-between align-items-center">
          <Icon icon="carbon:add-alt" color="#6c63ff" width='30px' cursor='pointer' />
          <span className="fa-num">249,000 تومان</span>
        </div>
      </div>
    </section>
  );
};

export default Card;
