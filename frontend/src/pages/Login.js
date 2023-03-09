import React from "react";
import { Link } from "react-router-dom";

function Login() {
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
          <input
            type="text"
            name="password"
            className=" tracking-wide text-2xl px-1 py-3 border border-slate-500"
            placeholder="Password"
          />
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
