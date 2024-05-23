import "./App.css";
import Designer from "./Components/Designer";
import Explore from "./Components/Explore";
import Navbar from "./Components/Navbar";
import Slider from "./Components/Slider";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./Components/SignUp";
import SignIn from "./Components/SignIn";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
          </Routes>
        </div>
      </Router>

      <div>
        <Explore />
        <Designer />
        <Slider />
        <Footer />
      </div>
    </div>
  );
}
export default App;
