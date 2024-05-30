import React from "react";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Inspiration from "./pages/Inspiration";
import Footer from "./Components/Footer";
import Home2 from "./Components/Home2";
import Job from "./pages/Job";
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home2 />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/inspiration" element={<Inspiration />} />
        <Route path="//jobs" element={<Job />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
