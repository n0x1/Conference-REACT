import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Dropdown from './components/dropdown'
import Navbar from './components/navbar';
import Bottombar from './components/bottombar';
import Home from './pages/home';
import Explore from './pages/explore';
import NotFound from './pages/notfound';



//login should be its own page tbd
function App() {


  return (

    <Router>
      <div className="App">
        <Navbar />
        <Routes className='pages'>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Home />} /> 
          <Route path="/explore" element={<Explore />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Bottombar />
      </div>
    </Router>

  )
}

export default App
