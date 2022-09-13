import React, { useEffect, useState, useRef } from "react";
import { Icon } from '@iconify/react';
import "./header.style.scss";
import { useNavigate } from "react-router-dom";
import logo from '../../assets/logo-removebg-preview.png'
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import UserProfile from "../../components/userProfile";
import { setSearchValue } from "../../redux/slice/searchValueSlice";
import FactureCard from "../../components/factureCard";
import SearchResultsCard from "../../components/searchResultsCard";




/**
 * Hook that alerts clicks outside of the passed ref
 */
function useOutsideAlerter(ref) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current.className.includes('d-flex') && !ref.current.contains(event.target)) {
        ref.current.className = 'd-none'
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}


const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const wrapperRef = useRef(null);

  const { userToken } = useSelector(state => state.userToken)
  const { userInfo } = useSelector(state => state.userInfo)
  const { cartList } = useSelector(state => state.cartList)
  const { searchValue } = useSelector(state => state.searchValue)
  const { allData } = useSelector(state => state.allData)



  const [searchList, setSearchList] = useState([])
  const [userProfile, setUserProfile] = useState()


  useEffect(() => {
    setUserProfile(userInfo)
  }, [userInfo, userToken])

  useEffect(() => {
    let searchArr = allData?.filter((card) =>
      card.title.includes(searchValue) ? card : null
    );
    setSearchList(searchArr)
  }, [searchValue])

  const loginHandle = () => {
    navigate('/login')
  }
  const registerHandle = () => {
    navigate('/register')
  }

  useOutsideAlerter(wrapperRef);








  return (
    <header className="header">
      <div className="overlay">
        <div className="top-header">
          <div className="header-btn col-3">
            <div className="header-btns">
              {userToken ? <UserProfile /> : <>
                <button className="login-btn" onClick={loginHandle}>Login</button>
                <button className="register-btn" onClick={registerHandle}>Register</button>
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
          {/* <div className="logo col-2"> */}
            <img src={logo} alt="" /></div>
        {/* </div> */}
        <div className="header-title">
          <p className="header-title-details">The largest and most diverse clothing store</p>
          <p className="header-title-name">Lux Design</p>
        </div>
        <div className="search-bar col-xl-7 col-lg-10 col-m-12 col-sm-12 col-12">
          <input type="text" placeholder="what are you looking for?" onChange={(e) => dispatch(setSearchValue(e.target.value))} />
          <Icon icon="carbon:search" color="#00bffe" width='35px' cursor='pointer' />
        </div>
        <div className={`search-results ${searchList.length > 0 ? 'd-flex' : 'd-none'}  flex-column col-xl-6 col-lg-9 col-m-11 col-sm-11 col-11`} ref={wrapperRef}>
          {searchList?.map(card => <SearchResultsCard key={card.id} card={card} />)}
        </div>
      </div>
    </header>
  );
};

export default Header;
