import React from 'react';
import RegistrationOption from './RegistrationOption';

export default function RegisterGroupBox() {
  return (
    <div className="register-group-box">
      <h4>Register</h4>
      <small>Are you a...</small>
      <div className="registation-option-row">
        <RegistrationOption link="/userRegistration" imageSrc="/images/customer-regis.png" altText="customer_img" title="Customer" />
        <RegistrationOption link="/merchant_register" imageSrc="/images/merchangt_regis.png" altText="merchant_img" title="Merchant" />
        <RegistrationOption link="/brand_ambassadors" imageSrc="/images/influencer_regis.png" altText="influencer_img" title="Influencer" />
      </div>
    </div>
  );
}
