import React, {useState} from 'react';
import { Link, useNavigate} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { MERCHANT_REQUEST_OTP } from '../../../../redux/slices/merchantAuthSlice'; 

const ForgetPasswordRow = () => {

  const [error, setError] = useState('');
  const [pending, setPending] = useState(false);
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    let newEmail = e.target.value;
    setEmail(newEmail);
    localStorage.setItem('userEmail', newEmail);
  }

  const dispatch = useDispatch();
  const history = useNavigate();


  const handleRequestOTP = async (e) => {
      e.preventDefault();

      try {

        const response = await dispatch(MERCHANT_REQUEST_OTP({email}));
        console.log('OTP request response forgetpassword:', response);
        console.log('response.payload.msg:', response.payload);

        console.log('response.payload.msg:', response.status);

       
        if(response.status === "pending"){
          setPending(true);
        }

        if( response.payload === 'OTP Sent to your Email Address!' ){
      
          history('/otpForgetPassword')
        }else{
          setError(response.payload.msg);
        }
        
      } catch (error) {
        setError(error.message);
        console.error('OTP request failed:', error.message);
      }
  }



  return (
    <div className="forget_pass_row">
      <h4>Forgot Password?</h4>
      <form id="addform" className="forget_pass_form">
        <div className="row">
          <div className="col-12">
            <label htmlFor="email">Email:</label>
            <input type="text" value={email} className="form-control user_login_email" placeholder="Email address" onChange={handleEmailChange } />
          </div>

          <div className="col-12">
            <div className="user_login_btn-box">
             
              <button className="user_login_btn btn"
               onClick={handleRequestOTP}>

                {pending ? 'Pending ' : ' Submit'}

               </button>
            </div>
          </div>

          <div className="col-12">
            <div className="backtoLogin">
              <Link to="/login">Back To Login</Link>
            </div>
          </div>
        </div>
      </form>

      {error && (
        <div className="alert alert-danger mt-3">
          <p>Sorry, we don't recognise this email address</p>
        </div>
      )}
    </div>
  );
};

export default ForgetPasswordRow;
