import { configureStore } from "@reduxjs/toolkit";
import searchValue from '../slice/searchValueSlice'
import searchSubmit from '../slice/searchValueSlice'
import dataRender from '../slice/dataToRenderSlice'
import shirtData from '../slice/dataToRenderSlice'
import pantsData from '../slice/dataToRenderSlice'
import usersList from '../slice/usersListSlice'
import userToken from '../slice/userTokenSlice'

export const store = configureStore({
    reducer : {
        searchValue,
        searchSubmit,
        dataRender,
        shirtData,
        pantsData,
        usersList,
        userToken
    }
})