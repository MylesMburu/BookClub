import React from 'react'

export const Nav = () => {
  return (
    <div className='flex justify-between p-2 bg-secondary'>
        <div id='logo' className='text-xl'>Book Club</div>
        <div className='flex gap-4 '>
            <div className=''> <a href='' className='nav-hov'>Home</a></div>
            <div><a href='' className='nav-hov'>Catalogue</a></div>
            <div><a href='' className='nav-hov'>About Us</a></div>
            <div><a href='' className='nav-hov'>Contact Us</a></div>
        </div>
    </div>
  )
}
