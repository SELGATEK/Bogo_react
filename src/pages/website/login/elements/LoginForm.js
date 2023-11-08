import React, {useEffect, useState} from 'react'
import {  Link, useNavigate } from 'react-router-dom';

// Import components
import RegisterGroupBox from './RegisterGroupBox'
import { useDispatch, useSelector } from 'react-redux';
import {   MERCHANT_SIGNIN  } from '../../../../redux/slices/merchantAuthSlice';


export default function LoginForm() {


    const [passwordVisible, setPasswordVisible] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const dispatch = useDispatch();
    const history = useNavigate();
  

    const merchantData = useSelector((state) => state.merchantAuth);


      
    
    const login=()=>{  
        if(!email || !password) setError(true)
        else{ 
             const obj ={ email, password } 
             dispatch(MERCHANT_SIGNIN(obj))
      }
    }
 
 


  return (
    <>
        <div className="col-md-6">
            <div className="login-group-box">
                <h4>Login</h4>
                <div className="user_login_form">
                <div className="row">
                    <div className="col-6">
                    <input
                        type="text"
                        className="form-control user_login_email"
                        placeholder="Email address"
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                    />
                    </div>
                    <div className="col-6">
                    <input
                        type={passwordVisible ? 'text' : 'password'}
                        className="form-control user_login_pass"
                        id="exampleFormControlInput1"
                        placeholder="Password"
                        onChange={e => setPassword(e.target.value)}
                        value={password}
                    />
                    <i
                        toggle="#password-field"
                        className={`fa-solid ${passwordVisible ? 'fa-eye' : 'fa-eye-slash'} eyes-toggle-password eyes-toggle-login_password`}
                        onClick={togglePasswordVisibility}
                    ></i>
                    </div>
                    <div className="user_login_forget_pass">
                    <Link to="/loginForgetPassword" className="forgot-password">
                        Forgot Password?
                    </Link>
                    </div>
                    <div className="user_login_btn-box">
                    <button className="user_login_btn btn" onClick={login}>Login</button>
                    </div>
                </div>
                </div>
            </div>
            <RegisterGroupBox />
        </div>
    </>
  )
}
