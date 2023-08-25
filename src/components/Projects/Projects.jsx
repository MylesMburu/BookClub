import React from 'react';
import projects from './ProjectData';
import { FiX } from 'react-icons/fi';

export const Projects = () => {
  const [toggleActive, setToggleActive] = React.useState(false);

  return (
    
    <div className='bg-primary'>
      <h1 className='text-center text-4xl text-white font-bold py-4'>Projects</h1>
      <div className='text-white px-8 py-4 text-center'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam id, veritatis, aspernatur ad commodi vero enim nemo eos sint explicabo beatae fugit, libero ipsa laudantium esse sequi quis laborum voluptatum ab consequatur veniam obcaecati minus! Ducimus tempore dolores ut, consectetur quidem atque harum aliquid nisi eum deserunt fuga provident voluptates excepturi similique error dignissimos vitae, sunt repellat earum odit qui reprehenderit quam, facere aliquam. Quae quo doloribus eligendi libero nulla dicta eaque provident itaque officia tempore impedit vel iure, deleniti perspiciatis maiores enim sequi nobis laboriosam mollitia dolorem numquam. Voluptatem voluptatum quo fugit vel nostrum temporibus laborum rerum. Nemo, quaerat?</p>
      </div>
      <div className='flex flex-col gap-4 mx-4 py-6 md:grid-cols-2 md:grid md:px-2 justify-center items-center'>
        {projects.map((project, index) => {

          const isActive = toggleActive === index;

          return (
            <div
              key={index}
              className='flex flex-col lg:grid justify-center lg:grid-cols-2 items-center bg-secondary rounded-md p-4 lg:p-0'
              
            >
              <div className=''>
                <img
                  src={project.photos.photo1}
                  alt={project.name}
                  className='rounded-md lg:rounded-sm object-cover w-72 h-64 md:w-96 md:h-80'

                />
              </div>
              <div className='lg:p-14 space-y-2 text-text1'>
                <h2 className='text-xl font-bold'>{project.institution}</h2>
                <p className='text-left'>{project.date}</p>
                <p className='text-left'>{project.location}</p>
                <button 
                className='rounded-md border border-text1 px-3 py-2 hover:text-black hover:border-black duration-300 ease-in-out'
                onClick={() => setToggleActive(isActive ? null : index)}
                >Explore</button>
              </div>
              {isActive && 
                  <div className='dropdown'>
                      <div className='flex w-full justify-between items-start'>
                          <h1 className='text-lg font-bold'>{project.institution}</h1>
                          <FiX className='text-primary text-lg md:text-2xl font-bold cursor-pointer' onClick={() => setToggleActive(isActive ? null : index)} />
                      </div>
                      <div className='p-8'>
                          <img src={project.photos.photo1} alt="project photos" className='rounded-md object-cover w-72 h-64 md:w-96 md:h-72'/>
                      </div>
                      <div>
                          {project.description}
                      </div>
                      <div>
                        {project.outcome}
                      </div>
                      <button className='rounded-md border border-black px-3 py-2'>
                        <a href={project.catalogue_link} target="_blank" rel="noopener noreferrer">Catalogue</a>
                      </button>
                  </div>
              }

            </div>
          );
        })}
      </div>
    </div>
  )
}

