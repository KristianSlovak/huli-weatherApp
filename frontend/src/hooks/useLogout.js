import { useAuthContext } from "./useAuthContext";
import { useCitiesContext } from "./useCitiesContext";

export const useLogout = () => {
  const { dispatch } = useAuthContext();
  const { dispatch: dispatchCities } = useCitiesContext();

  const logout = () => {
    localStorage.removeItem("user");

    dispatch({ type: "LOGOUT" });
    dispatchCities({ type: "SET_CITIES", payload: null });
    window.location.reload();
  };

  return { logout };
};
