import React, { useContext, useState } from "react";
import FormErrors from "./FormErrors";
import { GlobalContext } from "../context/GlobalState";

export const Form = () => {
  const { setAmnt } = useContext(GlobalContext);

  const [fields, setFields] = useState({
    amnt: 0,
    amortY: 5,
    amortM: 0,
    interest: 2.22,
    interestType: "fixed",
    interestTermY: 25,
    interestTermM: 25,
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
              <label className="label">Mortgage Amount ($):</label>
              <p className="control  has-icons-left">
                <input
                  className="input"
                  type="number"
                  id="amnt"
                  aria-describedby="mortgageAmount"
                  value={fields.amnt}
                  onChange={onInputChange}
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-lock"></i>
                </span>
              </p>
            </div>

            <div className="field amortization">
              <label className="label">Amortization Period:</label>
              {/* <div class="control">
                <div class="select">
                  <select>
                    <option value="0">0 Years</option>
                    <option value="1">1 Years</option>
                    <option value="2">2 Years</option>
                    <option value="3">3 Years</option>
                    <option value="4">4 Years</option>
                    <option value="5">5 Years</option>
                    <option value="6">6 Years</option>
                    <option value="7">7 Years</option>
                    <option value="8">8 Years</option>
                    <option value="9">9 Years</option>
                    <option value="10">10 Years</option>
                    <option value="11">11 Years</option>
                    <option value="12">12 Years</option>
                    <option value="13">13 Years</option>
                    <option value="14">14 Years</option>
                    <option value="14">15 Years</option>
                    <option value="14">16 Years</option>
                    <option value="14">17 Years</option>
                    <option value="14">18 Years</option>
                    <option value="14">19 Years</option>
                    <option value="14">14 Years</option>
                  </select>
                </div>
              </div> */}
              <div className="slidecontainer">
                <input
                  type="range"
                  min="0"
                  max="25"
                  value="25"
                  className="slider"
                  id="myRange"
                />
              </div>
            </div>

            <div className="field ">
              <label className="label">Payment Frequency:</label>
              <div className="control">
                <div className="select">
                  <select>
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

            <div className="field">
              <label className="label">Interest Rate (%):</label>
              <p className="control has-icons-left">
                <input
                  className="input"
                  type="number"
                  id="interest"
                  value={fields.interest}
                  onChange={onInputChange}
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-lock"></i>
                </span>
              </p>
            </div>

            <div className="field">
              <label className="label">Interest Type:</label>
              <div className="control">
                <div className="select">
                  <select>
                    <option value="fixed">Fixed</option>
                    <option value="variable">Variable</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="field">
              <label className="label">Interest Term:</label>
              <div className="control">
                <div className="select">
                  <select>
                    <option value="0">0 years</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="field">
              <p className="control">
                <button className="button is-dark">Calculate</button>
              </p>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Form;
