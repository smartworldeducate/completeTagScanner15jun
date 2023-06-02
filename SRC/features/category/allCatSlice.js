import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { catService } from "../category/allCatService";
export const getAllCats=createAsyncThunk("cat/getallcats",async(userData,thunkAPI)=>{
    try {
        return await catService.getAllCat()
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
export const catSlice=createSlice({
    name:'tags',
    initialState:initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getAllCats.pending,(state)=>{
            state.isLoading=true
        }).addCase(getAllCats.fulfilled,(state,action)=>{
            state.isLoading=false,
            state.isError=false,
            state.isSuccess=true,
            state.user=action.payload.data
        }).addCase(getAllCats.rejected,(state,action)=>{
            state.isLoading=false,
            state.isError=true,
            state.isSuccess=false,
            state.message=action.error
        })
    }
})

export default catSlice.reducer