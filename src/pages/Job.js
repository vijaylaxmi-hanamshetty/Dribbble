import React, { useState } from "react";
import { FaLocationPin } from "react-icons/fa6";
import { IoMdAdd } from "react-icons/io";
import { IoMdSearch } from "react-icons/io";
import { Formik, Form, Field } from "formik";
import Slider from "../Components/Slider";
import Navbar from "../Components/Navbar";
import { Footer } from "../Components/Footer";

const companies = [
  {
    logo: "https://via.placeholder.com/50/0000FF/FFFFFF?text=Logo1",
    name: "Company One",
    job: "Software Engineer",
    address: "1234 Example St, City, Country",
  },

  {
    logo: "https://via.placeholder.com/50/FF0000/FFFFFF?text=Logo2",
    name: "Company Two",
    job: "Data Scientist",
    address: "5678 Sample Rd, Town, Country",
  },
  {
    logo: "https://via.placeholder.com/50/00FF00/FFFFFF?text=Logo3",
    name: "Company Three",
    job: "Product Manager",
    address: "9101 Fictional Ave, Metropolis, Country",
  },

  {
    logo: "https://via.placeholder.com/50/FFFF00/000000?text=Logo4",
    name: "Company Four",
    job: "UX Designer",
    address: "2345 Imaginary Ln, Suburbia, Country",
  },
  {
    logo: "https://via.placeholder.com/50/FF00FF/FFFFFF?text=Logo5",
    name: "Company Five",
    job: "DevOps Engineer",
    address: "6789 Nowhere Blvd, Nowhere City, Country",
  },
  {
    logo: "https://via.placeholder.com/50/00FFFF/000000?text=Logo6",
    name: "Company Six",
    job: "Frontend Developer",
    address: "3456 Anyplace Dr, Anycity, Country",
  },
  {
    logo: "https://via.placeholder.com/50/0000FF/FFFFFF?text=Logo7",
    name: "Company Seven",
    job: "Backend Developer",
    address: "7890 Somewhere St, Somewhere City, Country",
  },
  {
    logo: "https://via.placeholder.com/50/FF0000/FFFFFF?text=Logo8",
    name: "Company Eight",
    job: "Mobile Developer",
    address: "1234 Example St, City, Country",
  },
  {
    logo: "https://via.placeholder.com/50/00FF00/FFFFFF?text=Logo9",
    name: "Company Nine",
    job: "QA Engineer",
    address: "5678 Sample Rd, Town, Country",
  },
  {
    logo: "https://via.placeholder.com/50/FFFF00/000000?text=Logo10",
    name: "Company Ten",
    job: "Business Analyst",
    address: "9101 Fictional Ave, Metropolis, Country",
  },
  {
    logo: "https://via.placeholder.com/50/FF00FF/FFFFFF?text=Logo11",
    name: "Company Eleven",
    job: "Scrum Master",
    address: "2345 Imaginary Ln, Suburbia, Country",
  },
  {
    logo: "https://via.placeholder.com/50/00FFFF/000000?text=Logo12",
    name: "Company Twelve",
    job: "Tech Lead",
    address: " Nowhere City, Country",
  },
  {
    logo: "https://via.placeholder.com/50/0000FF/FFFFFF?text=Logo13",
    name: "Company Thirteen",
    job: "Systems Architect",
    address: " Anycity, Country",
  },
  {
    logo: "https://via.placeholder.com/50/FF0000/FFFFFF?text=Logo14",
    name: "Company Fourteen",
    job: "Network Engineer",
    address: "7890 Somewhere St, Somewhere City, Country",
  },
  {
    logo: "https://via.placeholder.com/50/00FF00/FFFFFF?text=Logo15",
    name: "Company Fifteen",
    job: "Database Administrator",
    address: "1234 Example St, City, Country",
  },
  {
    logo: "https://via.placeholder.com/50/FFFF00/000000?text=Logo16",
    name: "Company Sixteen",
    job: "IT Support",
    address: "5678 Sample Rd, Town, Country",
  },
  {
    logo: "https://via.placeholder.com/50/FF00FF/FFFFFF?text=Logo17",
    name: "Company Seventeen",
    job: "Security Specialist",
    address: "9101 Fictional Ave, Metropolis, Country",
  },
  {
    logo: "https://via.placeholder.com/50/00FFFF/000000?text=Logo18",
    name: "Company Eighteen",
    job: "Cloud Engineer",
    address: "2345 Imaginary Ln, Suburbia, Country",
  },
  {
    logo: "https://via.placeholder.com/50/0000FF/FFFFFF?text=Logo19",
    name: "Company Nineteen",
    job: "AI Engineer",
    address: "6789 Nowhere Blvd, Nowhere City, Country",
  },
  {
    logo: "https://via.placeholder.com/50/FF0000/FFFFFF?text=Logo20",
    name: "Company Twenty",
    job: "Data Analyst",
    address: "3456 Anyplace Dr, Anycity, Country",
  },
];

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="bg-black bg-opacity-50 fixed inset-0 flex justify-center items-center z-50">
      <div className="bg-white p-5 rounded-lg w-11/12 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-2xl font-bold"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

const Job = () => {
  const [isFilterModalOpen, setFilterModalOpen] = useState(false);

  return (
    <>
      <Navbar />
      <div className="py-28">
        <div className="flex justify-center">
          <h1 className="text-3xl font-serif md:text-5xl lg:text-6xl text-center">
            The #/1 job board for
            <br />
            <span>graphic design jobs</span>
          </h1>
        </div>
        <div className="flex justify-center py-10 px-3">
          <p className="text-xl font-serif lg:text-2xl lg:w-6/12 text-center">
            Dribbble is the heart of the design community and the best resource
            to discover and connect with designers and jobs worldwide.
          </p>
        </div>
        <div className=" ">
          <p className="flex justify-center">
            <button className="rounded-full text-white bg-black px-5 py-3 flex items-center">
              <IoMdAdd className="mr-2" />
              Posted
            </button>
          </p>
        </div>
        <div className="px-5 md:px-12 lg:px-12 py-5">
          <div className="flex border-2 border-black py-2 rounded-lg items-center w-full lg:w-4/5 mx-auto relative w">
            <IoMdSearch size={28} className="ml-2 text-black" />
            <input
              type="text"
              placeholder="Search by Company skill tag"
              className="py-2 px-4 w-full"
            />
            <button
              onClick={() => setFilterModalOpen(true)}
              className="bg-black text-white px-3 py-2 rounded-full ml-5 border-2 border-black absolute right-2 lg:hidden"
            >
              <p>Filter </p>
            </button>
          </div>
        </div>

        <div className="px-3 lg:px-32">
          <div className="md:px-20">
            <p className="text-xl md:text-2xl lg:text-2xl font-serif">
              Recent posts
            </p>
            <p className=" py-2 md:text-xl text-base font-normal">
              3 new opportunities posted today!
            </p>
          </div>
          <div className="flex flex-row lg:flex-row justify-around lg:px-11 gap-3">
            <div className="w-full lg:w-3/4 mx-auto">
              {companies.map((company, index) => (
                <div
                  className="company-card flex justify-between items-center border border-gray-200 rounded-lg p-4 mb-4"
                  key={index}
                >
                  <div className="logo flex-shrink-0">
                    <img
                      src={company.logo}
                      alt={`${company.name} Logo`}
                      className="w-16 h-16"
                    />
                  </div>
                  <div className="details  flex-grow px-4">
                    <div className="company-name font-bold">{company.name}</div>
                    <div className="job-name text-gray-600">{company.job}</div>
                  </div>
                  <div className="text-right">
                    <FaLocationPin className=" " />
                    <div className="address-text text-sm">
                      {company.address}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="hidden lg:block border border-gray-500 rounded-lg p-5 max-h-full overflow-auto h-full">
              <Formik
                initialValues={{
                  checkbox1: false,
                  checkbox2: false,
                  checkbox3: false,
                  checkbox4: false,
                  input: "",
                  checkbox5: false,
                  checkbox6: false,
                  checkbox7: false,
                }}
                onSubmit={(values) => {
                  console.log(values);
                }}
              >
                {({ handleSubmit }) => (
                  <Form className="h-full">
                    <div className="mb-4">
                      <div className="mb-2">
                        <Field
                          type="checkbox"
                          id="checkbox1"
                          name="checkbox1"
                        />
                        <label htmlFor="checkbox1" className="ml-2">
                          Checkbox 1
                        </label>
                      </div>
                      <div className="mb-2">
                        <Field
                          type="checkbox"
                          id="checkbox2"
                          name="checkbox2"
                        />
                        <label htmlFor="checkbox2" className="ml-2">
                          Checkbox 2
                        </label>
                      </div>
                      <div className="mb-2">
                        <Field
                          type="checkbox"
                          id="checkbox3"
                          name="checkbox3"
                        />
                        <label htmlFor="checkbox3" className="ml-2">
                          Checkbox 3
                        </label>
                      </div>
                      <div className="mb-2">
                        <Field
                          type="checkbox"
                          id="checkbox4"
                          name="checkbox4"
                        />
                        <label htmlFor="checkbox4" className="ml-2">
                          Checkbox 4
                        </label>
                      </div>
                    </div>
                    <div className="mb-4">
                      <p className="font-serif">Enter the location</p>
                      <Field
                        type="text"
                        name="input"
                        placeholder="Enter the location"
                        className="px-4 py-2 border border-gray-300 rounded-md w-full"
                      />
                    </div>
                    <div className="mb-2">
                      <Field type="checkbox" id="checkbox5" name="checkbox5" />
                      <label htmlFor="checkbox5" className="ml-2">
                        Checkbox 5
                      </label>
                    </div>
                    <div className="mb-2">
                      <Field type="checkbox" id="checkbox6" name="checkbox6" />
                      <label htmlFor="checkbox6" className="ml-2">
                        Checkbox 6
                      </label>
                    </div>
                    <div className="mb-2">
                      <Field type="checkbox" id="checkbox7" name="checkbox7" />
                      <label htmlFor="checkbox7" className="ml-2">
                        Checkbox 7
                      </label>
                    </div>
                    <div className="pb-2">
                      <button
                        type="submit"
                        onClick={handleSubmit}
                        className="px-5 py-2 bg-black text-white rounded-full border-2 border-black"
                      >
                        Filter
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>

          <Slider />
        </div>

        <Modal
          isOpen={isFilterModalOpen}
          onClose={() => setFilterModalOpen(false)}
        >
          <Formik
            initialValues={{
              checkbox1: false,
              checkbox2: false,
              checkbox3: false,
              checkbox4: false,
              input: "",
              checkbox5: false,
              checkbox6: false,
              checkbox7: false,
            }}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {({ handleSubmit }) => (
              <Form className="h-full">
                <div className="mb-4">
                  <div className="mb-2">
                    <Field type="checkbox" id="checkbox1" name="checkbox1" />
                    <label htmlFor="checkbox1" className="ml-2">
                      Checkbox 1
                    </label>
                  </div>
                  <div className="mb-2">
                    <Field type="checkbox" id="checkbox2" name="checkbox2" />
                    <label htmlFor="checkbox2" className="ml-2">
                      Checkbox 2
                    </label>
                  </div>
                  <div className="mb-2">
                    <Field type="checkbox" id="checkbox3" name="checkbox3" />
                    <label htmlFor="checkbox3" className="ml-2">
                      Checkbox 3
                    </label>
                  </div>
                  <div className="mb-2">
                    <Field type="checkbox" id="checkbox4" name="checkbox4" />
                    <label htmlFor="checkbox4" className="ml-2">
                      Checkbox 4
                    </label>
                  </div>
                </div>
                <div className="mb-4">
                  <p className="font-serif">Enter the location</p>
                  <Field
                    type="text"
                    name="input"
                    placeholder="Enter the location"
                    className="px-4 py-2 border border-gray-300 rounded-md w-full"
                  />
                </div>
                <div className="mb-2">
                  <Field type="checkbox" id="checkbox5" name="checkbox5" />
                  <label htmlFor="checkbox5" className="ml-2">
                    Checkbox 5
                  </label>
                </div>
                <div className="mb-2">
                  <Field type="checkbox" id="checkbox6" name="checkbox6" />
                  <label htmlFor="checkbox6" className="ml-2">
                    Checkbox 6
                  </label>
                </div>
                <div className="mb-2">
                  <Field type="checkbox" id="checkbox7" name="checkbox7" />
                  <label htmlFor="checkbox7" className="ml-2">
                    Checkbox 7
                  </label>
                </div>
                <div className="pb-2">
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    className="px-5 py-2 bg-black text-white rounded-full border-2 border-black"
                  >
                    Submit
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </Modal>
      </div>
      <Footer />
    </>
  );
};

export default Job;
