import { configureStore } from "@reduxjs/toolkit";
import Reducer from "./Slice"


export let Store=configureStore({
    reducer:{
        BLOG:Reducer
    }
})