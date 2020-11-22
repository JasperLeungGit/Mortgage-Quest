import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { DispatchStateContext } from "../context/GlobalState";

const useGlobalState = () => [
  useContext(GlobalContext),
  useContext(DispatchStateContext),
];

export const Form = () => {
  const [state, dispatch] = useGlobalState();
  //   const [fields, setFields] = useState({
  //     amnt: 0,
  //     amortization: 150,
  //     interestRate: 2.22,
  //     frequency: "Monthly",
  //     interestType: "fixed",
  //     interestTerm: 0,
  //   });

  const handleSubmit = () => {};

  //   const clearErrorState = () => {
  //     setFields({
  //       ...fields,
  //       errors: {
  //         blankfield: false,
  //       },
  //     });
  //   };

  const onInputChange = (event) => {
    dispatch({
      ...state,
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
                  value={state.amnt}
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
                  min="1"
                  max="300"
                  value={state.amortization}
                  onChange={onInputChange}
                />
                <p className="slider-title">
                  {Math.floor(state.amortization / 12)} Years{" "}
                  {state.amortization % 12} Months{" "}
                </p>
              </div>
            </div>

            <div className="field frequency">
              <label className="label">Payment Frequency:</label>
              <div className="control">
                <div className="select">
                  <select id="frequency" onChange={onInputChange}>
                    <option value="monthly">Monthly</option>
                    <option value="semimonthly">Semi-Monthly</option>
                    <option value="bimonthly">Bi-Monthly</option>
                    <option value="weekly">Weekly</option>
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
                  value={state.interest}
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
                  min="1"
                  max="300"
                  value={state.interestTerm}
                  onChange={onInputChange}
                />
                <p className="slider-title">
                  {Math.floor(state.interestTerm / 12)} Years{" "}
                  {state.interestTerm % 12} Months{" "}
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
