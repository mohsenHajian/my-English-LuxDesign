import React from "react";
import { Icon } from '@iconify/react';
import "./header.style.scss";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate()
  const loginHandle = () => {
    navigate('/login')
  }
  const registerHandle = () => {
    navigate('/register')
  }


  return (
    <header className="header">
      <div className="overlay">
        <div className="top-header">
          <div className="header-btn">
            <button className="login-btn" onClick={loginHandle}>ورود</button>
            <button className="register-btn" onClick={registerHandle}>ثبت نام</button>
          </div>
          <div className="header-content">
            <p>آخرین محصولات</p>
            <p className="border-right-left">مشاوره و رفع مشکل آنلاین</p>
            <p>درباره ما</p>
          </div>
          <div className="logo"></div>
        </div>
        <div className="header-title">
          <span>بزرگ ترین و متنوع ترین فروشگاه لباس</span>
          <h3>لوکس دیزاین</h3>
        </div>
        <div className="search-bar">
            <input type="text" placeholder="دنبال چی میگردی؟" />
            <Icon icon="carbon:search" color="#00bffe" width='35px' cursor='pointer'/>
        </div>
      </div>
    </header>
  );
};

export default Header;
