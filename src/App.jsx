import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Dropdown from './components/dropdown'
import Navbar from './components/navbar'
import Bottombar from './components/bottombar';
import Home from './pages/home'
import NotFound from './pages/notfound'




function App() {


  return (

    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Home />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Bottombar />
      </div>
    </Router>

  )
}

export default App
