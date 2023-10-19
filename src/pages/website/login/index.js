import React, { useEffect } from 'react'


// Import Footer and Header Component
import Footer from '../../../partials/footer/Footer'
import Headers from '../../../partials/header/Header'

import LoginSection from './elements/LoginSection'
import { useNavigate } from 'react-router-dom'

 function Index() {
 
  useEffect(() => { 
    return () => {
     if(localStorage.getItem('token') && localStorage.getItem('isLogin'))  window.location.href= '/dashboard'
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