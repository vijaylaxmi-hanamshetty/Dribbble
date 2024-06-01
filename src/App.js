import React from "react";

import { Route, Routes } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Inspiration from "./pages/Inspiration";

import Dribble from "./Components/Home2";
import Job from "./pages/Job";
const App = () => {
  return (
    <div>
     
      <Routes>
        <Route path="/" element={<Dribble />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/inspiration" element={<Inspiration />} />
        <Route path="//jobs" element={<Job />} />
      </Routes>
      
    </div>
  );
};

export default App;
