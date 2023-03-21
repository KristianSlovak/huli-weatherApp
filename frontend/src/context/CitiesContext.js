import { createContext, useReducer } from "react";

export const CitiesContext = createContext();

export const cityReducer = (state, action) => {
  switch (action.type) {
    case "SET_CITIES":
      return {
        cities: action.payload,
      };
    case "ADD_CITY":
      return {
        cities: [action.payload, ...state.cities],
      };
    case "DELETE_CITY":
      return {
        cities: state.cities.filter((w) => w._id !== action.payload._id),
      };
    default:
      return state;
  }
};

export const CitiesContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cityReducer, {
    cities: null,
  });

  return (
    <CitiesContext.Provider value={{ ...state, dispatch }}>
      {children}
    </CitiesContext.Provider>
  );
};
