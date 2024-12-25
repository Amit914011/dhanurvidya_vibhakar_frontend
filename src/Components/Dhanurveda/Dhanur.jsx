
import React from 'react'
import dhanurvidya1 from '../../assets/dhanurvidya1.jpg'
import origin1 from '../../assets/origin.png'
import arrow from '../../assets/dhanurvidya image 1.jpg'
import dhanurbanner from '../../assets/dhanurbanner.png'
import benefits from '../../assets/benefits.png'
import arrow2 from '../../assets/arrow.png'
import program from '../../assets/programs.png'
import guru8 from '../../assets/pic8.jpg'
import guru9 from '../../assets/pic2.jpg'
import relatedprg from '../../assets/relatedprg.png'
import ishdhan from '../../assets/Ishdhanicon.png'
import dhanurvidyaguruji from '../../assets/guruji4.jpg'
import dhanurvidya from '../../assets/dhanurvidya image 3.jpg'
import dhanurvidyaram from '../../assets/dhanurvidya ram image.png'
import day3 from '../../assets/3 day residentail camps.jpg'
import day5 from '../../assets/5 day residentail camps.jpg'
import day7 from '../../assets/7 day residentail camps.jpg'
import day13_1 from '../../assets/13 days dhanurvidya 1.jpg'
import day13_2 from '../../assets/13 days dhanurvidya 2.jpg'
import day13_3 from '../../assets/13 days dhanurvidya 3.jpg'



export default function Dhanur() {
  return (
    <div className='pt-[60px] md:pt-16'>
     <div className="w-full">
  <img 
    src={dhanurvidya1} 
    alt="" 
    className="w-full h-auto object-cover" />
</div>
<div className="flex justify-center">
  <img 
    src={origin1} 
    alt="" 
    className=""/>
</div>
<section className="bg-white text-gray-900 px-6 sm:p-12">
      {/* Content Container */}
      <div className="flex flex-col-reverse sm:flex-row items-center gap-3">
        {/* Text Section */}
        <div className="">
          <p className="text-justify text-sm md:text-md">
          Dhanurvidya, the ancient art of archery, is the first of the saptavidyas or seven martial disciplines that make up the larger framework of Dhanurvidya, which is often revered as a foundational element of traditional Indian martial arts. Derived from the words dhanus (bow) and vidya (knowledge), Dhanurvidya is considered a sacred practice, with references dating back to the Rig Veda. In Vedic iconography, the bow is depicted as a divine weapon of the gods. Lord Shiva wields the Pinaka bow, Vishnu holds the Saranga, Rama carries the Kodhanda, and Parashurama bears the Vijaya bow, each symbolizing divine authority and strength. The association of bows with deities. underlines "Dhanurvidya's spiritual significance, beyond its application in combat.<br></br> <br></br>
According to tradition, Dhanurvidya is not just a preferred form of martial skill; it is also revered as a discipline that unites body, mind, and spirit. In ancient India, mastery over archery was considered essential for Kshatriyas, the warrior class, as it represented both military prowess and an emblem of their identity. Legendary warriors from the Mahabharata and Ramayana-such as Arjuna with his bow Gandiva, Abhimanyu with his bow Rudra, and Rama, the heroic archer of Ayodhya-demonstrated mastery over archery, embodying the valor and spiritual fortitude intrinsic to the art. Through these figures, Dhanurvidya became immortalized in Indian literature and continues to inspire martial and spiritual practices today.
          </p>
        </div>

        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src={arrow}
            alt="Vedic art"
            className="rounded-lg shadow-md max-w-full"/>
        </div>
      </div>
    </section>

    <section className="bg-white text-gray-900 px-6 sm:p-12">
  {/* Content Container */}
  <div className="flex flex-col sm:flex-row items-center gap-6">
    
    {/* Image Section - Top Image */}
    <div className=" flex flex-col justify-center md:w-[20%]">
      <img
        src={dhanurvidyaguruji}
        alt="Vedic art"
        className="rounded-lg  shadow-md max-w-full"
      />
      <img
        src={dhanurvidya}
        alt="Vedic art"
        className="rounded-lg mt-2 shadow-md max-w-full"
      />
    </div>
    

    {/* Text Section */}
    <div className="flex-1">
      <p className="text-justify text-sm  md:text-md">
        In the modern era, the symbolic meaning of the bow and arrow has transcended physical weaponry, finding new relevance in meditation and mental discipline. The Mundaka Upanishad, one of the foundational spiritual texts of Hindu philosophy, uses the bow and arrow as a metaphor for the journey toward self-realization. In this metaphor, the bow represents spiritual practices and teachings, providing a stable foundation for one's journey. The arrow symbolizes the mind, which must be sharpened, focused, and directed with precision toward a singular goal. Drawing the bow is akin to concentrating the mind, directing thoughts with clarity, and channeling internal energy toward the target. In this context, the ultimate target is self-realization or inner peace- a state of profound awareness and tranquility. Just as an archer draws his bow with steady focus and unwavering resolve, practitioners of Dhanurvidya are taught to cultivate discipline, patience, and concentration.<br /><br />
        AL ISODHAN, we are dedicated to preserving the techniques and knowledge of Dhanurvidya in its purest form. Our curriculum emphasizes mastering both the physical techniques and the meditative principles embedded within the art. Training in Dhanurvidya not only enhances strength, balance, and precision but also builds mental clarity and discipline. Practitioners learn to synchronize their breath, align their body, and harness their mental focus-qualities essential for becoming a skilled archer. The physical discipline of drawing and releasing the bow fosters mindfulness, allowing practitioners to experience a heightened sense of awareness and calm.
        Dhanurvidya was historically integral to Indian warfare, with archers playing a crucial role in long-range attacks and forming the backbone of military strategy. Beyond the battlefield, however, Dhanurvidya also guided practitioners on an inner journey toward self-discipline and insight. In today's fast-paced world, the principles of Dhanurvidya are as relevant as ever, offering a path to physical mastery and inner peace. Interested in experiencing this powerful tradition firsthand? Register with ISODHAN to learn Dhanurvidya, and join us in preserving an art that has shaped warriors and seekers alike for centuries.
      </p>
    </div>
  </div>
</section>
<div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-48">
  {/* Full-Width Image */}
  <img 
    src={dhanurbanner} 
    alt="Banner" 
    className="w-full h-full object-cover"
  />

  {/* Overlapping Content */}
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="text-white px-6 py-4 rounded-md text-center max-w-[90%] md:max-w-[70%]">
      <p className="text-lg md:text-3xl font-semibold mt-2">
        "The art of <span className='text-yellow-500'>Dhanurvidya</span> turns fear into focus, and strength into grace."
      </p>
      <p className='text-right text-yellow-500'>Guru ji</p>
    </div>
  </div>
</div>
<div className="flex justify-center">
  <img src={benefits} alt="" />
</div>

<div className="benefits-container flex flex-col sm:flex-row gap-6 px-3">
  <div className="benefits-image flex-1 flex justify-center">
    {/* Replace the src with your own image URL */}
    <img src={dhanurvidyaram} alt="Archer Illustration" className="w-[200px] h-[220px]" />
  </div>
  <div className="benefits-list">
    <ul>
      <li>
        <strong>Enhances Strength and Agility:</strong><br></br>
         Builds strength, flexibility, balance, and core stability.
      </li>
      <li>
        <strong>Sharpens Focus:</strong> <br></br>Improves concentration, mental clarity, and decision-making.
      </li>
      <li>
        <strong>Instills Discipline:</strong> <br></br> Develops self-control, patience, and resilience.
      </li>
      <li>
        <strong>Boosts Confidence:</strong> <br></br> Fosters inner strength and self-assurance.
      </li>
      <li>
        <strong>Strengthens Mind-Body Connection:</strong> <br></br> Enhances awareness and mindfulness through precision.
      </li>
      <li>
        <strong>Cultivates Warrior Spirit:</strong> Blends strength with harmony, respect, and inner peace.
      </li>
    </ul>
  </div>
</div>

<div className='mt-20'>
  <img src={ishdhan} alt="" className="w-full"/>
</div>

<div className='flex justify-center'>
  <img src={program} alt=""/>
</div>

<div className="flex flex-wrap gap-6 justify-center p-[15px]">
  {/* Image 1 with Title and Button */}
  <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 flex flex-col items-center bg-yellow-200 p-2 rounded-lg">
    <h2 className="text-lg font-bold mb-2 text-red-700 uppercase pb-4">3 day residential camp</h2>
    <img 
      src={day3} 
      alt="Image 1" 
      className="w-full  object-cover rounded-lg mb-4 h-[230px]"/>
    <button className="px-4  text-black rounded-md text-xl font-bold transition duration-300">
Learn More    </button>
  </div>

  {/* Image 2 with Title and Button */}
  <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 flex flex-col items-center bg-yellow-200 p-2 rounded-lg">
    <h2 className="text-lg font-bold mb-2 text-red-700 uppercase pb-4 ">5 day residentail camp</h2>
    <img 
      src={day5}
      alt="Image 2" 
      className="w-full h-[230px] object-cover rounded-lg mb-4"/>
    <button className="px-4  text-black rounded-md text-xl font-bold transition duration-300">
Learn More    </button>
  </div>

  {/* Image 3 with Title and Button */}
  <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 flex flex-col items-center p-2 bg-yellow-200 rounded-lg">
    <h2 className="text-lg font-bold mb-2 text-red-700 uppercase text-center">7 day residentail camp chala chala (level-1)</h2>
    <img 
      src={day7}
      alt="Image 3" 
      className="w-full h-auto object-cover rounded-lg mb-4"/>
    <button className="px-4  text-black rounded-md text-xl font-bold transition duration-300">
      Read More
    </button>
  </div>
</div>

<div className='text-center text-red-700 font-bold text-xl md:text-2xl mt-10'>
  <h1>13 DAYS DHANURVIDYA  <br></br>ACHARYA (TEACHER) SHIKSHA VARGA</h1>
</div>

<div className="flex flex-wrap justify-center gap-6 mt-2 px-3">
  {
    [day13_1,day13_2,day13_3].map((item,index)=>(
      <div className='border border-red-700 w-[25%] h-[200px] overflow-hidden rounded-lg'>
  <img 
    src={item} 
    alt="Image 1" 
    className="w-full "
  />
    
  </div>
    ))
  }
 
</div>

<div className='flex justify-center'>
  <img src={relatedprg} alt="" />
</div>

<div className="flex flex-wrap gap-6 justify-center px-3 mb-3">
  {/* Image 1 with Title and Button */}
  <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 flex flex-col items-center bg-yellow-200 p-2 rounded-lg">
    <h2 className="text-lg font-bold mb-2 text-red-700">KHADGA VIDYA CAMPS</h2>
    <img 
      src={guru8} 
      alt="Image 1" 
      className="w-full h-[280px] object-cover rounded-lg mb-4"/>
    <button className="px-4 py-2  text-black rounded-md text-xl font-bold transition duration-300">
Learn More    </button>
  </div>

  {/* Image 2 with Title and Button */}
  <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 flex flex-col items-center bg-yellow-200 p-2 rounded-lg">
    <h2 className="text-lg font-bold mb-2 text-red-700">GADHA VIDYA CAMPS</h2>
    <img 
      src={guru9}
      alt="Image 2" 
      className="w-full h-auto object-cover rounded-lg mb-4"/>
    <button className="px-4 py-2  text-black rounded-md text-xl font-bold transition duration-300">
Learn More    </button>
  </div>

  {/* Image 3 with Title and Button */}
  <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 flex flex-col items-center bg-yellow-200 p-2 rounded-lg">
    <h2 className="text-lg font-bold mb-2 text-red-700 uppercase text-center">dhanurvidhya acharya (teacher) cmaps</h2>
    <img 
      src={day13_2}
      alt="Image 3" 
      className="w-full h-[250px] object-cover rounded-lg mb-4"/>
    <button className="px-4 py-2   text-black rounded-md text-xl font-bold transition duration-300">
      Read More
    </button>
  </div>
</div>




    </div>
  )
}
