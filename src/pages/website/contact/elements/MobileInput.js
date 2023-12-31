import React, { useState} from 'react';
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2'; // Make sure to update the path based on your project structure

// import $ from 'jquery';


const MobileInput = () => {

  const [phone, setPhone] = useState('');

  return (
    <div className="input-box">
      {/* Using the PhoneInput component */}
      <PhoneInput
        country={'ae'}
        value={phone}
        onChange={setPhone}
        inputStyle={{ width: '100%' , marginBottom: '10px'}}
        
      />
    </div>
  );
};

export default MobileInput;
