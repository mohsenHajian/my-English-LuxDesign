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

const PageHeader = ({ user }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { searchValue } = useSelector((state) => state.searchValue);
  const { userToken } = useSelector(state => state.userToken)
  const { userInfo } = useSelector(state => state.userInfo)
  const { cartList } = useSelector(state => state.cartList)
  const { uniqueArr } = useSelector(state => state.uniqueArr)
  const [userProfile, setUserProfile] = useState()




  useEffect(() => {
    setUserProfile(userInfo)
  }, [userInfo, userToken])


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
    <div className="d-flex page-header justify-content-between align-items-center flex-wrap mb-4">
      <div className="d-flex align-items-center w-50 gap-4 flex-grow-1">
        <span className="logo text-center" onClick={() => navigate('/')}>LUX DESIGN</span>
        <div className="search-input w-50">
          <Input
            className="w-100"
            placeholder="Search"
            color="#808080"
            icon="carbon:search"
            iconWidth="25px"
            bgColor="#f5f5f5"
            value={searchValue}
            onChangeFun={searchHandler}
            onKeypressFun={searchSubmit}
            noValidation='true'
          />
        </div>
      </div>
      <div className="d-flex align-items-center gap-3">
        <div className="cart-icon">
          {cartList.length !== 0 ? (
            <div className="cart-length">
              {cartList.length}
            </div>
          ) : null}
          <Icon icon="clarity:shopping-cart-line" color="#666" width="25" onClick={() => navigate('/cart')} cursor='pointer' />
        </div>
        <div className="profile d-flex px-4 gap-2">
          {userToken && userProfile?.length > 0 ? <UserProfile theme='dark' user={userProfile} /> : (
            <>
              <div className="profile-btns-header d-flex gap-2">
                <button className="login-btn" onClick={loginHandle}>
                  Login
                </button>
                <button className="register-btn" onClick={registerHandle}>
                  Register
                </button>
              </div>
              <div className="login-icon h-100">
                <Icon icon="simple-line-icons:login" color="#666" width='20px' cursor='pointer' onClick={()=>navigate('/login')} />
              </div>
            </>
          )}

        </div>
      </div>
      <div className="search-input-xs w-100 mt-3">
        <Input
          className="w-100"
          placeholder="جستجو"
          color="#808080"
          icon="carbon:search"
          iconWidth="25px"
          bgColor="#f5f5f5"
          value={searchValue}
          onChangeFun={searchHandler}
          onKeypressFun={searchSubmit}
          noValidation='true'
        />
      </div>
    </div>
  );
};

export default PageHeader;
