import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  amnt: 0,
  amortY: 5,
  amortM: 0,
  interest: 2.22,
  interestType: "fixed",
  interestTermY: 25,
  interestTermM: 25,
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function setAmnt(name) {
    dispatch({
      type: "SET_AMNT",
      payload: name,
    });
  }
  //func set form fields
  return (
    //add set form fields func to the value
    <GlobalContext.Provider
      value={{
        amnt: state.amnt,
        amortY: state.amortY,
        amortM: state.amortM,
        interest: state.interest,
        interestType: state.interestType,
        interestTermY: state.interestTermY,
        interestTermM: state.interestTermM,
        setAmnt,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
