import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import IMG1 from '../../assets/books1.jpg';
import IMG2 from '../../assets/books2.jpg';
import IMG3 from '../../assets/books3.jpg';
import IMG4 from '../../assets/books4.jpg';
import { About } from '../About/About';

const data = [
  {
    key: 1,
    image: IMG4,
  },
  {
    key: 2,
    image: IMG2,
  },
  {
    key: 3,
    image: IMG3,
  },
];

const Synopsis = () => {
  return (
    <div>
      {/* Slideshow */}
      <div>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          {data.map(({ key, image }) => (
            <SwiperSlide key={key} className='relative'>
              <img src={image} alt={`Slide ${key}`} className='w-full h-96 object-cover'/>
              <div className='absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50'>
                <h2 className='text-white text-xl font-bold mb-4'>Bringing Transformation, One Book At A Time</h2>
                <button className='px-6 py-2 text-white bg-red-600 hover:bg-red-700 rounded'>Learn More</button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      
      <div className='grid grid-cols-2 px-4 pt-8 pb-6'>
        <div className='flex flex-col justify-center items-center px-4'>
            <h2 className='border-b-2 left-0'>About Our Book Club</h2>
            <p>The Book Club initiative is a Kenya-based organization committed to bridging literacy gaps within marginalized groups, including girls in rescue centers, orphans, chronically ill youths, and juvenile prisoners.
              <br/> Through strategic, affordable book acquisition programs and a two-phase piloting scheme, we aim to empower these underserved communities by fostering a love for reading and enabling access to the transformative power of literacy.</p>
              <button className='bg-red-600 rounded px-6 py-2'><Link to='/about' element={About}>Learn More</Link></button>
        </div>
        <div>
            <img src={IMG1} alt="An image of books" className='object-cover h-72 w-full p-4' />
        </div>
      </div>
    </div>
  );
};

export default Synopsis;
