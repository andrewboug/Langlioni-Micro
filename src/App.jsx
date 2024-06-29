import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import What from "./components/What";

import Intro from "./components/Intro";

import Engineering from "./components/Engineering";
import Patents from "./components/Patents";

import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Culinary from "./components/Culinary";
import PizzaParty from "./components/PizzaParty";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<What />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/party" element={<PizzaParty />} />
        <Route path="/culinary" element={<Culinary />} />
        <Route path="/engineering" element={<Engineering />} />
        <Route path="/patents" element={<Patents />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
