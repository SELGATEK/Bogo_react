import React, { useState } from 'react';



// Import Components
import DaysInput from './DaysInput.js';

export default function DaysOfWeekSelector() {
  const [daysSelection, setDaysSelection] = useState({
    all: false,
    sunday: false,
    monday: false,
    tuesday: false,
    wednesday: false,
    Thursday: false,
    friday: false,
    saturday: false,
  });

  const handleDayChange = (day) => {
    if (day === 'all') {
      setDaysSelection((prevSelection) => ({
        all: !prevSelection.all,
        sunday: !prevSelection.all,
        monday: !prevSelection.all,
        tuesday: !prevSelection.all,
        wednesday: !prevSelection.all,
        Thursday: !prevSelection.all,
        friday: !prevSelection.all,
        saturday: !prevSelection.all,
      }));
    } else {
      setDaysSelection((prevSelection) => ({
        ...prevSelection,
        [day]: !prevSelection[day],
      }));
    }
  };

  const days = [
    { day: 'all', label: 'All' },
    { day: 'sunday', label: 'Sun' },
    { day: 'monday', label: 'Mon' },
    { day: 'tuesday', label: 'Tue' },
    { day: 'wednesday', label: 'Wed' },
    { day: 'Thursday', label: 'Thu' },
    { day: 'friday', label: 'Fri' },
    { day: 'saturday', label: 'Sat' },
  ];

  return (
    <div className="row mt-3">
      <div className="days-input-row">
        <label>Day of the week</label>
        <div className="checkbox-container">
          {days.map(({ day, label }) => (
            <DaysInput
              key={day}
              day={day}
              label={label}
              selected={daysSelection[day]}
              onChange={handleDayChange}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
