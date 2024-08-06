import React from "react";
import './Hero.css'

export default function Hero() {

    return(
        <div className="flex justify-center items-center h-screen hero flex-col">
            <h1 className="mb-4 ctatext text-center"><b>Find the perfect tutor</b></h1>
            <a href='#card' className="rounded-md calltoaction">Explore</a>
        </div>
    )
}