import React, { useState} from 'react';
import MerchantNavItem from './MerchantNavItem';

const categories = [
  { id: 1, name: 'Dining', image: '/images/bussiness-icon/Dining.png' },
  { id: 2, name: 'Fitness', image: '/images/bussiness-icon/Fitness.png' },
  { id: 3, name: 'Services', image: '/images/bussiness-icon/Services.png' },
  { id: 4, name: 'Entertainment', image: '/images/bussiness-icon/Entertainment.png' },
  { id: 5, name: 'Spas & Salons', image: '/images/bussiness-icon/Spas.png' },
  { id: 6, name: 'Hotels', image: '/images/bussiness-icon/Hotels.png' },
  // Add more categories with their respective images as needed
];

const MerchantNavTabs = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const handleCategoryClick = (categoryId) => {
    setActiveCategory(categoryId);
  };

  return (
    <ul className="nav nav-tabs merchent-nav-box" role="tablist"  >
      {categories.map(category => (
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
