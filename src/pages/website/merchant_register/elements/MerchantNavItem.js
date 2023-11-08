import React from 'react';

const MerchantNavItem = ({ category, isActive, onClick }) => {
  const navItemClass = isActive ? 'nav-item Category nav-active' : 'nav-item Category';

  return (
    <li className={navItemClass}>
      <a className="nav-link" data-toggle="tab" href="#tabs-4" role="tab" onClick={onClick}>
        <input type="radio" className="btn-check" name="business_category_id" defaultValue id={`buss_type_${category.id}`} autoComplete="off" defaultChecked />
        <MerchantNavLabel category={category} />
      </a>
    </li>
  );
};

const MerchantNavLabel = ({ category }) => {

  const imgUrl = `http://3.108.250.128:3000/${category.icon}`;


  return (
    <label className="btn businessCategoryID" data-id htmlFor={`option_${category.id}`}>
      {/* <img src={category.icon} alt="" /> */}
      <img src={imgUrl} alt="" />
      <span>{category.name}</span>
    </label>
  );
};

export default MerchantNavItem;
