import React, { useEffect } from 'react'
import {  Route, Routes, useNavigate } from 'react-router-dom';

// import pages part
import HomePage from '../pages/website/home/index';
import PricingPage from '../pages/website/pricing/index';
// import AboutPage from '../pages/website/AboutPage';
import AboutPage from '../pages/website/about'
import ConactPage from '../pages/website/contact/index'
import AmbassadorsPage from '../pages/website/abmassadors/index';
import Bussiness from '../pages/website/business/index';
import Login from '../pages/website/login/index';
import LoginForgetPassword from '../pages/website/loginForgetPassword/index';
import MerchantRegister from '../pages/website/merchant_register/index';
import TermsConditions from '../pages/website/TermsConditions/index';
import PrivacyPolicy from '../pages/website/privacyPolicy/index';
import MerchantRegistration from '../pages/website/merchant_registration/index';
import OtpVerify from '../pages/website/otpVerify/index';
import AppUserOtpVerify from '../pages/website/appUserOtpverfiy/index';
import UserOtpVerify from '../pages/website/userOtpVerify/index';
import MerchantSubscription from '../pages/website/merchant_subscription/index';
import Dashboard from '../pages/website/dashboard/index';
import MerchantCampaign from '../pages/website/merchant_campaign/index';
import ReviewCampaign from '../pages/website/review_campaign';
import InviteInfluencer from '../pages/website/invite_influencer/index'
import AbmassdorsCampaign from '../pages/website/abmassadors_campaign/index'
import CampaignDashboard from '../pages/website/campaignDashboard/index'
import BogoDirectory from '../pages/website/bogo_directory/index'
import VoucherDetails from '../pages/website/voucherDetails/index'
import RedemtionHisory from '../pages/website/redemptionHistory/index'
import UserRegistration from '../pages/website/userRegistration/index'
import UserRegComplete from '../pages/website/userRegComplete/index'
import OtpForgetPassword from '../pages/website/otpForgetPassword/index'
import ResetPassword from '../pages/website/newPassword/index'

import Account from '../pages/website/account/index';
import { useDispatch, useSelector } from 'react-redux';
import { GET_ALL_BUSINESS_DETAILS, GET_BUSINESS_CAMPAIGN, GET_BUSINESS_VOUCHER, SELECTED_BUSINESS_DATA } from '../redux/slices/merchantAuthSlice';



export default function Navigation() {
const history = useNavigate()
const dispatch = useDispatch(); 
const allBusinessData = useSelector((state) => state.merchantAuth.allBusinessData);  

 
  useEffect(() => { 
    return () => {
     if(localStorage.getItem('token') && localStorage.getItem('isLogin')){
      dispatch(GET_ALL_BUSINESS_DETAILS()); 
      if(!localStorage.getItem('activeBusiness') && allBusinessData && allBusinessData.length){ 
          localStorage.setItem('activeBusiness',allBusinessData[0].id) 
          dispatch(SELECTED_BUSINESS_DATA(allBusinessData[0]))
          dispatch(GET_BUSINESS_VOUCHER(allBusinessData[0].id))
          dispatch(GET_BUSINESS_CAMPAIGN(allBusinessData[0].id))
          
      }else{
        dispatch(GET_BUSINESS_VOUCHER(localStorage.getItem('activeBusiness')))
        dispatch(GET_BUSINESS_CAMPAIGN(localStorage.getItem('activeBusiness')))
      } 
      if(window.location.pathname.includes('merchant_register') || window.location.pathname.includes('login') ){
        console.log("heloooo")
         if(localStorage.getItem('token') && localStorage.getItem('businessId')) { history('/dashboard') }
        }
 
      
     } 
    };
  }, [dispatch]); 

  const navigate = useNavigate()
  return (
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/AboutUs" element={<AboutPage />} />
          <Route path="/brand_ambassadors" element={<AmbassadorsPage />} />
          <Route path='/business' element={<Bussiness/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/contact' element={<ConactPage/>} />
          <Route path='/loginForgetPassword' element={<LoginForgetPassword/>} />
          <Route path='/merchant_register' element={<MerchantRegister/>} />
          <Route path='/add_branch' element={<MerchantRegister/>} />
          <Route path='/edit_branch/:branchId' element={<MerchantRegister/>} />
          <Route path='/TermsConditions' element={<TermsConditions/>} />
          <Route path='/privacyPolicy' element={<PrivacyPolicy/>} />
          <Route path='/merchant_registration' element={<MerchantRegistration navigate={navigate} dispatch={dispatch}/>} />
          <Route path='/otpVerify' element={<OtpVerify/>} />
          <Route path='/appUserOtpVerify' element={<AppUserOtpVerify/>} />
          <Route path='/userOtpVerify' element={<UserOtpVerify/>} />
          <Route path='/merchant_subscription' element={<MerchantSubscription/>} />
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='/merchant_campaign' element={<MerchantCampaign/>} />
          <Route path='/merchant_campaign/:voucherId' element={<MerchantCampaign/>} />
          <Route path='/review_campaign/:voucherId' element={<ReviewCampaign/>} />
          <Route path='/review_campaign' element={<ReviewCampaign/>} />
          <Route path='/invite_influencer' element={<InviteInfluencer/>} />
          <Route path='/ambassdors_compaign' element={<AbmassdorsCampaign/>} />
          <Route path='/ambassdors_compaign/:campainId' element={<AbmassdorsCampaign/>} />
          <Route path='/campaignDashboard' element={<CampaignDashboard/>} />
          <Route path='/bogo_directory' element={<BogoDirectory/>} />
          <Route path='/business_profile' element={<VoucherDetails/>} />
          <Route path='/redemtionHisory' element={<RedemtionHisory/>} />
          <Route path='/userRegistration' element={<UserRegistration/>} />
          <Route path='/userRegComplete' element={<UserRegComplete/>} />
          <Route path='/otpForgetPassword' element={<OtpForgetPassword/>} />
          <Route path='/newPassword/:token' element={<ResetPassword/>} />
          <Route path='/account' element={<Account/>} />
        </Routes>
  )
}
