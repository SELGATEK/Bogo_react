import React, { useState, useEffect  } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
// import { GET_USER_PROFILE } from '../redux/yourSlice';
import {GET_USER_PROFILE , CHANGE_PASSWORD, UPDATEPIN } from '../../../../redux/slices/otherSlice';
import { toast } from 'react-toastify';



// Import Conponents
import VerifyOtp from './OtpVerifyInput';


function AccountPageBody() {

    const dispatch = useDispatch();
    const userProfileData = useSelector((state) => state.otherInfo.userProfileData);

    const [passwordForm, setPasswordForm] = useState({ oldPassword: '', newPassword: '', confirmPassword: '', });

    const [formValues, setFormValues] = useState({ name: '', email: '', password: '', mobile: '', });
    const [updatPin,setUpdatPin] = useState('')

    useEffect(() => {
        // Dispatch your Redux action to make the API request
        dispatch(GET_USER_PROFILE())
            .then((response) => {
                console.log('User Profile Data:', response.payload);
                if (response.payload) {
                    const { firstName, lastName, email, phone, pin } = response.payload;
                    setFormValues({ name: `${firstName} ${lastName}`, email: email, mobile: phone, password: '', });
                    setUpdatPin(pin ?isNaN(pin) ? '':pin:'')
                }
            })
            .catch((error) => {
                console.error('Error fetching user profile data:', error);
            });
    }, [dispatch]);
    

    const [Colaps, setColaps] = useState(false);
    const colapsbtn = (data) => {
        if (Colaps === data) {
            setColaps(!Colaps); // Toggle the current state.
        } else {
            setColaps(data);
        }
    };

    const [Visible, setVisible] = useState(false)

    const VisibleButton = () => {
        setVisible(!Visible)
    }
    const [Visible2, setVisible2] = useState(false)

    const VisibleButton2 = () => {
        setVisible2(!Visible2)
    }
    const [Visible3, setVisible3] = useState(false)

    const VisibleButton3 = () => {
        setVisible3(!Visible3)
    }
    const [Visible4, setVisible4] = useState(false)

    const VisibleButton4 = () => {
        setVisible4(!Visible4)
    }


    // State to control the visibility of VerifyOtp component
    const [otpVisible, setOtpVisible] = useState(false);

    // Function to toggle the visibility of VerifyOtp component
    const toggleOtpVisible = () => {
        setOtpVisible(!otpVisible);
    };

    const handleChangePassword = async () => {
        const { oldPassword, newPassword, confirmPassword } = passwordForm;
        console.log('passwordFormmmmmm', passwordForm);
    
        if (newPassword !== confirmPassword) {
            toast.error("New password and confirm password do not match.");
          return;
        }
    
        try {
           const response = await dispatch(CHANGE_PASSWORD({ oldPassword, newPassword }));
           console.log('response', response);
           toast.success(response.payload.msg);
        //    empty password form
                setPasswordForm({ oldPassword: '', newPassword: '', confirmPassword: '', });
        } catch (error) {
            toast.error("Error changing password. Please try again.");
        }
      };

 

   const  setUserPin=()=>{
    if(updatPin){
    const obj ={pin: parseInt(updatPin?.join(''), 10).toString(),  }
    dispatch(UPDATEPIN(obj))
    }
      }


    return (
        <>
            <div className="campaing-body-section">
                <div className="container">

                    {/* <!-- Title --> */}
                    <div className="compaing-body-title">
                        <h3>Accounts Settings</h3>

                    </div>
                </div>



                <div className="container">
                    {/* <!-- offer form input 1 --> */}
                    <div className="offer_form_section1 " >
                        <form method="" action="" className=" offer_input_box offer_input_box1">

                            {/* <!-- tab content 1 --> */}
                            <div className="">
                                <div className="row ">
                                    <div className="col-12">
                                        <div className="input-box ">
                                            <label for="">Owner/ Manager Information</label>
                                            <input type="text" name="name" id="name" className="form-control" required="" placeholder="John Doe" value={formValues.name} onChange={(e) => setFormValues({ ...formValues, name: e.target.value })}  />
                                        </div>
                                    </div>
                                </div>

                                <div className="row ">
                                    <div className="col-12">
                                        <div className="input-box ">
                                            <label for="">Email Address</label>
                                            <input type="email" name="name" id="name" className="form-control" required placeholder="johndoe@gmail.com" value={formValues.email} onChange={(e) => setFormValues({ ...formValues, email: e.target.value })} />
                                        </div>
                                    </div>
                                </div>

                                {/* <div className="row ">
                                    <div className="col-12" >
                                        <div className="input-box " style={{ position: "relative" }}>
                                            <label for="">Password</label>
                                            <input type={Visible ? 'text' : 'password'} className="form-control use_registration_password" id="create_password" name="create_password" placeholder="Create Password" required="" />
                                            <i
                                                className={`fa-solid ${Visible ? 'fa-eye' : 'fa-eye-slash'} eyes-toggle-password`}

                                                onClick={VisibleButton}
                                            />
                                        </div>

                                    </div>
                                </div> */}


                                <div className="row">
                                    <div className="col-12">
                                        <div className="input-box">
                                            <label for="">Mobile Number</label>
                                            <input
                                                type="text"
                                                id="mobile_code"
                                                className="form-control"
                                                placeholder="Phone Number"
                                                name="mobile"
                                                value={formValues.mobile}
                                                onChange={(e) => setFormValues({ ...formValues, mobile: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                </div>




                                <div className="row">
                                    <div className="col-12">
                                        <div className='merchantPin_sett_row'>
                                            <div className='inputBox'>

                                                <div className="input-box">
                                                    <label for="">Set Merchant Pin</label>
                                                    {otpVisible && 
                                                        <VerifyOtp updatPin={updatPin} setUpdatPin={setUpdatPin}/>
                                                    }
                                                </div>
                                                {otpVisible && 
                                                    <button className='btn setBtnPin' type='submit' onClick={setUserPin}>SET PIN</button>
                                                    }
                                            </div>
                                            

                                            <label className="switch">
                                                <input type="checkbox" checked={otpVisible} onChange={toggleOtpVisible}/>
                                                <span className="slider round"></span>
                                            </label>                         
                                        </div>
                                        
                                    </div>
                                </div>




                                {/* <div className="row mt-3">
                                    <div className="col-12">
                                        <div className="input-box" >
                                            <label for="">Payment & Subscription</label>
                                            <div className="payment_sub_box">
                                                <div className="input-box mt-2">
                                                    <div className="label_group">
                                                        <label for="">Subscribe since April 2021</label>
                                                        <span>Gold Member</span>
                                                    </div>
                                                    <div className="input-group">
                                                        <span className="input-group-text" style={{ height: "50px" }}><img src="/images/visa-icon.png" alt="" className="img-fluid" /></span>
                                                        <input type="number" className="form-control" placeholder="**7872" required />
                                                    </div>

                                                    <div className="subscription-row">
                                                        <Link to="/merchant_subscription">
                                                            Manage Subscription
                                                        </Link>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}

                                <div className="row mt-3">
                                    <div className="change_pass_row">

                                        <span onClick={() => colapsbtn(1)}>
                                            <p >Change Password</p>
                                        </span>
                                        {Colaps === 1 && (
                                            <div className="change_pass_input_row ">
                                                <div className="col-12" >
                                                    <div className="input-box " >
                                                        <label for="">Current Password</label>
                                                        <input type={Visible2 ? "text" : "password"} className="current_password form-control" id="" name="" placeholder="Current Password" required=""
                                                        value={passwordForm.oldPassword}
                                                        onChange={(e) => setPasswordForm({ ...passwordForm, oldPassword: e.target.value })}
                                                        />
                                                        <i
                                                            className={`fa-solid ${Visible2 ? 'fa-eye' : 'fa-eye-slash'} eyes-toggle-password`}

                                                            onClick={VisibleButton2}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-12" >
                                                    <div className="input-box " style={{ position: "relative" }}>
                                                        <label for="new_password">New Password</label>
                                                        <input type={Visible3 ? "text" : "password"} className="form-control new_password" id="new_password" name="new_password" placeholder="New Password" required="" 
                                                        value={passwordForm.newPassword}
                                                        onChange={(e) => setPasswordForm({ ...passwordForm, newPassword: e.target.value })}

                                                        />
                                                        <i
                                                            className={`fa-solid ${Visible3 ? 'fa-eye' : 'fa-eye-slash'} eyes-toggle-password`}

                                                            onClick={VisibleButton3}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-12" >
                                                    <div className="input-box " style={{ position: "relative" }}>
                                                        <label for="confirm_password">Confirm Password</label>
                                                        <input type={Visible4 ? "text" : "password"} className="form-control conf_password" id="confirm_password " name="confirm_password" placeholder="Confirm Password" required="" 
                                                        value={passwordForm.confirmPassword}
                                                        onChange={(e) => setPasswordForm({ ...passwordForm, confirmPassword: e.target.value })}

                                                        />
                                                        <i
                                                            className={`fa-solid ${Visible4 ? 'fa-eye' : 'fa-eye-slash'} eyes-toggle-password`}

                                                            onClick={VisibleButton4}
                                                        />
                                                    </div>
                                                </div>

                                                <div className="col-12">
                                                    <div className="input-box">
                                                        <button type="button" className="btn btn-primary btnNext change_pass_btn"
                                                        onClick={handleChangePassword}
                                                        >
                                                            Change Password
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>




                                <div className="row review_submit_btn_row">
                                    <div className="next-btn-box review_submit_btn_box tab-pane active">
                                        <button type="button" className="btn btn-primary btnNext review_submit_btn">
                                            <Link to=""   style={{ padding: "10px 30px " }}>Submit</Link>
                                        </button>
                                    </div>
                                </div>


                            </div>



                        </form>
                    </div>
                </div>

            </div>

        </>
    )
}

export default AccountPageBody
