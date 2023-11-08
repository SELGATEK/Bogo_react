import React from 'react';


// Import Conponents Header and Footer
import Footer from '../../../partials/footer/Footer.js'
import Header from '../../../partials/header/Header.js'





import VerifyOtpImage from './elements/VerifyOtpImage';
import VerifyOtpForm from './elements/VerifyOtpForm';

export default function VerifyOtp() {
  return (
    <>

    {/* Header */}
    <Header/>


    <div className="login_section">
      <div className="container">
        <div className="user_login_box">
          <div className="row">
            <VerifyOtpImage />
            <div className="col-md-6">
              <div className="verify-group-box">
                <div className="verify-text-group">
                  <h4>Verify Code</h4>
                  <span className="otp-text">
                    Enter the 4-digit OTP Verification Code
                  </span>
                </div>
                <VerifyOtpForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>



    {/* Footer */}
    <Footer/>
    </>
  );
}
