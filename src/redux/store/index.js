import { configureStore } from "@reduxjs/toolkit";
import searchValue from '../slice/searchValueSlice'
import searchSubmit from '../slice/searchValueSlice'
import dataRender from '../slice/dataToRenderSlice'
import shirtData from '../slice/dataToRenderSlice'
import pantsData from '../slice/dataToRenderSlice'
import singlePageData from '../slice/dataToRenderSlice'
import usersList from '../slice/usersListSlice'
import userToken from '../slice/userTokenSlice'
import userInfo from '../slice/userTokenSlice'
import cartList from '../slice/cartListSlice'

export const store = configureStore({
    reducer : {
        searchValue,
        searchSubmit,
        dataRender,
        shirtData,
        pantsData,
        usersList,
        userToken,
        userInfo,
        singlePageData,
        cartList
    }
})