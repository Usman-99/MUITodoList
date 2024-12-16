import { createSlice } from "@reduxjs/toolkit";
const initialState={
    data:[]
}
const personData=createSlice({
    name:"personData",initialState,reducers:{
        addData:(state,action)=>{
            state.data.push(action.payload)
        },removeData:(state,action)=>{
            state.data=state.data.filter((_,index)=>index!==action.payload)
        }
    }
})
export const {addData,removeData}=personData.actions
export default personData.reducer;