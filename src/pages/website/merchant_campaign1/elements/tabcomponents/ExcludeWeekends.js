import React, { useState } from 'react';
import HoursSection from '../../elements/tabcomponents/HoursSection.js';

export default function ExcludeWeekends() {
  const [excludeWeekends, setExcludeWeekends] = useState(false);

  const handleSwitchChange = () => {
    setExcludeWeekends((prevValue) => !prevValue);
  };

  return (
    <div className="row">
      <div className="offday_row">
        <label htmlFor="">Customize Timing</label>
        <div className='switchBox'>
          <span> <i className="fa-regular fa-gem" style={{position:'inherit', color:'#F1C62E'}}></i> Gold Feature</span>
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
      {excludeWeekends && (
        <div className="exclude_weekends_row" >
          {/* Content to be displayed when exclude weekends is enabled */}
          
          <HoursSection />
        </div>
      )}
    </div>
  );
}
