import React, { useState } from 'react';

export default function Weekends() {

  //Weekend tab
  const [excludeWeekends, setExcludeWeekends] = useState(false);


  const handleSwitchChange = () => {
      
      setExcludeWeekends((prevValue) => !prevValue)

      // disable sunday and saturday input box
      if(!excludeWeekends){
          let inputBorder = document.getElementById("sunday");
          inputBorder.style.border = "1px solid red";
          document.getElementById("sunday").disabled = true;
          document.getElementById("saturday").disabled = true;
      }else{
          document.getElementById("sunday").disabled = false;
          document.getElementById("saturday").disabled = false;
      }
  }






  return (
    <div className="row">
      <div className="offday_row">
        <label htmlFor="">Exclude weekends</label>
        <label className="switch">
          <input
            type="checkbox"
            id="switchButton"
            checked={excludeWeekends}
            onChange={handleSwitchChange}
          />
          <span className="slider round"></span>
        </label>
      </div>
    </div>
  );
}
