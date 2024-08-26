import React, { useState } from "react";
import { Link,  useNavigate } from 'react-router-dom';
import Logo from '../../media/logo.png'; 

//also handles mobile
export default function Navbar({ isSignedIn, onSignOut}) {
  const navigate = useNavigate();

    const attemptSignIn = () => {
      if (isSignedIn) {
        onSignOut()
        navigate('/')
      } else {
        navigate('/login');
      }
    };

      const [isOpen, setIsOpen] = useState(false); // mobile menu state


    return(
      <>
        <div className="top-0 z-50 w-screen sticky py-2 flex px-4 bg-zinc-500">
             <div className="flex text-xl items-center flex-row gap-16">
                <div className="flex w-64 items-center justify-center"><Link to='/' ><img src={Logo} alt="Conference logo"></img> </Link></div>
                <div className="hidden md:flex flex-row gap-16">

                    <Link to='/explore'>Explore</Link>
                     <Link to='/chat'>Chat</Link>
                     <p></p>

                </div> 
                
            </div>

        <div className="hidden md:flex text-xl items-center flex-row gap-4 ml-auto">
                {/* Conditionally render based on isSignedIn state */}
        {isSignedIn ? (
          <Link to='/profile'>Profile</Link>
        ) : (
          <p></p>
        )}
        <button className='rounded-md' onClick={attemptSignIn}>
          {isSignedIn ? 'Sign Out' : 'Sign In'}
        </button>
            </div>
            <div className="ml-auto flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)} // mobile handler
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

            {isOpen && (
              <nav id="mobile-menu" className="md:hidden right-auto">
                <ul className="flex flex-col">
                  <li><Link href="/explore" className="block text-right px-4 py-2 text-sm bg-gray-700">Explore</Link></li>
                  <li><Link to="/chat" className="block text-right px-4 py-2 text-sm bg-gray-700">Chat</Link></li>
                  {isSignedIn && (<li><Link to='profile' className="block text-right px-4 py-2 text-sm bg-gray-700">Profile</Link></li>)}
                  <button className='rounded-md block text-right px-4 py-2 text-sm bg-gray-700 hover:bg-gray-700' onClick={attemptSignIn}>
                    {isSignedIn ? 'Sign Out' : 'Sign In'}
                  </button>
                </ul>
              </nav>
            )}
      </>
      
    )

}


