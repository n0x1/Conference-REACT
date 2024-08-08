import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebaseConfig from './firebase';

import Navbar from './components/navbar';
import Bottombar from './components/bottombar';

import Home from './pages/home';
import Login from './pages/login';
import Signup from './pages/signup'

import Explore from './pages/explore';
import Profile from './pages/profile';
import Chat from './pages/chat';
import NotFound from './pages/notfound';



//login should be its own page tbd
function App() {

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  return (

    <Router>
      <div className="App">
        <Navbar />
        <Routes className='pages'>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} /> 
          <Route path="/signup" element={<Signup />} /> 
          <Route path="/explore" element={<Explore />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/chat" element={<Chat />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Bottombar />
      </div>
    </Router>

  )
}

export default App
