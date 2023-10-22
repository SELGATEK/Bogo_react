import { configureStore } from '@reduxjs/toolkit'
import categoryReducer from '../slices/categorySlice';
import countryReducer from '../slices/countrySlice';
import subcategoryReducer from '../slices/subCategorySlice';
import merchantAuthReducer from '../slices/merchantAuthSlice';
import businessInfoSlice from '../slices/businessInfoSlice';
import influencerSlice from '../slices/influencerSlice';

const reducer = {
  category: categoryReducer,
  subCategory: subcategoryReducer,
  merchantAuth:merchantAuthReducer,
  businessInfo:businessInfoSlice,
  country:countryReducer,
  influencer:influencerSlice
}

const store = configureStore({
  reducer: reducer,
  devTools: true,
})

export default store;