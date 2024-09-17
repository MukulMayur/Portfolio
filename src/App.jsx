import React, { useState, useEffect } from "react";
import Preloader from "./components/Preloader";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Resume from "./components/Resume/Resume.jsx";
import ScrollToTop from "./components/SrolltoTop.jsx";
import Blogs from "./components/Blogs/Blogs.jsx";
import Services from "./components/Services/Services.jsx";

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
      <div className="App" id={loading ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/Portfolio/" element={<Home />}></Route>
          <Route path="/Portfolio/about" element={<About />}></Route>
          <Route path="/Portfolio/projects" element={<Projects />}></Route>
          <Route path="/Portfolio/resume" element={<Resume />}></Route>
          {/* <Route path="/Portfolio/blogs" element={<Blogs />}></Route> */}
          <Route path="/Portfolio/services" element={<Services />}></Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
