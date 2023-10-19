import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import CategoryDataService from "../services/categoryServices";

 

export const fetchSubcategory = createAsyncThunk(
  "subcategories/fetchCategories",
  async (id) => {
    const res = await CategoryDataService.getSubcategory(id);
    return res.data;
  }
);




const subCategorySlice = createSlice({
  name: 'subcategories',
  initialState: { subcategories: [], loading: false, error: null, },
  reducers: {},
  extraReducers:{

    [fetchSubcategory.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchSubcategory.fulfilled]: (state, action) => {
        state.loading = false;
        state.subcategories = action.payload;
    },
    [fetchSubcategory.rejected]: (state, action) => {
       state.loading = false;
        state.error = action.error.message;
    },
  },
});

export default subCategorySlice.reducer;
