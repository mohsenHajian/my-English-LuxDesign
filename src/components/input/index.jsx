import { Icon } from "@iconify/react";
import React from "react";
import './input.style.scss'

const Input = ({ className, icon, color, iconWidth, placeholder, bgColor, boxSh, value, type, onChangeFun, onKeypressFun,validation, ...props }) => {
  const inputStyle = {
    backgroundColor: bgColor,
  }
  // onKeyPress={(e)=>onKeypressFun(e.key)}
  return (
    <div className={`d-flex flex-column ${className}`}>
      <div style={inputStyle} className={`text-field w-100 d-flex align-items-center`}>
        <Icon icon={icon} color={color} width={iconWidth} />
        <input value={value} type={`${type ? type : 'text'}`} className="input pe-2" placeholder={placeholder} onChange={(e) => onChangeFun(e.target.value)}  {...props} />
      </div>
      <span className="validation-text">{validation?validation:''}</span>
    </div>
  );
};

export default Input;
