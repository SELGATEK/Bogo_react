import React, { useState } from 'react';

function PasswordInput({ id, name, placeholder, required, getValue }) {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="col-12">
      <input
        type={passwordVisible ? 'text' : 'password'}
        className="form-control use_registration_password"
        id={id}
        name={name}
        placeholder={placeholder}
        required={required} onChange={e=>getValue(e.target.value)}
      />
      <i
        onClick={togglePasswordVisibility}
        className={`fa-solid ${passwordVisible ? 'fa-eye' : 'fa-eye-slash'} eyes-toggle-password`}
      ></i>
    </div>
  );
}

export default PasswordInput;
