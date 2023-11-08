import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'; 

export const UpdateBusinessInfo = createAsyncThunk( "businessInfo/get", (businessInfo) =>   businessInfo 
);

export const UpdateGalleryInfo = createAsyncThunk( "businessInfo/gallery", (galleryInfo) =>   galleryInfo );






const businessInfoSlice = createSlice({


  name: 'businessInfo',
  initialState: { businessData: [], galleryData:[] },
  reducers: {},
  extraReducers:{
 
    [UpdateBusinessInfo.fulfilled]: (state, action) => { 
        state.businessData = action.payload;
    },

   [UpdateGalleryInfo.fulfilled]: (state, action) => {
    state.galleryData = action.payload;
    console.log("state.galleryData", state.galleryData)
   },    
 
  },
});

export default businessInfoSlice.reducer;
