import React from "react";
const designersData = Array.from({ length: 48 }, (_, i) => ({
  id: i + 1,
  name: `Designer ${i + 1}`,
  promo: `Promo ${i + 1}`,
  followers: Math.floor(Math.random() * 1000),
  views: Math.floor(Math.random() * 5000),
  imageUrl: `https://picsum.photos/id/${i + 10}/300/200`,
  profileImageUrl: `https://picsum.photos/id/${i + 100}/100/100`,
}));
const Explore = () => {
  return (
    <div className="">
      <div className=" flex justify-center items-center w-full  py-20 ">
        <h2 className="  text-3xl   md:text-5xl lg:text-6xl ">
          Explore inspiring designs
        </h2>
      </div>
      <div>
        <div className=" py-10">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4  px-5 lg:px-14 ">
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
      <div className="flex justify-center py-20">
        <button className=" p-5 text-xl   font-medium border-4 border-black/65   rounded-full">
          Browse more inspiration
        </button>
      </div>
    </div>
  );
};

export default Explore;
