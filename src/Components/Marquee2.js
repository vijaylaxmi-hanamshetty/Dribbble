import React from "react";

const Marquee = ({ children, height }) => {
  return (
    <div className="overflow-hidden whitespace-nowrap">
      <div className="inline-block animate-marquee" style={{ height }}>
        {children}
      </div>
    </div>
  );
};

export default Marquee;


