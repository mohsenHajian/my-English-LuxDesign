import React from "react";
import { Route, Routes } from "react-router";
import Main from "../../common/main";
import Login from "../../common/login";
import MainLayout from "../mainLayout";
import Register from "../../common/register";
import SinglePage from "../../common/singlePage";
import ShowAll from "../../common/showAll";
import Cart from "../../common/Cart";
import Checkout from "../../common/checkout";
import Admin from "../../common/admin/Admin";
import ProductList from '../../common/admin/ProductList'
import OrderList from '../../common/admin/OrderList'

 
const Layout = () => {
  return (
    <>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/shirts" element={<ShowAll />} />
          <Route path="/pants" element={<ShowAll />} />
          <Route path="/single-page" element={<SinglePage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/cart/checkout" element={<Checkout />} />
          <Route path="admin" element={<Admin />}>
            <Route path="products" element={<ProductList />} />
            <Route path="orders" element={<OrderList />} />
          </Route>
        </Routes>
      </MainLayout>
    </>
  );
};

export default Layout;
