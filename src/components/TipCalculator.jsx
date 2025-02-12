import React, { useState } from "react";
import TipButton from "./TipButton";
import dollaricon from "../assets/images/icon-dollar.svg";
import personicon from "../assets/images/icon-person.svg";
import { ToastContainer } from "react-bootstrap";

const TipCalculator = () => {
  const [bill, setBill] = useState(142.55);
  const [tipPercentage, setTipPercentage] = useState(15);
  const [people, setPeople] = useState(5);

  const tipAmount =
    people !== "0" ? (bill * (tipPercentage / 100)) / people : 0;
  const totalPerPerson = people !== "0" ? bill / people + tipAmount : 0;

  const handleReset = () => {
    setBill(0);
    setTipPercentage("");
    setPeople(1);
  };
  return (
    <div className="home">
      <div className="title my-4">
        <h1>S P L I </h1>
        <h1>T T E R</h1>
      </div>

      <div className="card d-flex flex-col flex-lg-row mx-auto p-4 calculator gap-4 ">
        <div className="w-lg-50">
          <div className="mb-3">
            <label className="mb-2">Bill</label>
            <div className="dollscontainer ">
              <img className="dolls" src={dollaricon} alt="" />
              <input
                type="number"
                className="text-end rounded-2 fs-2 w-100"
                value={bill}
                onChange={(e) => setBill(e.target.value) || 0}
              />
            </div>
          </div>

          <div className="">
            <label className="form-label">Select Tip %</label>
            <div className="selecttip">
              {[5, 10, 15, 25, 50].map((tip) => (
                <TipButton
                  key={tip}
                  percentage={tip}
                  isSelected={tip === tipPercentage}
                  onClick={() => setTipPercentage(tip)}
                />
              ))}
              <input
                type="number"
                placeholder="Custom"
                className="mt-2 p-3 custom rounded-2 text-end fs-4"
                value={tipPercentage}
                onChange={(e) => setTipPercentage(e.target.value)}
              />
            </div>
          </div>

          <div>
            <div className="d-flex align-items-center justify-content-between mt-3">
              <label className="numofpeople">Number of People</label>
              {people === "0" && (
                <p className="errormsg text-end mt-3">Can't be zero</p>
              )}
            </div>
            <div className="personcontainer">
              <img className="person" src={personicon} alt="" />
              <input
                type="number"
                className={`w-100 text-end rounded-2 fs-2 ${
                  people === "0" ? "border-2" : "border-0"
                }`}
                value={people}
                onChange={(e) => setPeople(e.target.value) || 1}
              />
            </div>
          </div>
        </div>

        <div className="perpersoncard rounded-3 py-4 px-3 w-lg-50 mt-3">
          <div className="">
            <div className="d-flex justify-content-between gap-5">
              <div className="d-flex flex-column">
                <span className="text text-white">Tip Amount</span>
                <span className="subtext">/ person</span>
              </div>
              <div className="amount">{tipAmount.toFixed(2)}</div>
            </div>
            <div className="d-flex justify-content-between mt-3 mb-5">
              <div className="d-flex flex-column">
                <span className="text text-white">Total</span>
                <span className="subtext">/ person</span>
              </div>
              <div className="amount">{totalPerPerson.toFixed(2)}</div>
            </div>
          </div>
          <div>
            <button onClick={handleReset} className="resetbtn border-0 w-100 mt-5">
              RESET
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TipCalculator;

{
  /* <div>
  <div>
    <div className="container">
      <div className="">
        <div className="label">
          <span>Tip Amount</span>
          <span className="subtext"> / person</span>
        </div>
        <div>{tipAmount.toFixed(2)}</div>
      </div>
      <div className="label">
        <span>Total</span>
        <span className="subtext"> / person</span>
        <p className="amount"> $32.79 </p>
      </div>
    </div>
  </div>
</div>; */
}
