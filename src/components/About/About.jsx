import React from 'react'
import info from '../Info';
import IMG1 from '../../assets/279002.jpg';

export const About = () => {
  return (
    <div className='bg-primary text-white'>
      <div className='px-6 pt-6'>
        <p>Our team consists of four passionate university students who are determined to make a difference. After observing the pressing need to enhance literacy levels in marginalized communities, we embarked on a mission to create a solution that could address this issue effectively. We firmly believe that education is a fundamental right that should be accessible to all, regardless of socio-economic background. Through our collective expertise and unwavering commitment, we aim to bridge the literacy gap by developing innovative tools and programs. Our goal is to empower individuals in partitioned segments of society, providing them with the skills and knowledge they need to thrive and succeed. Together, we envision a future where literacy is a catalyst for positive change and equal opportunities.</p>
      </div>

      <div className='grid px-16 md:grid-cols-4 gap-5'>
          {info.map(({ key, name, position, id }) => {
            return (
              <div className='card' key={key}>
                {/* cards */}
                <img src={IMG1}/>
                <div className='m-4'>
                  <span className='font-bold text-center'>{name}</span>
                  <span className='block'>{position}</span>
                </div>
              </div>
            );
          })}
      </div>

      <div className='flex flex-col pt-6 justify-center items-center'>
      <span>"Any book that helps a child to form a habit of reading, to make reading one of his deep and continuing needs, is good for him."</span>
      <span>~Maya Angelou</span>
      </div>

      <div className='flex flex-col justify-center items-center mt-8'>
        <div>
        <h2 className='border-b-2 border-white pb-1'>Contact Us</h2>
        </div>
        <div>
          <form className="flex flex-col p-8 w-96 text-black">
            <input
              type="text"
              name="name"
              placeholder="Your full name"
              required
              className="p-2 rounded-md mb-4"
            />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              required
              className="p-2 rounded-md mb-4"
            />
            <textarea
              name="message"
              rows="8"
              placeholder="Your message"
              required
              className="p-2 rounded-md mb-4"
            ></textarea>
            <button
              type="submit"
              className="py-2 px-4 bg-secondary w-max rounded-md"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

    </div>
  )
}
