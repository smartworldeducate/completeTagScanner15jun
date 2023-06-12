import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { scanService } from "./scanService";
export const handleScaneer=createAsyncThunk("scan/scannerid",async(userData,thunkAPI)=>{
    try {
        return await scanService.scanData(userData)
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
export const scaneerSlice=createSlice({
    name:'scan',
    initialState:initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(handleScaneer.pending,(state)=>{
            state.isLoading=true
        }).addCase(handleScaneer.fulfilled,(state,action)=>{
            state.isLoading=false,
            state.isError=false,
            state.isSuccess=true,
            state.user=action.payload.data
        }).addCase(handleScaneer.rejected,(state,action)=>{
            state.isLoading=false,
            state.isError=true,
            state.isSuccess=false,
            state.message=action.error
        })
    }
})

export default scaneerSlice.reducer