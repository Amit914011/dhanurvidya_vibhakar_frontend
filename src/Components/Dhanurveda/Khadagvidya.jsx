import React from 'react'
import khadagvidya from '../../assets/khadagvidya.jpg'
import origin from '../../assets/khadagvidya.png'
import origin1 from '../../assets/arrow1.png'
import dhanurbanner from '../../assets/dhanurbanner.png'
import benefits from '../../assets/benefits.png'
import arrow2 from '../../assets/arrow.png'
import program from '../../assets/programs.png'
import guru8 from '../../assets/pic8.jpg'
import guru9 from '../../assets/pic2.jpg'
import relatedprg from '../../assets/relatedprg.png'
import khadagicon from '../../assets/kadhagvidyaicon.png'



export default function Khadagvidya() {
  return (
    <div className='pt-14 lg:pt-16'>
       <div>
  <img src={khadagvidya} alt="" className="w-full h-auto" />
</div>
<div className="flex justify-center items-center">
  <img src={origin} alt=""/>
</div>

<div class="flex flex-col md:flex-row items-center md:items-start gap-4 p-4">
  <div class="flex-shrink-0">
    <img 
      src={origin1} 
      alt="Sample Image" 
      class="w-full md:w-80 h-auto object-cover rounded-lg" 
    />
  </div>
  <div class="flex-grow">
    <p class="font-serif text-black text-base md:text-lg">
    In Vedic history, the Khadga, or sword, holds a revered place as one of the two primary weapons in the Dhanurveda, the ancient Hindu science of warfare. Paired with the bow, bow, which represents skill in long-range combat, the Khadga stands for mastery in close combat, demanding precision, balance, and clarity. Esteemed not only as a weapon of physical strength but also as a symbol of profound spiritual virtues, the Khadga embodies the principi essential for upholding Dharma (righteousness) and protecting order in the universe.<br></br>
The Khadga's legendary origin, as narrated by Bhishma to Nakula in the Mahabharata, begins with the gods, or devas, who were tormented by the danavas (demons). Seeking relief from the oppression, they turned to Brahma, the Creator. Moved by their plight, Brahma performed a grand sacrificial ritual in the Himalayas, attended by sages and divine beings. Out of the sacrificial flames emerged a fierce being, radiant and awe- inspiring, with a towering form, a sharp-toothed grin, and a complexion as blue as a lotus. The being's birth caused the earth to quake, oceans to rise, and meteors to streak across the sky.<br></br>
Brahma introduced this divine being as Asi, a force destined to restore balance by destroying evil. in a flash, Asi transformed into a blazing sword, gleaming like flames, symbolizing the primal essence of all weapons to follow. Bhishma explained that Asi was created under the constellation Krittika, with Agni (fire) as its deity, (Rohini as its Gotra Ispiritual lineage), and Rudra (an aspect of Shiva) as its preceptor. Brahma proclaimed that Asi, the first weapon crafted by divine hands, would bring sure victory to its wielder, who would gain mastery over all other weapons.
    </p>
  </div>
</div>

<div class="flex flex-col md:flex-row gap-6 p-4">
  <div class="flex-1">
    <p class="text-black font-serif text-base md:text-lg">
    After its creation, Brahma entrusted the divine sword to Lord Shiva. In his fierce form, Shiva wielded Asi in battle, vanquishing the daityas (demons) and staining the earth red with his victory. The sword's journey continued as Shiva passed it to Lord Vishnu, who wielded it as Nandaka, embedding it in the Dharmik tradition as a symbol of divine justice. Over time, the Khadga became associated with other deities, like Durga, symbolizing protection, courage, and righteousness in Hindu iconography.<br></br> <br></br>
    <img 
      src={origin1} 
      alt="Image 1" 
      class="md:hidden w-full md:w-80 h-auto object-cover text-base  md:rounded-lg"/>

Yet, the Khadga's significance extends beyond its role in combat. Its razor sharp edge. represents balance, discipline, and the need for inner clarity. Mastering the Khadga requires self-control, emotional restraint, and clear thought, lest its wielder harm themselves or others. This weapon embodies discernment the ability to cut through avidya, or ignorance. In Vedic teachings, ignorance is considered the primary obstacle that prevents the soul from realizing its divine nature. Thus, the Khadga became a tool for spiritual liberation, helping seekers transcend illusions, ego, and worldly attachments, moving closer to ultimate truth.<br></br><br></br>
In Bhishma's explanation to Nakula, he emphasized that the Khadga serves not only as a weapon of justice but as a spiritual guide. It was a reminder to warriors of their divine duty to uphold Dharma, maintain balance, and serve as protectors of cosmic order. It inspired them to look beyond strength alone, embracing wisdom and responsibility in their actions. in the spiritual journey, the Khadga represented the inner struggle to cut away falsehoods and recognize one's unity with the Divine.<br></br> <br></br>
The Khadga, then, is more than a weapon. It is a symbol of wisdom, clarity, and self- realization, reminding warriors and seekers alike that true power lies not in violence, but in the pursuit of righteousness. As the "sword of discernment," it has guided countless souls on the path of truth and unity, enduring in the Vedic tradition as a profound emblem of courage, enlightenment, and divine duty.
    </p>
  </div>

  <div class="flex flex-col gap-4 ">
    <img 
      src={origin1} 
      alt="Image 1" 
      class="w-full md:w-80 h-auto object-cover hidden md:block rounded-lg"/>
    <img 
      src={origin1}
      alt="Image 2" 
      class="w-full md:w-80 h-auto object-cover rounded-lg"/>
  </div>
</div>
<div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-48">
  {/* Full-Width Image */}
  <img 
    src={dhanurbanner} 
    alt="Banner" 
    className="w-full h-full object-cover"
  />

  {/* Overlapping Content */}
  <div className="absolute inset-0 flex items-center justify-center">
  <div className="text-white px-6 py-4 rounded-md text-center max-w-[90%] md:max-w-[70%] relative">
    {/* Quote */}
    <p className="text-2xl md:text-3xl font-bold mt-2">
      "The Path of Khadga Vidya Sharpens both the blade and the mind."
    </p>

    {/* Guru ji */}
    <p className="absolute right-0 bottom-0 font-medium text-yellow-500 text-xl">
      -Guru ji
    </p>
  </div>
</div>

</div>
<div className="flex justify-center ">
  <img src={benefits} alt="" />
</div>
<div className="benefits-container flex flex-col sm:flex-row gap-6">
  <div className="benefits-image flex-1 flex justify-center px-3">
    {/* Replace the src with your own image URL */}
    <img src={arrow2} alt="Archer Illustration" className="max-w-full h-auto" />
  </div>
  <div className="benefits-list flex-1 text-base md:text-xl px-3">
    <ul>
      <li>
        <strong>Sharpens Reflexes</strong><br></br>
        Quick, Precise movements improve reaction time in close combat
      </li><br></br>
      <li>
        <strong>Improves Coordination</strong> <br></br>Builds hand-eye coordination and balance through fluid sword techniques.
      </li><br></br>
      <li>
        <strong>Increases Core Strength</strong> <br></br>Engages the core, building endurance and stability.
      </li><br></br>
      <li>
        <strong>Enhances Spatial Awareness</strong> <br></br> Developes tactial skills and judgement in dynamic situations.
      </li><br></br>
      <li>
        <strong>Fosters Emotional Control</strong> <br></br>Teaches Calmness and restraint under pressure.
      </li><br></br>
      <li>
        <strong>Instills Honor and Responsibility</strong> <br></br>Encourages respect and ethical use of skill.
      </li>
    </ul>
  </div>
</div>
<div className='mt-20'>
  <img src={khadagicon} alt="" className="w-full"/>
</div>
<div className='flex justify-center'>
  <img src={program} alt=""/>
</div>

<div className="flex flex-wrap gap-6 justify-center px-3">
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
<div className='flex justify-center'>
  <img src={relatedprg} alt="" />
</div>
<div className="flex flex-wrap gap-6 justify-center px-3 mb-5 md:mb-0">
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


    </div>
  )
}
