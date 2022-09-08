import { createSlice } from "@reduxjs/toolkit";

export const dataToRenderSlice = createSlice({
    name : 'dataRender',
    initialState : {
        dataRender : [{},{},{},{},{},{},{},{}],
        allData : [],
        shirtData : [{},{},{},{}],
        pantsData : [{},{},{},{}],
        singlePageData : {}
    },
    reducers : {
        setDataRender : (state,{payload}) => {
            state.dataRender = payload
        },
        setAllData : (state,{payload}) => {
            state.allData = payload
        },
        setShirtData : (state,{payload}) => {
            state.shirtData = payload
        },
        setPantsData : (state,{payload}) => {
            state.pantsData = payload
        },
        setSinglePageData : (state,{payload}) => {
            state.singlePageData = payload
        }
    }
})

export const {setDataRender , setPantsData , setShirtData , setSinglePageData , setAllData} = dataToRenderSlice.actions
export default dataToRenderSlice.reducer