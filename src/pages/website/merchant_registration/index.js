import React, { Component } from 'react';
import Header from '../../../partials/header/Header';
import Footer from '../../../partials/footer/Footer';
import PasswordInput from './elements/PasswordInput';
import InputText from './elements/InputText';
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2'; 
import { connect } from 'react-redux';
import { MERCHANT_SIGNUP , MERCHANT_BUSINESS } from '../../../redux/slices/merchantAuthSlice'; 
import { TOAST_ERROR, reArrangeObj } from '../../../utils';
import { ReportGmailerrorred } from '@mui/icons-material';


 class index extends Component{
state = {firstName:'', lastName:'', email:'', password:'', repeatpassword:'', phone:'', whatsaAppNo:'', error:false, passMatchErr:false }

signup=()=>{
  this.setState({error:false, passMatchErr:false})
  const  {firstName, lastName, email, password, repeatpassword, phone, whatsaAppNo } = this.state
  if(!firstName || !lastName || !email || !password|| !repeatpassword|| !phone){ this.setState({error:true});  TOAST_ERROR('You must fill in all of the fields')}
  else{
    if(password === repeatpassword){
       const obj ={ firstName, lastName, email, password, repeatpassword, phone } 
       this.props.MERCHANT_SIGNUP(obj)
    }else{
      TOAST_ERROR('Passwords do not match. Please try again')
         this.setState({passMatchErr:true})
    }
}
}

 componentDidMount(){
  if(window.location.pathname.includes('merchant_register') || window.location.pathname.includes('login') ){
    console.log("heloooo")
     if(localStorage.getItem('token') && localStorage.getItem('businessId')) { this.props.navigate('/dashboard') }
    }
}

componentDidUpdate(prevProps, prevState) {
  if (this.props.merchantAuth.businessApi !== prevProps.merchantAuth.businessApi) {
    if(this.props.merchantAuth.businessApi){
      const {businessInfo} = this.props
      //console.log("convertObject", convertToObject(businessInfo.businessData))
      const obj ={
        bName: businessInfo.businessData.bName , 
        address: businessInfo.businessData.address ,
        countryId: businessInfo.businessData.country , 
        cityId: businessInfo.businessData.state ,
        whatsappNo: businessInfo.businessData.whatsappNo ,
        categoryId: businessInfo.businessData.categoryId ,
        subCategoryId: businessInfo.businessData.subCategoryId ,
      //  logo: businessInfo.galleryData.logo,
        rating:businessInfo.businessData.rating,
      //  banner: businessInfo.galleryData.bannerobj ,
      //  gallery: businessInfo.galleryData.selectedImages ,
        hoursOfOperation: reArrangeObj(businessInfo.businessData) ,
        latitude: businessInfo.businessData.latitude ,
        longitude: businessInfo.businessData.longitude ,
        ...(businessInfo.galleryData.logo ? { logo: businessInfo.galleryData.logo } : {}),
        ...( businessInfo.galleryData.bannerobj ? { banner: businessInfo.galleryData.bannerobj } : {}),
         ...( businessInfo.galleryData.selectedImages ? { gallery: businessInfo.galleryData.selectedImages } : {}),
      }


      console.log("businessInfo whatsaAppNo", obj.whatsaAppNo)
      this.props.MERCHANT_BUSINESS(obj)
       this.props.navigate('/otpVerify')
    }
  }
}

businessAdd=()=>{

  const {businessInfo} = this.props
  console.log("businessInfo==========", businessInfo)
  const timing = reArrangeObj(businessInfo.businessData);



      const obj ={
        bName: businessInfo.businessData.bName , 
        address: businessInfo.businessData.address ,
        countryId: businessInfo.businessData.country , 
        cityId: businessInfo.businessData.state ,
        categoryId: businessInfo.businessData.categoryId ,
        subCategoryId: businessInfo.businessData.subCategoryId ,
        rating:businessInfo.businessData.rating,
        logo: businessInfo.galleryData.logo,
        banner: businessInfo.galleryData.bannerobj ,
        gallery: businessInfo.galleryData.selectedImages ,
        hoursOfOperation: reArrangeObj(businessInfo.businessData) ,
        whatsaAppNo:businessInfo.businessData.whatsaAppNo,
      }
      console.log("businessInfo obj", obj)
      
 
      this.props.MERCHANT_BUSINESS(obj);
}


 

render(){
  const  {firstName, lastName, email, password, repeatpassword, phone, whatsaAppNo , error, passMatchErr} = this.state
  return (
    <>
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
                <h4>Merchant Registration</h4>
                <div  className="user_registration_form" >
                    <div className="row">

                    <InputText type='text' value={firstName} getValue={text=>this.setState({firstName:text})} className='form-control user_registration_Sname' id='first_name' name='first_name' required='required' placeholder='
                        First Name'  />
                    <InputText type='text'  value={lastName} getValue={text=>this.setState({lastName:text})} className='form-control use_registration_Lname' id='Last_name' name='last_name' required='required' placeholder='Last Name'  />

                    <InputText type='email'  value={email} getValue={text=>this.setState({email:text})}  className='form-control use_registration_email' id='email' name='email' required='required' placeholder='Email Name'  />
                    
                    <PasswordInput  value={password} getValue={(text)=>this.setState({password:text})} id="create_password" name="create_password" placeholder="Create Password" required />
                    <PasswordInput  value={repeatpassword} getValue={(text)=>this.setState({repeatpassword:text})} id="repeat_password" name="repeat_password" placeholder="Repeat password" required />
                    <div className="input-box">
                 {/* Using the PhoneInput component */}
                    <label>Mobile Number</label>
                    <PhoneInput country={'ae'} value={phone} onChange={(value)=>  this.setState({ phone: value })} inputStyle={{ width: '100%' , marginBottom: '10px'}} />

                    {/* <PhoneInput country={'ae'} value={phone}  onChange={(value, country, e, formattedValue) => this.setState({ phone: value })}  inputStyle={{ width: '100%' , marginBottom: '10px'}} /> */}
              </div>
                    <div className="col-12 regisBtn">
                        
                      <button  className="registration-btn btn btn-primary" style={{marginBottom: '20px'}} onClick={this.signup} >
                          Complete Registration 
                      </button>

                      {/* <button  className="registration-btn btn btn-primary" style={{marginBottom: '20px'}} onClick={this.businessAdd}>
                                  business Add
                      </button> */}
                        
                    </div>
                    </div>
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
}
}


const mapStateToProps = state => {
  return {
    appData: state.appData,
    merchantAuth: state.merchantAuth,
    businessInfo: state.businessInfo
  }
}
const mapDispatchToProps = dispatch => {
  return {
    MERCHANT_SIGNUP: (data) => dispatch(MERCHANT_SIGNUP(data)),
    MERCHANT_BUSINESS: (data) => dispatch(MERCHANT_BUSINESS(data))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(index);
