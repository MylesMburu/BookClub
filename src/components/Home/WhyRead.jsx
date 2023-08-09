import React from 'react';
import IMG9 from '../../assets/book buddy.png';

export const WhyRead = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 h-auto md:h-96 text-text1'>
      <div className='flex flex-col justify-center items-center'>
        <img src={IMG9} alt='' className='object-fit w-60 h-60' />
      </div>

      <div className='flex flex-col justify-center items-center p-8'>
        <h2>Why is it essential for everyone to be a reader?</h2>
        <ol className='list-decimal p-2'>
          <li>Discover new captivating worlds.</li>
          <li>Books are the ultimate brain boosters.</li>
          <li>Grow your vocabulary, writing, and communication.</li>
          <li>Exercise your brain, improve focus, and sharpen cognitive abilities.</li>
          <li>Ignite your creativity and imagination.</li>
        </ol>
      </div>
    </div>
  );
};
