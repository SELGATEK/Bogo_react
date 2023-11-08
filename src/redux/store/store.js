import { configureStore } from '@reduxjs/toolkit'
import categoryReducer from '../slices/categorySlice';
import countryReducer from '../slices/countrySlice';
import subcategoryReducer from '../slices/subCategorySlice';
import merchantAuthReducer from '../slices/merchantAuthSlice';
import userAuthReducer from '../slices/userAuthSlice';
import influencerAuthReducer from '../slices/influencerAuthSlice';
import businessInfoSlice from '../slices/businessInfoSlice';
import influencerSlice from '../slices/influencerSlice';
import otherSlice from '../slices/otherSlice';

const reducer = {
  category: categoryReducer,
  subCategory: subcategoryReducer,
  merchantAuth:merchantAuthReducer,
  userAuth:userAuthReducer,
  influencerAuth:influencerAuthReducer,
  businessInfo:businessInfoSlice,
  country:countryReducer,
  influencer:influencerSlice,
  otherInfo:otherSlice

}

const store = configureStore({
  reducer: reducer,
  devTools: true,
})

export default store;