import React from "react";
import { createSlice } from "@reduxjs/toolkit";


let Reducer=createSlice({
    name:"BLOG",
    initialState:{
        posts:[]
    },
    reducers:{
addblogs:(state,action)=>{
    state.posts.push(action.payload)
}
    }
    
})

export let {addblogs}=Reducer.actions
export  default Reducer.reducer