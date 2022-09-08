import { configureStore } from "@reduxjs/toolkit";
import searchValue from "../slice/searchValueSlice";
import searchSubmit from "../slice/searchValueSlice";
import dataRender from "../slice/dataToRenderSlice";
import allData from "../slice/dataToRenderSlice";
import shirtData from "../slice/dataToRenderSlice";
import pantsData from "../slice/dataToRenderSlice";
import singlePageData from "../slice/dataToRenderSlice";
import usersList from "../slice/usersListSlice";
import userToken from "../slice/userTokenSlice";
import userInfo from "../slice/userTokenSlice";
import cartList from "../slice/cartListSlice";
import uniqueArr from "../slice/cartListSlice";
import loadingbar from "../slice/loadingbarSlice";
import { loadingBarReducer } from "react-redux-loading-bar";


// const debounceNotify = _.debounce(notify => notify());

export const store = configureStore({
  reducer: {
    searchValue,
    searchSubmit,
    dataRender,
    shirtData,
    pantsData,
    usersList,
    userToken,
    userInfo,
    singlePageData,
    cartList,
    uniqueArr,
    allData,
    loadingbar
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  // devTools: process.env.NODE_ENV !== "production",
  // loadingBarReducer,
  // enhancers: [batchedSubscribe(debounceNotify)],
});
