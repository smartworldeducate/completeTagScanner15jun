import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { loginService } from "../register/loginService";
export const loginUser=createAsyncThunk("auth/loginuser",async(userData,thunkAPI)=>{
    try {
        return await loginService.googlelLogin(userData)
    } catch (error) {
       return thunkAPI.rejectWithValue(error) 
    }
})

const initialState={
    user:"",
    isError:false,
    isSuccess:false,
    success:0,
    isLoading:false,
    message:""
}
export const loginSlice=createSlice({
    name:'auth',
    initialState:initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(loginUser.pending,(state)=>{
            state.isLoading=true
        }).addCase(loginUser.fulfilled,(state,action)=>{
           
            state.isLoading=false,
            state.isError=false,
            state.isSuccess=true,
            state.message=action.payload.message,
            state.success=action.payload.success,
            state.user=action.payload
        }).addCase(loginUser.rejected,(state,action)=>{
            state.isLoading=false,
            state.isError=true,
            state.isSuccess=false,
            state.success=0,
            state.message=action.error
        })
    }
})

export default loginSlice.reducer