import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import IMG1 from '../../assets/279002.jpg';
import IMG2 from '../../assets/Juve.jpg';
import IMG3 from '../../assets/stop-fgm.webp';

const data = [
  {
    key: 1,
    image: IMG1,
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
          <SwiperSlide key={key}>
            <img src={image} alt={`Slide ${key}`} className='w-full h-96 object-cover'/>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    <div className='flex flex-col justify-center items-center p-6'>
        <h2 className='border-b-2 border-white pb-1'>Synopsis</h2>
        <div className='px-6'>
            <p>
            A lot of voluntarily and involuntarily partitioned segments of our society, such as juvenile prisoners, girls in rescue centers who have escaped vices like FGM, teenagers in orphanage centers, and youths with chronic conditions stuck in hospitals for long periods, and even prisoners, do not have access to the kind of literacy exposure that exists in the general Kenyan society. Even the type of literacy potential of young people in Kenya is shallow.
            </p>
            <p>
            According to a 2019 study by the Kenya Institute of Curriculum Development, only 10% of Kenyan households own a book. This figure has remained constant for the past decade, with only one in every five people reading a book yearly. Ironically, 85% of Kenyans are literate, according to the Kenya National Bureau of Statistics 2020.
            </p>
        </div>
    </div>
    </div>
  );
};

export default Synopsis;
