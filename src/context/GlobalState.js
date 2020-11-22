import React, { createContext, useReducer } from "react";

const initialState = {
  amnt: 0,
  amortization: 150,
  interestRate: 2.22,
  frequency: "monthly",
  interestType: "fixed",
  interestTerm: 0,
};

export const GlobalContext = createContext(initialState);
export const DispatchStateContext = createContext(undefined);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    (state, newValue) => ({ ...state, ...newValue }),
    initialState
  );

  return (
    <GlobalContext.Provider value={state}>
      <DispatchStateContext.Provider value={dispatch}>
        {children}
      </DispatchStateContext.Provider>
    </GlobalContext.Provider>
  );
};
