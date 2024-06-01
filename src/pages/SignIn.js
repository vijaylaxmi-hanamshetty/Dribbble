import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FcGoogle } from "react-icons/fc";

const SignIn = () => {
  const links = [
    { url: "#/", text: "Terms of Service" },
    { url: "#/", text: "Privacy Policy" },
    { url: "#/", text: "Notification Settings" },
  ];

  return (
    <div className="flex h-screen bg-white">
      <div className="hidden lg:block relative w-96 rounded-full">
        <video
          autoPlay
          muted
          loop
          className="absolute inset-0 object-cover w-full h-full"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-hacker-typing-code-on-a-laptop-2728-large.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="absolute top-0 left-0 p-4">
          <h1 className="text-4xl font-bold text-white font-cursive">
            Dribbble
          </h1>
        </div>
      </div>
      <div className="flex items-center justify-center  w-full p-8  lg:w-3/5">
        <div className="w-full  p-8 bg-white rounded-lg lg:max-w-lg lg:p-16 lg:rounded-tl-none lg:rounded-bl-none">
          <div className="text-center">
            <h2 className="mb-8 text-xl  md:text-2xl lg:text-2xl font-serif">Sign in to Dribbble</h2>
          </div>
          <button
            type="button"
            className="flex items-center justify-center lg:Px-5 md:px-5  w-full  py-3 mb-4 text-white bg-black border border-gray-300 rounded-full"
          >
            <FcGoogle className="mr-2" />
            Sign in with Google
          </button>
          <div className="relative flex items-center justify-center mb-8">
            <span className="absolute px-3 bg-white">or</span>
            <div className="w-full h-px bg-gray-300"></div>
          </div>
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={Yup.object({
              email: Yup.string()
                .email("Invalid email address")
                .required("Email is required"),
              password: Yup.string().required("Password is required"),
            })}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                console.log("Form submitted with email:", values.email);
                setSubmitting(false);
              }, 400);
            }}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    className="block w-full px-4 py-2 mt-1 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                  />
                  <ErrorMessage
                    name="email"
                    component="p"
                    className="mt-2 text-sm text-red-600"
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <Field
                    type="password"
                    id="password"
                    name="password"
                    className="block w-full px-4 py-2 mt-1 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                  />
                  <ErrorMessage
                    name="password"
                    component="p"
                    className="mt-2 text-sm text-red-600"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 font-semibold text-white bg-black border border-gray-300 rounded-full"
                >
                  {isSubmitting ? "Signing in..." : "Sign In"}
                </button>
              </Form>
            )}
          </Formik>
          <p className="mt-4 text-sm text-center text-gray-600">
            By signing in, you agree to our{" "}
            {links.map((link, index) => (
              <a key={index} href={link.url} className="text-blue-600">
                {link.text}
                {index !== links.length - 1 && ", "}
              </a>
            ))}
            .
          </p>
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{" "}
              <a href="/sign-up" className="underline text-blue-600">
                Sign Up
              </a>
            </p>
          </div>
          </div>
          </div>
          </div>
  )}
  export default SignIn 
