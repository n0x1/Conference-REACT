import React from "react";
import './Hero.css'
import { Link, useNavigate } from 'react-router-dom';


function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }


export default function Hero() {

    const navigate = useNavigate();

    const exploreNavigate = () => {
      navigate('/explore');
    };

    return(
        <>
        <div className="flex justify-center items-center h-screen hero flex-col">
            <h1 className="mb-4 ctatext text-center"><b>Find your peer tutor</b></h1>

            <div className="flex flex-row gap-2">
                <button onClick={() => scrollToSection('info-container')} className="rounded-lg calltoaction">Learn More</button>
                <button onClick={exploreNavigate} className='rounded-lg calltoaction'>Explore</button>
            </div>
           

        </div>
        <div className="bg-blend-luminosity -mt-2 h-4 bg-zinc-500 opacity-50">
        </div>

        </>

    )
}