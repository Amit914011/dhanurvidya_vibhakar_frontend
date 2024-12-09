import React from 'react'
import careerimg from '../../assets/career.png'
import career1 from '../../assets/career1.png'
import career2 from '../../assets/career2.png'

export default function Career() {
  return (
    <div className='pt-20'>
        <div>
            <img src={career2} alt="" className='w-full bg-cover' />
        </div>
        <div className="flex items-center justify-center">
    <img src={careerimg} alt="Career Image" className="max-w-full " />
</div>
<div className="max-w-4xl mx-auto p-6 rounded-lg shadow-md">
    <h1 className="text-black text-center font-bold text-2xl md:text-3xl">
        Working with ISODHAN Foundation
    </h1>
    <p className="mt-4 text-black font-serif text-justify md:text-lg leading-relaxed">
        Being a part of ISODHAN Foundation means joining a global spiritual initiative dedicated to preserving and promoting ancient Vedic wisdom and practices. Our organization fosters an inclusive, harmonious work environment where individuals from diverse backgrounds unite to contribute their unique talents and skills towards a shared mission of cultural and spiritual enrichment.
    </p>
    <h1 className='text-red-700 text-center font-bold text-3xl mt-10'>Present Openings</h1>
</div>

<div className="flex flex-wrap justify-center gap-6 p-4">
    <div className="flex-1 min-w-[250px] max-w-sm p-6 bg-yellow-200 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-red-700">Tirupati,Andhra Pradesh</h1>
        <p className="mt-2 text-black font-bold text-center text-xl">Acharya (Teacher)</p>
        <p className='text-center text-lg'>Department Sanskrit Education</p>
        <p className="mt-2 text-black font-bold text-center text-xl">Manager</p>
        <p className='text-center text-lg'>Department: Facility & Utility </p>
        <h1 className='font-bold text-red-700 text-center text-lg mt-20'>For more details,mail us at <br></br> internationaldhanurveda@gmail.com</h1>
    </div>
    <div className="flex-1 min-w-[250px] max-w-sm p-6 bg-yellow-200 rounded-lg shadow-md">
    <h1 className="text-2xl font-bold text-red-700">Hyderabad, Telangana.</h1>
        <p className="mt-2 text-black font-bold text-center text-xl">Acharya (Teacher)</p>
        <p className='text-center text-lg'>Department Sanskrit Education</p>
        <p className="mt-2 text-black font-bold text-center text-xl">Manager</p>
        <p className='text-center text-lg'>Department: Facility & Utility </p>
        <p className="mt-2 text-black font-bold text-center text-xl">Store Executive (Sales)</p>
        <p className='text-center text-lg'>Department: Retail & Merchandise </p>
        <h1 className='font-bold text-red-700 text-center text-lg mt-6'>For more details,mail us at <br></br> internationaldhanurveda@gmail.com</h1>
    </div>
    <div className="flex-1 min-w-[250px] max-w-sm p-6 bg-yellow-200 rounded-lg shadow-md">
    <h1 className="text-2xl font-bold text-red-700">Indore, Madhya Pradesh</h1>
        <p className="mt-2 text-black font-bold text-center text-xl">Manager</p>
        <p className='text-center text-lg'>Department: Facility & Utility </p>
        <h1 className='font-bold text-red-700 text-center text-lg mt-36'>For more details,mail us at <br></br> internationaldhanurveda@gmail.com</h1>
    </div>
</div>

<p className=' text-center text-black font-bold text-xl'>join ISODHAN Foundation and contribute to a movement thet bridges the <br></br> timeless wisdom of the past with the needs of today's world</p>

<div>
    <img src={career1} alt="" className='w-full bg-cover'/>
</div>

      
    </div>
  )
}
