import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import Footer from "../../common/footer";
import Header from "../../common/header";
import PageHeader from "../../common/pageHeader";

const MainLayout = ({ children }) => {
  let location = useLocation();
  const { pathname } = location;

  

  const {usersList} = useSelector(state=>state.usersList)
  const [user,setUser] = useState()

  useEffect(()=>{
    axios.get('http://localhost:8000/users').then(({data})=>setUser(data.filter(user=>`${user.username+user.id}` === localStorage.getItem('token')? user : null)))
  },[usersList])


  const dynamicHeader = () => {
    switch (pathname) {
      case "/": {
        return <Header user={user}/>;
      }
      case "/shirts":
      case "/pants":
      case "/single-page": {
        return <PageHeader user={user}/>;
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
      case "/register" :
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
