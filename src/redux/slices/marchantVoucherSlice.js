import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { MerchantVoucher } from '../services/marchantVoucher';


export const MERCHANT_VOUCHER = createAsyncThunk(
    "merchant/MERCHANT_VOUCHER",
    async (data) => {
    try {
      const res = await MerchantVoucher(data);
      return res.data;
    } catch (error) { 
      if (error.response.status === 401) throw new Error(error.response.data.message)
      else  throw new Error("An unexpected error occurred"); 
    }
  }
);





const marchantVoucherSlice = createSlice({
    name: 'merchant',
    initialState: { merchantVoucherData: [], signUpError:'', loginError:'', businessApi:false },
    reducers: {},
    extraReducers:{
        
      [MERCHANT_VOUCHER.fulfilled]: (state, action) => {
        state.merchantVoucherData = action.payload;
      }
      
    },
  });
  
  export default marchantVoucherSlice.reducer;