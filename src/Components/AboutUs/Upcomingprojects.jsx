import React from 'react';
import img from '../../assets/Upcoming.jpg';
import temple1 from '../../assets/temple1.jpg'
import project from '../../assets/images.png'
import flower from '../../assets/flower.png'
import project1 from '../../assets/patti.png'
import hyderabad from '../../assets/hyderabad1.PNG'
import temple2 from '../../assets/temple2.jpg'
import temple3 from '../../assets/temple3.jpg'
import reviving from '../../assets/revivingdhanur.png'
import temple4 from '../../assets/parshu1.jpg'
import movement from '../../assets/movement.png'
import projectss from '../../assets/projectss.png'
import tirupati1 from '../../assets/tirupati.png'

export default function Upcomingprojects() {
  return (
    <div className="w-full pt-14">
      <div className="w-full">
        <img 
          src={img} 
          alt="Upcoming Projects" 
          className="w-full h-auto object-cover" />
      </div>
      <div className="flex justify-center items-center w-full ">
  <img 
    src={project} 
    alt="Project" 
    className="w-[500px] object-cover" />
</div>
<div className="flex justify-center items-center w-full px-3">
  <img 
    src={projectss} 
    alt="Project" 
    className="w-full  h-auto object-cover rounded-md"
  />
</div>



      <div>
      <div className="flex justify-center items-center w-full mt-10">
  <img 
    src={tirupati1} 
    alt="Tirupati" 
    className="w-full max-w-[500px] h-auto object-cover"
  />
</div>
     
        <p className='font-serif ml-10 text-xl'>The lord Parashurama Temple and Dhanurveda Gurukul project in Tirupati is a groundbreaking initiative to revive India's ancient martial arts and archery traditions from the Dhanurveda. With a full-stone lord Parashurama Temple as its centerpiece, crafted in line with Shilpashastra, this project offers a holistic Gurukul education in martial arts, spirituality, and intellect. By promoting Hari Nama and cultural heritage, it attracts pilgrims and scholars, blending spirituality with physical training for learning experience.</p>
      </div>
      <div className="relative w-full mt-10">
  {/* Image */}
  <img 
    src={temple1} 
    alt="Upcoming Projects" 
    className="w-full h-auto object-cover"
  />

  {/* Overlapping Button */}
  <div className="absolute bottom-5 left-5">
    <button className="px-6 sm:px-8 lg:px-10 py-2 bg-yellow-400 text-red-700 text-base sm:text-lg lg:text-xl font-semibold rounded-lg shadow-lg hover:bg-yellow-500 transition duration-300">
      DONATE NOW
    </button>
  </div>
</div>


<div className="flex flex-wrap items-center justify-between w-full bg-yellow-200">
  {/* Left Image */}
  <div className="w-full md:w-1/3 flex justify-center mb-4">
    <img 
      src={flower} 
      alt="Flower" 
      className="w-full h-auto max-w-[200px] md:max-w-[250px] lg:max-w-[200px]" 
    />
  </div>

  {/* Centered Content */}
  <div className="w-full md:w-1/3 flex justify-center text-center mb-4">
    <h1 className="text-xl md:text-xl lg:text-2xl text-red-700 font-bold line-clamp-3">
      "A TEMPLE DONATION BRINGS SPIRITUAL WEALTH, BLESSING YOU AND YOUR CHILDREN WITH LASTING PUNYA"
    </h1>
  </div>

  {/* Right Image */}
  <div className="w-full md:w-1/3 flex justify-center mb-4">
    <img 
      src={flower} 
      alt="Flower" 
      className="w-full h-auto max-w-[200px] md:max-w-[250px] lg:max-w-[200px]" 
    />
  </div>
</div>

<div className="w-full">
  <img src={project1} alt="Project" className="w-full object-cover" />
</div>

<div className="flex flex-col items-center w-full px-4 space-y-6 md:space-y-8 bg-yellow-200">
  {/* Centered Image */}
  <div className="w-full max-w-[500px]">
    <img 
      src={hyderabad} 
      alt="Project" 
      className="w-full h-auto object-cover rounded-lg" 
    />
  </div>

  {/* Responsive Content */}
  <div className=" md:text-left">
    <p className="text-base md:text-lg lg:text-xl text-black font-serif mb-10">
      The ISODHAN Foundation's Gurukul Temple in Hyderabad is a sacred space for seekers of spiritual and personal growth, blending devotion with the ancient art of Dhanurveda. Rooted in Lord Hari's teachings, the temple offers Moksha Marga, the path to liberation, through meditation, worship, and martial training. Support this initiative to revive timeless wisdom, fostering resilience and enlightenment in future generations. Join us and contribute to a legacy of strength and devotion.
    </p>
  </div>
</div>
<div className="relative w-full">
  {/* Full-Width Responsive Image */}
  <img 
    src={temple2} 
    alt="Temple" 
    className="w-full h-auto object-cover"
  />

  {/* Overlapping Button on Left */}
  <div className="absolute bottom-5 left-5">
    <button className="px-6 py-3 bg-yellow-400 text-red-700 font-semibold rounded-lg shadow-lg hover:bg-yellow-500 transition duration-300">
      DONATE NOW
    </button>
  </div>
</div>

<div className="flex flex-wrap items-center justify-between w-full bg-yellow-200">
  {/* Left Image */}
  <div className="w-full md:w-1/3 flex justify-center mb-4">
    <img 
      src={flower} 
      alt="Flower" 
      className="w-full h-auto max-w-[200px] md:max-w-[250px] lg:max-w-[200px]" 
    />
  </div>

  {/* Centered Content */}
  <div className="w-full md:w-1/3 flex justify-center text-center mb-4">
  <h1 className="text-lg md:text-xl lg:text-2xl xl:text-xl text-red-800 font-bold line-clamp-none text-center px-4">
  "BE PART OF A LEGACY THAT UNITES STRENGTH AND DEVOTION - SUPPORT THE GURUKUL TEMPLE IN REVIVING ANCIENT WISDOM FOR FUTURE GENERATIONS"
</h1>

  </div>

  {/* Right Image */}
  <div className="w-full md:w-1/3 flex justify-center mb-4">
    <img 
      src={flower} 
      alt="Flower" 
      className="w-full h-auto max-w-[200px] md:max-w-[250px] lg:max-w-[200px]" 
/>
  </div>
</div>
<div className="w-full">
  <img src={project1} alt="Project" className="w-full object-cover" />
</div>


<div className="flex flex-col items-center w-full px-4 space-y-6 md:space-y-8 bg-yellow-200">
  {/* Centered Image */}
  <div className="w-full max-w-[500px]">
    <img 
      src={reviving} 
      alt="Project" 
      className="w-full h-auto object-cover rounded-lg"/>
  </div>

  {/* Responsive Content */}
  <div className=" md:text-left">
    <p className="text-base md:text-lg lg:text-xl text-black font-serif mb-10">
    The ISODHAN Foundation is revitalizing the ancient art of "Dhanurveda, the Vedic tradition of martial arts and archery, through the Dhanurveda Project. This initiative aims to preserve, teach, and promote these timeless skills, integrating physical discipline with spiritual growth. By fostering knowledge and practice of these techniques, the foundation seeks to inspire a new generation to reconnect with India's rich heritage of warrior wisdom, values, and traditional self-defense arts.
    </p>
  </div>
</div>
<div className="relative w-full">
  {/* Full-Width Image */}
  <img src={temple3} alt="" className="w-full h-auto object-cover" />

  {/* Overlapping Button */}
  <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2">
    <button className="px-6 py-3 bg-yellow-400 text-red-700 font-semibold rounded-lg shadow-lg hover:bg-yellow-500 transition duration-300">
      DONATE NOW
    </button>
  </div>
</div>
<div className="flex flex-wrap items-center justify-center w-full bg-yellow-200 px-4">
  {/* Left Image */}
  <div className="w-full md:w-1/3 flex justify-center mb-4">
    <img 
      src={flower} 
      alt="Flower" 
      className="w-full h-auto max-w-[200px] md:max-w-[250px] lg:max-w-[200px]" 
    />
  </div>

  {/* Centered Content */}
  <div className="w-full md:w-1/3 flex justify-center text-center mb-4 px-4">
    <h1 className="text-lg md:text-xl lg:text-2xl xl:text-xl text-red-800 font-bold line-clamp-none">
      "REVIVING DHANURVEDA IS MORE THAN TEACHING MARTIAL ARTS, IT IS RECONNECTING WITH THE ESSENCE OF INDIA'S WARRIOR WISDOM AND ANCESTRAL STRENGTH"
    </h1>
  </div>

  {/* Right Image */}
  <div className="w-full md:w-1/3 flex justify-center mb-4">
    <img 
      src={flower} 
      alt="Flower" 
      className="w-full h-auto max-w-[200px] md:max-w-[250px] lg:max-w-[200px]" 
    />
  </div>
</div>

<div className="w-full">
  <img src={project1} alt="Project" className="w-full object-cover" />
</div>
<div className="flex flex-col items-center w-full px-4 space-y-6 md:space-y-8 bg-yellow-200">
  {/* Centered Image */}
  <div className="w-full max-w-[500px]">
    <img 
      src={movement} 
      alt="Project" 
      className="w-full h-auto object-cover rounded-lg"/>
  </div>

  {/* Responsive Content */}
  <div className=" md:text-left">
    <p className="text-base md:text-lg lg:text-xl text-black font-serif mb-10">
    "Under the guidance of Sri Sri Sri Vibhakar Tiwari Guru Ji, the ISODHAN Foundation and Parashurama movement revive the teachings of Lord Parashurama, blending devotion with the ancient martial art of Dhanurveda. Through the mantra 'Om Namo Bhagavate Parashuramaya,' devotees are called to follow Moksha Margam, the path to liberation. Guru Ji inspires seekers to cleanse past karma, embody righteousness, and strengthen both body and spirit through disciplined worship and inner resilience."
    </p>
  </div>
</div>
<div className="relative w-full">
  {/* Full-Width Image */}
  <img src={temple4} alt="" className="w-full h-auto object-cover" />

  {/* Overlapping Button */}
  <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2">
    <button className="px-6 py-3 bg-yellow-400 text-red-700 font-semibold rounded-lg shadow-lg hover:bg-yellow-500 transition duration-300">
      DONATE NOW
    </button>
  </div>
</div>
<div className="flex flex-wrap items-center justify-center w-full bg-yellow-200 px-4">
  {/* Left Image */}
  <div className="w-full md:w-1/3 flex justify-center mb-4">
    <img 
      src={flower} 
      alt="Flower" 
      className="w-full h-auto max-w-[200px] md:max-w-[250px] lg:max-w-[200px]" 
    />
  </div>

  {/* Centered Content */}
  <div className="w-full md:w-1/3 flex justify-center text-center mb-4 px-4">
    <h1 className="text-lg md:text-xl lg:text-2xl xl:text-xl text-red-800 font-bold line-clamp-none">
      "THE PARASHURAMA MOVEMENT ENCOURAGES INDIVIDUALS TO PRACTICE DISCIPLINED WORSHIP AND MEDITATION, ALIGNING THEIR LIVES WITH JUSTICE AND INNER PEACE."
    </h1>
  </div>

  {/* Right Image */}
  <div className="w-full md:w-1/3 flex justify-center mb-4">
    <img 
      src={flower} 
      alt="Flower" 
      className="w-full h-auto max-w-[200px] md:max-w-[250px] lg:max-w-[200px]" 
    />
  </div>
</div>







    </div>
  );
}
