import React from "react";

export function Reset({ onReset }) {
  return (
    <div>
      <button onClick={onReset}>reset</button>
    </div>
  );
}
