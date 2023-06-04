import React from 'react'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Home from './home/Home'
import About from './about/About'
import Navbar from './navbar/Navbar'
import Education from './education/Education'
import Project from './Project/Project'
import Contact from './contact/Contact'

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/education" element={<Education/>}/>
        <Route path="/project" element={<Project/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="*" element={<Home/>}/>
      </Routes>
    </Router>

  )
}

export default App