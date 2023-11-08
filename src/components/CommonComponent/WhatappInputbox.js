import React, { useState} from 'react';
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2'; 


const WhatappInputbox = ({setWhatsappNo, whatsappNo}) => {

  const [phone, setPhone] = useState('');

  const handlePhoneChange = (value, data, event, formattedValue) => {
    setPhone(value);
    setWhatsappNo(value);
  };

 

  return (
    <div className="input-box">
     
      <label className='mt-2'>WhatsApp Number</label>
      <PhoneInput
        country={'ae'}
        // value={phone}
        value={whatsappNo}
        // onChange={(e)=> setWhatsappNo(e.target.value)}
        onChange={handlePhoneChange}
        // onChange={setPhone}
        inputStyle={{ width: '100%' , marginBottom: '10px'}}
        
      />
    </div>
  );
};

export default WhatappInputbox;
