import React from "react";
import { FaHeart } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import designersData from "./Imagedata";
const Explore = () => {
  return (
    <div className="py-20">
      <div className="  flex justify-center items-center px-6">
        <h2 className="  text-4xl    ">
          Explore inspiring designs
        </h2>
      </div>
      <div>
        <div className=" py-10">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4  px-2 lg:px-14 ">
            {designersData.map((designer) => (
              <div key={designer.id} className="p-4">
                <div className=" rounded-lg overflow-hidden ">
                  <img
                    src={designer.imageUrl}
                    alt={designer.name}
                    className="w-full h-full   object-cover rounded-md"
                  />
                  <div className="p-4 flex items-center justify-between">
                    <img
                      src={designer.profileImageUrl}
                      alt={`Profile of ${designer.name}`}
                      className="  h-10 w-10 rounded-full"
                    />
                    <div className=" ml-4">
                      <h3 className=" font-semibold  text-base ">
                        {designer.name}
                      </h3>
                    </div>
                    <div className="flex items-center text-black ml-4">
                      <span className="mr-2 ">
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
      <div className="flex justify-center  py-10">
        <button className=" p-5 text-base   font-medium border-2 border-black   rounded-full">
          Browse more inspiration
        </button>
      </div>
    </div>
  );
};

export default Explore;
