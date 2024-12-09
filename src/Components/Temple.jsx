import React from 'react'
import templeimg from '../assets/templeimg.jpg'
import templeimg1 from '../assets/templeicon.png'
import templeimg2 from '../assets/abhi2.jpg'

export default function Temple() {
  return (
    <div className='pt-20'>
        <div className='w-full'>
            <img src={templeimg} alt="" className='w-full bg-cover'/>
        </div>
        <div className="bg-yellow-200 flex justify-center items-center py-8">
  <img 
    src={templeimg1} 
    alt="Temple" 
    className="max-w-full"/>
</div>
  <p className='font-serif text-black text-xl ml-10'> Details ISODHAN Temple, Parushurama Aradhana Mandira Tirupati Darshan Timings, ISODHAN Parashurama Temple Tirupati Timings, ISODHAN Parashurama Temple Tirupati Visiting Hours, Worship Timings, Opening & Closing Timings below.</p>

        <div className=" min-h-screen p-4">
      {/* Header Section */}
      <div className="text-center">
        <h1 className="text-2xl font-bold text-red-700">Temple Darshan Session</h1>
      </div>

      {/* Timing Section */}
      <div className="flex flex-col md:flex-row md:justify-around my-6">
        <div className="w-full md:w-1/2">
          <table className="table-auto border border-gray-400 w-full">
            <thead>
              <tr className=" font-bold text-black text-xl">
                <th className="border border-gray-400 px-4 py-2 ">Days</th>
                <th className="border border-gray-400 px-4 py-2">Temple Darshan Session</th>
                <th className="border border-gray-400 px-4 py-2">Timings</th>
              </tr>
            </thead>
            <tbody className='text-black text-lg font-serif font-bold'>
              <tr>
                <td className="border border-gray-400 px-4 py-2">Daily</td>
                <td className="border border-gray-400 px-4 py-2">Temple Opening Timing</td>
                <td className="border border-gray-400 px-4 py-2">06:30 am</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">Daily</td>
                <td className="border border-gray-400 px-4 py-2">Morning Darshan Timings</td>
                <td className="border border-gray-400 px-4 py-2">07:00 to 07:30 am</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">Daily</td>
                <td className="border border-gray-400 px-4 py-2">Evening Darshan Timings</td>
                <td className="border border-gray-400 px-4 py-2">06:00 to 07:00 pm</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2">Daily</td>
                <td className="border border-gray-400 px-4 py-2">Temple Closing Timings</td>
                <td className="border border-gray-400 px-4 py-2">07:15 pm</td>
              </tr>
            </tbody>
          </table>
          <div className="">
        <h2 className="text-xl font-semibold text-black mt-5 font-serif">ISODHAN Prashurama Temple Tirupati Address Details</h2>
        <p className="text-black text-lg font-serif">
          Isodhan Dhanurveda Gurukul, <br></br> Anna Rao Circle, street, beside more super market, Srinivasa Nagar, <br></br>Tirupati, Andhra Pradesh 517501.
        </p>
      </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center items-center mt-4 md:mt-0">
        <img
  src={templeimg2} // Replace with your image URL
  alt="Temple Deity"
  className="w-full max-w-[400px] h-96 rounded-md shadow-lg"/>
        </div>
      </div>

      {/* Program Section */}
      <div className="mt-8 bg-yellow-200 px-4 py-6">
  <h3 className="text-center text-3xl font-bold text-red-800">TEMPLE PROGRAM</h3>
  <div className="overflow-x-auto mt-4">
    <table className="border border-black w-full text-sm sm:text-base md:w-3/4">
      <thead>
        <tr className="font-bold text-black text-lg sm:text-xl">
          <th className="border border-gray-700 px-4 py-2 text-left">Seva</th>
          <th className="border border-gray-700 px-4 py-2 text-left">Description</th>
          <th className="border border-gray-700 px-4 py-2 text-left">Day</th>
          <th className="border border-gray-700 px-4 py-2 text-left">Frequency</th>
        </tr>
      </thead>
      <tbody>
        <tr className='text-black font-semibold'>
          <td className="border border-gray-700 px-4 py-2">Maha Abhishekam</td>
          <td className="border border-gray-700 px-4 py-2">
            Lord Parashurama with sacred water, milk curd, honey, and other offerings, performed to invoke blessings and spiritual purification.
          </td>
          <td className="border border-gray-700 px-4 py-2">Trayodashi (13th day of the lunar month)</td>
          <td className="border border-gray-700 px-4 py-2">Twice a month (on each Trayodashi)</td>
        </tr>
        <tr className='text-black font-semibold'>
          <td className="border border-gray-700 px-4 py-2">Tulasi Archana</td>
          <td className="border border-gray-700 px-4 py-2">
            Special worship using sacred Tulasi (Holy basil) leaves, offered to Lord Parashurama for divine grace and protection.
          </td>
          <td className="border border-gray-700 px-4 py-2">Every Saturday</td>
          <td className="border border-gray-700 px-4 py-2">Weekly</td>
        </tr>
        {/* Add more rows as needed */}
      </tbody>
    </table>
  </div>
</div>

    </div>

    <div className="px-4 sm:px-8 md:px-20">
  <h1 className="font-serif text-black text-xl sm:text-2xl font-semibold">
    Notes for Devotees :
  </h1>
  <p className="font-serif text-black text-lg sm:text-xl mt-4">
    Maha Abhishekam: The Rituals are performed monthly on Trayodashi, the 13th day of each lunar month. Devotees are encouraged to participate and receive blessings.
  </p>
  <p className="font-serif text-black text-lg sm:text-xl mt-4">
    Tulasi Archana: Conducted every Saturday, this ritual focuses on Tulasi offerings, considered highly auspicious and beneficial in invoking Lord Parashurama's grace.
  </p>
</div>



    </div>
  )
}
