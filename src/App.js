import React from "react"
import Navbar from "./Components/Navbar";
import Slider from "./Components/Slider";
import Footer from "./Components/Footer";
import Designer from "./Components/Designer";
import Explore from "./Components/Explore";

const App = () => {
  return (
    <div>
      <Navbar/>
      <Explore />
      <Designer />
      <Slider />
      <Footer />
      </div>
  )
    
};

export default App;
