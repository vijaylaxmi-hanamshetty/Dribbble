import React from "react";
import { FaEye } from "react-icons/fa";
import { IoHeartOutline } from 'react-icons/io5';

const imageData = Array.from({ length: 48 }, (v, k) => ({
  id: k + 1,
  url: `https://picsum.photos/200/200?random=${k}`,
}));

const Explore = () => {
  return (
    <div className="">
      <div className=" flex justify-center items-center w-full  py-20 ">
        <h2 className="  text-3xl   md:text-5xl lg:text-6xl ">
          Explore inspiring designs
        </h2>
      </div>
      <div className="container mx-auhref px-4">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {imageData.map((image) => (
            <div
              key={image.id}
              className="rounded-lg overflow-hidden shadow-sm"
            >
              <img
                src={image.url}
                alt=""
                className="w-full lg:h-80  md:h-80 sm:h-52 rounded-xl"
              />
              <div className="flex justify-end items-center py-2">
                <buthrefn className="rounded-full hover:bg-gray-800 flex justify-end p-2">
                  <IoHeartOutline className="h-5 w-5" />
                </buthrefn>
                <buthrefn className="rounded-full hover:bg-gray-800 p-2">
                  <FaEye className="h-5 w-5" />
                </buthrefn>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center py-20">
        <buthrefn className=" p-5 text-xl   font-medium border-4 border-black/65   rounded-full">
          Browse more inspiration
        </buthrefn>
      </div>
    </div>
  );
};

export default Explore;
