import React, { useState } from "react";

export default function Explore() {


    return(
        <div className="min-h-screen">
                <h1 className="text-center py-2 mt-4">
                    Login
                </h1>
                <div>
                    <div>
                   

                    <div className="border-y-2 w-auto border-l-2 border-black bg-zinc-400 min-h-64 px-2 mx-auto w-1/4 rounded-xl flex flex-col justify-center items-center mb-4"> 


                    <div className="flex mb-2">
                        <label className="text-2xl" for='email'>Email:</label>
                        <input type='text' name='email' className="bg-gray-500 min-w-48 px-2 hover:pointer-cursor rounded-xl mx-2"></input>
                    </div>

                    <div className="flex">
                    <label className="text-2xl" for='password'>Password:</label>
                    <input type='password' name='password' className="bg-gray-500 toggle-password-active:block min-w-48 px-2 hover:pointer-cursor rounded-xl mx-2"></input>
                    </div>

                    <button type="submit" className="p-0.5 mt-2" >Sign in</button>

                    <a className="mt-12" href='signup'>Create an account</a>
                    </div>

            
                        
                    </div>

                </div>
        </div>
       
    )
}