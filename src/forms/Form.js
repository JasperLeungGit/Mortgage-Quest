import React, { useContext, useState } from "react";
import FormErrors from "./FormErrors";
import { GlobalContext } from "../context/GlobalState";

export const Form = () => {
  const { setAmnt } = useContext(GlobalContext);

  const [fields, setFields] = useState({
    amnt: 0,
    amortization: 150,
    interestRate: 2.22,
    frequency: "Monthly",
    interestType: "fixed",
    interestTerm: 0,
  });
  const handleSubmit = () => {};

  const clearErrorState = () => {
    setFields({
      ...fields,
      errors: {
        blankfield: false,
      },
    });
  };

  const onInputChange = (event) => {
    setFields({
      ...fields,
      [event.target.id]: event.target.value,
    });
    document.getElementById(event.target.id).classList.remove("is-danger");
  };
  return (
    <div className="flex-wrapper">
      <section>
        <div className="container">
          {/* <FormErrors formerrors={fields.errors}> */}
          <form onSubmit={handleSubmit}>
            <div className="field">
              <label className="label">Mortgage Amount:</label>
              <p className="control has-icons-left">
                <input
                  className="input"
                  type="number"
                  id="amnt"
                  aria-describedby="mortgageAmount"
                  value={fields.amnt}
                  onChange={onInputChange}
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-dollar-sign"></i>
                </span>
              </p>
            </div>

            <div className="field">
              <label className="label">Amortization Period:</label>
              <div className="slider">
                <input
                  id="amortization"
                  type="range"
                  min="0"
                  max="300"
                  value={fields.amortization}
                  onChange={onInputChange}
                />
                <p className="slider-title">
                  {Math.floor(fields.amortization / 12)} Years{" "}
                  {fields.amortization % 12} Months{" "}
                </p>
              </div>
            </div>

            <div className="field frequency">
              <label className="label">Payment Frequency:</label>
              <div className="control">
                <div className="select">
                  <select id="frequency" onChange={onInputChange}>
                    <option value="12">Monthly</option>
                    <option value="24">Semi-Monthly</option>
                    <option value="6">Bi-Monthly</option>
                    <option value="52">Weekly</option>
                    <option value="accelerated biweekly">
                      Accelerated Bi-Weekly
                    </option>
                    <option value="accelerated weekly">
                      Accelerated Weekly
                    </option>
                  </select>
                </div>
              </div>
            </div>

            <div className="field interest">
              <label className="label">Interest Type:</label>
              <div className="control  has-text-centered">
                <div className="select">
                  <select id="interestType" onChange={onInputChange}>
                    <option value="fixed">Fixed</option>
                    <option value="variable">Variable</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="field interest">
              <label className="label">Interest Rate:</label>
              <p className="control has-icons-right">
                <input
                  className="input"
                  type="number"
                  id="interestRate"
                  value={fields.interest}
                  onChange={onInputChange}
                />
                <span className="icon is-small is-right">
                  <i className="fas fa-percent"></i>
                </span>
              </p>
            </div>

            <div className="field">
              <label className="label">Interest Term:</label>
              <div className="slider">
                <input
                  id="interestTerm"
                  type="range"
                  min="0"
                  max="300"
                  value={fields.interestTerm}
                  onChange={onInputChange}
                />
                <p className="slider-title">
                  {Math.floor(fields.interestTerm / 12)} Years{" "}
                  {fields.interestTerm % 12} Months{" "}
                </p>
              </div>
            </div>

            <div className="field">
              <div className="control has-text-centered">
                <button className="button is-dark">Calculate</button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Form;
