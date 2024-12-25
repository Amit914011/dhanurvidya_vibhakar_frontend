import React from "react";
import guru from "../../assets/guru ji.jpg";
import guruji from '../../assets/guruji 1.jpg'
import guruji1 from '../../assets/guruji 2.jpg'
import guruji2 from '../../assets/guruji 3.jpg'
import guruji3 from '../../assets/guruji4.jpg'
import guruji4 from '../../assets/guruji5.jpg'
import guruji5 from '../../assets/guruji6.jpg'
import guru7 from '../../assets/guruji.jpg'
import guru8 from '../../assets/pic8.jpg'
import guru9 from '../../assets/pic2.jpg'
import aboutguru from "../../assets/aboutguru.png";

export default function Guru() {
  return (
    <>
      <div className="pt-14 flex justify-between items-center  w-full">
        <img src={guru} alt="" className="w-full" />
      </div>
      <div className="flex justify-center items-center">
        <img src={aboutguru} alt="Guru" className="max-w-full h-auto" />
      </div>

      <div className="bg-white ">
        {/* Header Section */}
        <p className="text-center text-red-800 text-xl font-bold md:px-10">
          A Pillar of Support for Isodhan Foundation and Parashurama Seva
        </p>
      </div>
        <div className='pt-[60px] lg:pt-16 '>
      <div className='flex flex-col-reverse md:flex-row lg:px-[150px] justify-between px-[15px] items-center'>
          <div className='md:w-[80%]'>
              <p className='text-justify'>   Sri Sri Sri Vibhakar Tiwari is a distinguished master of Dhanurveda, the ancient Indian martial art of archery and warfare. Residing at the foothills of Lord Venkateshwara in Tirupati, Andhra Pradesh, Guru Ji's expertise in this discipline is unparalleled, making him a revered figure in the preservation and teaching of traditional combat techniques. As a spiritual master and devoted follower of Lord Parashurama, the sixth avatar of Vishnu, Guru Ji embodies the principles of bravery, discipline, and devotion.</p>
          </div>
          <div className='md:w-[20%] rounded-lg overflow-hidden flex justify-end'>
              <img src={guruji} alt="" className='md:w-[80%] rounded-lg'/>
          </div>
      </div>
      <div className='flex flex-col-reverse md:flex-row  lg:px-[150px] justify-between px-[15px] items-center'>
          <div className='md:w-[80%]'>
              <p className='text-justify'>Guru Ji's spiritual journey is deeply intertwined with his devotion to Lord Parashurama. He is well-versed in performing Yagams (Vedic fire rituals) and other sacred ceremonies, following the traditional practices of the Vaikhanasa Agama Shastra. These rituals are conducted with the utmost reverence and precision, reflecting his deep spiritual knowledge and commitment. Through these sacred practices, Guru Ji aims to invoke divine blessings and promote spiritual upliftment among his followers.</p>
          </div>
          <div className='md:w-[20%] rounded-lg overflow-hidden flex justify-end'>
              <img src={guruji1} alt="" className='md:w-[80%] md:h-[200px] md:mt-2 rounded-md'/>
          </div>
      </div>
      <div className='flex flex-col-reverse md:flex-row lg:px-[150px] gap-5 justify-between px-[15px] items-center'>
      <div className='md:w-[20%] rounded-lg overflow-hidden flex justify-start'>
              <img src={guruji2} alt="" className='md:w-[100%]  md:h-[150px] md:mt-2 rounded-lg' />
          </div>
          <div className='md:w-[80%]'>
              <p className='text-justify'> Guru Ji spreads the divine name of Hari Nama in the form of Parashurama, especially relevant in the current age of Kaliyuga. His teachings and practices aim to revive and honour the ancient traditions associated with Parashurama, promoting spiritual growth and awareness among his disciples and followers. He emphasizes the timeless values embodied by Lord Parashurama, such as righteousness, strength, and humility, encouraging his students to integrate these virtues into their daily lives.</p>
          </div>
          
      </div>
      <div className='flex flex-col-reverse md:flex-row lg:px-[150px] gap-5 justify-between px-[15px] items-center'>
      <div className='md:w-[20%] rounded-lg overflow-hidden flex justify-start'>
              <img src={guruji3} alt="" className='md:w-[100%]  md:h-[150px] md:mt-2 rounded-lg'/>
          </div>
          <div className='md:w-[80%]'>
              <p className='text-justify'>   Beyond martial arts, Guru Ji's teachings encompass a holistic approach to personal development. He emphasizes the importance of physical strength, mental discipline, and spiritual enlightenment. His guidance helps students achieve a balanced life, integrating the virtues of martial and spiritual wisdom. Guru Ji's approach ensures that his disciples not only excel in physical combat but also grow as well-rounded individuals with a strong moral foundation.</p>
          </div>
         
      </div>
      <div className='flex flex-col-reverse md:flex-row lg:px-[150px] justify-between px-[15px] items-center'>
          <div className='md:w-[80%]'>
              <p className='text-justify'>   Guru Ji's dedication extends to preserving the rich cultural heritage of India. By teaching Dhanurveda and performing traditional rituals, he ensures that these ancient practices continue to thrive and inspire future generations. His work not only keeps the traditions alive but also adapts them to the contemporary world, making them accessible and relevant. Guru Ji actively engages in cultural preservation efforts, participating in seminars, workshops, and community events to spread awareness about India's rich martial and spiritual legacy.</p>
          </div>
          <div className='md:w-[20%] rounded-lg overflow-hidden flex justify-end'>
              <img src={guruji4} alt="" className='md:w-[80%] rounded-lg'/>
          </div>
      </div>
      <div className='flex flex-col-reverse md:flex-row  lg:px-[150px] justify-between px-[15px] items-center'>
          <div className='md:w-[80%]'>
              <p className='text-justify'>Guru Ji's influence is profound, touching the lives of many who seek knowledge and spiritual guidance. His efforts in reviving the practices of Dhanurveda and promoting the worship of Lord Parashurama create a bridge between the ancient and modern worlds, fostering a deeper understanding and appreciation of India's spiritual and martial legacy. Through his teachings and example, Guru Ji inspires a new generation to embrace their cultural heritage with pride and dedication, ensuring that the wisdom of the past continues to illuminate the path of the future.</p>
          </div>
          <div className='md:w-[20%] rounded-lg overflow-hidden flex justify-end'>
              <img src={guruji5} alt="" className='md:w-[80%] md:h-[150px] md:mt-2 rounded-md'/>
          </div>
      </div>
      
      <div className='w-full mt-10'>
        <img src={guru7} alt="" className="w-full h-auto" />
      </div>
      
      <div className="w-full p-6">
        <h1 className="text-4xl font-bold mb-4 text-center text-red-700">BLOGS</h1>
        
        {/* Flex Container for Images */}
        <div className="md:flex  gap-6 justify-center">
          
          {/* Image 1 with Title */}
          <div className="w-full mb-3 md:md-0 sm:w-1/2 lg:w-1/3 xl:w-1/4 flex flex-col items-center bg-yellow-200 p-4 rounded-lg">
            <h2 className="text-lg font-bold mb-2 text-red-700">KHADGA VIDYA CAMPS</h2>
            <img 
              src={guru8} 
              alt="Image 1" 
              className="w-full h-auto object-cover rounded-lg"/>
          </div>
      
          {/* Image 2 with Title */}
          <div className="w-full mb-3 md:mb-0 sm:w-1/2 lg:w-1/3 xl:w-1/4 flex flex-col items-center bg-yellow-200 p-4 rounded-lg">
            <h2 className="text-lg font-bold mb-2 text-red-700">GADHA VIDYA CAMPS</h2>
            <img 
              src={guru9}
              alt="Image 2" 
              className="w-full h-auto object-cover rounded-lg"/>
          </div>
      
          {/* Image 3 with Title */}
          <div className="w-full mb-3 md:mb-0 sm:w-1/2 lg:w-1/3 xl:w-1/4 flex flex-col items-center bg-yellow-200 p-4 rounded-lg">
            <h2 className="text-lg font-bold mb-2 text-red-700">GADHA VIDYA CAMPS</h2>
            <img 
              src={guru9}
              alt="Image 2" 
              className="w-full h-auto object-cover rounded-lg"/>
          </div>
      
      </div>
      
      </div>
      
          </div>
    </>
  );
}
