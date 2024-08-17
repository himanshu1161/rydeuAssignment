import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex flex-col lg:flex-row justify-between items-center p-4 bg-transparent sm:bg-white shadow-md font-roboto">
      <div className="flex items-center w-full lg:w-auto sm:mr-[4rem]">
        <img src="/logo.png" alt="Rydeu Logo" className="h-8 mr-3" />
        <button 
          className="lg:hidden text-gray-700 hover:text-red-500 ml-auto"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
      <ul className={`lg:flex lg:space-x-8 lg:mr-auto ${isOpen ? 'flex' : 'hidden'} flex-col lg:flex-row space-y-4 lg:space-y-0 mt-4 lg:mt-0`}>
        <li className="text-gray-700 hover:text-red-500">
          <a href="/">Transfers</a>
        </li>
        <li className="text-gray-700 hover:text-red-500">
          <a href="/">Bus Hire</a>
        </li>
        <li className="text-gray-700 hover:text-red-500 lg:hidden">
          
         
        </li>
      </ul>
      <div className={`flex items-center space-x-4 lg:space-x-4 ${isOpen ? 'flex' : 'hidden'} lg:flex`}>
        <img src="/help.png" alt="" />
        <Link to="/help"><button className="text-gray-700 hover:text-red-500">Help</button></Link>
        <img src="/flag.png" alt="" />
        <button className="text-gray-700 hover:text-red-500">Deutsch</button>
        <span>|</span>
        <button className="text-gray-700 hover:text-red-500">EUR</button>
        <div className="h-8 w-8 bg-gray-200 rounded-full flex items-center justify-center">
          <img src="/profile.png" alt="Profile" className="h-6 w-6 rounded-full" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
