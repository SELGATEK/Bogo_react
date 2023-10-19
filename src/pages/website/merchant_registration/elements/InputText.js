import React from 'react';

const InputText = ({ type, id, name, value, required, placeholder, getValue }) => {
  return (

    <div className="input-box">
        <input type={type} name={name} id={id} value={value} placeholder={placeholder} className="form-control"
                required={required} onChange={e => getValue(e.target.value) }
            />
    </div>
  );
};

export default InputText;



