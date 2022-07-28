import { createSlice } from "@reduxjs/toolkit";

export const searchValueSlice = createSlice({
    name : 'searchValue',
    initialState : {
        searchValue : '',
        searchSubmit : false
    },
    reducers : {
        setSearchSubmit : (state,{payload}) => {
            state.searchSubmit = payload
        },
        setSearchValue : (state,{payload}) => {
            state.searchValue = payload
        }
    }
})

export const {setSearchSubmit,setSearchValue} = searchValueSlice.actions
export default searchValueSlice.reducer