import React, { useState } from 'react';
import './Dropdown.css'; 
import CalendlyWidget from '../calendlywidget';
import { Link } from "react-router-dom";

// not mobile one, this is for db
// Todo: open chat with that user  on the link to

export default function Dropdown({ name, content, link }) {
  const [isOpen, setIsOpen] = useState(false); // destructure react hook 

  const toggleDropdown = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <div className="m-2 drop-shadow-lg relative flex flex-col">
      <button
        onClick={toggleDropdown}
        className={`bg-gray-600 ddbutton text-white p-2 ${isOpen ? 'rounded-t-md open' : 'rounded-md'}`}
      >
        {name}
      </button>
      <div className={`bg-gray-400 dropdown-content ${isOpen ? 'open' : 'closed'} p-2 rounded-b-md`}>
        {content}

        <div className='flex gap-4'>
            <CalendlyWidget username='camtmanzo' />
            <Link to='/chat'>Send a message</Link>
        </div>

        
      </div>
    </div>
  );
}
