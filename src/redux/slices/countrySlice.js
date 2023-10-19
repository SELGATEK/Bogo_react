import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import CategoryDataService from "../services/categoryServices";

 

export const fetchAllCountries = createAsyncThunk(
  "country/fetchCountry",
  async () => {
    const res = await CategoryDataService.getCountries();
    return res.data;
  }
);




const countrySlice = createSlice({
  name: 'country',
  initialState: { countries: [], loading: true, error: null, },
  reducers: {},
  extraReducers:{

    [fetchAllCountries.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchAllCountries.fulfilled]: (state, action) => {
        state.loading = false;
        state.countries = action.payload;
    },
    [fetchAllCountries.rejected]: (state, action) => {
       state.loading = false;
        state.error = action.error.message;
    },
  },
});

export default countrySlice.reducer;
