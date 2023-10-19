import React from 'react';

export default function DayImput({ day, label, selected, onChange }) {
  return (
    <label className="checkbox-label">
      <span>{label}</span>
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
