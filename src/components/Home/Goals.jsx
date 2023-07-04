import React from 'react'

export const Goals = () => {
  return (
    <div className='grid grid-cols-3 gap-4 h-96 bg-secondary pb-6'>
        <div className='flex justify-center items-center card2'>
        <h2 className='font-bold'>Mission</h2>
        <p>To bring the joy of reading to young minds in secluded community spaces. Join us in our mission to empower young minds with the transformative power of books. 
            One page at a time
        </p>
        </div>
        <div className='flex justify-center items-center card2'>
        <h2 className='font-bold'>Vision</h2>
        <p>To create a society where every individual, regardless of their circumstances, can access the transformative power of literacy. We strive to turn barriers into bridges, guiding the marginalized toward a world enlightened by knowledge, empowerment, and opportunities through the magic of books.</p>
        </div>
        <div className='flex justify-center items-center card2'>
        <h2 className='font-bold'>Goals</h2>
        <ul className='list-disc list-inside'>
            <li className='mb-1'>Foster deep love for reading and learning.</li>
            <li className='mb-1'>Create an enlightened society. </li>
            <li className='mb-1'>Empower young people to achieve their full potential through reading </li>
        </ul>
        </div>
    </div>
  )
}
