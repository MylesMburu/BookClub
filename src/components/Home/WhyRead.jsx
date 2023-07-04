import React from 'react'
import IMG9 from '../../assets/book buddy.png'

export const WhyRead = () => {
  return (
    <div className='grid grid-cols-2 h-96'>
        <div className='flex flex-col justify-center items-center'>
          <img src={IMG9} alt="" className='object-fit w-60 h-60'/>
        </div>

        <div className='flex flex-col justify-center items-center p-8'>
        <h2>Why is it essential for everyone to be a reader?</h2>
        <ol class="p-2">
          <li>1. Discover new captivating worlds.</li>
          <li>2. Books are the ultimate brain boosters.</li>
          <li>3. Grow your vocabulary, writing, and communication.</li>
          <li>4. Exercise your brain, improve focus and sharpen cognitive abilities.</li>
          <li>5. Ignite your creativity and imagination.</li>
        </ol>
</div>

    </div>
  )
}
