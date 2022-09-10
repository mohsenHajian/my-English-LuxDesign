import React, { useEffect, useState } from "react";
import loginSvg from "./login.svg";
import "./login.style.scss";
import Input from "../../components/input";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { setUserToken } from "../../redux/slice/userTokenSlice";
import { BaceUrl, configAccess } from "../../servises/Urlservises";
import { hideLoading, showLoading } from "react-redux-loading-bar";
import { setProgress } from "../../redux/slice/loadingbarSlice";
import { withCookies, Cookies } from 'react-cookie';
import PropTypes from 'prop-types'

const Login = ({ cookies }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()


  const loginHandler = () => {
    if (email && password) {
      dispatch(setProgress(20))
      axios.get(`${BaceUrl}63035cd5a1610e638609ea9f`, configAccess).then((data) => {
        if (data.status === 200) {
          dispatch(setProgress(70))
          let User = data.data.record.filter(user => user.email === email && user.password === password ? user : null)
          if (User.length > 0) {
            cookies.set('token', `${User[0].username + User[0].id}`, { path: '/' , expires: new Date(Date.now() + 12 * 60 * 60 * 1000)})
            // cookies.set('token', `${User[0].username + User[0].id}`, { path: '/', expires: new Date(1662554949321 + 12 * 60 * 60 * 1000) })
            dispatch(setUserToken(`${User[0].username + User[0].id}`))
            dispatch(setProgress(100))
            if (User[0].isAdmin) {
              navigate('/admin')
            } else {
              navigate('/')
            }
            toast.success("ورود موفقیت آمیز بود", {
              position: "top-right",
              closeOnClick: true,
            });
          } else {
            dispatch(setProgress(0))
            toast.error("نام کاربری یا رمز عبور اشتباه است", {
              position: "top-right",
              closeOnClick: true,
            })
          }
        }
      })
    } else {
      dispatch(setProgress(0))
      toast.error("لطفا فیلد ها را پر کنید", {
        position: "top-right",
        closeOnClick: true,
      })
    }
  }

  return (
    <div className="login-page d-flex justify-content-center align-items-center">
      <div className="login-container">
        <div className="rotate-box"></div>
        <div className="login d-flex flex-column align-items-center p-4">
          <h3 className="mb-3">ورود به سایت</h3>
          <p className="login-title">
            با ورود به حساب کاربری خود از مزایای کاربران ساین بهره مند شوید
          </p>
          <div className="login-avatar d-flex justify-content-center align-items-center mt-2 mb-5">
            <img src={loginSvg} alt="" />
          </div>
          <Input
            placeholder="ایمیل"
            icon="dashicons:email-alt"
            color="#808080"
            iconWidth="25px"
            className="w-100"
            value={email}
            validation={email === '' ? 'لطفا فیلد ایمیل را پر کنید' : null}
            onChangeFun={setEmail}
          />
          <Input
            placeholder="پسوورد"
            icon="bxs:lock-alt"
            color="#808080"
            iconWidth="25px"
            width="w-100"
            className="w-100"
            type='password'
            value={password}
            validation={password === '' ? 'لطفا فیلد رمز عبور را پر کنید' : null}
            onChangeFun={setPassword}
          />
          <div className="d-flex checkBox-container flex-column">
            <div className="checkBox d-flex">
              <input type="checkbox" />
              <span>مرا به خاطر بسپار</span>
            </div>
            <div className="checkBox d-flex">
              <input type="checkbox" />
              <span>
                <i className="blue-text">شرایط و قوانین</i> استفاده از سرویس های لوکس دیزاین را مطالعه کردم و
                آن را میپذیرم
              </span>
            </div>
          </div>
          <button className="login-btn" onClick={loginHandler}>
            ورود
          </button>
          <span className="blue-text my-3">رمز عبور را فراموش کرده ام</span>
        </div>
      </div>
    </div>
  );
};

Login.propTypes = {
  cookies: PropTypes.instanceOf(Cookies)
};

export default withCookies(Login);
