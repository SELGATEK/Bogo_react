import React, { useEffect } from 'react'


// Import Footer and Header Component
import Footer from '../../../partials/footer/Footer'
import Headers from '../../../partials/header/Header'

import LoginSection from './elements/LoginSection'
import { useNavigate } from 'react-router-dom'

 function Index() {
 
  useEffect(() => { 
    return () => {
      if(window.location.pathname.includes('merchant_register') || window.location.pathname.includes('login') ){
        console.log("heloooo")
         if(localStorage.getItem('token') && localStorage.getItem('isLogin')) { this.props.navigate('/dashboard') }
        }
    };
  }, []); 

  return (
    <div>
        <Headers />
       <LoginSection />
       <Footer/>
    </div>
  )
}


export default Index;