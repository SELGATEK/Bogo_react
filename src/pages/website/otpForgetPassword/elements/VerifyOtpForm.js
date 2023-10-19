// import React from 'react';
// import { Link } from 'react-router-dom';
// import OtpInput from './OtpInput';

// export default function VerifyOtpForm({ id }) {
//   return (
//     <form id="addform" className="verify_otp_login_form">
//       <input type="hidden" name="Id" id="Id" value={id} />
//       <div className="verification-code">
//         <OtpInput />

//         <div className="otp-time">
//           <span className="pe-4">(00:52)</span>
//         </div>
//       </div>

//       <div className="resend_code_box">
//         <span>Did not receive the code?</span>
//         <Link to="#" className="resend_code_link">
//           Resend Code
//         </Link>
//       </div>

//       <div className="row">
//         <div className="col-12 verify-btn-group">
//           <Link to="/newPassword" style={{ color: 'white', textDecoration: 'none' }}>
//             <button type="submit" className="btn btn-primary verify-btn">
//               Verify
//             </button>
//           </Link>
//         </div>
//       </div>
//     </form>
//   );
// }





// import React, { useState} from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import OtpInput from './OtpInput';
// import { MERCHANT_VERIFY_OTP } from '../../../../redux/slices/merchantAuthSlice';

// export default function VerifyOtpForm({ id }) {

//   const history = useNavigate();
//   const dispatch = useDispatch();
//   const [otp, setOtp] = useState(['', '', '', '']);
//   const [verificationError, setVerificationError] = useState('');

//   const handleOtpChange = (newOtp) => {
//     setOtp(newOtp);
//   };

//   const handleOtpVerification = async (e) => {
//     e.preventDefault();

//     const email = 'himanshusaini8741@gmail.com'
//     const isReset = true;

//     try {
//       const response = await dispatch(MERCHANT_VERIFY_OTP({ id, otp: otp.join('') , email ,isReset })); // Join OTP array into a single string

//       console.log('OTP verification response:', response);
//       const  veriToken  = response.payload;


//       console.log('OTP verification Token with payload:', veriToken);

//       // now verifyEmailToken send to store in database
       

//       if(veriToken.msg === 'OTP is invalid or timeout'){
//         setVerificationError(veriToken.msg);
//       }else{
//         console.log('OTP verification Token:', veriToken);
//         history('/newPassword', { state: { veriToken } });
//         // history(`/newPassword/${verifyEmailToken}`);

//       }

      
     

//     } catch (error) {
//       setVerificationError(error.message);
//       console.error('OTP verification failed:', error.message);
//     }
//   };

//   return (
//     <form id="addform" className="verify_otp_login_form" 
//     onSubmit={handleOtpVerification}>
//       <input type="text" name="Id" id="Id" value={id} />
//       <div className="verification-code">
//         <OtpInput otp={otp} onChange={handleOtpChange} />
//         <div className="otp-time">
//           <span className="pe-4">(00:52)</span>
//         </div>
//       </div>

//       <div className="resend_code_box">
//         <span>Did not receive the code?</span>
//         <Link to="#" className="resend_code_link">
//           Resend Code
//         </Link>
//       </div>

//       <div className="row">
//         <div className="col-12 verify-btn-group">
//           <button type="submit" className="btn btn-primary verify-btn">
//             Verify
//           </button>
//         </div>
//       </div>

//       {verificationError && (
//         <div className="alert alert-danger mt-3 text-center">
//           {verificationError}
//         </div>
//       )}
//     </form>
//   );
// }


import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import OtpInput from './OtpInput';
import { MERCHANT_VERIFY_OTP } from '../../../../redux/slices/merchantAuthSlice';

export default function VerifyOtpForm({ id }) {
  const history = useNavigate();
  const dispatch = useDispatch();
  const [otp, setOtp] = useState(['', '', '', '']);
  const [verificationError, setVerificationError] = useState('');

  const handleOtpChange = (newOtp) => {
    setOtp(newOtp);
  };

  const handleOtpVerification = async (e) => {
    e.preventDefault();

    const email = 'sanjaychhipa786@gmail.com';
    const isReset = true;

    try {
      const response = await dispatch(
        MERCHANT_VERIFY_OTP({ id, otp: otp.join(''), email, isReset })
      );

      console.log('OTP verification response:', response);
      const veriToken = response.payload;

      console.log('OTP verification Token with payload:', veriToken);

      if (veriToken.msg === 'OTP is invalid or timeout') {
        setVerificationError(veriToken.msg);
      } else {
        console.log('OTP verification Token:', veriToken);
        let tokenValue = JSON.stringify(veriToken);
        history(`/newPassword/${tokenValue}`);
      
        
        // history('/newPassword', { state: { veriToken } });
      }
    } catch (error) {
      setVerificationError(error.message);
      console.error('OTP verification failed:', error.message);
    }
  };

  return (
    <form
      id="addform"
      className="verify_otp_login_form"
      onSubmit={handleOtpVerification}
    >
      <input type="text" name="Id" id="Id" value={id} />
      <div className="verification-code">
        <OtpInput otp={otp} onChange={handleOtpChange} />
        <div className="otp-time">
          <span className="pe-4">(00:52)</span>
        </div>
      </div>

      <div className="resend_code_box">
        <span>Did not receive the code?</span>
        <Link to="#" className="resend_code_link">
          Resend Code
        </Link>
      </div>

      <div className="row">
        <div className="col-12 verify-btn-group">
          <button type="submit" className="btn btn-primary verify-btn">
            Verify
          </button>
        </div>
      </div>

      {verificationError && (
        <div className="alert alert-danger mt-3 text-center">
          {verificationError}
        </div>
      )}
    </form>
  );
}
