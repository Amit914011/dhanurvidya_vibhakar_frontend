import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Pagination, Autoplay } from 'swiper/modules';
import image7 from '../../assets//Banner Image/10.jpg';
import image2 from '../../assets/Banner Image/11.jpg';
import image3 from '../../assets/Banner Image/14.jpg';
import image4 from '../../assets/Banner Image/15.jpg';
import Septvidya from '../Home/Septvidya';
import Camps from '../Home/Camps';
import FAQ from '../Home/FAQ';
import Testimonial from '../Home/Testimonial';
import PashuramjAbhisheak from '../Home/PashuramjAbhisheak';






export default function Home() {
  const slides = [
    { id: 1, image: image7 },
    { id: 2, image: image2 },
    { id: 3, image: image3 },
    { id: 4, image: image4 },
  ];

  
  return (
    <>
  
  <div className="mx-auto relative z-[-1] pt-[60px]">
  <Swiper
    modules={[Pagination, Autoplay]} 
    spaceBetween={50}
    slidesPerView={1}
    pagination={{ clickable: true }}
    autoplay={{ delay: 2000 }}
    loop={true}
    className=""
  >
    {slides.map(slide => (
      <SwiperSlide key={slide.id}>
        <img
          src={slide.image}
          alt={`Slide ${slide.id}`}
          className="w-full object-cover sm:h-[200px] md:h-[300px] lg:h-[520px] "
        />
      </SwiperSlide>
    ))}
  </Swiper>
</div>


      <Septvidya/>
      <Camps/>
      <FAQ/>
      <PashuramjAbhisheak/>
      <Testimonial/>
      
</>
)
}
