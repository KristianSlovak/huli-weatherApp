import React from "react";
import { Link } from "react-router-dom";
import { UilEstate } from "@iconscout/react-unicons";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
function AppBar() {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleClick = () => {
    logout();
  };

  return (
    <div
      className="grid grid-flow-col items-center gap-6 mx-auto w-screen pl-20
    h-20 pr-20 bg-gradient-to-br from-cyan-600 to-blue-600
    text-white text-xl font-medium shadow-lg shadow-gray-400"
    >
      <div className="justify-self-start">
        <Link to="/">
          <UilEstate className="w-10 h-10 hover:text-sky-800 transition ease-out" />
        </Link>
      </div>
      {user && (
        <div className="justify-self-end">
          <span>{user.email}</span>
          <button
            className="p-4 hover:text-sky-800  transition ease-out"
            onClick={handleClick}
          >
            Log out
          </button>
        </div>
      )}
      {!user && (
        <ul className="justify-self-end">
          <Link
            className="p-4 hover:text-sky-800 hover:scale-110 transition ease-out"
            to="/login"
          >
            Log in
          </Link>
          <Link
            className="p-4 hover:text-sky-800 hover:scale-110 transition ease-out"
            to="/signup"
          >
            Sign up
          </Link>
        </ul>
      )}
    </div>
  );
}

export default AppBar;
