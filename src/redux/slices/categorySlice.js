import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import CategoryDataService from "../services/categoryServices";

 

export const fetchCategories = createAsyncThunk(
  "category/fetchCategories",
  async () => {
    const res = await CategoryDataService.getAllCategory();
    return res.data;
  }
);




const categorySlice = createSlice({
  name: 'category',
  initialState: { categories: [], loading: true, error: null, },
  reducers: {},
  extraReducers:{

    [fetchCategories.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchCategories.fulfilled]: (state, action) => {
        state.loading = false;
        state.categories = action.payload;
    },
    [fetchCategories.rejected]: (state, action) => {
       state.loading = false;
        state.error = action.error.message;
    },
  },
});

export default categorySlice.reducer;
