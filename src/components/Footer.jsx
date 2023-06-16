import React from 'react'
import {FaFacebookSquare} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaTwitterSquare} from 'react-icons/fa'


export const Footer = () => {
  return (
    <div className='bg-footer text-white'>
        <div>
            <a href="">Book Club</a>
        </div>
        <div id='social-links' className='flex flex-row gap-4'>
            <div>
            <a href=""><FaFacebookSquare/></a>
            </div>
            <div>
            <a href=""><FaInstagram/></a>
            </div>
            <div>
            <a href=""><FaTwitterSquare/></a>
            </div>
        </div>
    </div>
  )
}
