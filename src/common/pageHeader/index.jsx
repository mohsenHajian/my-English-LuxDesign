import { Icon } from "@iconify/react";
import React from "react";
import { useNavigate } from "react-router";
import logo from "../../assets/logo-removebg-preview.png";
import Input from "../../components/input";
import "./pageHeader.style.scss";

const PageHeader = () => {
  const navigate = useNavigate();

  const loginHandle = () => {
    navigate("/login");
  };
  const registerHandle = () => {
    navigate("/register");
  };

  return (
    <div className="d-flex page-header justify-content-between align-items-center mb-4">
      <div className="d-flex align-items-center w-50 gap-4">
        <span className="logo">LUKS DESIGN</span>
        <Input
          className="w-75"
          placeholder="تکرار رمز عبور"
          color="#808080"
          icon="carbon:search"
          iconWidth="25px"
          bgColor='#f5f5f5'
        />
      </div>
      <div className="d-flex align-items-center gap-3">
        <div className="profile d-flex px-4 gap-2">
          <button className="login-btn" onClick={loginHandle}>
            ورود
          </button>
          <button className="register-btn" onClick={registerHandle}>
            ثبت نام
          </button>
        </div>
        <Icon icon="clarity:shopping-cart-line" color="#666" width="25" />
      </div>
    </div>
  );
};

export default PageHeader;
