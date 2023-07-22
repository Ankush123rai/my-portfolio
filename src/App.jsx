import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Education from "./components/education/Education";
import Contact from "./pages/contact/Contact";
import MySection from "./components/dashboard/MySection";
import Project from "./pages/project/Project";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/education" element={<Education />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mySection" element={<MySection />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
