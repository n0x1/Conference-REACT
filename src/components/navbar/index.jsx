import React, { useState, useEffect } from "react";

export default function Navbar() {
    const [isSignedIn, setIsSignedIn] = useState(false)

    useEffect(() => {
        const signInStatus = localStorage.getItem('isSignedIn');
        if (signInStatus === 'true') {
          setIsSignedIn(true);
        }
      }, []);
    
      const toggleSignIn = () => {
        const newSignInStatus = !isSignedIn;
        setIsSignedIn(newSignInStatus);
        localStorage.setItem('isSignedIn', newSignInStatus);
      };
    
    return(
        <div className="top-0 w-screen py-2 flex px-4 bg-zinc-400">
             <div className="flex text-xl items-center flex-row gap-16">
                <a className="text-2xl" href='/' >Conference</a>
                <a href='/explore'>Explore</a>
                 <a href='/chats'>Chat</a>

            </div>
            <div className="flex text-xl items-center flex-row gap-4 ml-auto">
                {/* Conditionally render based on isSignedIn state */}
        {isSignedIn ? (
          <a href='/profile'>Profile</a>
        ) : (
          <p></p>
        )}
        {/* Button to toggle sign in state for demonstration purposes */}
        <button className='rounded-md' onClick={toggleSignIn}>
          {isSignedIn ? 'Sign Out' : 'Sign In'}
        </button>
            </div>

        </div>
      
    )

}


