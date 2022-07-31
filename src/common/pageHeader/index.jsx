import { Icon } from "@iconify/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import Input from "../../components/input";
import UserProfile from "../../components/userProfile";
import {
  setSearchSubmit,
  setSearchValue,
} from "../../redux/slice/searchValueSlice";
import "./pageHeader.style.scss";

const PageHeader = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { searchValue } = useSelector((state) => state.searchValue);


  const {usersList} = useSelector(state=>state.usersList)

  const [user,setUser] = useState()

  useEffect(()=>{
    axios.get('http://localhost:8000/users').then(({data})=>setUser(data.filter(user=>`${user.username+user.id}` === localStorage.getItem('token'))))
  },[usersList])


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
      <div className="d-flex align-items-center w-50 gap-4 flex-grow-1">
        <span className="logo text-center" onClick={() => navigate('/')}>LUX DESIGN</span>
        <Input
          className="w-50"
          placeholder="جستجو"
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
        <div className="profile d-flex px-4 gap-2 d-xl-flex d-lg-flex d-m-flex d-none">
        {user?.length>0 ? <UserProfile theme='dark' user={user} /> : <>
        <button className="login-btn" onClick={loginHandle}>
            ورود
          </button>
          <button className="register-btn" onClick={registerHandle}>
            ثبت نام
          </button>
              </>}

        </div>
        <div className="login-icon px-3 d-xl-none d-lg-none d-m-none d-flex">
          <Icon icon="heroicons-solid:login" color="#666" width='25px' cursor='pointer' onClick={()=>navigate('/login')} />
        </div>
        <Icon icon="clarity:shopping-cart-line" color="#666" width="25" />
      </div>
    </div>
  );
};

export default PageHeader;
