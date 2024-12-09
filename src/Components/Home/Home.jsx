import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import image7 from '../../assets/banner7.png';
import image2 from '../../assets/banner2.jpg';
import image3 from '../../assets/banner3.jpg';
import image4 from '../../assets/banner4.png';
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
  
  <div className="mx-auto relative z-[-1] pt-[70px]">
  <Swiper
    modules={[Pagination, Autoplay]} 
    spaceBetween={50}
    slidesPerView={1}
    pagination={{ clickable: true }}
    autoplay={{ delay: 2000 }}
    loop={true}
    className="mb-12"
  >
    {slides.map(slide => (
      <SwiperSlide key={slide.id}>
        <img
          src={slide.image}
          alt={`Slide ${slide.id}`}
          className="w-full object-cover sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px]"
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
