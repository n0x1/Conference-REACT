import React, { useState } from 'react';
import './Dropdown.css'; 

export default function Dropdown({ title, content }) {
  const [isOpen, setIsOpen] = useState(false); // destructure react hook 

  const toggleDropdown = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <div className="m-2 z-50 drop-shadow-md relative flex flex-col">
      <button
        onClick={toggleDropdown}
        className={`bg-gray-600 ddbutton text-white p-2 ${isOpen ? 'rounded-t-md open' : 'rounded-md'}`}
      >
        {title}
      </button>
      <div className={`bg-gray-400 dropdown-content ${isOpen ? 'open' : 'closed'} p-2 rounded-b-md`}>
        {content}
      </div>
    </div>
  );
}
