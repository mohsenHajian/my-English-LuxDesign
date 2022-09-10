import { Icon } from "@iconify/react";
import React from "react";
import "./categoryIcon.style.scss";
import { memo } from "react";
import { useNavigate } from "react-router";

const CategoryIcon = ({img,path}) => {
  const navigate = useNavigate()
  return (
    <div className="col-m-4" onClick={()=>navigate(`${path}`)}>
      <button className="spin circle category-btn ">
        <img src={img} alt="" />
      </button>
    </div>
  );
};

export default memo(CategoryIcon);
