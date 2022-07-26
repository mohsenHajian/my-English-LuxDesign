import { Icon } from "@iconify/react";
import React from "react";
import './input.style.scss'

const Input = ({ className, icon, color, iconWidth, placeholder , bgColor , boxSh , value , type , onChangeFun , onKeypressFun }) => {
  const inputStyle = {
    backgroundColor : bgColor,
  }
  return (
    <div style={inputStyle} className={`text-field d-flex align-items-center ${className}`}>
      <Icon icon={icon} color={color} width={iconWidth} />
      <input value={value} type={`${type ? type : 'text'}`} className="input pe-2" placeholder={placeholder} onChange={(e)=>onChangeFun(e.target.value)} onKeyPress={(e)=>onKeypressFun(e.key)} />
    </div>
  );
};

export default Input;
