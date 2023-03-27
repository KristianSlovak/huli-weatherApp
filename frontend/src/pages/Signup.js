import React from "react";
import { useRef } from "react";
import { UilEyeSlash } from "@iconscout/react-unicons";
import { useState } from "react";
import AppBar from "../components/AppBar";
import { useSignup } from "../hooks/useSignup";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, error, isLoading } = useSignup();
  const textInput = useRef(null);
  const navigate = useNavigate();

  const handleHidden = () => {
    if (textInput.current.type === "password") {
      textInput.current.type = "text";
    } else if (textInput.current.type === "text")
      textInput.current.type = "password";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(email, password);

    if (error && !error) {
      setEmail("");
      setPassword("");
      navigate("/");
    }
  };

  return (
    <div>
      <AppBar />
      <div className="h-auto flex justify-center items-center">
        <div className="bg-slate-200 mx-auto mt-16 py-5 px-32 shadow-xl">
          <form
            className="grid grid-flow-row gap-16 justify-center items-center"
            onSubmit={handleSubmit}
          >
            <h1 className="py-5 tracking-widest text-3xl">Sign-up</h1>
            <div className="flex flex-row items-center justify-between w-full">
              <label className="mr-40 w-fit tracking-wider text-2xl font-light">
                Email:
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                name="Email"
                className="tracking-wide text-2xl px-1 py-3 border border-slate-500"
                placeholder="Email"
              />
            </div>
            <div className="flex flex-row items-center justify-between w-full">
              <label className="mr-44 tracking-wider text-2xl font-light">
                Password:
              </label>
              <div className="flex flex-row items-center justify-end">
                <span
                  className="absolute mr-2 hover:cursor-pointer"
                  onClick={handleHidden}
                >
                  <UilEyeSlash size={30} />
                </span>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  ref={textInput}
                  type="password"
                  name="password"
                  className="tracking-wide text-2xl px-1 py-3 border border-slate-500"
                  placeholder="Password"
                />
              </div>
            </div>
            <button
              disabled={isLoading}
              className="tracking-wider text-white text-xl bg-gradient-to-br from-cyan-700 to-blue-700 shadow-xl shadow-gray-400 px-32 py-5 my-6"
            >
              Sign Up
            </button>
            {error && (
              <div className="tracking-wider text-red-600 font-bold">
                {error}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
