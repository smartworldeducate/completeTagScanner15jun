import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { tagService } from "../tags/tagService";
export const getAllTags=createAsyncThunk("tag/getalltags",async(userData,thunkAPI)=>{
    try {
        return await tagService.getAllTags()
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
export const tagSlice=createSlice({
    name:'tags',
    initialState:initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getAllTags.pending,(state)=>{
            state.isLoading=true
        }).addCase(getAllTags.fulfilled,(state,action)=>{
            state.isLoading=false,
            state.isError=false,
            state.isSuccess=true,
            state.user=action.payload.data
        }).addCase(getAllTags.rejected,(state,action)=>{
            state.isLoading=false,
            state.isError=true,
            state.isSuccess=false,
            state.message=action.error
        })
    }
})

export default tagSlice.reducer