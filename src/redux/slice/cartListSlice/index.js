import { createSlice } from "@reduxjs/toolkit";

export const cartListSlice = createSlice({
    name:'cartList',
    initialState : {
        cartList : [],
        uniqueArr : []
    },
    reducers : {
        setCartList : (state,{payload}) => {
            state.cartList = [...state.cartList , payload]
        },
        resetCartList : (state,{payload}) => {
            state.cartList = payload
        },
        setUniqueArr : (state,{payload}) => {
            state.uniqueArr = payload
        }
    }
})

export const {setCartList,setUniqueArr,resetCartList} = cartListSlice.actions
export default cartListSlice.reducer