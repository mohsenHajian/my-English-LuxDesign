import { configureStore } from "@reduxjs/toolkit";
import currentPath from '../slice/currentPathSlice'

export const store = configureStore({
    reducer : {
        currentPath
    }
})