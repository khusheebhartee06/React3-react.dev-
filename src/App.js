import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'animate.css/animate.min.css'
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import './App.css';

function App() {
  return (
      <BrowserRouter>
      <Header />
    <div className='App'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/version" element={<h1>Hello Version</h1>} />
        <Route path="/learn" element={<h1>Hello Learn</h1>} />
        <Route path="/reference" element={<h1>Hello Reference</h1>} />
        <Route path="/community" element={<h1>Hello Community</h1>} />
        <Route path="/ourcommunity" element={<h1>Hello Our Community</h1>} />
        <Route path="/mycommunity" element={<h1>Hello My Community</h1>} />
        <Route path="/Blog" element={<h1>Hello Blog</h1>} />
      </Routes>
    </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App