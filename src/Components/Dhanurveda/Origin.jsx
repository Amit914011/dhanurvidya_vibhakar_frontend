import React from 'react'
import dhanurvidya from '../../assets/dhanurvidya.png'
import origin from '../../assets/origin.png'
import saptavidya from '../../assets/saptavidya.png'
import arrow from '../../assets/arrow.png'
import arrow1 from '../../assets/arrow1.png'
import dhanurbanner from '../../assets/dhanurbanner.png'
import camps from '../../assets/camps.png'
import guru8 from '../../assets/pic8.jpg'
import guru9 from '../../assets/pic2.jpg'
import relatedprg from '../../assets/relatedprg.png'
import relatedblog from '../../assets/relatedblog.png'
import icons from '../../assets/icons.png'
export default function Origin() {
  return (
    <div className='pt-20'>
      <div className="w-full text-center ">
  {/* Full-Width Responsive Image */}
  <img 
    src={dhanurvidya} 
    alt="Dhanurvidya Origin" 
    className="w-full h-auto object-cover" 
  />
</div>
<div className="flex justify-center items-center w-full px-4">
  {/* Centered Responsive Image */}
  <img 
    src={origin} 
    alt="Origin" 
    className="w-full max-w-[600px] h-auto object-contain rounded-lg" />
</div>

<section className="bg-white text-gray-900 p-6 sm:p-12">
      {/* Content Container */}
      <div className="flex flex-col sm:flex-row items-center gap-6">
        {/* Text Section */}
        <div className="flex-1">
          <p className="text-justify font-serif text-xl">
          The Vedic corpus is categorized into a hierarchy that first begins with the infallible. Sruti, which is said to be eternal and unchanged Divine knowledge that is thought to be as sacred as the audible form of God Himself. The Vedas were not recorded in physical script; rather, they have been passed down generation after generation via a traditional Guru-Sishya paramapara. At the start of the Kali Yuga, sage Krishna Dwaipayana (more popularly known as Veda Vyasa, or the "Compiler of the Vedas"), segregated the Sruti and trained disciples who would each be responsible for the propagation of their respective sakha or branch of Vedic texts. The "four Vedas came to be known as the #g. Yajur, Sama, and the Atharvana. Each of the four Vedas had their own branches of Bramhana, Aranyaka, Samhita, Upanishads, and even associated Upavedas (ie.. traditional applied knowledge). The four Upavedas are Ayurveda (associated with the ig Vedal, Dhanurveda) (associated with the Yajur Vedal, Gandharvaveda) (associated with the Sama Veda), and either Arthashaastra or Stapathyaveda (associated with the Atharvana Veda).
          </p>
        </div>

        {/* Image Section */}
        <div className="flex-1 flex justify-center">
          <img
            src={arrow}
            alt="Vedic art"
            className="rounded-lg shadow-md max-w-full"/>
        </div>
      </div>
    </section>
    <section className="bg-white text-gray-900 p-6 sm:p-12">
        
      {/* Content Container */}
      <div className="flex flex-col sm:flex-row items-center gap-6">
         {/* Image Section */}
         <div className="flex-1 flex justify-center">
          <img
            src={arrow1}
            alt="Vedic art"
            className="rounded-lg shadow-md max-w-full"/>
        </div>
        {/* Text Section */}
        <div className="flex-1">
          <p className="text-justify font-serif text-xl">
          Dhanurveda is literally translated as "the knowledge of the bow", with "Dhanu" meaning bow and "Veda" meaning knowledge. One can find this classical martial art mentioned time and time again in ancient Vedic literature, such as the Ithihaasas (namely, the Mahabharatam and Ramayanam) and Puraanas. Dhanurveda seemed to have served the purpose of training warriors in warfare and protecting society from animals/enemies; however, it also outlined yuddha neethi, or the morals of combat in the context of a civilization that placed Dharma, or righteousness, at the forefront of their societal ideals. Thus, it was ensured that those who wielded great physical fortitude and divine weapons had an equally strong sense of wellbeing and mental health so as to be responsible with their strengths.
          </p>
        </div>  
      </div>
    </section>

<div>
    <p className='font-serif text-xl'>Dhanurveda included in it the knowledge of shastras (i.e., conventional weapons) and astras (i.e., divine weapons yielding supernatural effects). While the knowledge of astraas has all but disappeared in the Kali Yuga and is seldom spoken of to the masses, our mission at ISVA is to revive the knowledge of conventional weapons. The seven conventional weapons are: Dhanus (Bow), Khadga (Sword), Kuntha (Spear), Gada (Mace), Chakra (Discus), Kshurika (Dagger) and Malla (Wrestling). The learning of each weapon involves unique postures, forms and techniques that are vital to the evolution of the practitioner's technique and individual personality. Today, while Dhanurveda has been largely lost, its impact can be seen on later styles of martial arts that were developed in India such as Varma Kalai, Gatka, Silambam, Mardani Khel, Kalaripayattu and Kusthi- which have themselves influenced and shaped foreign styles of martial arts such as Kung Fu. Truly speaking, Dhanurveda must be considered 'the mother of all martial arts'.</p>
</div>
<div className="flex justify-center items-center w-full px-4">
  {/* Centered Responsive Image */}
  <img 
    src={saptavidya} 
    alt="Origin" 
    className="w-full max-w-[600px] h-auto object-contain rounded-lg" />
</div>
<div className="relative w-full h-64 sm:h-72 md:h-80 lg:h-96">
  {/* Full-Width Image */}
  <img 
    src={dhanurbanner} 
    alt="Banner" 
    className="w-full h-full object-cover"
  />

  {/* Overlapping Content */}
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="text-white px-6 py-4 rounded-md text-center max-w-[90%] md:max-w-[70%]">
      <p className="text-2xl font-bold mt-2">
        "The bow (dhanus), the discus (kunta), the sword (khadga), the knife (ksurika), and the mace (gada) - the seventh is hand-to-hand combat (bahuyuddha). Thus, there are seven forms of battle."
      </p>
    </div>
  </div>
</div>
<div className="w-full">
  <img src={icons} alt="Icon" className="w-full h-auto" />
</div>

<div className="flex justify-center items-center w-full px-4">
  {/* Centered Responsive Image */}
  <img 
    src={camps} 
    alt="Origin" 
    className="w-full max-w-[600px] h-auto object-contain rounded-lg" />
</div>
<div className="flex flex-wrap gap-6 justify-center">
  {/* Image 1 with Title and Button */}
  <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 flex flex-col items-center bg-yellow-200 p-4 rounded-lg">
    <h2 className="text-lg font-bold mb-2 text-red-700">KHADGA VIDYA CAMPS</h2>
    <img 
      src={guru8} 
      alt="Image 1" 
      className="w-full h-auto object-cover rounded-lg mb-4"/>
    <button className="px-4 py-2  text-black rounded-md text-xl font-bold transition duration-300">
Learn More    </button>
  </div>

  {/* Image 2 with Title and Button */}
  <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 flex flex-col items-center bg-yellow-200 p-4 rounded-lg">
    <h2 className="text-lg font-bold mb-2 text-red-700">GADHA VIDYA CAMPS</h2>
    <img 
      src={guru9}
      alt="Image 2" 
      className="w-full h-auto object-cover rounded-lg mb-4"/>
    <button className="px-4 py-2  text-black rounded-md text-xl font-bold transition duration-300">
Learn More    </button>
  </div>

  {/* Image 3 with Title and Button */}
  <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 flex flex-col items-center bg-yellow-200 p-4 rounded-lg">
    <h2 className="text-lg font-bold mb-2 text-red-700">GADHA VIDYA CAMPS</h2>
    <img 
      src={guru9}
      alt="Image 3" 
      className="w-full h-auto object-cover rounded-lg mb-4"/>
    <button className="px-4 py-2  text-black rounded-md text-xl font-bold transition duration-300">
      Read More
    </button>
  </div>
</div>
<div className="flex justify-center items-center w-full px-4">
  {/* Centered Responsive Image */}
  <img 
    src={relatedprg} 
    alt="Origin" 
    className="w-full max-w-[600px] h-auto object-contain rounded-lg" />
</div>

<div className="flex flex-wrap gap-6 justify-center">
  {/* Image 1 with Title and Button */}
  <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 flex flex-col items-center bg-yellow-200 p-4 rounded-lg">
    <h2 className="text-lg font-bold mb-2 text-red-700">KHADGA VIDYA CAMPS</h2>
    <img 
      src={guru8} 
      alt="Image 1" 
      className="w-full h-auto object-cover rounded-lg mb-4"/>
    <button className="px-4 py-2  text-black rounded-md text-xl font-bold transition duration-300">
Learn More    </button>
  </div>

  {/* Image 2 with Title and Button */}
  <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 flex flex-col items-center bg-yellow-200 p-4 rounded-lg">
    <h2 className="text-lg font-bold mb-2 text-red-700">GADHA VIDYA CAMPS</h2>
    <img 
      src={guru9}
      alt="Image 2" 
      className="w-full h-auto object-cover rounded-lg mb-4"/>
    <button className="px-4 py-2  text-black rounded-md text-xl font-bold transition duration-300">
Learn More    </button>
  </div>

  {/* Image 3 with Title and Button */}
  <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 flex flex-col items-center bg-yellow-200 p-4 rounded-lg">
    <h2 className="text-lg font-bold mb-2 text-red-700">GADHA VIDYA CAMPS</h2>
    <img 
      src={guru9}
      alt="Image 3" 
      className="w-full h-auto object-cover rounded-lg mb-4"/>
    <button className="px-4 py-2  text-black rounded-md text-xl font-bold transition duration-300">
      Read More
    </button>
  </div>
</div>

<div className="flex justify-center items-center w-full px-4">
  {/* Centered Responsive Image */}
  <img 
    src={relatedblog} 
    alt="Origin" 
    className="w-full max-w-[600px] h-auto object-contain rounded-lg" />
</div>
<div className="flex flex-wrap gap-6 justify-center">
  {/* Image 1 with Title and Button */}
  <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 flex flex-col items-center bg-yellow-200 p-4 rounded-lg">
    <h2 className="text-lg font-bold mb-2 text-red-700">KHADGA VIDYA CAMPS</h2>
    <img 
      src={guru8} 
      alt="Image 1" 
      className="w-full h-auto object-cover rounded-lg mb-4"/>
    <button className="px-4 py-2  text-black rounded-md text-xl font-bold transition duration-300">
Learn More    </button>
  </div>

  {/* Image 2 with Title and Button */}
  <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 flex flex-col items-center bg-yellow-200 p-4 rounded-lg">
    <h2 className="text-lg font-bold mb-2 text-red-700">GADHA VIDYA CAMPS</h2>
    <img 
      src={guru9}
      alt="Image 2" 
      className="w-full h-auto object-cover rounded-lg mb-4"/>
    <button className="px-4 py-2  text-black rounded-md text-xl font-bold transition duration-300">
Learn More    </button>
  </div>

  {/* Image 3 with Title and Button */}
  <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 flex flex-col items-center bg-yellow-200 p-4 rounded-lg">
    <h2 className="text-lg font-bold mb-2 text-red-700">GADHA VIDYA CAMPS</h2>
    <img 
      src={guru9}
      alt="Image 3" 
      className="w-full h-auto object-cover rounded-lg mb-4"/>
    <button className="px-4 py-2  text-black rounded-md text-xl font-bold transition duration-300">
      Read More
    </button>
  </div>
</div>

<div>
    
</div>

    </div>
  )
}
