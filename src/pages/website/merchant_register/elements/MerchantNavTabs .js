import React, { useState} from 'react';
import MerchantNavItem from './MerchantNavItem';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCategories }from '../../../../redux/slices/categorySlice'  
import { fetchSubcategory } from '../../../../redux/slices/subCategorySlice';
import { fetchAllCountries } from '../../../../redux/slices/countrySlice';



const MerchantNavTabs = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const {categories,loading} = useSelector((state) => state.category);
 
  const dispatch = useDispatch();


  useEffect(() => {
  if (loading) {
      dispatch(fetchCategories());
      dispatch(fetchAllCountries());
    }
  }, [dispatch, loading]);

  const handleCategoryClick = async(categoryId) => {
    setActiveCategory(categoryId); 

    try {
      await dispatch(fetchSubcategory(categoryId)); 
    } catch (error) {
      console.error('Error fetching subcategorie', error);
    }
  };

 console.log("loading..",loading)

  return (
    <ul className="nav nav-tabs merchent-nav-box" role="tablist">
      {categories?.map((category) => (
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
