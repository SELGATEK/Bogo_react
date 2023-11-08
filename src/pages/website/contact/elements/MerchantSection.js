import React from 'react';
import {Link} from 'react-router-dom';

const MerchantSection = () => {
  return (
    <div className="merchant_main_section about_merchant_sectiton contact_main_section_last">
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <div className="merchant_inner_section contact-inner-section">
              <img src="/images/Onboarding.png" alt="" />
            </div>
          </div>
          <div className="col-md-7">
            <div className="about_inner_section">
              <div className="row">
                <div className="col-md-6">
                  <div className="about_outer_section" >
                    <h4>For Merchants </h4>
                    <p>
                      Increase foot traffic and sustainably grow your profitability with The BOGO App’s Dynamic Campaign Management system
                    </p>
                    <Link to="/business">
                      BOGO For Business
                      <img src="/images/arrow_forward_24px.png" alt="" className="img-fluid pl-2" />
                    </Link>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="about_outer_section" >
                    <h4>For Influencers</h4>
                    <p>Create engaging and high-quality content for BOGO Merchants, to help them increase their online following and reach new audience</p>
                    <Link to="/brand_ambassadors">
                      BOGO Brand Ambassadors
                      <img src="/images/arrow_forward_24px.png" alt="" className="img-fluid pl-2" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MerchantSection;
