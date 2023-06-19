import React from 'react'
import { NavLink } from 'react-router-dom'

export const Nav = () => {
  return (
    <div className='flex justify-between p-2 bg-secondary text-primary'>
        <div id='logo' className='text-xl font-bold'>Book Club</div>
        <div className='flex gap-4 font-semibold'>
            <div> <NavLink to='/' className='nav-hov'>Home</NavLink></div>
            <div><NavLink to='catalogue' className='nav-hov'>Catalogue</NavLink></div>
            <div><NavLink to='about' className='nav-hov'>About</NavLink></div>
            <div><NavLink to='contacts' className='nav-hov'>Contact Us</NavLink></div>
        </div>
    </div>
  )
}
