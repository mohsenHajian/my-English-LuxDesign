import { Icon } from "@iconify/react";
import React from "react";
import "./categoryIcon.style.scss";

const CategoryIcon = () => {
  return (
    <div className="col-m-4">
      <button className="spin circle category-btn ">
        <Icon icon="emojione-monotone:t-shirt" color="#b6b6b6" width="70" />
      </button>
    </div>
  );
};

export default CategoryIcon;
