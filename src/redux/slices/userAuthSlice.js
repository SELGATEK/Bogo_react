import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {CreateUser}  from "../services/userAuthServices";
import { TOAST_ERROR, TOAST_SUCCESS } from '../../utils';
 



export const USER_SIGNUP = createAsyncThunk(
  "merchant/MERCHANT_SIGNUP",
  async (data) => {
    try {
      const res = await CreateUser(data);

      console.log(res.data + 'signup user data from slice');
      localStorage.setItem('token', res.data?.tokens.access.token)
      localStorage.setItem('userMail', res.data?.user.email)
      return res.data;
    } catch (error) { 
      if (error.response.data.code === 401 || error.response.data.code === 400) {
        TOAST_ERROR(error.response.data.message)
         throw new Error(error.response.data.message)
      }
      else  throw new Error("An unexpected error occurred"); 
    }
  }
);




const userAuthSlice = createSlice({
  name: 'user',
  initialState: { userData: []},
  reducers: {},
  extraReducers:{

    [USER_SIGNUP.fulfilled]: (state, action) => {
        state.userData = action.payload;
        // state.businessApi = true;
    },
    [USER_SIGNUP.rejected]: (state, action) => {
      state.signUpError = action.error.message;
    }
  },
});

export default userAuthSlice.reducer;
