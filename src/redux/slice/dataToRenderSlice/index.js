import { createSlice } from "@reduxjs/toolkit";

export const dataToRenderSlice = createSlice({
    name : 'dataRender',
    initialState : {
        dataRender : [],
        shirtData : [],
        pantsData : [],
    },
    reducers : {
        setDataRender : (state,{payload}) => {
            state.dataRender = payload
        },
        setShirtData : (state,{payload}) => {
            state.shirtData = payload
        },
        setPantsData : (state,{payload}) => {
            state.pantsData = payload
        }
    }
})

export const {setDataRender , setPantsData , setShirtData} = dataToRenderSlice.actions
export default dataToRenderSlice.reducer