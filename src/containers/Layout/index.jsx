import React from "react";
import { Route, Routes } from "react-router";
import Main from "../../common/main";
import Login from "../../common/login";
import MainLayout from "../mainLayout";
import Register from "../../common/register";
import AllShirts from "../../common/allShirts";
import SinglePage from "../../common/singlePage";
 
const Layout = () => {
  return (
    <>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/shirts" element={<AllShirts />} />
          <Route path="/single-page" element={<SinglePage />} />
        </Routes>
      </MainLayout>
    </>
  );
};

export default Layout;
