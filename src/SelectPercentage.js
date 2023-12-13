import React from "react";

export function SelectPercentage({ percentage, onSelect, children }) {
  return (
    <div>
      <label>{children}</label>
      <select
        value={percentage}
        onChange={(e) => onSelect(Number(e.target.value))}
      >
        <option value="0">Dissatisfied (0%)</option>
        <option value="10">It was ok (10%)</option>
        <option value="15">Good! (15%)</option>
        <option value="20">Great! (20%)</option>
      </select>
    </div>
  );
}
