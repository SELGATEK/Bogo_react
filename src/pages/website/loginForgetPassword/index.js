import React from 'react'


// Import Footer and Header Component
import Footer from '../../../partials/footer/Footer'
import Headers from '../../../partials/header/Header'


// Import Components
import UserImage from '../login/elements/UserImage'
import ForgetPasswordRow from './elements/ForgetPasswordRow'

export default function index() {
  return (
    <>

    {/* Header */}
    <Headers />


    <div className="user_login_box">
      <div className="container">
          <div className="row">
                <UserImage />
            <div className="col-md-6">
                <ForgetPasswordRow />
            </div>
          </div>
      </div>
    </div>


    {/* Footer */}
    <Footer />


    </>
  )
}
