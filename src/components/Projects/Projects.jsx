import React from 'react';
import projects from './ProjectData';

export const Projects = () => {
  return (
    
    <div className='bg-primary'>
      <h1 className='text-center text-4xl text-white font-bold'>Projects</h1>
      <div className='flex flex-col gap-4 mx-4 py-6 md:grid-cols-2 md:grid md:px-2 justify-center items-center'>
        {projects.map((project, index) => {
          return (
            <div
              key={index}
              className='flex flex-col lg:grid justify-center lg:grid-cols-2 items-center bg-secondary rounded-md p-4 lg:p-0'
            >
              <div className=''>
                <img
                  src={project.image}
                  alt={project.name}
                  className='rounded-md lg:rounded-sm object-cover w-72 h-64 md:w-96 md:h-72'
                />
              </div>
              <div className='lg:p-14'>
                <h2 className='text-xl font-bold'>{project.institution}</h2>
                <p className='text-left'>{project.date}</p>
                <div className='flex gap-4'>
                  <a
                    href={project.live}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='px-6 py-2 text-white bg-red-600 hover:bg-red-700 rounded'
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  )
}

