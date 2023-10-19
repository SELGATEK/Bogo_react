import React, { useState} from 'react';
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2'; // Make sure to update the path based on your project structure

// import $ from 'jquery';


const WhatappInputbox = () => {

  const [phone, setPhone] = useState('');

  return (
    <div className="input-box">
      {/* Using the PhoneInput component */}
      <label className='mt-2'>WhatsApp Number</label>
      <PhoneInput
        country={'ae'}
        value={phone}
    //    onChange={(e)=> {setPhone(e.target.value); setWhatsappNo(e.target.value)}}
        onChange={setPhone}
        inputStyle={{ width: '100%' , marginBottom: '10px'}}
        
      />
    </div>
  );
};

export default WhatappInputbox;
