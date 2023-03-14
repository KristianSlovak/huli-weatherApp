import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { UilEyeSlash } from "@iconscout/react-unicons";

function Login() {
  const textInput = useRef(null);
  const handleHidden = () => {
    if (textInput.current.type === "password") {
      textInput.current.type = "text";
    } else if (textInput.current.type === "text")
      textInput.current.type = "password";
  };
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="bg-slate-200 mx-auto max-w-screen-md mt-4 py-5 px-32 shadow-xl">
        <form className="flex flex-col gap-y-4 justify-center items-center">
          <h1 className="tracking-widest text-3xl p-2">Login</h1>
          <label className="mr-40 w-fit tracking-wider text-2xl font-light">
            User Name:
          </label>
          <input
            type="text"
            name="userName"
            className="tracking-wide text-2xl px-1 py-3 border border-slate-500"
            placeholder="User Name"
          />
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
              ref={textInput}
              type="password"
              name="password"
              className=" tracking-wide text-2xl px-1 py-3 border border-slate-500"
              placeholder="Password"
            />
          </div>
          <Link to={"/"}>
            <button className="tracking-wider text-white text-xl bg-gradient-to-br from-cyan-700 to-blue-700 shadow-xl shadow-gray-400 px-32 py-5 my-6">
              Login
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
