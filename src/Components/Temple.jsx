import React from 'react'
import templeimg from '../assets/templeimg.jpg'
import templeimg1 from '../assets/temple.png'
import templeimg2 from '../assets/temple 3.png'

export default function Temple() {
  return (
    <div className='pt-[50px] md:pt-16'>
        <div className='w-full'>
            <img src={templeimg} alt="" className='w-full bg-cover'/>
        </div>
        <div className="bg-[#ffedd2] flex justify-center items-center py-8">
  <img 
    src={templeimg1} 
    alt="Temple" 
    className="max-w-full"/>
</div>
  <p className='text-black md:text-xl text-justify pt-3 px-[15px] md:px-[60px]'> Details ISODHAN Temple, Parushurama Aradhana Mandira Tirupati Darshan Timings, ISODHAN Parashurama Temple Tirupati Timings, ISODHAN Parashurama Temple Tirupati Visiting Hours, Worship Timings, Opening & Closing Timings below.</p>

        <div className=" min-h-screen py-3">
      {/* Header Section */}
      {/* Timing Section */}
      <div className="flex flex-col md:flex-row md:justify-around px-[15px] md:px-[60px]">
        <div className="w-full md:w-1/2">
          <table className="table-auto border border-gray-400 w-full">
            <thead>
              <tr>
                <th colspan="3" className='text-center text-2xl font-bold text-red-700'>Table</th>
              </tr>
              <tr className=" font-bold text-black md:text-xl">
                <th className="border border-gray-400 px-4 py-2  ">Days</th>
                <th className="border border-gray-400 px-4 py-2 ">Temple Darshan Session</th>
                <th className="border border-gray-400 px-4 py-2">Timings</th>
              </tr>
            </thead>
            <tbody className='text-black text-lg'>
              <tr>
                <td className="border border-gray-400 px-4 py-2 text-[14px]">Daily</td>
                <td className="border border-gray-400 px-4 py-2 text-center text-[14px]">Temple Opening Timing</td>
                <td className="border border-gray-400 px-4 py-2 text-center text-[14px]">06:30 am</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2 text-[14px]">Daily</td>
                <td className="border border-gray-400 px-4 py-2 text-center text-[14px]">Morning Darshan Timings</td>
                <td className="border border-gray-400 px-4 py-2 text-center text-[14px]">07:00 to 07:30 am</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2 text-[14px]">Daily</td>
                <td className="border border-gray-400 px-4 py-2 text-center text-[14px]">Evening Darshan Timings</td>
                <td className="border border-gray-400 px-4 py-2 text-center text-[14px]">06:00 to 07:00 pm</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2 text-[14px]">Daily</td>
                <td className="border border-gray-400 px-4 py-2 text-center text-[14px]">Temple Closing Timings</td>
                <td className="border border-gray-400 px-4 text-center text-[14px]">07:15 pm</td>
              </tr>
            </tbody>
          </table>
          <div className="">
        <h2 className="text-xl font-semibold text-black mt-5 ">ISODHAN Prashurama Temple Tirupati Address Details</h2>
        <p className="text-black">
          Isodhan Dhanurveda Gurukul, <br></br> Anna Rao Circle, street, beside more super market, Srinivasa Nagar, <br></br>Tirupati, Andhra Pradesh 517501.
        </p>
      </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center items-start mt-4 md:mt-0">
        <img
  src={templeimg2} // Replace with your image URL
  alt="Temple Deity"
  className="w-full max-w-[400px] h-96 rounded-md "/>
        </div>
      </div>

      {/* Program Section */}
     <div className='px-[15px] md:px-[60px]'>
     <div className="mt-8 bg-[#ffedd2] py-6 px-3">
  <h3 className="text-center text-3xl font-bold text-red-800">TEMPLE PROGRAM</h3>
  <div className="overflow-x-auto mt-4">
    <table className="border border-black w-full text-sm sm:text-base">
      <thead>
        <tr className="text-[16px]  text-black">
          <th className="border border-gray-700 px-4 text-center text-[16px]">Seva</th>
          <th className="border border-gray-700 px-4 text-center text-[16px]">Description</th>
          <th className="border border-gray-700 px-4 text-center text-[16px]">Day</th>
          <th className="border border-gray-700 px-4 text-center text-[16px]">Frequency</th>
        </tr>
      </thead>
      <tbody>
        <tr className='text-black '>
          <td className="border border-gray-700 px-4 text-[14px]">Maha Abhishekam</td>
          <td className="border border-gray-700 px-4 text-center text-[14px]">
            Lord Parashurama with sacred water, milk curd, honey, and other offerings, performed to invoke blessings and spiritual purification.
          </td>
          <td className="border border-gray-700 px-4 text-center text-[14px]">Trayodashi (13th day of the lunar month)</td>
          <td className="border border-gray-700 px-4 text-center text-[14px]">Twice a month (on each Trayodashi)</td>
        </tr>
        <tr className='text-black'>
          <td className="border border-gray-700 px-4 text-center text-[14px]">Tulasi Archana</td>
          <td className="border border-gray-700 px-4 text-center text-[14px]">
            Special worship using sacred Tulasi (Holy basil) leaves, offered to Lord Parashurama for divine grace and protection.
          </td>
          <td className="border border-gray-700 px-4 text-center text-[14px]">Every Saturday</td>
          <td className="border border-gray-700 px-4 text-center text-[14px]">Weekly</td>
        </tr>
        {/* Add more rows as needed */}
      </tbody>
    </table>
  </div>
</div>
     </div>

    </div>

    <div className="px-4 sm:px-8 md:px-20 mb-3">
  <h1 className=" text-black text-xl sm:text-2xl font-semibold px-[15px] md:px-[60px]">
    Notes for Devotees :
  </h1>
  <p className=" text-black text-justify text-lg sm:text-xl mt-4 px-[15px] md:px-[60px]">
    Maha Abhishekam: The Rituals are performed monthly on Trayodashi, the 13th day of each lunar month. Devotees are encouraged to participate and receive blessings.
  </p>
  <p className=" text-black text-justify text-lg sm:text-xl mt-4 px-[15px] md:px-[60px]">
    Tulasi Archana: Conducted every Saturday, this ritual focuses on Tulasi offerings, considered highly auspicious and beneficial in invoking Lord Parashurama's grace.
  </p>
</div>



    </div>
  )
}
