import { createSlice } from "@reduxjs/toolkit";

export const currentPathSlice = createSlice({
    name : 'currentPath',
    initialState : {
        currentPath : '/'
    },
    reducers : {
        setCurrentPath : (state,{payload}) => {
            state.currentPath = payload
        }
    }
})

export const {setCurrentPath} = currentPathSlice.actions
export default currentPathSlice.reducer