import React from 'react'
import guru from '../../assets/guru ji.jpg'
import guru1 from '../../assets/hom.jpg'
import guru2 from '../../assets/abhi4.jpg'
import guru3 from '../../assets/abhi2.jpg'
import guru4 from '../../assets/abhi3.jpg'
import guru5 from '../../assets/pic2.jpg'
import guru6 from '../../assets/pic5.jpg'
import guru7 from '../../assets/guruji.jpg'
import guru8 from '../../assets/pic8.jpg'
import guru9 from '../../assets/pic2.jpg'
import aboutguru from '../../assets/aboutguru.png'

export default function Guru() {

  return (
    <>
      <div className='pt-20 w-full'>
        <img src={guru} alt="" className='w-full'/>   
      </div>
      <div className="flex justify-center items-center mt-10">
  <img src={aboutguru} alt="Guru" className="max-w-full h-auto" />
</div>

      <div className="bg-white pt-10">

        {/* Header Section */}
        <p className="text-center text-red-800 text-xl font-bold">
          A Pillar of Support for Isodhan Foundation and Parashurama Seva
        </p>
      </div>

      {/* First Section */}
      <div className="flex flex-col md:flex-row w-full bg-white pt-10 px-6 md:px-12">

  {/* Text Section */}
  <div className="flex-1 text-black mb-6 md:mb-0">
    <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">About Guru Ji</h2>
    <p className="text-base sm:text-lg md:text-2xl leading-relaxed font-serif text-gray-700">
      Sri Sri Sri Vibhakar Tiwari is a distinguished master of Dhanurveda, the ancient Indian martial art of archery and warfare. Residing at the foothills of Lord Venkateshwara in Tirupati, Andhra Pradesh, Guru Ji's expertise in this discipline is unparalleled, making him a revered figure in the preservation and teaching of traditional combat techniques. As a spiritual master and devoted follower of Lord Parashurama, the sixth avatar of Vishnu, Guru Ji embodies the principles of bravery, discipline, and devotion.
      <br/>
      <br/>
      Guru Ji's spiritual journey is deeply intertwined with his devotion to Lord Parashurama. He is well-versed in performing Yagams (Vedic fire rituals) and other sacred ceremonies, following the traditional practices of the Vaikhanasa Agama Shastra. These rituals are conducted with the utmost reverence and precision, reflecting his deep spiritual knowledge and commitment. Through these sacred practices, Guru Ji aims to invoke divine blessings and promote spiritual upliftment among his followers.
    </p>
  </div>

  {/* Image Section */}
  <div className="flex-1 flex flex-col items-center md:items-start space-y-6 md:space-y-8 ">
    <div className="relative w-full sm:w-80 lg:w-96 h-auto group">
      <img 
        src={guru1} 
        alt="Guru Image 1" 
        className="w-full h-auto object-cover rounded-lg transform group-hover:scale-105 transition-transform duration-300" />
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 group-hover:opacity-30 rounded-lg transition-opacity duration-300"></div>
    </div>

    <div className="relative w-full sm:w-80 lg:w-96 h-auto group">
      <img 
        src={guru2} 
        alt="Guru Image 2" 
        className="w-full h-auto object-cover rounded-lg  transform group-hover:scale-105 transition-transform duration-300"/>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 group-hover:opacity-30 rounded-lg transition-opacity duration-300"></div>
    </div>
  </div>
</div>

      {/* Second Section */}
      <div className="flex flex-col md:flex-row w-full bg-white pt-10 px-6 md:px-12">

  {/* Image Section */}
  <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start space-y-6">
    <div className="relative w-full sm:w-48 lg:w-96 group">
      <img 
        src={guru3} 
        alt="Guru Image 1" 
        className="w-full h-auto object-cover rounded-lg shadow-xl transform group-hover:scale-105 transition-all duration-300"/>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 group-hover:opacity-30 rounded-lg transition-opacity duration-300">
      </div>
    </div>
    <div className="relative w-full sm:w-48 lg:w-96 group">
      <img 
        src={guru4} 
        alt="Guru Image 2" 
        className="w-full h-auto object-cover rounded-lg shadow-xl transform group-hover:scale-105 transition-all duration-300"/>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 group-hover:opacity-30 rounded-lg transition-opacity duration-300"></div>
    </div>
  </div>

  {/* Text Section */}
  <div className="w-full md:w-1/2 text-black px-6 md:ml-16 mb-6 md:mb-0">
    <p className="text-base sm:text-lg md:text-2xl leading-relaxed mt-4 text-gray-700 font-serif ">
      Guru Ji spreads the divine name of Hari Nama in the form of Parashurama, especially relevant in the current age of Kaliyuga. His teachings and practices aim to revive and honour the ancient traditions associated with Parashurama, promoting spiritual growth and awareness among his disciples and followers. He emphasizes the timeless values embodied by Lord Parashurama, such as righteousness, strength, and humility, encouraging his students to integrate these virtues into their daily lives.
      <br/>
      <br/>
      Beyond martial arts, Guru Ji's teachings encompass a holistic approach to personal development. He emphasizes the importance of physical strength, mental discipline, and spiritual enlightenment. His guidance helps students achieve a balanced life, integrating the virtues of martial and spiritual wisdom. Guru Ji's approach ensures that his disciples not only excel in physical combat but also grow as well-rounded individuals with a strong moral foundation.
    </p>
  </div>
</div>

{/* Third section  */}

<div className="flex flex-col md:flex-row w-full bg-white pt-10 px-6 md:px-12">
  {/* Text Section */}
  <div className="flex-1 text-black mb-6 md:mb-0">
    <p className="text-base sm:text-lg md:text-2xl leading-relaxed font-serif text-gray-700">
    Guru Ji's dedication extends to preserving the rich cultural heritage of India. By teaching Dhanurveda and performing traditional rituals, he ensures that these ancient practices continue to thrive and inspire future generations. His work not only keeps the traditions alive but also adapts them to the contemporary world, making them accessible and relevant. Guru Ji actively engages in cultural preservation efforts, participating in seminars, workshops, and community events to spread awareness about India's rich martial and spiritual legacy.<br></br>
    Guru Ji's influence is profound, touching the lives of many who seek knowledge and spiritual guidance. His efforts in reviving the practices of Dhanurveda and promoting the worship of Lord Parashurama create a bridge between the ancient and modern worlds, fostering a deeper understanding and appreciation of India's spiritual and martial legacy. Through his teachings and example, Guru Ji inspires a new generation to embrace their cultural heritage with pride and dedication, ensuring that the wisdom of the past continues to illuminate the path of the future.
    </p>
  </div>

  {/* Image Section */}
  <div className="flex-1 flex flex-col items-center md:items-start space-y-6 md:space-y-8 ">
    <div className="relative w-full sm:w-80 lg:w-96 h-auto group">
      <img 
        src={guru5} 
        alt="Guru Image 1" 
        className="w-full h-auto object-cover rounded-lg transform group-hover:scale-105 transition-transform duration-300"/>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 group-hover:opacity-30 rounded-lg transition-opacity duration-300"></div>
    </div>

    <div className="relative w-full sm:w-80 lg:w-96 h-auto group">
      <img 
        src={guru6} 
        alt="Guru Image 2" 
        className="w-full h-auto object-cover rounded-lg  transform group-hover:scale-105 transition-transform duration-300"/>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 group-hover:opacity-30 rounded-lg transition-opacity duration-300"></div>
    </div>
  </div>
</div>

<div className='w-full mt-10'>
  <img src={guru7} alt="" className="w-full h-auto" />
</div>

<div className="w-full p-6">
  <h1 className="text-4xl font-bold mb-4 text-center text-red-700">BLOG</h1>
  
  {/* Flex Container for Images */}
  <div className="flex flex-wrap gap-6 justify-center">
    
    {/* Image 1 with Title */}
    <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 flex flex-col items-center bg-yellow-200 p-4 rounded-lg">
      <h2 className="text-lg font-bold mb-2 text-red-700">KHADGA VIDYA CAMPS</h2>
      <img 
        src={guru8} 
        alt="Image 1" 
        className="w-full h-auto object-cover rounded-lg"/>
    </div>

    {/* Image 2 with Title */}
    <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 flex flex-col items-center bg-yellow-200 p-4 rounded-lg">
      <h2 className="text-lg font-bold mb-2 text-red-700">GADHA VIDYA CAMPS</h2>
      <img 
        src={guru9}
        alt="Image 2" 
        className="w-full h-auto object-cover rounded-lg"/>
    </div>

    {/* Image 3 with Title */}
    <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 flex flex-col items-center bg-yellow-200 p-4 rounded-lg">
      <h2 className="text-lg font-bold mb-2 text-red-700">GADHA VIDYA CAMPS</h2>
      <img 
        src={guru9}
        alt="Image 3" 
        className="w-full h-auto object-cover rounded-lg"/>
    </div>

</div>

</div>



    </>
  )
}
