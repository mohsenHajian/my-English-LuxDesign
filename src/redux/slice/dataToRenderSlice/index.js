import { createSlice } from "@reduxjs/toolkit";

export const dataToRenderSlice = createSlice({
    name : 'dataRender',
    initialState : {
        dataRender : [{},{},{},{},{},{},{},{}],
        shirtData : [],
        pantsData : [],
        singlePageData : {}
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
        },
        setSinglePageData : (state,{payload}) => {
            state.singlePageData = payload
        }
    }
})

export const {setDataRender , setPantsData , setShirtData , setSinglePageData} = dataToRenderSlice.actions
export default dataToRenderSlice.reducer