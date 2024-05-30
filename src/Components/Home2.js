import React from "react";
import Home from "./Home";
import About from "./About";
import Explore from "./Explore";
import Slider from "./Slider";
import Designer from "./Designer";

const Home2 = () => {
  return (
    <div>
      <div className=" bg-purple-100">
        <Home />
        <About />
      </div>
      <div className=" bg-white">
        <Explore />
        <Designer />
        <Slider />
      </div>
    </div>
  );
};

export default Home2;
