import React, { useState, useEffect } from "react";
import Preloader from "./components/Preloader";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Resume from "./components/Resume/Resume.jsx";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000); // 1-second delay for preloader
  }, []);

  return (
    <Router>
      <Preloader load={loading} />
      <Navbar />
      <Routes>
        <Route path="/portfolio" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/resume" element={<Resume />}></Route>
      </Routes>
    </Router>
  );
};

export default App;