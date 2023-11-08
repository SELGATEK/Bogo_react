import React, { useState, useEffect } from 'react';
import {useNavigate } from 'react-router-dom';
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';
import { useDispatch } from 'react-redux';
import { USER_SIGNUP } from '../../../redux/slices/userAuthSlice';
import { MERCHANT_REQUEST_OTP } from '../../../redux/slices/merchantAuthSlice'; 
import { TOAST_ERROR} from '../../../utils';

// Import Header and Footer Components
import Header from '../../../partials/header/Header';
import Footer from '../../../partials/footer/Footer';

// Import Components
import PasswordInput from './elements/PasswordInput';
import InputText from './elements/InputText';

export default function MerchantRegistration() {
  const dispatch = useDispatch();
  const history = useNavigate();

  const [phone, setPhone] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [rePasswordVisible, setRePasswordVisible] = useState(false);


  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleRePasswordVisibility = () => {
    setRePasswordVisible(!rePasswordVisible);
  };

  const handleSubmit = (e) => {  
    e.preventDefault();
    
    if (!email || !password || !firstName || !lastName || !phone) { 
      TOAST_ERROR('You must fill in all of the fields')
    } else { 
      if (password === repeatPassword) {
        const obj = { firstName, lastName, email, password, phone };
        dispatch(USER_SIGNUP(obj)).then(() => {
          // Dispatch the OTP request after successful user signup
          dispatch(MERCHANT_REQUEST_OTP({ email }));
          history('/appUserOtpVerify');
        });
      } else {
        TOAST_ERROR('Passwords do not match. Please try again');
      }
    }
  }
  


  return (
    <>
      {/* Header */}
      <Header />

      <div className="login_section">
        <div className="container">
          <div className="user_login_box">
            <div className="row">
              <div className="col-md-6 user_img_row">
                <img src="/images/merchant_reg_img.jpg" alt="" />
              </div>
              <div className="col-md-6">
                <div className="user_register-group-box">
                  <h4>User Registration</h4>
                  <form id="addform" className="user_registration_form" >
                    <div className="row">

                    <div className="input-box">
                        <input
                          type="text"
                          className="form-control user_registration_Sname"
                          id="first_name"
                          name="first_name"
                          required="required"
                          placeholder="First Name"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                        />
                    </div>

                    <div className="input-box">
                        <input
                          type="text"
                          className="form-control use_registration_Lname"
                          id="Last_name"
                          name="last_name"
                          required="required"
                          placeholder="Last Name"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>


                    <div className="input-box">
                        <input
                          type="email"
                          className="form-control use_registration_email"
                          id="email"
                          name="email"
                          required="required"
                          placeholder="Email Name"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="col-12">
                      <input
                        type={passwordVisible ? 'text' : 'password'}
                        className="form-control use_registration_password"
                        id="create_password"
                        name="create_password"
                        placeholder="Create Password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <i
                        onClick={togglePasswordVisibility}
                        className={`fa-solid ${passwordVisible ? 'fa-eye' : 'fa-eye-slash'} eyes-toggle-password`}
                      ></i>
                    </div>

                    <div className="col-12">
                      <input
                        type={rePasswordVisible ? 'text' : 'password'}
                        className="form-control use_registration_password"
                        id="repeat_password"
                        name="repeat_password"
                        placeholder="Repeat password"
                        required
                        value={repeatPassword}
                        onChange={(e) => setRepeatPassword(e.target.value)}
                      />
                      <i
                        onClick={toggleRePasswordVisibility}
                        className={`fa-solid ${rePasswordVisible ? 'fa-eye' : 'fa-eye-slash'} eyes-toggle-password`}
                      ></i>
                    </div>
                      
                      {/* mobile */}
                      <div className="input-box">
                        <PhoneInput
                          country={'ae'}
                          value={phone}
                          onChange={(phone) => setPhone(phone)}
                          inputStyle={{ width: '100%', marginBottom: '10px' }}
                        />
                      </div>
                      <div className="col-12 regisBtn">
                      {/* to="/userOtpVerify" */}
                        <span >
                          <button
                            type="submit"
                            className="registration-btn btn btn-primary"
                            style={{ marginBottom: '20px' }}
                            onClick={handleSubmit}
                          >
                            Complete Registration
                          </button>
                        </span>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}
