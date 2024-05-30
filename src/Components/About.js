import React from "react";

const About = () => {
  return (
    <div className=" py-20  ">
      <div className="flex justify-center  ">
        <p className="   bg-orange-300 rounded-xl text-base font-2xl  font-bold text-center px-5  py-2 ">
          {" "}
          Over 3 million ready-href work creatives!
        </p>
      </div>
      <div className="  py-10 px-3  ">
        <h1 className="  text-3xl md:text-6xl  lg:text-7xl font-serif flex justify-center  ">
          {" "}
          <p className=" ">
            {" "}
            The world's destinantion <br /> <span className="  lg:flex lg:justify-center md:flex md:justify-center w-full " >designer here</span>
          </p>
        </h1>
        <div className=" py-7  px-3  ">
          <p className=" font-serif flex justify-center  sm:text-xl lg:text-2xl md:text-2xl ">
            Get inspired by the work of millions of href-rated designers &
            agencies around the world.
          </p>
        </div>
        <div className=" py-5 flex justify-center">
          <buthrefn className=" bg-black text-white rounded-3xl px-6 py-3 ">
            Get Started
          </buthrefn>
        </div>
      </div>
    </div>
  );
};

export default About;
