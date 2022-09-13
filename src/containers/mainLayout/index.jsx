import axios from "axios";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useLocation } from "react-router";
import LoadingBar from "react-top-loading-bar";
import Footer from "../../common/footer";
import Header from "../../common/header";
import PageHeader from "../../common/pageHeader";
import { setAllData, setPantsData, setShirtData } from "../../redux/slice/dataToRenderSlice";
import { setProgress } from "../../redux/slice/loadingbarSlice";
import { setUserInfo, setUserToken } from "../../redux/slice/userTokenSlice";
import { BaceUrl, configAccess } from "../../servises/Urlservises";
import { withCookies, Cookies } from 'react-cookie';
import PropTypes from 'prop-types'








const MainLayout = ({ cookies }) => {
  let location = useLocation();
  const { pathname } = location;
  const dispatch = useDispatch()







  const { loadingbar } = useSelector(state => state.loadingbar)
  const { usersList } = useSelector(state => state.usersList)
  const { userToken } = useSelector(state => state.userToken)
  const { commentStatus } = useSelector(state => state.commentStatus)



  useEffect(() => {
    if (cookies.get('token')) {
      dispatch(setUserToken(cookies.get('token')))
    }
    axios.get(`${BaceUrl}63035cd5a1610e638609ea9f`, configAccess).then(({ data }) =>
      dispatch(setUserInfo(data.record.filter(user => `${user.username + user.id}` === cookies.get('token') ? user : null)))
    )
  }, [usersList, userToken])


  useEffect(() => {
    axios.get(`${BaceUrl}631f8033e13e6063dca5854e`, configAccess).then(({ data }) => { dispatch(setAllData(data.record)) })
    axios.get(`${BaceUrl}631f81be5c146d63ca98fd3e`, configAccess).then(({ data }) => { dispatch(setShirtData(data.record)) })
    axios.get(`${BaceUrl}631f8258e13e6063dca58719`, configAccess).then(({ data }) => { dispatch(setPantsData(data.record)) })

    // axios
    //   .get(`${BaceUrl}63035e735c146d63ca7a4347`,configAccess)
    //   .then(({ data }) => setProposal(data.record.proposal.reverse().slice(0, 4)));
  }, [commentStatus]);


  const dynamicHeader = () => {
    if (pathname === '/') {
      return <Header />
    } else if (pathname === '/login' || pathname === '/register' || pathname === '/cart/checkout') {
      return null
    } else {
      return <PageHeader />
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
      <LoadingBar
        color='lime'
        progress={loadingbar}
        onLoaderFinished={() => dispatch(setProgress(0))}
        height={4}
        containerStyle={{ direction: 'ltr' }}
      />
      {dynamicHeader()}
      <Outlet />
      {dynamicFooter()}
    </>
  );
};


MainLayout.propTypes  = {
  cookies: PropTypes.instanceOf(Cookies)
};  


export default withCookies(MainLayout);


