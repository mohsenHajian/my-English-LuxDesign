import { createSlice } from "@reduxjs/toolkit";

export const usersListSlice = createSlice({
    name : 'usersList',
    initialState : {
        usersList : []
    },
    reducers : {
        setUsersList : (state,{payload}) => {
            state.usersList = [...state.usersList,payload]
        },
    }
})

export const {setUsersList} = usersListSlice.actions
export default usersListSlice.reducer