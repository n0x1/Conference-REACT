import React from "react";
import { Link, } from 'react-router-dom';
 
export default function Bottombar() {
    return(
        <footer className="bg-zinc-500 mt-16 relative gap-8 w-screen">
            <h2 className="flex justify-center">Conference 2024</h2>
           <div className="flex flex-col md:flex-row justify-between items-center px-4">
            <h3><a href='https://www.instagram.com/conference_andover/'>Follow us on instagram @conference_andover</a></h3>
            <h3><a href='mailto:ctmanzo3@icloud.com'></a>Any improvements or suggestions!</h3>

            <h3><Link to='about'>About</Link></h3> 
            <h3><Link to='privacy'>Privacy Policy</Link></h3>
            <h3><Link to='apply'>Become a Tutor</Link></h3>

            <img src=""></img>
           </div>
        </footer>
    )
}// add