import React from "react";

const About = () => {
  return (
    <div className=" py-20  ">
      <div className="flex justify-center  px-3 ">
        <p className="   bg-orange-300 rounded-full text-base font-2xl  font-bold text-center px-6  py-2 ">
          {" "}
          Over 3 million ready-href work creatives!
        </p>
      </div>
      <div className="  py-10 px-5  ">
        <h1 className=" font-serif flex justify-center text-5xl  w-full lg:text6xl ">
          <p className="  ">
            The world's destinantion <br /> <span className=" flex justify-center">for designer</span>
          </p>
        </h1>
        <div className=" py-7  px-3  ">
          <p className=" font-serif flex justify-center  text-xl lg:text-2xl md:text-2xl ">
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
