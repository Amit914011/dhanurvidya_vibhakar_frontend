import React, { useState, useEffect } from "react";
import newbg from '../../assets/bgnew2.jpg'; // Import your background image here
import pic1 from '../../assets/pic1.jpg';
import pic2 from '../../assets/pic2.jpg';
import pic3 from '../../assets/pic3.jpg';
import pic4 from '../../assets/pic4.jpg';
import pic5 from '../../assets/pic5.jpg';
import pic6 from '../../assets/pic6.jpg';
import DHANUR_VIDYA from '../../assets/sapt Vidya/bow_arrows.png';
import KUNTHA_VIDYA from '../../assets/sapt Vidya/spear.png';
import GADA_VIDYA from '../../assets/sapt Vidya/swords.png';
import BAHU_VIDYA from '../../assets/sapt Vidya/churika_01.png';
import CHAKRA_VIDYA from '../../assets/sapt Vidya/gadha_vidya_002.png';
import KSHURIKA_VIDYA from '../../assets/sapt Vidya/chakram.png';
import bahuvidya from '../../assets/sapt Vidya/BAHUBLACKcopy1.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';
import aboutus from '../../assets/ABOUT US.png'
import saptVidya from '../../assets/SAPT VIDYA.png'

const Septvidya = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    { id: 1, image: pic1, data: "The ancient art of archery" },
    { id: 2, image: pic2, data: "Card 2 Data" },
    { id: 3, image: pic3, data: "Card 3 Data" },
    { id: 4, image: pic4, data: "Card 4 Data" },
    { id: 5, image: pic5, data: "Card 5 Data" },
    { id: 6, image: pic6, data: "Card 6 Data" },
  ];

  // Get the number of visible cards based on screen width
  const getVisibleCards = () => {
    if (window.innerWidth < 768) return 1; // Mobile: 1 card
    if (window.innerWidth < 1024) return 2; // Tablet: 2 cards
    return 3; // Desktop: 3 cards
  };

  const [visibleCards, setVisibleCards] = useState(getVisibleCards());

  useEffect(() => {
    const handleResize = () => setVisibleCards(getVisibleCards());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Automatic slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex =>
        (prevIndex + 1) % (cards.length - visibleCards + 1)
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [visibleCards, cards.length]);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section
      className="relative w-full justify-center min-h-screen bg-cover bg-center  rounded-lg overflow-hidden"
      style={{ backgroundImage: `url(${newbg})` }}
    >
      <div className=" pt-2  px-[14px]  md:px-[100px] flex flex-col justify-center items-center">
       
        <img src={aboutus} alt="" />
        <p className="text-justify text-[14px] md:text-[14px]  pb-3">Isodhan Foundation is a dedicated institution rooted in preserving and promoting the rich cultural heritage of India. Our mission is to revive the essence of Indian traditions, spirituality, and the Gurukulam system, nurturing a way of life that aligns with Dharma and universal harmony.

At the heart of our vision is the revival of Dhanurveda, the ancient Vedic science of warfare and self-defense, emphasizing discipline, valor, and righteousness. Inspired by the teachings of Lord Parashurama, the protector of Dharma and embodiment of strength and justice, we aim to instill his virtues in every seeker.</p>
      </div>
     <div className="flex flex-col-reverse md:flex-row md:pl-5">
       {/* Right Section with Carousel */}
       <div className="relative w-full px-2   mb-8 overflow-hidden   h-full rounded-lg">
        <Swiper
          modules={[Autoplay, Pagination]} 
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            320: { slidesPerView: 1 }, // 2 slides for devices with a width of 460px or larger
            768: { slidesPerView: 2 }, // 2 slides for devices with a width of 768px or larger
            1024: { slidesPerView: 3 }, // 3 slides for devices with a width of 1024px or larger
          }}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          loop={true}
          className="w-full"
        >
          {cards.map((card, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-[450px]  sm:h-96 lg:h-[450px] bg-white shadow-lg rounded-lg cursor-pointer transform transition-transform duration-500 hover:scale-105">
                {/* Front side of the card */}
                <div
                  className="absolute w-full h-full transition-opacity duration-500"
                  style={{
                    backgroundImage: `url(${card.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Left Section with Icons and Text */}
      <div className="w-full md:w-[40%]  md:pl-0 text-gray-500 fade-in">
  <img src={saptVidya} alt="" />

  <div className="grid grid-cols-2  px-4 pb-5 md:px-0 w-full justify-center items-start">
    {/* First Section with 3 Icons */}
    <div className="flex flex-col items-center">
      {/* Icon 1 */}
      <div className="flex mt-2 flex-col items-center group">
        <div className="w-10 h-10 flex justify-center">
          <img
            src={DHANUR_VIDYA}
            alt="Dhanur Vidya"
            className="transform transition-transform duration-300 ease-in-out group-hover:scale-110"
          />
        </div>
        <h3 className="text-[14px] font-bold text-black  text-center">DHANURVIDYA</h3>
        <span className=" text-[12px] text-black text-center capitalize">The ancient art of Bharat.</span>
      </div>
      {/* Icon 2 */}
      <div className="flex mt-2 flex-col items-center group">
        <div className="w-10 h-10">
          <img
            src={KUNTHA_VIDYA}
            alt="Kuntha Vidya"
            className="transform transition-transform duration-300 ease-in-out group-hover:scale-110"
          />
        </div>
        <h3 className="text-[14px] font-bold text-black  text-center uppercase">Kuntavidya         </h3>
        <span className=" text-[12px] text-black text-center capitalize">Ancient weapon of world
        </span>
      </div>
      {/* Icon 3 */}
      <div className="flex mt-2 flex-col items-center group">
        <div className="w-10 h-10">
          <img
            src={BAHU_VIDYA}
            alt="Bahuv Vidya"
            className="transform transition-transform duration-300 ease-in-out group-hover:scale-110"
          />
        </div>
        <h3 className="text-[14px] text-black font-bold  text-center uppercase">Kshurikavidya</h3>
        <span className=" text-[12px] text-black text-center">Hidden weapon of warrior        </span>
      </div>
    </div>

    {/* Second Section with 3 Icons */}
    <div className="flex mt-2 flex-col items-center">
      {/* Icon 1 */}
      <div className="flex flex-col items-center group">
        <div className="w-10 h-10">
          <img
            src={KSHURIKA_VIDYA}
            alt="Kshurika Vidya"
            className="transform transition-transform duration-300 ease-in-out group-hover:scale-110"
          />
        </div>
        <h3 className="text-[14px] text-black font-bold  text-center uppercase">CHAKRA VIDYA</h3>
        <span className=" text-[12px] text-black text-center capitalize">Vedic weapon of Bharat</span>
      </div>
      {/* Icon 2 */}
      <div className="flex mt-2 flex-col items-center group">
        <div className="w-10 h-10">
          <img
            src={GADA_VIDYA}
            alt="Gada Vidya"
            className="transform transition-transform duration-300 ease-in-out group-hover:scale-110"
          />
        </div>
        <h3 className="text-[14px] text-black font-bold  text-center uppercase">Khadgavidya</h3>
        <span className=" text-[12px] text-black text-center capitalize">Weapon of Kshatriya</span>
      </div>
      {/* Icon 3 */}
      <div className="flex mt-2 flex-col items-center group">
        <div className="w-10 h-10">
          <img
            src={CHAKRA_VIDYA}
            alt="Chakra Vidya"
            className="transform transition-transform duration-300 ease-in-out group-hover:scale-110"
          />
        </div>
        <h3 className="text-[14px] text-black font-bold  text-center uppercase">Gadavidya</h3>
        <span className=" text-[12px] text-black text-center capitalize">Weapon of firmness warrior</span>
      </div>
    </div>
          <div className="flex mt-2 flex-col justify-center items-center">
          <div className="flex flex-col items-center group">
        <div className="w-10 h-10">
          <img
            src={bahuvidya}
            alt="Chakra Vidya"
            className="transform transition-transform duration-300 ease-in-out group-hover:scale-110"
          />
        </div>
        <h3 className="text-[14px] text-black font-bold  text-center uppercase">Bahuvidya
        </h3>
        <span className=" text-[12px] text-black text-center capitalize">Traditional Combat of Bharat</span>
      </div>
          </div>
  </div>
</div>

     </div>
    </section>
  );
};

export default Septvidya;
