import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import What from "./components/What";
import Home from "./components/Home";
import Intro from "./components/Intro";
import Operation from "./components/Operation";
import Engineering from "./components/Engineering";
import Patents from "./components/Patents";
import Buy from "./components/Buy";
import StartPage from "./components/StartPage";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/what" element={<What />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/operation" element={<Operation />} />
        <Route path="/engineering" element={<Engineering />} />
        <Route path="/patents" element={<Patents />} />
        <Route path="/buy" element={<Buy />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
