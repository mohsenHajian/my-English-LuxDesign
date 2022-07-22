import React from "react";
import Input from "../../components/input";
import registerSvg from "./register.svg";
import "./register.style.scss";

const Register = () => {
  return (
    <div className="register-page d-flex justify-content-center align-items-center">
      <div className="register-container">
        <div className="rotate-box"></div>
        <div className="register d-flex flex-column align-items-center p-4">
          <h3 className="mb-3">ثبت نام در سایت</h3>
          <p className="register-title">
            با ورود به حساب کاربری خود از مزایای کاربران ساین بهره مند شوید
          </p>
          <div className="register-avatar d-flex justify-content-center align-items-center mt-2 mb-5">
            <img src={registerSvg} alt="" />
          </div>
          <div className="d-flex gap-3 w-100">
            <Input
              placeholder="نام کاربری"
              icon="bi:person-fill"
              color="#808080"
              iconWidth="20px"
              className="w-50 my-2"
            />
            <Input
              placeholder="موبایل"
              icon="carbon:phone-filled"
              color="#808080"
              iconWidth="20px"
              className="w-50 my-2"
            />
          </div>
          <Input
            placeholder="ایمیل"
            icon="dashicons:email-alt"
            color="#808080"
            iconWidth="20px"
            className="w-100 my-2"
          />
          <div className="d-flex gap-3">
            <Input
              placeholder="رمز عبور"
              icon="bxs:lock-alt"
              color="#808080"
              iconWidth="20px"
              width="w-100"
              className="w-50 my-2"
            />
            <Input
              placeholder="تکرار رمز عبور"
              icon="bxs:lock-alt"
              color="#808080"
              iconWidth="20px"
              width="w-100"
              className="w-50 my-2"
            />
          </div>
          <div className="d-flex checkBox-container flex-column">
            <div className="checkBox d-flex">
              <input type="checkbox" />
              <span>مرا به خاطر بسپار</span>
            </div>
            <div className="checkBox d-flex">
              <input type="checkbox" />
              <span>
                <i className="blue-text">شرایط و قوانین</i> استفاده از سرویس های
                لوکس دیزاین را مطالعه کردم و آن را میپذیرم
              </span>
            </div>
          </div>
          <button className="register-btn">ورود</button>
          <span className="blue-text my-3">رمز عبور را فراموش کرده ام</span>
        </div>
      </div>
    </div>
  );
};

export default Register;
