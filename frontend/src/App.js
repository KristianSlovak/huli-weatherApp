import * as React from "react";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";
const Main = React.lazy(() => import("./pages/Main"));
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
