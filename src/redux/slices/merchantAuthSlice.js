import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {CreateMerchant,BusinessMerchant , LoginMerchant, VerifyOtp, RequestOtp, ResetPassword , AllBusinessDetails, CampaignCreate, VoucherCreate}  from "../services/marchantAuthServices";

 

export const MERCHANT_SIGNUP = createAsyncThunk(
  "merchant/MERCHANT_SIGNUP",
  async (data) => {
    try {
      const res = await CreateMerchant(data);
      localStorage.setItem('token', res.data?.tokens.access.token)
      localStorage.setItem('userID', res.data?.user.id)
      localStorage.setItem('isLogin', 1)
      return res.data;
    } catch (error) { 
      if (error.response.status === 401) throw new Error(error.response.data.message)
      else  throw new Error("An unexpected error occurred"); 
    }
  }
);


export const MERCHANT_SIGNIN = createAsyncThunk(
  "merchant/MERCHANT_SIGNIN",
  async (data) => {
  try {
    // const res = await RequestOtp(data);
    const res = await LoginMerchant(data);
    localStorage.setItem('token', res.data?.tokens.access.token)
    localStorage.setItem('userID', res.data?.user.id)
    localStorage.setItem('isLogin', 1)
    return res.data;
  } catch (error) { 
    if (error.response.status === 401) throw new Error(error.response.data.message)
    else  throw new Error("An unexpected error occurred"); 
  }
}
);


export const MERCHANT_BUSINESS = createAsyncThunk(
  "merchant/MERCHANT_BUSINESS",
  async (data) => {
  try {
    const res = await BusinessMerchant(data);
    localStorage.setItem('businessId', res?.data?.id)
    return res.data;
  } catch (error) { 
    if (error.response.status === 401) throw new Error(error.response.data.message)
    else  throw new Error("An unexpected error occurred"); 
  }
}
);


export const MERCHANT_REQUEST_OTP = createAsyncThunk(
  "merchant/MERCHANT_REQUEST_OTP",
  async (data) => {
  try {
    console.log(data + 'request otp data from slice');
    const res = await RequestOtp(data);
    return res.data;
  } catch (error) { 
    if (error.response.status === 401) throw new Error(error.response.data.message)
    else  throw new Error("An unexpected error occurred"); 
  }
}
);


export const MERCHANT_BUSINESS_SUB = createAsyncThunk( "merchant/MERCHANT_BUSINESS_SUB", () => { return true } );


export const MERCHANT_VERIFY_OTP = createAsyncThunk(
  "merchant/MERCHANT_VERIFY_OTP",
  async (data) => {
  try {
    const res = await VerifyOtp(data);
    console.log(res + 'verify otp data from slice');
    return res.data;
  } catch (error) {
    if (error.response.status === 401) throw new Error(error.response.data.message)
    else  throw new Error("An unexpected error occurred");
  }
}
);

export const MERCHANT_RESET_PASSWORD = createAsyncThunk(
  'merchant/MERCHANT_RESET_PASSWORD',
  async (data) => {
      try {
        const res = await ResetPassword(data);
        return res.data;
        
      } catch (error) {
        if (error.response.status === 401) throw new Error(error.response.data.message)
        else  throw new Error("An unexpected error occurred");
      }
  }
);


export const GET_ALL_BUSINESS_DETAILS = createAsyncThunk(
  'merchant/GET_ALL_BUSINESS_DETAILS',
  async (data) => {
      try {
        const res = await AllBusinessDetails();
        return res.data;
        
      } catch (error) {
        if (error.response.status === 401) throw new Error(error.response.data.message)
        else  throw new Error("An unexpected error occurred");
      }
  }
);


export const SELECTED_BUSINESS_DATA = createAsyncThunk( "merchant/SELECTED_BUSINESS_DATA", (data) => { return data } );

export const CREATE_CAMPAIGN = createAsyncThunk(
  'merchant/CREATE_CAMPAIGN',
  async (data) => {
      try {
        const res = await CampaignCreate(data);
        return res.data;
        
      } catch (error) {
        if (error.response.status === 401) throw new Error(error.response.data.message)
        else  throw new Error("An unexpected error occurred");
      }
  }
);


export const CREATE_VOUCHER = createAsyncThunk(
  'merchant/CREATE_VOUCHER',
  async (data) => {
      try {
        const res = await VoucherCreate(data);
        return res.data;
        
      } catch (error) {
        if (error.response.status === 401) throw new Error(error.response.data.message)
        else  throw new Error("An unexpected error occurred");
      }
  }
);

export const SAVE_VOUCHER = createAsyncThunk( "merchant/SAVE_VOUCHER", (data) => { return data } );
export const SAVE_CAMPAIGN = createAsyncThunk( "merchant/SAVE_CAMPAIGN", (data) => { return data } );


const marchantAuthSlice = createSlice({
  name: 'merchant',
  initialState: { merchantData: [], signUpError:'', loginError:'', businessApi:false , allBusinessData:[], selectedBusinessData:[], campaign:[], voucher:[] , saveCampaign:[], saveVoucher:[]},
  reducers: {},
  extraReducers:{

    [MERCHANT_SIGNUP.fulfilled]: (state, action) => {
        state.merchantData = action.payload;
        state.businessApi = true;
    },
    [MERCHANT_SIGNUP.rejected]: (state, action) => {
      state.signUpError = action.error.message;
    },


    
    [MERCHANT_SIGNIN.fulfilled]: (state, action) => {
      state.merchantData = action.payload;
      state.loginError = '';
    },
    [MERCHANT_SIGNIN.rejected]: (state, action) => { 
      state.loginError = action.error.message;
    },

    [MERCHANT_BUSINESS_SUB.fulfilled]: (state, action) => {
      state.businessApi = true;
    },

    [MERCHANT_VERIFY_OTP.fulfilled]: (state, action) => {
      state.merchantData = action.payload;
      state.otpError = '';
    },
    [MERCHANT_VERIFY_OTP.rejected]: (state, action) => { 
      state.otpError = action.error.message;
    },

    [GET_ALL_BUSINESS_DETAILS.fulfilled]: (state, action) => {
      state.allBusinessData = action.payload;
      const activeBusinessId = localStorage.getItem('activeBusiness');
      const selectedBusiness = action.payload.find((x) => x.id === activeBusinessId);
      state.selectedBusinessData = selectedBusiness || action.payload[0];
    },

    [SELECTED_BUSINESS_DATA.fulfilled]: (state, action) => { 
      state.selectedBusinessData = action.payload;
    },
    [CREATE_CAMPAIGN.fulfilled]: (state, action) => { 
      state.campaign = action.payload;
    },
    [CREATE_VOUCHER.fulfilled]: (state, action) => { 
      state.voucher = action.payload;
    },
    [SAVE_VOUCHER.fulfilled]: (state, action) => { 
      state.saveVoucher = action.payload;
    },
    [SAVE_CAMPAIGN.fulfilled]: (state, action) => { 
      state.saveCampaign = action.payload;
    },
    

  },
});

export default marchantAuthSlice.reducer;
