import React from 'react'

// Import components
import UserImage from './UserImage'
import LoginForm from './LoginForm'

export default function LoginSection() {

  return (
    <>
      <div className="login_section">
      <div className="container">
        <div className="user_login_box">
          <div className="row">
            <UserImage />
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
