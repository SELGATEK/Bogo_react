import React, { useEffect, useState } from 'react';


// Import Conponents Header and Footer
import Footer from '../../../partials/footer/Footer.js'
import Header from '../../../partials/header/Header.js'





import VerifyOtpImage from './elements/VerifyOtpImage';
import VerifyOtpForm from './elements/VerifyOtpForm';
import { MERCHANT_REQUEST_OTP } from '../../../redux/slices/merchantAuthSlice.js';
import { useDispatch } from 'react-redux';

export default function VerifyOtp() {

  const [isRequestedOTP, setRequestedOTP] = useState(false);

  const dispatch = useDispatch();

useEffect(() => {
    if (!isRequestedOTP) {
      const obj = { email: localStorage.getItem('userMail') };
      dispatch(MERCHANT_REQUEST_OTP(obj));
      setRequestedOTP(true); 
    }
  }, [isRequestedOTP, dispatch]);

  

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
