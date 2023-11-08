import React from 'react';

const InputBox = ({ label, name, type, value, getValue,  placeholder, required }) => {
  return (
    <div className="row">
      <div className="col-12">
        <div className="input-box">
          <label htmlFor={name}>{label}</label>
          <input
            type={type}
            name={name}
            value={value}
            id={name}
            className="form-control"
            required={required}
            placeholder={placeholder}
            onChange={(e)=>getValue(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default InputBox;
