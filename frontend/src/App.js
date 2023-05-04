import * as React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";
import Login from "./pages/Login";
import Main from "./pages/Main";
import Signup from "./pages/Signup";

export function App() {
  const { user } = useAuthContext();

  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="/login"
          element={!user ? <Login /> : <Navigate to="/" />}
        />
        <Route
          path="/signup"
          element={!user ? <Signup /> : <Navigate to="/" />}
        />
      </Routes>
    </div>
  );
}
