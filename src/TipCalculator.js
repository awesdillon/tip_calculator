import React, { useState } from "react";
import { Reset } from "./Reset";
import { Output } from "./Output";
import { SelectPercentage } from "./SelectPercentage";
import { BillInput } from "./BillInput";

export function TipCalculator() {
  const [bill, setBill] = useState("");
  let [tipPercentage1, setTipPercentage1] = useState(0);
  let [tipPercentage2, setTipPercentage2] = useState(0);
  const tip = (bill * (tipPercentage1 + tipPercentage2)) / 2 / 100;

  function handleReset() {
    setBill("");
    tipPercentage1 = 0;
    tipPercentage2 = 0;
  }
  return (
    <div>
      <BillInput bill={bill} onSetBill={setBill} />
      <SelectPercentage
        percentage={tipPercentage1}
        onSelect={setTipPercentage1}
      >
        How did you like the service?
      </SelectPercentage>
      <SelectPercentage
        percentage={tipPercentage2}
        onSelect={setTipPercentage2}
      >
        How did your friend like the service?
      </SelectPercentage>
      {bill > 0 && (
        <>
          <Output bill={bill} tip={tip} />
          <Reset onReset={handleReset} />{" "}
        </>
      )}
    </div>
  );
}
