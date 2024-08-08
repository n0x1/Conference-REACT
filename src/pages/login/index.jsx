import React, { useState } from "react";

export default function Explore() {


    return(
        <div className="min-h-screen">
                <h1 className="text-center py-2 mt-4">
                    Login
                </h1>
                <div>
                    <div>
                   

                    <div className="border-y-2 border-l-2 border-black bg-zinc-400 min-h-64 p-2 mx-auto w-3/4 rounded-xl flex-col mb-4"> 


                    <div className="flex">
                        Username:
                        <div className="bg-gray-500 min-w-48 px-2 hover:pointer-cursor rounded-xl mx-2" contentEditable='true'></div>
                    </div>

                    <div className="flex">
                        Password:
                        <div className="bg-gray-500 min-w-48 px-2 hover:pointer-cursor rounded-xl mx-2" contentEditable='true'></div>
                    </div>


                    </div>

            
                        
                    </div>

                </div>
        </div>
       
    )
}