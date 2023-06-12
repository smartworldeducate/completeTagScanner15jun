import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { tagSingleService } from "./singletagService";
export const getSingleTag=createAsyncThunk("tag/getsingletag",async(userData,thunkAPI)=>{
    try {
        return await tagSingleService.getSingleTags(userData)
    } catch (error) {
       return thunkAPI.rejectWithValue(error) 
    }
})

const initialState={
    user:"",
    isError:false,
    isSuccess:false,
    isLoading:false,
    message:""
}
export const tagSingleSlice=createSlice({
    name:'tags',
    initialState:initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getSingleTag.pending,(state)=>{
            state.isLoading=true
        }).addCase(getSingleTag.fulfilled,(state,action)=>{
            state.isLoading=false,
            state.isError=false,
            state.isSuccess=true,
            state.user=action.payload.data
        }).addCase(getSingleTag.rejected,(state,action)=>{
            state.isLoading=false,
            state.isError=true,
            state.isSuccess=false,
            state.message=action.error
        })
    }
})

export default tagSingleSlice.reducer