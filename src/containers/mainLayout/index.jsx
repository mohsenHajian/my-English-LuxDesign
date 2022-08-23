import axios from "axios";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import Footer from "../../common/footer";
import Header from "../../common/header";
import PageHeader from "../../common/pageHeader";
import { setUserInfo, setUserToken } from "../../redux/slice/userTokenSlice";
import { BaceUrl, configAccess } from "../../servises/Urlservises";

const MainLayout = ({ children }) => {
  let location = useLocation();
  const { pathname } = location;
  const dispatch = useDispatch()


  const { usersList } = useSelector(state => state.usersList)
  const { userToken } = useSelector(state => state.userToken)

  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(setUserToken(localStorage.getItem('token')))
    }
    axios.get(`${BaceUrl}63035cd5a1610e638609ea9f`, configAccess).then(({ data }) => 
      dispatch(setUserInfo(data.record.filter(user => `${user.username + user.id}` === localStorage.getItem('token') ? user : null)))
    )
  }, [usersList, userToken])


  const dynamicHeader = () => {
    switch (pathname) {
      case "/": {
        return <Header />;
      }
      case "/shirts":
      case "/pants":
      case "/cart":
      case "/single-page": {
        return <PageHeader />;
      }

      // default 
    }
  };
  const dynamicFooter = () => {
    switch (pathname) {
      case "/":
      case "/shirts":
      case "/pants":
      case "/cart":
      case "/single-page": {
        return <Footer />;
      }
      case "/register":
      case "/login": {
        return null;
      }
      // default
    }
  };
  return (
    <>
      {dynamicHeader()}
      {children}
      {dynamicFooter()}
    </>
  );
};

export default MainLayout;
