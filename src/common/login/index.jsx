import React from "react";
import loginSvg from "./login.svg";
import "./login.style.scss";
import Input from "../../components/input";

const Login = () => {
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
          />
          <Input
            placeholder="پسوورد"
            icon="bxs:lock-alt"
            color="#808080"
            iconWidth="25px"
            width="w-100"
            className="w-100 my-2"
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
          <button className="login-btn">
            ورود  
          </button>
          <span className="blue-text my-3">رمز عبور را فراموش کرده ام</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
