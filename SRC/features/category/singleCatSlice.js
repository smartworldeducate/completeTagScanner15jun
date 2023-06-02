import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { filterService } from "./singleCatService";
export const filterCats=createAsyncThunk("cat/filter",async(userData,thunkAPI)=>{
    try {
        return await filterService.filterCat(userData)
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
export const filterSlice=createSlice({
    name:'tags',
    initialState:initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(filterCats.pending,(state)=>{
            state.isLoading=true
        }).addCase(filterCats.fulfilled,(state,action)=>{
            state.isLoading=false,
            state.isError=false,
            state.isSuccess=true,
            state.user=action.payload.data
        }).addCase(filterCats.rejected,(state,action)=>{
            state.isLoading=false,
            state.isError=true,
            state.isSuccess=false,
            state.message=action.error
        })
    }
})

export default filterSlice.reducer