import React from 'react';
import { Link } from 'react-router-dom';


// import react component
import HeroSection from './element/HeroSection';
import BecomeMainSection from './element/BecomeMainSection';


// import header and footer
import Headers from '../../../partials/header/Header';
import Footer from '../../../partials/footer/Footer';


const PricingPage = () => {



  return (
    <>

      <Headers />


      <HeroSection heading="Our Membership Options" />

      <div className="membership-option-section">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-4">
              <div className="membership-text">
                <h5>
                  A Basic User Account is always FREE. Download the app and try
                  out our platform by signing up as a user today!
                </h5>
                <span>
                  Basic Users can redeem one voucher of their choosing, per
                  week, and are limited to only one voucher per BOGO Merchant.
                  For full access to all vouchers on the platform, please
                  subscribe to a Premium User Account or purchase a Premium
                  Voucher Credit (or bundle).
                </span>
              </div>
            </div>
            <div className="col-xl-8 col-lg-8">
              <div className="membarship-plan-box">
                <div className="row">
                  <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                    <div className="user-payment-methode basic-user">
                      <div className="plan_img_box">
                        <img
                          src="/images/Group 3369.png"
                          alt=""
                        />
                        <h4>Basic User</h4>
                      </div>
                      <ul>
                        <li>FREE forever with limited redemption</li>
                        <li className="choose-price-voucher-text">
                          1 voucher per week, 1 voucher per merchant
                        </li>
                      </ul>
                      <Link to="/userRegistration" className="second-link">
                        Choose this plan
                      </Link>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                    <div className="user-payment-methode premium-user">
                      <div className="plan_img_box">
                        <img
                          src="/images/Group 3370.png"
                          alt=""
                        />
                        <h4>Premium User</h4>
                      </div>
                      <ul>
                        <li>25 AED per month, or 250 AED per year</li>
                        <li className="choose-price-text">
                          No limitations, can redeem every voucher contained on
                          the platform
                        </li>
                      </ul>
                      <Link to="/userRegistration" className="second-link">
                        Choose this plan
                      </Link>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                    <div className="user-payment-methode pay-per-use">
                      <div className="plan_img_box">
                        <img
                          src="/images/Group 3370.png"
                          alt=""
                        />
                        <h4>Pay-per-use</h4>
                      </div>
                      <ul>
                        <li>10 AED each, or 40 AED for a 5-pack bundle</li>
                        <li>
                          Premium voucher credits can be used for every voucher
                          contained on the platform and they never expire
                        </li>
                      </ul>
                      <Link to="/userRegistration">Choose this plan</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BecomeMainSection />

      <div className="marchent-fluid-section">
        <div className="merchant_main_section">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="merchant_inner_section home-merchant-inncer-sec">
                  <img
                    src="/images/Onboarding.png"
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="merchant_inner_section merchent_right_text">
                  <h1>Are you a merchant?</h1>
                  <p>
                    Increase foot traffic and sustainably grow your
                    profitability with The BOGO App’s Dynamic Campaign
                    Management system
                  </p>
                  <div className="arrow-box">
                    <Link to="/business">
                      BOGO For Business
                      <i className="fa fa-arrow-right pl-2" aria-hidden="true"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer/>

    </>
  );
};

export default PricingPage;
