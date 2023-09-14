// src/slices/categorySlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


// Merchant Registration action
export const registerUser = createAsyncThunk('auth/registerUser', async(userData, {rejectWithValue, fulfillWithValue }) => {
  try {

    const response = await fetch("http://192.168.0.16:3000/v1/merchant/register", {
        method: "POST",
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(userData),
    })

    if(response.ok){
        const data = await response.json();
        return fulfillWithValue(data);
    }
    
  } catch (error) {
      return rejectWithValue(error.message);
  }
})










// Define an async thunk to fetch Login from the API
export const  loginUser= createAsyncThunk('auth/loginUser', async (userData, {rejectWithValue, fulfillWithValue}) => {
  // Your API call logic here
  try {
    
    console.log("userData in try catch", userData);
    const response = await fetch('http://192.168.0.16:3000/v1/merchant/login',{
        method: 'POST',
        headers:{
            'content-type': 'application/json',
        },
        body: JSON.stringify(userData),
    });
   
    if(response.ok){
        const data = await response.json()
        return fulfillWithValue(data);

    }else{
        const data =await response.json();
        console.log("loginData", data);
        return rejectWithValue(data);
        
    }
  } catch (err) {
    console.log(err + "errmessage");
    return rejectWithValue(err.message + "errmessage");
  } 
});







const authSlice = createSlice({
  name: 'auth',
  initialState: {
    auth: {},
    loading: false,
    error: null,

  },
  reducers: {},
  extraReducers: (builder) => {
    builder

    // *************** Login User *****************//
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.auth = action.payload;
        state.error = null; // Clear the error state on successful login
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })



      // *************** Register User *****************//
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.auth = action.payload;
        state.error = null; // Clear the error state on successful login
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
  },
});

export default authSlice.reducer;
