import React from 'react';
import { FaFacebookSquare, FaInstagram, FaTwitterSquare } from 'react-icons/fa';

export const Footer = () => {
  return (
    <div className='flex flex-col md:flex-row justify-between bg-footer text-white py-4 pl-16'>
      <div className='mb-4 md:mb-0'>
        <div className='pb-2'>
          <a href=''>Book Club</a>
        </div>
        <div id='social-links' className='flex flex-row gap-4 text-xl'>
          <div>
            <a href=''>
              <FaFacebookSquare />
            </a>
          </div>
          <div>
            <a href=''>
              <FaInstagram />
            </a>
          </div>
          <div>
            <a href=''>
              <FaTwitterSquare />
            </a>
          </div>
        </div>
      </div>
      <div className='pr-16'>
        <span>© 2023 All Rights Reserved</span>
      </div>
    </div>
  );
};
