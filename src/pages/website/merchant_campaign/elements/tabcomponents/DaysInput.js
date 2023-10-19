import React from 'react';

export default function DayImput({ day, selected, onChange }) {
  return (
    <label className="checkbox-label">
      <span>{day}</span>
      <div className="input_bg">
        <input
          type="checkbox"
          id={day}
          className="selectedId"
          checked={selected}
          onChange={() => onChange(day)}
        />
        <label htmlFor={day} />
      </div>
    </label>
  );
}
