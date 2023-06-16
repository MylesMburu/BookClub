import React from 'react'
import {FaFacebookSquare} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaTwitterSquare} from 'react-icons/fa'


export const Footer = () => {
  return (
    <div className='flex justify-between bg-footer text-white py-4 pl-16'>
      <div>
        <div className='pb-2'>
              <a href="">Book Club</a>
          </div>
          <div id='social-links' className='flex flex-row gap-4 text-xl'>
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
      <div className='pr-16'>
      <span>Copyright All Rights Reserved © 2023</span>
      </div>
    </div>
  )
}
