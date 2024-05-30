import React from "react";
import { CiSearch } from "react-icons/ci";
const trendingSearches = [
  "Treanding search",
  "Landing  ",
  "Page",
  "iOS",
  "Food Landing Page",
  "UX Design",
  // Add more trending searches here
];
const designersData = Array.from({ length: 36 }, (_, i) => ({
  id: i + 1,
  name: `Designer ${i + 1}`,
  promo: `Promo ${i + 1}`,
  followers: Math.floor(Math.random() * 1000),
  views: Math.floor(Math.random() * 5000),
  imageUrl: `https://picsum.photos/id/${i + 10}/300/200`, // Different images
  profileImageUrl: `https://picsum.photos/id/${i + 100}/100/100`, // Different profile images
}));

const Inspiration = () => (
  <div className="px-2 py-20">
    <div className=" md:px-20 ">
      <h1 className="  text-2xl lg:text-5xl    lg:px-96 md:text-5xl   flex justify-center  font-serif ">
        Discover the World’s Top Designers & Creatives
      </h1>
      <p className="   text-xl md:text-2xl lg:text-2xl py-5  lg:px-72 font-sans flex justify-center  ">
        Dribbble is the leading destination to find & showcase creative work and
        home to the world's best design professionals.
      </p>
    </div>
    <div>
      <div className=" flex justify-center  py-10  ">
        <button className="font-medium border-4 border-black/65   rounded-full  gap-4 overflow-hidden flex  lg:pr-20  lg:py-3 pl-3  ">
          <CiSearch className=" h-7 w-7" />
          <input
            type="text"
            placeholder="Search 18 million+ shots..."
            className=" text-xl"
          />
        </button>
      </div>
    </div>
    <div className="  flex   flex-col  md:flex-row lg:flex-row  gap-5 justify-center">
      {trendingSearches.map((search, index) => (
        <div>
          <a
            key={index}
            href="#/"
            className="  inline-block bg-white text-black px-4 py-2 rounded-full border border-black"
          >
            {search}
          </a>
        </div>
      ))}
    </div>
    <div className=" py-10">
      <div className="  grid lg:grid-cols-4 md:grid-col-2 sm:grid-cols-1 ">
        {designersData.map((designer) => (
          <div key={designer.id} className="p-4">
            <div className=" rounded-lg overflow-hidden ">
              <img
                src={designer.imageUrl}
                alt={designer.name}
                className="w-full h-48 object-cover  rounded-md"
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
                  <span className="mr-2 ">❤️</span>
                  <span>{designer.followers}</span>
                </div>
                <div className="flex items-center text-black ml-4">
                  <span className="mr-2">👁️</span>
                  <span>{designer.views}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Inspiration;
