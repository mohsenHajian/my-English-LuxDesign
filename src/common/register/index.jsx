import React, { useEffect, useState } from "react";
import Input from "../../components/input";
import registerSvg from "./register.svg";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
// import { Sugar } from "react-preloaders";
import "react-toastify/dist/ReactToastify.css";
import "./register.style.scss";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { setUsersList } from "../../redux/slice/usersListSlice";
import { BaceUrl, configAccess, configMaster } from "../../servises/Urlservises";


const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const [allUsers, setAllUsers] = useState()

  const [username, setUsername] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  useEffect(() => {
    axios.get(`${BaceUrl}63035cd5a1610e638609ea9f`, configAccess).then(({ data }) => setAllUsers(data.record))
  }, [])


  const registerHandler = () => {
    if (username && phoneNumber && email && password && password === confirmPassword) {
      let data = Date.now()
      console.log(allUsers);
      const users = [
        ...allUsers, {
          id: data,
          username,
          phoneNumber,
          email,
          password
        }
      ]
      axios.put(`${BaceUrl}63035cd5a1610e638609ea9f`, users , configMaster);
      dispatch(setUsersList({
        id: data,
        username,
        phoneNumber,
        email,
        password
      }))
      toast.success("ثبت نام موفقیت آمیز بود.", {
        position: "top-right",
        closeOnClick: true,
      });
      navigate("/");
    } else {
      toast.error("مشکلی پیش آمده.", {
        position: "top-right",
        closeOnClick: true,
      });
    }
    setUsername("");
    setPhoneNumber("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="w-100">
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
                className="w-50"
                value={username}
                validation={username === '' ? 'لطفا فیلد نام کاربری را پر کنید' : null}
                onChange={(e) => setUsername(e.target.value)}
              />
              <Input
                placeholder="موبایل"
                icon="carbon:phone-filled"
                color="#808080"
                iconWidth="20px"
                className="w-50"
                value={phoneNumber}
                validation={phoneNumber === '' ? 'لطفا فیلد شماره تلفن را پر کنید' : null}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <Input
              placeholder="ایمیل"
              icon="dashicons:email-alt"
              color="#808080"
              iconWidth="20px"
              className="w-100"
              value={email}
              validation={email === '' ? 'لطفا فیلد ایمیل را پر کنید' : null}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="d-flex gap-3">
              <Input
                placeholder="رمز عبور"
                icon="bxs:lock-alt"
                color="#808080"
                iconWidth="20px"
                width="w-100"
                className="w-50"
                value={password}
                validation={password === '' ? 'لطفا فیلد رمز عبور را پر کنید' : null}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
              />
              <Input
                placeholder="تکرار رمز عبور"
                icon="bxs:lock-alt"
                color="#808080"
                iconWidth="20px"
                width="w-100"
                className="w-50"
                value={confirmPassword}
                validation={password === '' ? 'لطفا رمز عبور را تکرار کنید' : null}
                onChange={(e) => setConfirmPassword(e.target.value)}
                type="password"
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
                  <i className="blue-text">شرایط و قوانین</i> استفاده از سرویس
                  های لوکس دیزاین را مطالعه کردم و آن را میپذیرم
                </span>
              </div>
            </div>
            <button className="register-btn" onClick={registerHandler}>
              ورود
            </button>
            <span className="blue-text my-3">رمز عبور را فراموش کرده ام</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
