import React, { useState } from 'react'
import careerimg from '../../assets/career.png'
import career1 from '../../assets/career1.png'
import career2 from '../../assets/career2.png'
import { useForm } from "react-hook-form";

export default function Career() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
      const onSubmit = (data) => {
        console.log("Form Data:", data);
        alert("Subscription Successful!");
      };
  return (
    <div className='pt-[60px] md:pt-16 '>
        <div>
            <img src={career2} alt="" className='w-full bg-cover' />
        </div>
        <div className="flex items-center justify-center">
    <img src={careerimg} alt="Career Image" className="max-w-full " />
</div>
<div className="mx-auto rounded-lg">
    <h1 className="text-black text-center font-bold text-2xl">
        Working with ISODHAN Foundation
    </h1>
    <p className=" text-black  text-justify leading-relaxed px-[15px] md:px-[60px]">
        Being a part of ISODHAN Foundation means joining a global spiritual initiative dedicated to preserving and promoting ancient Vedic wisdom and practices. Our organization fosters an inclusive, harmonious work environment where individuals from diverse backgrounds unite to contribute their unique talents and skills towards a shared mission of cultural and spiritual enrichment.
    </p>
    <h1 className='text-red-700 text-center font-bold text-3xl mt-10'>Present Openings</h1>
</div>

<div className="flex flex-wrap justify-center gap-6">
    <div className="flex-1 min-w-[250px] max-w-sm p-6 bg-yellow-200 rounded-lg shadow-md">
        <h1 className="text-xl text-center font-bold text-red-700">Tirupati,Andhra Pradesh</h1>
        <p className="mt-2 text-black font-bold text-center text-xl">Acharya (Teacher)</p>
        <p className='text-center text-md'>Department Sanskrit Education</p>
        <p className="mt-2 text-black font-bold text-center text-xl">Manager</p>
        <p className='text-center text-md'>Department: Facility & Utility </p>
        <h1 className='fontbold text-red-700 text-center text-lg mt-20'>For more details,mail us at <br></br> internationaldhanurveda@gmail.com</h1>
    </div>
    <div className="flex-1 min-w-[250px] max-w-sm p-6 bg-yellow-200 rounded-lg shadow-md">
    <h1 className="text-2xl font-bold text-red-700">Hyderabad, Telangana.</h1>
        <p className="mt-2 text-black font-bold text-center text-xl">Acharya (Teacher)</p>
        <p className='text-center text-md'>Department Sanskrit Education</p>
        <p className="mt-2 text-black font-bold text-center text-xl">Manager</p>
        <p className='text-center text-md'>Department: Facility & Utility </p>
        <p className="mt-2 text-black font-bold text-center text-xl">Store Executive (Sales)</p>
        <p className='text-center text-md'>Department: Retail & Merchandise </p>
        <h1 className='text-red-700 text-center text-md mt-6'>For more details,mail us at <br></br> internationaldhanurveda@gmail.com</h1>
    </div>
    <div className="flex-1 min-w-[250px] max-w-sm p-6 bg-yellow-200 rounded-lg shadow-md">
    <h1 className="text-2xl font-bold text-red-700">Indore, Madhya Pradesh</h1>
        <p className="mt-2 text-black font-bold text-center text-xl">Manager</p>
        <p className='text-center text-md'>Department: Facility & Utility </p>
        <h1 className='text-red-700 text-center text-md mt-36'>For more details,mail us at <br></br> internationaldhanurveda@gmail.com</h1>
    </div>
</div>

<p className=' text-center text-black font-semibold pt-3 pb-2 text-xl'>join ISODHAN Foundation and contribute to a movement thet bridges the <br></br> timeless wisdom of the past with the needs of today's world</p>
<div className="flex justify-center items-center  bg-gray-100">
      <div className="bg-[#ffedd2] p-6 rounded-lg shadow-lg w-full px-[200px]">
        <h2 className="text-2xl font-semibold text-center mb-4 text-red-700">Subscribe Now</h2>
        
        <form onSubmit={handleSubmit(onSubmit)} className="flex justify-center items-center gap-3">
          {/* Email Input */}
          <div className='w-full'>
            {/* <label className="block font-medium">Email</label> */}
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Enter a valid email address",
                },
              })}
              className="w-full p-2 border rounded mt-1"
              placeholder="Enter your email"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          {/* Phone Number Input */}
          <div className='w-full'>
            {/* <label className="block font-medium">Phone Number</label> */}
            <input
              type="tel"
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Enter a valid 10-digit phone number",
                },
              })}
              className="w-full p-2 border rounded mt-1"
              placeholder="Enter your phone number"
            />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
          </div>

          {/* Submit Button */}
          <button type="submit" className="w-full bg-red-700 text-white p-2 rounded hover:bg-red-900">
            Subscribe
          </button>
        </form>
      </div>
    </div>
<div>
    <img src={career1} alt="" className='w-full bg-cover'/>
</div>

      
    </div>
  )
}
