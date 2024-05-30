import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FcGoogle } from "react-icons/fc";

const SignUp = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="grid w-full max-w-4xl grid-cols-1 lg:grid-cols-2">
        <div className="relative hidden lg:block rounded-tl-lg rounded-bl-lg overflow-hidden">
          <video
            autoPlay
            muted
            loop
            className="absolute inset-0 object-cover w-full h-full"
          >
            <source src="https://www.w3schools.com/howto/rain.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute top-0 left-0 p-4">
            <h1 className="text-4xl font-bold text-white font-cursive">Dribbble</h1>
          </div>
        </div>
        <div className="flex items-center justify-center p-8 bg-white rounded lg:p-16">
          <div className="w-full max-w-md space-y-8">
            <div className="text-center">
              <h2 className="text-2xl font-serif">Sign up to Dribbble</h2>
            </div>
            <button
              type="button"
              className="flex items-center justify-center w-full px-4 py-2 font-semibold text-black bg-white border border-gray-300 rounded-full"
            >
              <FcGoogle className="mr-2" />
              Sign up with Google
            </button>
            <div className="relative flex items-center justify-center">
              <span className="absolute px-3 bg-white">or</span>
              <div className="w-full h-px bg-gray-300"></div>
            </div>
            <Formik
              initialValues={{ email: "" }}
              validationSchema={Yup.object({
                email: Yup.string()
                  .email("Invalid email address")
                  .required("Email is required"),
              })}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  console.log("Form submitted with email:", values.email);
                  setSubmitting(false);
                }, 400);
              }}
            >
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
                <button
                  type="submit"
                  className="w-full px-4 py-2 font-serif text-white bg-black rounded-full"
                >
                  Continue with Email
                </button>
              </Form>
            </Formik>
            <p className="mt-4 text-sm text-center text-gray-600">
              By creating an account you agree with our{" "}
              <a href="#/" className="">
                Terms of Service
              </a>
              ,{" "}
              <a href="#/" className="">
                Privacy Policy
              </a>
              , and our default{" "}
              <a href="#/" className="">
                Notification Settings
              </a>
              .
            </p>
            <div className="text-center">
              <p className="text-sm text-gray-600">
                Already have an account?{" "}
                <a href="/sign-in" className="">
                  Sign In
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
