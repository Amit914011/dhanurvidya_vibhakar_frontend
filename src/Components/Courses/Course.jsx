import React from 'react'
import courseimg from '../../assets/courseimg.jpg'
import summerimg from '../../assets/summerimg.png'
import fiveday2 from '../../assets/fiveday2.jpg'

export default function Course() {
  return (
    <div className='pt-20'>
        <div>
           <img src={courseimg} alt=""  className='w-full bg-cover'/>
        </div>

        <div className="flex justify-center items-center h-full">
          <img src={summerimg} alt="Centered Image" className="max-w-full" />
       </div>
        <h1 className='text-black font-bold text-center text-xl'>Summer camp blends traditional knowledge with <br></br>modern practices, Offering a unique opportunity <br></br>for participants age 6 years puls to above</h1>

        <div className="p-4">
    <ul className="space-y-4 list-disc list-inside">
        <li className="text-lg font-bold text-black">
            Build Physical Strength and Discipline
            <p className=" text-black mt-1 font-semibold text-xl">
                Train in traditional martial arts, yoga, and warrior techniques.
            </p>
        </li>
        <li className="text-lg font-bold text-black">Gurukulam System           
             <p className="text-xl text-black font-semibold mt-1">Immersive Gurukulam learning Shastra and Spirituality.            </p>
        </li>
        <li className="text-lg font-bold text-black">Foster Spiritual Growth          
              <p className="text-xl text-black font-semibold mt-1">Immerse in teaching rooted in the values of vedic Dharma .           
 </p>
        </li>
        <li className="text-lg font-bold text-black">Traditional Dhanurveda Learning :         
              <p className="text-xl text-black font-semibold mt-1">Master the art of archery, swordsmanship,and self-defense. </p>
        </li>
        <li className="text-lg font-bold text-black">Interactive Workshops :         
              <p className="text-xl text-black font-semibold mt-1">Dive into the Synergy between spirituality and warrior ethics.</p>
        </li>
    </ul>
</div>

<h1 className='text-red-800 text-center font-bold text-2xl'>Join the Journey today!</h1>

<div className="flex flex-col items-start max-w-[300px] mx-auto md:ml-36">
    <img src={fiveday2} alt="Image 1" className="max-w-[300px] w-full h-auto"/>
    <button className="mt-4 px-8 py-1 bg-orange-500 text-black font-bold rounded-3xl">
        15-17 | Dec | 2024 <br/> Learn more
    </button>
</div>  
    </div>
  )
}
