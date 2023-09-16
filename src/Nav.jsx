import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import logo from './assets/book club jpg.jpg'

export const Nav = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className='flex md:flex-row justify-between p-4 h-full md:h-16 bg-secondary text-text1'>
      {/* Conditionally render the logo */}
      {!open && (
        <div id='logo' className='text-xl font-bold flex items-center space-x-2'>
        <a href="/" className="flex items-center space-x-1">
          <img
            src={logo} 
            alt="Book Club Logo"
            className='w-full h-12 object-cover rounded-md' 
          />
        </a>
      </div>
      )}

      <div className='flex md:flex-row gap-4 font-semibold'>
        <div className='md:hidden'>
          {open ? (
            <FiX className='text-text1 cursor-pointer' onClick={() => setOpen(!open)} />
          ) : (
            <FiMenu className='text-text1 cursor-pointer mt-2' onClick={() => setOpen(!open)} />
          )}
        </div>
        <div className={`md:flex ${open ? 'flex flex-col ml-24 gap-2 ' : 'hidden'}`}>
          <NavLink
            to='/'
            className='nav-hov md:px-10'
            activeClassName='text-primary font-bold'
            exact
            onClick={() => setOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to='/projects'
            className='nav-hov md:px-10'
            activeClassName='text-primary font-bold'
            onClick={() => setOpen(false)}
          >
            Projects
          </NavLink>
          <NavLink
            to='/about'
            className='nav-hov md:px-10'
            activeClassName='text-primary font-bold'
            onClick={() => setOpen(false)}
          >
            About
          </NavLink>
          <NavLink
            to='/contacts'
            className='nav-hov md:px-10'
            activeClassName='text-primary font-bold'
            onClick={() => setOpen(false)}
          >
            Contact Us
          </NavLink>
        </div>
      </div>
    </div>
  );
};
