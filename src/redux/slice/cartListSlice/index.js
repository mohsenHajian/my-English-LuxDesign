import { createSlice } from "@reduxjs/toolkit";

export const cartListSlice = createSlice({
    name:'cartList',
    initialState : {
        cartList : []
    },
    reducers : {
        setCartList : (state,{payload}) => {
            state.cartList = [...state.cartList , payload]
        }
    }
})

export const {setCartList} = cartListSlice.actions
export default cartListSlice.reducer