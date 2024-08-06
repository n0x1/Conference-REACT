import React, { useState, useEffect,  } from "react";

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
        localStorage.setItem('isSignedIn', newSignInStatus); // debug, put auth for final!!!!!!!
      };
    

      const [isOpen, setIsOpen] = useState(false);


    return(
        <div className="top-0 w-screen sticky py-2 flex px-4 bg-zinc-500">
             <div className="flex text-xl items-center flex-row gap-16">
                <div className="flex w-64 items-center justify-center"><a href='/' ><img src="../../../public/logo.png" alt="Conference logo"></img> </a></div>
                <div className="hidden md:flex flex-row gap-16">

                    <a href='/explore'>Explore</a>
                     <a href='/chat'>Chat</a>
                     <p></p>

                </div> 
                
            </div>

        <div className="hidden md:flex text-xl items-center flex-row gap-4 ml-auto">
                {/* Conditionally render based on isSignedIn state */}
        {isSignedIn ? (
          <a href='/profile'>Profile</a>
        ) : (
          <p></p>
        )}
        {/* Button to toggle sign in state for debug */}
        <button className='rounded-md' onClick={toggleSignIn}>
          {isSignedIn ? 'Sign Out' : 'Sign In'}
        </button>

            </div>

            <div className="ml-auto flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
          
        </div>
      
      
    )

}


