import React from 'react'
import gadavidya from '../../assets/gadavidya.jpg'
import origin from '../../assets/origin.png'
import origin1 from '../../assets/arrow1.png'
import origin3 from '../../assets/pic2.jpg'
import dhanurbanner from '../../assets/dhanurbanner.png'
import benefits from '../../assets/benefits.png'
import arrow2 from '../../assets/arrow.png'
import program from '../../assets/programs.png'
import guru8 from '../../assets/pic8.jpg'
import guru9 from '../../assets/pic2.jpg'
import relatedprg from '../../assets/relatedprg.png'
import ishdhan from '../../assets/Ishdhanicon.png'





export default function Gadavidya() {
  return (
    <div className='pt-20'>
       <div>
  <img src={gadavidya} alt="" className="w-full h-auto" />
</div>
<div className="flex justify-center items-center">
  <img src={origin} alt=""/>
</div>

<div class="flex flex-col md:flex-row items-center md:items-start gap-4 p-4">
 
  <div class="flex-grow">
    <p class="font-serif text-black text-lg">
    In Hindu tradition, the ancient martial science called Dhanurveda is the source of all knowledge related to warfare, weaponry, and the art of combat. Within Dhanurveda, special discipline called Gada Vidya focuses the skillful use of the gada, or mace, powerful weapon that symbolizes strength, justice, and the protection of order. Warriors trained in Gada Vidyal Vidya learn not only physical strength but also the moral responsibility of using their power to uphold dharma, or righteousness. Gada Vidya was especially respected, as the mace was considered a weapon that required great strength and discipline to wield effectively, Warriors skilled in Gada Vidya were not only feared for their power but also revered for their sense of duty and righteousness. Among the gods, Lord Vishnu is honored as the Adigadadhara, or "the original wielder of the mace, symbolizing the first and mast divine user of the gada. Vishnu's association with the mace reflects his role as the ultimate protector of the cosmos, maintaining balance and order by standing up against chaos and evil. Vishnu's mace, known as Kaumodaki unique and sacred weapon, representing not only his strength but also his commitment to justice. In Hindu iconography, Vishnu is often depicted holding Kaumodaki, ready to use it whenever the universe requires protection. His role as Adigadadhara highlights the divine responsibility that comes with power, as Vishnu uses his mace to defend righteousness and confront forces that threaten peace.
    </p>
  </div>
  <div class="flex-shrink-0">
    <img 
      src={origin1} 
      alt="Sample Image" 
      class="w-full md:w-80 h-auto object-cover rounded-lg" 
    />
  </div>
</div>

<div class="flex flex-col md:flex-row gap-6 p-4">
<div class="flex flex-col gap-4 ">
    <img 
      src={origin3} 
      alt="Image 1" 
      class="w-full md:w-80 h-auto object-cover rounded-lg"/>
    
  </div>
  <div class="flex-1">
    <p class="text-black font-serif text-lg mt-10">
    The story of Kaumodaki's creation is deeply symbolic, showing how even dark and destructive forces can be transformed into instruments of good. According to mythology, there once was a demon named Gada who possessed immense strength and was feared for his intimidating power. Lord Vishnu saw the potential to convert this destructive power into something beneficial. Disguised as a humble Brahmin, Vishnu approached Gada and asked for his bones. Moved by the sincerity of the request, Gada sacrificed himself, allowing Vishnu to take his bones. Vishvakarma, the celestial architect, then forged a powerful mace from Gada's bones, imbuing it with the demon's strength and spirit but directing it towards a righteous purpose. This mace, Kaumodaki, became Vishnu's weapon and a symbol of transformation, demonstrating that even the darkest powers can be channeled for good when wielded responsibly.
    </p>
  </div>
</div>

<div>
  <p className='font-serif text-black text-lg'>In his role as Gadadhara, or "the wielder of the mace, Vishnu uses Kaumodaki to protect the universe from chaos and evil, keeping cosmic order intact. The creation of the gada teaches that power itself is neutral-it becomes positive or negative based on how it is used. In the hands of Vishnu, the gada is a force for protection and justice, highlighting that real strength lies not just in might but in using that might with wisdom and purpose.<br></br> Beyond Vishnu, other gods and figures in Hindu mythology also wield the gada, adding layers of meaning to its significance. Lord Hanuman, for instance, carries the gada as a sign of his loyalty, courage, and devotion to Lord Rama. Hanuman's use of the mace represents his role as a protector and his dedication to righteousness. Similarly, Kubera, the god of wealth, is sometimes associated with the mace, symbolizing his role in safeguarding prosperity and abundance. <br></br>
The Mahabharata showcases the importance of the gada through characters like Bhima and Duryodhana, both highly
skilled in Gada Vidya. Bhima, known for his incredible strength, was a master of the mace, using it to defend justice.
His final battle with Duryodhana, who was also an expert mace-wielder, is one of the most famous moments in the
epic, illustrating the clash between righteous and wrongful use of power. Although both warriors were trained by
Balarama, a respected master of the mace, their fates differed based on their intentions-while Bhima's use of the
mace was for justice, Duryodhana's use was often driven by pride and ambition, leading to his downfall.<br></br> In Vedic Tradition, the gada is thus more than a weapon it is a symbol of strength, responsibility, and divine protection. Through figures like Vishnu, Hanuman, Bhima, and others, the gada reminds us that true strength is not just about physical power but about using that power to serve and protect righteousness.</p>
</div>
<h1 className='mt-10 ml-6 font-serif text-black text-xl font-bold'> Interested learn more? Register to enroll in Gadavidya today!</h1>

<div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-48 mt-10">
  {/* Full-Width Image */}
  <img 
    src={dhanurbanner} 
    alt="Banner" 
    className="w-full h-full object-cover"/>

  {/* Overlapping Content */}
  <div className="absolute inset-0 flex items-center justify-center">
  <div className="text-white px-6 py-4 rounded-md text-center max-w-[90%] md:max-w-[70%] relative">
    {/* Quote */}
    <p className="text-2xl font-bold mt-2">
      "In Gadha Vidya, a warrior learns that brute force is nothing without control ."
    </p>

    {/* Guru ji */}
    <p className="absolute right-0 bottom-0 font-medium text-yellow-500 text-xl">
      -Guru ji
    </p>
  </div>
</div>

</div>
<div className="flex justify-center">
  <img src={benefits} alt="" />
</div>
<div className="benefits-container flex flex-col sm:flex-row gap-6">
  <div className="benefits-image flex-1 flex justify-center">
    {/* Replace the src with your own image URL */}
    <img src={arrow2} alt="Archer Illustration" className="max-w-full h-auto" />
  </div>
  <div className="benefits-list flex-1 text-xl">
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
  <img src={ishdhan} alt="" className="w-full"/>
</div>
<div className='flex justify-center'>
  <img src={program} alt=""/>
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
<div className='flex justify-center'>
  <img src={relatedprg} alt="" />
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


    </div>
  )
}
