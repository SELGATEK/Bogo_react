import React from 'react'


// Import Conponents Header and Footer
import Footer from '../../../partials/footer/Footer.js'
import Header from '../../../partials/header/Header1.js'
import './account.css'


// Import Components
import AccountHeader from './elements/AccountHeader.js'
import Account from './elements/Account.js'

export default function index() {
  return (
    <>
      {/* Header */}
      <Header/>

        <AccountHeader/>
        <Account/>    

      {/* Footer */}
      <Footer/>
    </>
  )
}
