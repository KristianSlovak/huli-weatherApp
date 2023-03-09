import React from "react";
import { Link } from "react-router-dom";
function AppBar() {
  return (
    <ul
      className="flex flex-row items-center justify-end gap-6 mx-auto w-screen 
    h-20 pr-20 bg-gradient-to-br from-cyan-600 to-blue-600
    text-white text-xl font-medium shadow-lg shadow-gray-400"
    >
      <Link
        className="p-4 hover:text-sky-800 hover:scale-110 transition ease-out"
        to="/login"
      >
        Login
      </Link>
      <Link
        className="p-4 hover:text-sky-800 hover:scale-110 transition ease-out"
        to="/signup"
      >
        Sign up
      </Link>
    </ul>
  );
}

export default AppBar;
