import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'; 
import { Influencers, InviteInfluencers } from '../services/influencerService';
import { TOAST_ERROR, TOAST_SUCCESS } from '../../utils';

 

export const INFLUENCER_LIST = createAsyncThunk(
  "influencer/INFLUENCER_LIST",
  async (name) => {
    try {
      const res = await Influencers(name); 
      return res.data;
    } catch (error) { 
      if (error.response.status === 401) throw new Error(error.response.data.message)
      else  throw new Error("An unexpected error occurred"); 
    }
  }
);

export const INVITE_INFLUENCER = createAsyncThunk(
  "influencer/INVITE_INFLUENCER",
  async (data) => {
    try {
      const res = await InviteInfluencers(data); 
      TOAST_SUCCESS("Invited successfully!")
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

 

const influencerSlice = createSlice({
  name: 'merchant',
  initialState: { influencer: [], invite:[] },
  reducers: {},
  extraReducers:{

    [INFLUENCER_LIST.fulfilled]: (state, action) => {
        state.influencer = action.payload;
    },
    [INVITE_INFLUENCER.fulfilled]: (state, action) => {
      state.invite = action.payload; 
  },

 
  },
});

export default influencerSlice.reducer;
