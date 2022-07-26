import { Icon } from "@iconify/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import Input from "../../components/input";
import {
  setSearchSubmit,
  setSearchValue,
} from "../../redux/slice/searchValueSlice";
import "./pageHeader.style.scss";

const PageHeader = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { searchValue } = useSelector((state) => state.searchValue);

  const loginHandle = () => {
    navigate("/login");
  };
  const registerHandle = () => {
    navigate("/register");
  };

  const searchHandler = (value) => {
    dispatch(setSearchSubmit(false))
    dispatch(setSearchValue(value));
  };

  const searchSubmit = (key) => {
    if (key === "Enter") {
      dispatch(setSearchSubmit(true));
    }
  };

  return (
    <div className="d-flex page-header justify-content-between align-items-center mb-4">
      <div className="d-flex align-items-center w-50 gap-4">
        <span className="logo">LUKS DESIGN</span>
        <Input
          className="w-75"
          placeholder="جستو جو"
          color="#808080"
          icon="carbon:search"
          iconWidth="25px"
          bgColor="#f5f5f5"
          value={searchValue}
          onChangeFun={searchHandler}
          onKeypressFun={searchSubmit}
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
