import React from "react";
import './Hero.css'

export default function Hero() {

    return(
        <div className="flex justify-center items-center h-screen flex-col">
            <h1 className="mb-4"><b>Find the perfect tutor</b></h1>
            <a href='#card' className="rounded-md calltoaction">Explore</a>
        </div>
    )
}