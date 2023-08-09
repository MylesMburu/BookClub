import React from 'react';
import info from '../Info';

export const About = () => {
  return (
    <div className='flex flex-col justify-center items-center p-2 md:p-4 bg-primary text-white'>
      <div className='border-b-2 border-white pb-1'>
        <h2>Our Story:</h2>
      </div>
      <div className='px-4 md:px-6 pt-6 text-center'>
        <p>
          In a society plagued by limited opportunities, numerous segments face the challenges of restricted literacy
          exposure. Girls in rescue centers escaping vices like FGM, teenagers in orphanages, youths with chronic
          conditions confined to hospitals, and even juvenile prisoners are deprived of access to the rich world of
          literacy enjoyed by the general Kenyan society.
          <br />
          In the face of these challenges, our mission as the Book Club initiative is to bridge these gaps and bring the
          transformative power of books to these marginalized segments of society. Through strategic initiatives,
          affordable book acquisition, and a two-phase piloting program, we aim to empower and uplift the minds of young
          individuals who have been denied the opportunity to explore the wonders of literacy.
        </p>
      </div>

      <div className='grid grid-cols-1 px-2 md:px-16 md:grid-cols-2 lg:grid-cols-4 gap-5'>
        {info.map(({ key, name, position, id, image }) => {
          return (
            <div className='card' key={key}>
              {/* cards */}
              <img src={image} className='w-full h-96 object-cover' alt={`Card ${id}`} />
              <div className='m-4'>
                <span className='font-bold text-center'>{name}</span>
                <span className='block'>{position}</span>
              </div>
            </div>
          );
        })}
      </div>

      <div className='flex flex-col px-4 md:px-6 pt-6 justify-center items-center'>
        <span className='text-center'>
          "Any book that helps a child to form a habit of reading, to make reading one of his deep and continuing needs,
          is good for him."
        </span>
        <span className='text-center'>~Maya Angelou</span>
      </div>
    </div>
  );
};
