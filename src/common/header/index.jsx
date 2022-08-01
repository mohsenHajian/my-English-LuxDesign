import React, { useEffect, useState } from "react";
import { Icon } from '@iconify/react';
import "./header.style.scss";
import { useNavigate } from "react-router-dom";
import logo from '../../assets/logo-removebg-preview.png'
import { useSelector } from "react-redux";
import axios from "axios";
import UserProfile from "../../components/userProfile";

const Header = () => {
  const navigate = useNavigate()

  const { userToken } = useSelector(state => state.userToken)
  const { userInfo } = useSelector(state => state.userInfo)
  const { cartList } = useSelector(state => state.cartList)
  const [userProfile, setUserProfile] = useState()


  useEffect(() => {
    setUserProfile(userInfo)
  }, [userInfo, userToken])


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
          <div className="header-btn col-3">
            <div className="header-btns">
              {userToken && userProfile?.length > 0 ? <UserProfile user={userProfile} /> : <>
                <button className="login-btn" onClick={loginHandle}>ورود</button>
                <button className="register-btn" onClick={registerHandle}>ثبت نام</button>
              </>}
            </div>
            <div className="cart-icon">
              {cartList.length !== 0 ? (
                <div className="cart-length">
                  {cartList.length}
                </div>
              ) : null}
              <Icon icon="clarity:shopping-cart-line" color="#f8f8f8" width="25" onClick={() => navigate('/cart')} cursor='pointer' />
            </div>
          </div>
          {/* <div className="header-content justify-content-center col-8">
            <p>آخرین محصولات</p>
            <p className="border-right-left">مشاوره و رفع مشکل آنلاین</p>
            <p>درباره ما</p>
          </div> */}
          <div className="logo col-2">
            <img src={logo} alt="" /></div>
        </div>
        <div className="header-title">
          <p>بزرگ ترین و متنوع ترین فروشگاه لباس</p>
          <h3>لوکس دیزاین</h3>
        </div>
        <div className="search-bar col-xl-7 col-lg-10 col-m-12 col-sm-12 col-12">
          <input type="text" placeholder="دنبال چی میگردی؟" />
          <Icon icon="carbon:search" color="#00bffe" width='35px' cursor='pointer' />
        </div>
      </div>
    </header>
  );
};

export default Header;
