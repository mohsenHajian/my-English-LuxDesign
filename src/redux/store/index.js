// import { configureStore } from "@reduxjs/toolkit";
// import searchValue from "../slice/searchValueSlice";
// import searchSubmit from "../slice/searchValueSlice";
// import dataRender from "../slice/dataToRenderSlice";
// import allData from "../slice/dataToRenderSlice";
// import shirtData from "../slice/dataToRenderSlice";
// import pantsData from "../slice/dataToRenderSlice";
// import singlePageData from "../slice/dataToRenderSlice";
// import commentStatus from "../slice/dataToRenderSlice";
// import usersList from "../slice/usersListSlice";
// import userToken from "../slice/userTokenSlice";
// import userInfo from "../slice/userTokenSlice";
// import cartList from "../slice/cartListSlice";
// import uniqueArr from "../slice/cartListSlice";
// import loadingbar from "../slice/loadingbarSlice";
// import { loadingBarReducer } from "react-redux-loading-bar";


// // const debounceNotify = _.debounce(notify => notify());

// export const store = configureStore({
//   reducer: {
//     searchValue,
//     searchSubmit,
//     dataRender,
//     shirtData,
//     pantsData,
//     usersList,
//     userToken,
//     userInfo,
//     singlePageData,
//     cartList,
//     uniqueArr,
//     allData,
//     loadingbar,
//     commentStatus,
//   },
//   // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
//   // devTools: process.env.NODE_ENV !== "production",
//   // loadingBarReducer,
//   // enhancers: [batchedSubscribe(debounceNotify)],
// });





import { configureStore } from "@reduxjs/toolkit";
import searchValue from "../slice/searchValueSlice";
import searchSubmit from "../slice/searchValueSlice";
import dataRender from "../slice/dataToRenderSlice";
import allData from "../slice/dataToRenderSlice";
import shirtData from "../slice/dataToRenderSlice";
import pantsData from "../slice/dataToRenderSlice";
import singlePageData from "../slice/dataToRenderSlice";
import commentStatus from "../slice/dataToRenderSlice";
import usersList from "../slice/usersListSlice";
import userToken from "../slice/userTokenSlice";
import userInfo from "../slice/userTokenSlice";
import cartList from "../slice/cartListSlice";
import uniqueArr from "../slice/cartListSlice";
import loadingbar from "../slice/loadingbarSlice";
import thunk from "redux-thunk";
import { combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
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
    loadingbar,
    commentStatus,
});
export const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: 
    persistedReducer,
  
  middleware: [thunk]
});
export const persistor = persistStore(store);