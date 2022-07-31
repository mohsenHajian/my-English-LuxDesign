import React, { useState } from "react";
import loginSvg from "./login.svg";
import "./login.style.scss";
import Input from "../../components/input";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [user,setUser] = useState()

  const loginHandler = () => {
    if (email && password) {
      axios.get('http://localhost:8000/users').then(({ data }) => setUser(data.filter(user => user.email === email && user.password === password ? user : null)))

      if (user) {
        localStorage.setItem('token',`${user[0].username+user[0].id}`)
        navigate('/')
        toast.success("ورود موفقیت آمیز بود", {
          position: "top-right",
          closeOnClick: true,
        });
      }
    }else {
      toast.error("مشکلی پیش آمده.", {
        position: "top-right",
        closeOnClick: true,
      });
    }
  }
  // m.hajian3451@gmail.com

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
            className="w-100 my-2"
            value={email}
            onChangeFun={setEmail}
          />
          <Input
            placeholder="پسوورد"
            icon="bxs:lock-alt"
            color="#808080"
            iconWidth="25px"
            width="w-100"
            className="w-100 my-2"
            type='password'
            value={password}
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

export default Login;
