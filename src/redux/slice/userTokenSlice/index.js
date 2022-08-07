import { createSlice } from "@reduxjs/toolkit";

export const userTokenSlice = createSlice({
    name : 'userToken',
    initialState : {
        userInfo : [],
        userToken : ''
    },
    reducers : {
        setUserToken : (state,{payload}) => {
            state.userToken = payload
        },
        setUserInfo : (state,{payload}) => {
            state.userInfo = payload
        },
    }
})

export const {setUserToken,setUserInfo} = userTokenSlice.actions
export default userTokenSlice.reducer