// import React, {useState} from 'react';
// import {  useLocation , useNavigate  } from 'react-router-dom';
// import { useDispatch } from 'react-redux';

// import { MERCHANT_RESET_PASSWORD } from '../../../../redux/slices/merchantAuthSlice';

// const ResetNewPassword = () => {

//   const location = useLocation();
//   const history = useNavigate();
//   const { veriToken } = location.state;
//   const dispatch = useDispatch();


//   console.log('token is send by params:', veriToken);



//   const [newPassword, setNewPassword] = useState('');
//   const [resetPasswordError, setResetPasswordError] = useState('');


//   const handleNewPasswordChange = (e) => {
//     setNewPassword(e.target.value);
//   };

//   const handleResetPassword = async (e) => {
//     e.preventDefault();

//     try {
//       const token = veriToken[0]; 
//       console.log('token is send by params:', token);
//       const response = await dispatch(MERCHANT_RESET_PASSWORD({ newPassword, token }));
//       console.log('Reset password response:', response);

//       if(response.payload.msg === 'Password reset successfully'){
//         history('/dashboard');
//       }

//     } catch (error) {
//       setResetPasswordError(error.message);
//       console.error('Reset password failed:', error.message);
//     }
//   }


//   return (
//     <div className="forget_pass_row">
//       <h4>Reset Password</h4>
//       <form id="addform" className="forget_pass_form">
//         <div className="row">
//           <div className="col-12">
//             <label htmlFor="email">New Password</label>
//             <input type="text" className="form-control user_login_email"       placeholder="New Password"
//             onChange={handleNewPasswordChange} 
//             value={newPassword} 
//              />
//           </div>

//           <div className="col-12">
//             <div className="user_login_btn-box">
//               <button  className="user_login_btn btn" 
//               onClick={handleResetPassword} >Submit</button>
//             </div>
//           </div>
//         </div>
//       </form>
//       {resetPasswordError && (
//         <div className="alert alert-danger mt-3 text-center">{resetPasswordError}</div>
//       )}
//     </div>
//   );
// };

// export default ResetNewPassword;










// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { useNavigate, useLocation } from 'react-router-dom'; // Import useHistory and useLocation

// import { MERCHANT_RESET_PASSWORD } from '../../../../redux/slices/merchantAuthSlice';

// const ResetNewPassword = () => {
//   const location = useLocation();
//   const history = useNavigate(); // Get the history object
//   const { veriToken } = location.state;
//   console.log('Location state:', location.state); // Debug: Check the location state
//   console.log('VeriToken:', veriToken);
//   const dispatch = useDispatch();

//   const [newPassword, setNewPassword] = useState('');
//   const [resetPasswordError, setResetPasswordError] = useState('');

//   const handleNewPasswordChange = (e) => {
//     setNewPassword(e.target.value);
//   };

//   const handleResetPassword = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await dispatch(MERCHANT_RESET_PASSWORD({ newPassword, token: veriToken }));
//       console.log('Reset password response:', response);

//       if (response.payload.msg === 'Password reset successfully') {
//         history.push('/dashboard'); // Redirect to the dashboard upon successful password reset
//       }
//     } catch (error) {
//       setResetPasswordError(error.message);
//       console.error('Reset password failed:', error.message);
//     }
//   };

//   return (
//     <div className="forget_pass_row">
//       <h4>Reset Password</h4>
//       <form id="addform" className="forget_pass_form">
//         <div className="row">
//           <div className="col-12">
//             <label htmlFor="email">New Password</label>
//             <input
//               type="password" // Change input type to "password" for password input
//               className="form-control user_login_email"
//               placeholder="New Password"
//               onChange={handleNewPasswordChange}
//               value={newPassword}
//             />
//           </div>

//           <div className="col-12">
//             <div className="user_login_btn-box">
//               <button className="user_login_btn btn" onClick={handleResetPassword}>
//                 Submit
//               </button>
//             </div>
//           </div>
//         </div>
//       </form>
//       {resetPasswordError && (
//         <div className="alert alert-danger mt-3 text-center">{resetPasswordError}</div>
//       )}
//     </div>
//   );
// };

// export default ResetNewPassword;







import React, { useState } from 'react';
import { useParams ,useNavigate} from 'react-router-dom'; // Import useParams to access route parameters
import { useDispatch } from 'react-redux';
import { MERCHANT_RESET_PASSWORD } from '../../../../redux/slices/merchantAuthSlice';

const ResetNewPassword = () => {
  const { token: veriToken } = useParams(); // Get the token from the route parameters
  const history = useNavigate();
  console.log('VeriToken in resetpassword:', veriToken);
  const dispatch = useDispatch();

  const [newPassword, setNewPassword] = useState('');
  const [resetPasswordError, setResetPasswordError] = useState('');

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
      setPasswordVisible(!passwordVisible);
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();

    try {
      console.log('new password' + newPassword);
      const response = await dispatch(
        MERCHANT_RESET_PASSWORD({ newPassword, token: veriToken })
      );
      console.log('Reset password response:', response);

      if (response.payload === 'Password Reset Success!') {
        history('/dashboard');
      }
    } catch (error) {
      setResetPasswordError(error.message);
      console.error('Reset password failed:', error.message);
    }
  };

  return (
    <div className="forget_pass_row">
      <h4>Reset Password</h4>
      <form id="addform" className="forget_pass_form">
        <div className="row">
          <div className="col-12">
            <div className="input-box password-input-box">
                <label htmlFor="password">New Password</label>
                <input type={passwordVisible ? 'text' : 'password'} className="form-control use_registration_password" 
                id="password" name="password"
                placeholder="Create Password" 
                onChange={handleNewPasswordChange}
                value={newPassword}
                 />
                <i
                    className={`fa-solid ${passwordVisible ? 'fa-eye' : 'fa-eye-slash'} eyes-toggle-password`}
                    onClick={togglePasswordVisibility}
                />
            </div>
          </div>

          <div className="col-12">
            <div className="user_login_btn-box">
              <button
                className="user_login_btn btn"
                onClick={handleResetPassword}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
      {resetPasswordError && (
        <div className="alert alert-danger mt-3 text-center">
          {resetPasswordError}
        </div>
      )}
    </div>
  );
};

export default ResetNewPassword;


