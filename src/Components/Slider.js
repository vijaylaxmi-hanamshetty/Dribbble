import React from "react";
import Marquee2 from "./Marquee2";

const imageItems = [
  {
    url: "https://source.unsplash.com/random/400x400?nature",
    caption: "Nature",
  },
  {
    url: "https://source.unsplash.com/random/400x400?landscape",
    caption: "Landscape",
  },
  {
    url: "https://source.unsplash.com/random/400x400?forest",
    caption: "Forest",
  },
  {
    url: "https://source.unsplash.com/random/400x400?mountain",
    caption: "Mountain",
  },
  {
    url: "https://source.unsplash.com/random/400x400?waterfall",
    caption: "Waterfall",
  },
  {
    url: "https://source.unsplash.com/random/400x400?sunset",
    caption: "Sunset",
  },
  { url: "https://source.unsplash.com/random/400x400?beach", caption: "Beach" },
  {
    url: "https://source.unsplash.com/random/400x400?flowers",
    caption: "Flowers",
  },
  {
    url: "https://source.unsplash.com/random/400x400?nature",
    caption: "Nature",
  },
  {
    url: "https://source.unsplash.com/random/400x400?landscape",
    caption: "Landscape",
  },
];

const Slider = () => {
  return (
    <div className="py-10">
      <Marquee2  className="" >
        {imageItems.map((item, index) => (
          <div key={index} className="inline-block mx-2">
            <img
              className="rounded-xl  w-64   object-cover" // Adjusted dimensions
              src={item.url}
              alt={item.caption}
            />
            <p className="text-center mt-2">{item.caption}</p>
          </div>
        ))}
      </Marquee2>
    </div>
  );
};

export default Slider;
