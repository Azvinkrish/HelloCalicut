import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from '../../../utils/axiosInstance';



//Register Action

export const registerUserAction = createAsyncThunk (
    "users/register",
    async (user,{rejectWithValue,getState,dispatch}) =>{
        try {
           
            const {data} = await axios.post(
                `/api/users/register`,
                user,
            
            );
            return data;
            
        } catch (error) {
            if (!error && !error.response){
                throw error;
            }
            return rejectWithValue(error?.response?.data);
            
        }

    }
)

export const loginUserAction = createAsyncThunk(
    "user/login",
    async (userData,{rejectWithValue, getState, dispatch}) =>{
        try {
            const {data } = await axios.post('/api/users/login',userData)

            // localtorage
            localStorage.setItem("userInfo",JSON.stringify(data));

            return data;
            
        } catch (error) {
            if (!error && !error.response){
                throw error;
            }
            return rejectWithValue(error?.response?.data);
            
        }

    }
 ) 

 //Logout

 export const logoutUserAction = createAsyncThunk(
    "user/logout",
    async(payload, {rejectWithValue,getState,dispatch}) =>{
        try {

            localStorage.removeItem("userInfo");
            
        } catch (error) {
            if (!error && !error.response){
                throw error;
            }
            return rejectWithValue(error?.response?.data);
        }

    }
 )

 //localstorage and place into store
 const userFromLocalStorage = localStorage.getItem("userInfo")
 ? JSON.parse(localStorage.getItem("userInfo")):null;


 //slice
 const userSlices = createSlice({
    name: "users",
    initialState: {
      userAuth: userFromLocalStorage,
    },
    extraReducers: (builder) => {
      //register
      builder.addCase(registerUserAction.pending, (state, action) => {
        state.loading = true;
        state.appErr = undefined;
        state.serverError = undefined;
      });
      builder.addCase(registerUserAction.fulfilled, (state, action) => {
        state.loading = false;
        state.registered = action?.payload;
        state.appErr = undefined;
        state.serverError = undefined;
      });
      builder.addCase(registerUserAction.rejected, (state, action) => {
        state.loading = false;
        state.appErr = action?.payload?.message;
        state.serverError = action?.error?.message;
      });
  
      //login
      builder.addCase(loginUserAction.pending, (state, action) => {
        state.loading = true;
        state.appErr = undefined;
        state.serverError = undefined;
      });
      builder.addCase(loginUserAction.fulfilled, (state, action) => {
        state.loading = false;
        state.userAuth = action?.payload;
        state.appErr = undefined;
        state.serverError = undefined;
      });
      builder.addCase(loginUserAction.rejected, (state, action) => {
        state.loading = false;
        state.appErr = action?.payload?.message;
        state.serverError = action?.error?.message;
    });


    //logout
    builder.addCase(logoutUserAction.pending, (state, action) => {
        state.loading = true;
        // state.appErr=undefined
        // state.serverError=undefined
      });
      builder.addCase(logoutUserAction.fulfilled, (state, action) => {
        state.userAuth = undefined;
        state.loading = undefined;
        state.loading = false;
        state.appErr = undefined;
        state.serverError = undefined;
      });
      builder.addCase(logoutUserAction.rejected, (state, action) => {
        state.appErr = action?.payload?.message;
        state.serverError = action?.error?.message;
        state.loading = false;
      });
    }

    })

    export default userSlices.reducer;
