import { createSlice } from "@reduxjs/toolkit";

export const userTokenSlice = createSlice({
    name : 'userToken',
    initialState : {
        userToken : ''
    },
    reducers : {
        setUserToken : (state,{payload}) => {
            state.userToken = payload
        },
    }
})

export const {setUserToken} = userTokenSlice.actions
export default userTokenSlice.reducer