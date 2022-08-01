import axios from "axios";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import Footer from "../../common/footer";
import Header from "../../common/header";
import PageHeader from "../../common/pageHeader";
import { setUserInfo, setUserToken } from "../../redux/slice/userTokenSlice";

const MainLayout = ({ children }) => {
  let location = useLocation();
  const { pathname } = location;
  const dispatch = useDispatch()


  const [loaded, setLoaded] = useState(false)
  const { usersList } = useSelector(state => state.usersList)
  const { userToken } = useSelector(state => state.userToken)

  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(setUserToken(localStorage.getItem('token')))
    }
    axios.get('http://localhost:8000/users').then(({ data }) => 
      dispatch(setUserInfo(data.filter(user => `${user.username + user.id}` === localStorage.getItem('token') ? user : null)))
    )
  }, [usersList, userToken])


  const dynamicHeader = () => {
    switch (pathname) {
      case "/": {
        return <Header />;
      }
      case "/shirts":
      case "/pants":
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
