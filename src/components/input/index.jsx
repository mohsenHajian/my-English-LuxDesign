import { Icon } from "@iconify/react";
import React from "react";
import './input.style.scss'

const Input = ({ className, icon, color, iconWidth, placeholder, bgColor, boxSh, value, type, onChangeFun, onKeypressFun,validation,noValidation, ...props }) => {
  const inputStyle = {
    backgroundColor: bgColor,
  }
  return (
    <div className={`d-flex flex-column ${className}`}>
      <div style={inputStyle} className={`text-field w-100 d-flex align-items-center`}>
        <Icon icon={icon} color={color} width={iconWidth} />
        <input value={value} type={`${type ? type : 'text'}`} className="input ps-2" placeholder={placeholder} onChange={(e) => onChangeFun(e.target.value)} onKeyPress={(e)=>onKeypressFun(e.key)}  {...props} />
      </div>
      {!noValidation?<span className="validation-text">{validation?validation:''}</span>:null}
      
    </div>
  );
};

export default Input;
