import React from "react";
import Marquee from "./Marquee";

const imageUrls = [
  "https://source.unsplash.com/random/400x400?nature",
  "https://source.unsplash.com/random/400x400?landscape",
  "https://source.unsplash.com/random/400x400?forest",
  "https://source.unsplash.com/random/400x400?mountain",
  "https://source.unsplash.com/random/400x400?waterfall",
  "https://source.unsplash.com/random/400x400?sunset",
  "https://source.unsplash.com/random/400x400?beach",
  "https://source.unsplash.com/random/400x400?flowers",
];

const Home = () => {
  return (
    <div className="">
      <Marquee>
        {imageUrls.map((url, index) => (
          <img
            key={index}
            className="inline-block rounded-xl mx-2 h-64 w-64"
            src={url}
            alt=""
          />
        ))}
      </Marquee>
    </div>
  );
};

export default Home;
