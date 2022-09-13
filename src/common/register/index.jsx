import React, { useEffect, useState } from "react";
import Input from "../../components/input";
import registerSvg from "./register.svg";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./register.style.scss";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { setUsersList } from "../../redux/slice/usersListSlice";
import { BaceUrl, configAccess, configMaster } from "../../servises/Urlservises";
import { setProgress } from "../../redux/slice/loadingbarSlice";


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
      dispatch(setProgress(20))
      let data = Date.now()
      const users = [
        ...allUsers, {
          id: data,
          username,
          phoneNumber,
          email,
          password
        }
      ]
      axios.put(`${BaceUrl}63035cd5a1610e638609ea9f`, users, configMaster).then(
        (data) => {
          if (data.status === 200) {
            dispatch(setProgress(70))
            dispatch(setUsersList({
              id: data,
              username,
              phoneNumber,
              email,
              password
            }))
            toast.success("Registration was successful.", {
              position: "top-left",
              closeOnClick: true,
            });
            navigate("/");
            dispatch(setProgress(100))
          }
        }
      )
    } else {
      toast.error("Please fill in the fields", {
        position: "top-left",
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
            <h3 className="mb-3">Register</h3>
            <p className="register-title">
              Benefit from the benefits of Sign users by logging into your account
            </p>
            <div className="register-avatar d-flex justify-content-center align-items-center mt-2 mb-5">
              <img src={registerSvg} alt="" />
            </div>
            <div className="d-flex gap-3 w-100">
              <Input
                placeholder="Username"
                icon="bi:person-fill"
                color="#808080"
                iconWidth="20px"
                className="w-50"
                value={username}
                validation={username === '' ? 'Please fill in the Username field' : null}
                onChange={(e) => setUsername(e.target.value)}
              />
              <Input
                placeholder="Phone"
                icon="carbon:phone-filled"
                color="#808080"
                iconWidth="20px"
                className="w-50"
                value={phoneNumber}
                validation={phoneNumber === '' ? 'Please fill in the Phone Number field' : null}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <Input
              placeholder="Email"
              icon="dashicons:email-alt"
              color="#808080"
              iconWidth="20px"
              className="w-100"
              value={email}
              validation={email === '' ? 'Please fill in the Email field' : null}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="d-flex gap-3">
              <Input
                placeholder="Password"
                icon="bxs:lock-alt"
                color="#808080"
                iconWidth="20px"
                width="w-100"
                className="w-50"
                value={password}
                validation={password === '' ? 'Please fill in the Password field' : null}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
              />
              <Input
                placeholder="Confirm Password"
                icon="bxs:lock-alt"
                color="#808080"
                iconWidth="20px"
                width="w-100"
                className="w-50"
                value={confirmPassword}
                validation={password === '' ? 'Please fill in the Password field' : null}
                onChange={(e) => setConfirmPassword(e.target.value)}
                type="password"
              />
            </div>
            <div className="d-flex checkBox-container flex-column">
              <div className="checkBox d-flex gap-2">
                <input type="checkbox" />
                <span>Remember me</span>
              </div>
              <div className="checkBox d-flex gap-2">
              <input type="checkbox" />
              <span>
              I have read the 
                <i className="blue-text">terms and conditions</i>  of using Lux design services and I accept them
              </span>
            </div>
            </div>
            <button className="register-btn" onClick={registerHandler}>
              Register
            </button>
            <span className="blue-text my-3" onClick={()=>navigate('/login')}>I already have an account</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
