import { Icon } from "@iconify/react";
import React from "react";
import "./categoryIcon.style.scss";

const CategoryIcon = () => {
  return (
    <button className="spin circle category-btn">
      <Icon icon="emojione-monotone:t-shirt" color="#b6b6b6" width="70" />
    </button>
  );
};

export default CategoryIcon;
