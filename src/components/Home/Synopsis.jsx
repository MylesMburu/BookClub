import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import IMG1 from '../../assets/books1.jpg';
import IMG2 from '../../assets/books2.jpg';
import IMG3 from '../../assets/books3.jpg';
import IMG4 from '../../assets/book club with bg.jpg';
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
      <div className="mb-8">
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
            <SwiperSlide key={key} className="relative">
              <img
                src={image}
                alt={`Slide ${key}`}
                className="w-full h-screen object-cover opacity-50"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50">
                <h2 className="text-white text-xl font-bold px-2 mb-4">Bringing Transformation,<br className='md:hidden'/> One Book At A Time</h2>
                <button className="px-6 py-2 text-white bg-red-600 hover:bg-red-700 rounded">
                  <Link to="/about" element={About}>
                    Learn More
                  </Link>
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8 px-4 pt-8 pb-6">
        <div className="flex flex-col justify-center items-center">
          <h2 className="border-b-2 left-0 font-bold mb-2">About Our Book Club</h2>
          <p className="text-center">
            Our Book Club initiative strives to{' '}
            <strong>bridge literacy gaps in marginalized groups</strong>, such as girls in rescue centers, orphans,
            chronically ill youths, and juvenile prisoners. We empower these communities through affordable book programs
            and a two-phase piloting scheme, fostering reading love and literacy access.
          </p>
          <button className="bg-red-600 rounded px-6 py-2 mt-4">
            <Link to="/about" element={About}>
              Learn More
            </Link>
          </button>
        </div>
        <div>
          <img src={IMG1} alt="An image of books" className="object-cover h-72 w-full p-4" />
        </div>
      </div>
    </div>
  );
};

export default Synopsis;
