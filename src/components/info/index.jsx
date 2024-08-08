import React from "react";
import './Info.css'
import Browse from '../../media/browse.svg'; 
import Connection from '../../media/connection.png'; 
import Video from '../../media/video.png'; 
import Talking from '../../media/talking.svg'; 



export default function Info() {
    return(
        <>
           <h1 className="text-center mt-2 shadow-sm"><b>How it works</b></h1> 

           <div className="flex flex-row items-start space-evenly place-content-evenly h-64 mx-0 md:mx-4">
<div className="container rounded-md flex items-center text-center w-1/4 flex flex-col py-2 bg-zinc-800 mt-4 px-4">
            <h2 className="text-2xl justify-center" >Browse tutors</h2>
            <img className="py-4 invert w-24 h-24 md:w-32 md:h-32" src={Browse}></img>
            <p>Browse available tutors in our database</p>
        </div>
        <div className="container rounded-md items-center text-center flex flex-col px-4 py-2 w-1/4 justify-center bg-zinc-800 mt-4">
                <h2 className="text-2xl top-0">Connect</h2>
                <img className="w-32 invert" src={Connection}></img>
                <p>Select a tutor fitting your needs</p>
                
        </div>
        <div  id='info-container' className="container items-center text-center flex flex-col py-2 rounded-md px-4 w-1/4 bg-zinc-800 mt-4">
                <h2 className="text-2xl">Receive flexible support</h2>
                <div className="flex flex-row items-center py-4">
                <img className="w-8 sm:w-16 lg:w-24 invert" src={Video}></img>
                <p className="text-xl">・</p>
                <img className="w-8 sm:w-16 md:w-24 invert" src={Talking}></img>
                </div>
              
                <p>Schedule and meet your preferred way</p> 
        </div>

</div>

        </>
      
    )
}