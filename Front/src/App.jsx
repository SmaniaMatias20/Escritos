import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/custom/pages/Home';
import Writings from './components/custom/pages/Writings';
import About from './components/custom/pages/About';
import Contact from './components/custom/pages/Contact';
import Navbar from './components/custom/Navbar';
import './App.css';

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/writings" element={<Writings />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
    </Router>
  );
}

export default App;
