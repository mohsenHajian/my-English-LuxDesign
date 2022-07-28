import React from "react";
import "./input-price.style.scss";

const PriceInput = () => {
  return (
    <div className="d-flex flex-column py-3 gap-4 w-100">
      <span>محدوده قیمت</span>
      <div className="d-flex input-range-container w-100">
        <input type="range" className="range ltr-range-input w-50" />
        <input type="range" className="range rtl-range-input w-50 rtl" />
      </div>
    </div>
  );
};

export default PriceInput;
