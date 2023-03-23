import { CitiesContext } from "../context/CitiesContext";
import { useContext } from "react";

export const useCitiesContext = () => {
  const context = useContext(CitiesContext);

  if (!context) {
    throw Error(
      "useCitiesContext must be used inside an CitiesContextProvider."
    );
  }
  return context;
};
