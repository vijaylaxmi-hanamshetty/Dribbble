import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FcGoogle } from "react-icons/fc";

const SignUp = () => {
  return (
    <div className="flex h-screen bg-white">
      <div className="hidden lg:block relative w-96">
        <video
          autoPlay
          muted
          loop
          className="absolute inset-0 object-cover w-full h-full "
        >
          <source src="https://www.w3schools.com/howto/rain.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute top-0 left-0 p-4">
          <h1 className="text-4xl font-bold text-white font-cursive">Dribbble</h1>
        </div>
      </div>
      <div className="flex items-center justify-center w-full p-8 lg:w-3/5">
        <div className="w-full max-w-md p-8 bg-white rounded-lg lg:max-w-lg lg:p-16 lg:rounded-tl-none lg:rounded-bl-none lg:rounded-r-2xl">
          <div className="text-center">
            <h2 className="mb-8 text-xl md:text-2xl lg:text-2xl  font-medium font-serif  text-black">Sign up to Dribbble</h2>
          </div>
          <button
            type="button"
            className="flex items-center justify-center lg:px-5 md:px-5 w-full py-3 mb-4 text-white bg-black border border-gray-300 rounded-full"
          >
            <FcGoogle className="mr-2" />
            <span className="font-serif">Sign up with Google</span>
          </button>
          <div className="relative flex items-center justify-center mb-8">
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
                className="w-full px-4 py-3 font-semibold border-gray-300 bg-black text-white rounded-full"
              >
                Continue with Email
              </button>
            </Form>
          </Formik>
          <p className="mt-4 text-sm text-center text-gray-600">
            By creating an account you agree with our{" "}
            <a href="#//" className="text-blue-600">
              Terms of Service
            </a>
            ,{" "}
            <a href="#//" className="text-blue-600">
              Privacy Policy
            </a>
            , and our default{" "}
            <a href="#//" className="text-blue-600">
              Notification Settings
            </a>
            .
          </p>
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <a href="/sign-in" className="text-blue-600">
                Sign In
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
