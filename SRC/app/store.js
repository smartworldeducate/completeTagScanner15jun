import { configureStore, } from "@reduxjs/toolkit";
import authReducer from '../features/users/userSlice'
import loginReducer from '../features/register/loginSlice';
import tagReducer from '../features/tags/tagSlice'
import singleTagReducer from '../features/tagsingle/singletagSlice'
import catReducer from '../features/category/allCatSlice'
import filterReducer from '../features/category/singleCatSlice'
import scanReducer from '../features/scan/scanSlice'
export const store=configureStore({
    reducer:{
        register:authReducer,
        login:loginReducer,
        getAllTags:tagReducer,
        singleTag:singleTagReducer,
        getAllCats:catReducer,
        getCatFilter:filterReducer,
        scanar:scanReducer
       }
})