import React, { useState } from "react";
import Subjectdropdown from "../../components/subjectdropdown";
import './Profile.css'

export default function Explore() {
    const [content, setContent] = useState("");

    const handleBio = (event) => {
        const maxLength = 700; 
        if (event.target.innerText.length <= maxLength) {
          setContent(event.target.innerText);
        } else {
          event.target.innerText = content; 
          event.preventDefault();
        }
      };

      const handleName = (event) => {
        const maxLength = 60; 
        if (event.target.innerText.length <= maxLength) {
          setContent(event.target.innerText);
        } else {
          event.target.innerText = content; 
          event.preventDefault();
        }
      };

    return(
        <div className="min-h-screen">
                <h1 className="text-center py-2 mt-4">
                    Profile
                </h1>
                <div>
                    <div>
                   

                    <div className="border-y-2 border-l-2 border-black bg-zinc-400 min-h-64 p-2 mx-auto w-3/4 rounded-xl flex-col mb-4"> 


                    <div className="flex">
                        Name:
                        <div onInput={handleName} className="bg-gray-500 min-w-48 px-2 hover:pointer-cursor rounded-xl mx-2 single-line" contentEditable='true'></div>
                    </div>

                    <Subjectdropdown />
 
                    
                    <div className="mt-2">
                        Bio: 
                        <div id='bio' onInput={handleBio} className="bg-gray-500 min-h-32 max-h-64 overflow-scroll px-2 hover:pointer-cursor rounded-xl" contentEditable='true'></div>
                    </div>
                    </div>

            
                        
                    </div>

                </div>
        </div>
       
    )
}