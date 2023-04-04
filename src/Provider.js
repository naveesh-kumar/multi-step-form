import { createContext, useReducer } from "react";
import reducer, { initialState } from "./reducer";

export const MultiStepFormCtx = createContext(initialState);

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  let value = {
    ...state,
    dispatch,
  };

  return (
    <MultiStepFormCtx.Provider value={value}>
      {children}
    </MultiStepFormCtx.Provider>
  );
};
