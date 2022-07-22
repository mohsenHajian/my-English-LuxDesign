import { Icon } from "@iconify/react";
import React from "react";
import './input.style.scss'

const Input = ({ className, icon, color, iconWidth, placeholder , bgColor , boxSh }) => {
  const inputStyle = {
    backgroundColor : bgColor,
  }
  return (
    <div style={inputStyle} className={`text-field d-flex align-items-center ${className}`}>
      <Icon icon={icon} color={color} width={iconWidth} />
      <input type="text" className="input pe-2" placeholder={placeholder} />
    </div>
  );
};

export default Input;
