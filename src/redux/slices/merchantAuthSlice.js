import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {CreateMerchant,BusinessMerchant , LoginMerchant, VerifyOtp, RequestOtp, ResetPassword , AllBusinessDetails, CampaignCreate, VoucherCreate, getBusinessVoucher, getBusinessCampaign}  from "../services/marchantAuthServices";
import { TOAST_ERROR, TOAST_SUCCESS } from '../../utils';
 



export const MERCHANT_SIGNUP = createAsyncThunk(
  "merchant/MERCHANT_SIGNUP",
  async (data) => {
    try {
      const res = await CreateMerchant(data);
      localStorage.setItem('token', res.data?.tokens.access.token)
      localStorage.setItem('userID', res.data?.user.id)
      localStorage.setItem('userMail', res.data?.user.email)
      localStorage.setItem('isLogin', 1) 
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


export const MERCHANT_SIGNIN = createAsyncThunk(
  "merchant/MERCHANT_SIGNIN",
  async (data) => {
  try {
    // const res = await RequestOtp(data);
    const res = await LoginMerchant(data);
    localStorage.setItem('token', res.data?.tokens.access.token)
    localStorage.setItem('userID', res.data?.user.id)
    localStorage.setItem('userMail', res.data?.user.email)
    localStorage.setItem('isLogin', 1)
    TOAST_SUCCESS('Login successfully!')
    window.location.href = '/dashboard' 
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


export const MERCHANT_BUSINESS = createAsyncThunk(
  "merchant/MERCHANT_BUSINESS",
  async (data) => {
  try {
    console.log(data + 'business data from slice');
    const res = await BusinessMerchant(data);
    localStorage.setItem('businessId', res?.data?.id) 
    if(data.id)  TOAST_SUCCESS('Business Updated successfully!')
    return res.data;
  } catch (error) { 
    console.log("error",error)
    if (error.response.status === 401) {
      TOAST_ERROR(error.response.data.message)
       throw new Error(error.response.data.message)
    }
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
    TOAST_SUCCESS('OTP sent successfully! Check your email.')
    return res.data;
  } catch (error) {  
    if (error.response.status === 401) {
      TOAST_ERROR(error.response.data.message)
       throw new Error(error.response.data.message)
    }
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
    if (error.response.status === 401) {
      TOAST_ERROR(error.response.data.message)
       throw new Error(error.response.data.message)
    }
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

    console.log(data + 'GET_ALL_BUSINESS_DETAILS');
      
      try {
        const res = await AllBusinessDetails();
        console.log('all business data from slice', res.data);
        return res.data;
        
      } catch (error) { 
        if (error.response?.data?.code == 401) { 
          localStorage.clear(); 
          window.location.href = window.location.origin
        }
        else  throw new Error("An unexpected error occurred");
      }
  }
);


export const SELECTED_BUSINESS_DATA = createAsyncThunk( "merchant/SELECTED_BUSINESS_DATA", (data) => { return data } );

export const CREATE_CAMPAIGN = createAsyncThunk(
  'merchant/CREATE_CAMPAIGN',
  async (data, status, history) => {
    console.log('datamy data', data)
    console.log('status', status)
      try {
        const res = await CampaignCreate(data);
        localStorage.setItem("activeCampaing",res.data.id)
        if(res.data?.isPublished) TOAST_SUCCESS("Campaign created successfully!")
        else if(status=='close') TOAST_SUCCESS("Campaign close successfully!")
        else  TOAST_SUCCESS("Campaign save in draft successfully!") 
        history('/invite_influencer')
        return res.data;
        
      } catch (error) {
        if (error.response.status === 401) {
          TOAST_ERROR(error.response.data.message)
           throw new Error(error.response.data.message)
        }
        else {
          TOAST_ERROR("An unexpected error occurred")
          throw new Error("An unexpected error occurred"); 
        } 
      }
  }
);


export const CREATE_VOUCHER = createAsyncThunk(
  'merchant/CREATE_VOUCHER',
  async (data) => {
      try {
        const res = await VoucherCreate(data);
        if(!data.isPublished) TOAST_SUCCESS("Voucher save in draft successfully!")
        else TOAST_SUCCESS("Voucher created successfully!")
        return res.data;
        
      } catch (error) {
        if (error.response.status === 401) {
          TOAST_ERROR(error.response.data.message)
           throw new Error(error.response.data.message)
        }
        else  throw new Error("An unexpected error occurred");
      }
  }
);

export const GET_BUSINESS_VOUCHER = createAsyncThunk(
  'merchant/GET_BUSINESS_VOUCHER',
  async (id) => {
      try {
        const res = await getBusinessVoucher(id); 
        console.log('voucher data from slice', res); 
        return res.data;
        
      } catch (error) {
         
      }
  }
);


export const GET_BUSINESS_CAMPAIGN = createAsyncThunk(
  'merchant/GET_BUSINESS_CAMPAIGN',
  async (id) => {
      try {
        const res = await getBusinessCampaign(id);  
        return res.data;
        
      } catch (error) {
         
      }
  }
);

export const SAVE_VOUCHER = createAsyncThunk( "merchant/SAVE_VOUCHER", (data) => { 
  

  return data } );
export const SAVE_CAMPAIGN = createAsyncThunk( "merchant/SAVE_CAMPAIGN", (data) => { return data } );


const marchantAuthSlice = createSlice({
  name: 'merchant',
  initialState: { merchantData: [], signUpError:'', loginError:'', businessApi:false , allBusinessData:[], selectedBusinessData:[], campaign:[], voucher:[] , voucherList:[] ,  campaignList:[] , saveCampaign:[], saveVoucher:[]},
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
      const selectedBusiness = action.payload?.find((x) => x.id == activeBusinessId); 
      state.selectedBusinessData = selectedBusiness ? selectedBusiness : action.payload ? action.payload[0]:'';
    },

    [SELECTED_BUSINESS_DATA.fulfilled]: (state, action) => { 
      state.selectedBusinessData = action.payload;
    },
    [CREATE_CAMPAIGN.fulfilled]: (state, action) => { 
      state.campaign = action.payload;
    },
    [CREATE_VOUCHER.fulfilled]: (state, action) => { 
      state.voucher = action.payload;
      console.log(state.saveVoucher)
    },
    [SAVE_VOUCHER.fulfilled]: (state, action) => { 
      state.saveVoucher = action.payload;
     
    },
    [SAVE_CAMPAIGN.fulfilled]: (state, action) => { 
      state.saveCampaign = action.payload;
    },
    [GET_BUSINESS_VOUCHER.fulfilled]: (state, action) => { 
      state.voucherList = action.payload;
      console.log("voucher lisht from sliceee" , state.voucherList)
    },

    [GET_BUSINESS_CAMPAIGN.fulfilled]: (state, action) => { 
      state.campaignList = action.payload;
      console.log("campaignList lisht from sliceee" , state.campaignList)
    },
    

  },
});

export default marchantAuthSlice.reducer;
