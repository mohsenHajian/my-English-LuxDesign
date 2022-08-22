import React, { useEffect, useState } from "react";
import loginSvg from "./login.svg";
import "./login.style.scss";
import Input from "../../components/input";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { setUserToken } from "../../redux/slice/userTokenSlice";

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [user, setUser] = useState()
  const [admins, setAdmins] = useState()

  useEffect(() => {
    axios.get('http://localhost:8000/users').then((data) => setUser(data.data))
    axios.get('http://localhost:8000/admins').then((data) => setAdmins(data.data))
  }, [])


  const loginHandler = () => {
    if (email && password && user) {
      let User = user.filter(user => user.email === email && user.password === password ? user : null)
      let Admin = admins.filter(user => user.email === email && user.password === password ? user : null)
      if (Admin.length > 0) {
        localStorage.setItem('token', `${Admin[0].username + Admin[0].id}`)
        dispatch(setUserToken(`${Admin[0].username + Admin[0].id}`))
        navigate('/admin')
        setAdmins(undefined)
        toast.success("ورود موفقیت آمیز بود", {
          position: "top-right",
          closeOnClick: true,
        });
      } else if (User.length > 0) {
        localStorage.setItem('token', `${User[0].username + User[0].id}`)
        dispatch(setUserToken(`${User[0].username + User[0].id}`))
        navigate('/')
        setUser(undefined)
        toast.success("ورود موفقیت آمیز بود", {
          position: "top-right",
          closeOnClick: true,
        });
      } else {
        toast.error("مشکلی پیش آمده.", {
          position: "top-right",
          closeOnClick: true,
        });
      }
    } else {
      toast.error("مشکلی پیش آمده.", {
        position: "top-right",
        closeOnClick: true,
      });
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

export default Login;
