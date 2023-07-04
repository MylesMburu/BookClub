import React, {useState, useEffect} from 'react';
import { FaFacebookSquare, FaInstagram, FaTwitterSquare } from 'react-icons/fa';

export const Footer = () => {

  const [currentYear, setCurrentYear] = useState('');

  useEffect(() => {
    const year = new Date().getFullYear();
    setCurrentYear(year.toString());
  }, []);

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
      <div className='flex flex-col pr-16'>
        <span>© {currentYear} All Rights Reserved</span>
        <span> <small>Crafted by <a href="https://mylesmburu.netlify.app/" target='_blank'>Myles</a></small></span>
      </div>
    </div>
  );
};
