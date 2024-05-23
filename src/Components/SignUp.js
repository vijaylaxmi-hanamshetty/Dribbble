import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setError("Email is required");
    } else {
      setError("");

      console.log("Form submitted with email:", email);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded shadow-md">
        <div className="text-center">
          <h2 className="text-2xl  font-serif">Sign up to Dribble</h2>
        </div>
        <button
          type="button"
          className="flex items-center justify-center w-full px-4 py-2 font-semibold text-black  rounded-full"
        >
          <FcGoogle className="mr-2" />
          Sign up with Google
        </button>
        <div className="relative flex items-center justify-center">
          <span className="absolute px-3 bg-white">or</span>
          <div className="w-full h-px bg-gray-300"></div>
        </div>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="block w-full px-4 py-2 mt-1 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
            />
            {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 font-serifa text-white bg-black rounded-full"
          >
            Continue with Email
          </button>
        </form>
        <p className="mt-4 text-sm text-center text-gray-600">
          By creating an account you agree with our{" "}
          <a href="#/" className="text-blue-500 underline">
            Terms of Service
          </a>
          ,{" "}
          <a href="#/" className="text-blue-500 underline">
            Privacy Policy
          </a>
          , and our default{" "}
          <a href="#/" className="text-blue-500 underline">
            Notification Settings
          </a>
          .
        </p>
        <div className="text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <a href="#/" className="text-blue-500 underline">
              Sign In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
