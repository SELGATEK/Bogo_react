import React from 'react';

const SingleSelector = ({ label,  id,  }) => {
  return (
    <>
        <div className="input-box">
        <label htmlFor={id}>{label}</label>
            <select  className="form-select" id="{id}" name="sellist2" style={{backgrondColor:'#f7f7f7'}}>
                <option>Nothing selected</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>
        </div>
    </>
    
  );
};

export default SingleSelector;
