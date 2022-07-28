import React from "react";
import { useLocation } from "react-router";
import Footer from "../../common/footer";
import Header from "../../common/header";
import PageHeader from "../../common/pageHeader";

const MainLayout = ({ children }) => {
  let location = useLocation();
  const { pathname } = location;
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
