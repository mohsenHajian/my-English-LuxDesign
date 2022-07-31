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
  
  
  const {usersList} = useSelector(state=>state.usersList)

  const [user,setUser] = useState()

  useEffect(()=>{
    axios.get('http://localhost:8000/users').then(({data})=>setUser(data.filter(user=>`${user.username+user.id}` === localStorage.getItem('token'))))
    console.log(user)
  },[usersList])



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
              {user?.length>0 ? <UserProfile user={user} /> : <>
                <button className="login-btn" onClick={loginHandle}>ورود</button>
                <button className="register-btn" onClick={registerHandle}>ثبت نام</button>
              </>}
            </div>
            <div className="cart-icon">
              <Icon icon="clarity:shopping-cart-line" color="#fdfdfd" width='30px' />
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
