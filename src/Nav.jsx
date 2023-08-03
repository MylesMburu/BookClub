import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

export const Nav = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className='flex md:flex-row justify-between p-4 h-full md:h-16 bg-secondary text-primary'>
      {/* Conditionally render the logo */}
      {!open && (
        <div id='logo' className='text-xl font-bold'>
          Book Club
        </div>
      )}

      <div className='flex md:flex-row gap-4 font-semibold'>
        <div className='md:hidden'>
          {open ? (
            <FiX className='text-primary cursor-pointer' onClick={() => setOpen(!open)} />
          ) : (
            <FiMenu className='text-primary cursor-pointer' onClick={() => setOpen(!open)} />
          )}
        </div>
        <div className={`md:flex ${open ? 'flex flex-col ml-24 gap-2' : 'hidden'}`}>
          <NavLink
            to='/'
            className='nav-hov md:ml-4'
            activeClassName='text-primary font-bold'
            exact
            onClick={() => setOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to='/projects'
            className='nav-hov md:ml-4'
            activeClassName='text-primary font-bold'
            onClick={() => setOpen(false)}
          >
            Projects
          </NavLink>
          <NavLink
            to='/about'
            className='nav-hov md:ml-4'
            activeClassName='text-primary font-bold'
            onClick={() => setOpen(false)}
          >
            About
          </NavLink>
          <NavLink
            to='/contacts'
            className='nav-hov md:ml-4'
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
