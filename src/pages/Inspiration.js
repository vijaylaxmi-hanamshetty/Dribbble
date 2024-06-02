import React from "react";
import { CiSearch } from "react-icons/ci";
import designersData from "../Components/Imagedata";
import { FaHeart } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import Navbar from "../Components/Navbar";
import Slider from "../Components/Slider";
import { Footer } from "../Components/Footer";


const trendingSearches = [
  "Treanding search",
  "Landing",
  "Page",
  "iOS",
  "Food Landing Page",
  "UX Design",
];

const Inspiration = () => (
  <>
    <Navbar />
    <div className="py-20">
      <div className="md:px-20 px-5">
        <h1 className="text-2xl lg:text-5xl lg:px-96 md:text-5xl flex justify-center font-serif">
          Discover the World’s Top Designers & Creatives
        </h1>
        <p className="text-xl md:text-2xl lg:text-2xl py-5 lg:px-72 font-sans flex justify-center">
          Dribbble is the leading destination to find & showcase creative work
          and home to the world's best design professionals.
        </p>
      </div>
      <div className="px-5">
        <div className="flex justify-center py-10">
          <button className="font-medium border-4 border-black/65 rounded-full gap-4 overflow-hidden flex lg:pr-20 lg:py-3 pl-3 w-full max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl">
            <CiSearch className="h-7 w-7" />
            <input
              type="text"
              placeholder="Search 18 million+ shots..."
              className="text-xl w-full"
            />
          </button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row lg:flex-row gap-5 justify-center px-5">
        {trendingSearches.map((search, index) => (
          <div key={index}>
            <a
              href="#//"
              className="inline-block bg-white text-black px-4 py-2 rounded-full border border-black"
            >
              {search}
            </a>
          </div>
        ))}
      </div>
      <div className="py-10">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-5">
          {designersData.map((designer) => (
            <div key={designer.id} className="p-4 w-full max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl">
              <div className="rounded-lg overflow-hidden border border-gray-300">
                <img
                  src={designer.imageUrl}
                  alt={designer.name}
                  className="w-full h-48 object-cover rounded-md"
                />
                <div className="p-4 flex items-center justify-between">
                  <img
                    src={designer.profileImageUrl}
                    alt={`Profile of ${designer.name}`}
                    className="h-10 w-10 rounded-full"
                  />
                  <div className="ml-4">
                    <h3 className="font-semibold text-base">
                      {designer.name}
                    </h3>
                  </div>
                  <div className="flex items-center text-black ml-4">
                    <span className="mr-2">
                      <FaHeart />
                    </span>
                    <span>{designer.followers}</span>
                  </div>
                  <div className="flex items-center text-black ml-4">
                    <span className="mr-2">
                      <FaEye />
                    </span>
                    <span>{designer.views}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className="flex justify-center pb-5">
      <button className="bg-black text-white px-12 py-3 rounded-full border-2 border-black">
        Sign Up
      </button>
    </div>
    <Slider />
    <Footer />
  </>
);

export default Inspiration;
