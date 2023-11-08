import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchCategories } from './../../../../redux/slice/categorySlice'; // Replace with the correct import path
// import  fetchSubcategories   from './../../../../redux/slice/subCategorySlice'; // Replace with the correct import path


import MerchantNavItem from './MerchantNavItem';
import { fetchAllCountries } from '../../../../redux/slices/countrySlice';

const MerchantNavTabs = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  // Get the categories from the Redux store
  const categories = useSelector((state) => state.category.categories);
  const countries = useSelector((state) => state.country.countries);
 


  // Get the dispatch function from the useDispatch hook
  const dispatch = useDispatch();

  
  // // Fetch the categories from the API
  // useEffect(() => {
 
  // if (!categories.length) {
      
  //     dispatch(fetchCategories());
  //     dispatch(fetchAllCountries());
  //   }
  // }, [dispatch, categories, countries]);

  const handleCategoryClick = async(categoryId) => {
    setActiveCategory(categoryId);
    console.log("categoryId....", categoryId);

    // try {
    //   // Dispatch the fetchSubcategories action with the categoryId
    //   const response = await dispatch(fetchSubcategories(categoryId));
    //   console.log("Subcategories response ....", response);
    // } catch (error) {
    //   console.error('Error fetching subcategories', error);
    // }
  };

  return (
    <ul className="nav nav-tabs merchent-nav-box" role="tablist">
      {categories.map((category) => (
        <MerchantNavItem
          key={category.id}
          category={category}
          isActive={activeCategory === category.id}
          onClick={() => handleCategoryClick(category.id)}
        />
      ))}
    </ul>
  );
};

export default MerchantNavTabs;
