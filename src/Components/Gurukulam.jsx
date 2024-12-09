import React from 'react'
import gurukulam from '../assets/gurukulam.jpg'
import scholar from '../assets/scholar.png'


export default function Gurukulam() {
  return (
    <div>
     <div className="w-full pt-20">
  <img 
    src={gurukulam} 
    alt="Gurukulam" 
    className="w-full h-auto object-cover" />
</div>
<div className="flex justify-center items-center w-full">
  <img 
    src={scholar} 
    alt="Scholar" 
    className="max-w-full h-auto"/>
</div>
<div className="flex items-center justify-center bg-yellow-200 text-red-700">
  <h1 className="text-3xl font-bold">DHANURVIDYA</h1>
</div>


<div className="p-4">
      {/* Regular Classes Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-black">Dhanurvidya Regular Classes</h2>
        <div className="overflow-x-auto">
          <table className="table-auto border-collapse border border-gray-300 w-full text-left">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 p-2">Class</th>
                <th className="border border-gray-300 p-2">Frequency</th>
                <th className="border border-gray-300 p-2">Session Duration</th>
                <th className="border border-gray-300 p-2">Timings</th>
                <th className="border border-gray-300 p-2">Holiday</th>
                <th className="border border-gray-300 p-2">Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-2">Dhanurvidya</td>
                <td className="border border-gray-300 p-2">Daily (Monday to Sunday)</td>
                <td className="border border-gray-300 p-2">1 to 1.5 hours per session</td>
                <td className="border border-gray-300 p-2">
                  Morning: 06:30 AM - 08:00 AM <br />
                  Evening: 05:00 PM - 06:30 PM
                </td>
                <td className="border border-gray-300 p-2">Every Ashtami and Amavasya</td>
                <td className="border border-gray-300 p-2">
                  Choose morning or evening session. Duration varies by skill level.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-4">
          <h3 className="font-bold text-xl text-black">Additional Information for Participants:</h3>
          <ul className="list-disc pl-5 mt-2">
            <li>
              <span className="font-semibold font-serif">Skill-based Duration:</span> Class duration may range from 1 to 1.5 hours,
              tailored to each participant's skill and progress.
            </li>
            <li>
              <span className="font-semibold font-serif">Flexible Timing:</span> Participants may select either the morning or
              evening session based on availability.
            </li>
            <li>
              <span className="font-semibold font-serif">Scheduled Holidays:</span> No classes are held on Ashtami (the 8th lunar
              day) and Amavasya (new moon day).
            </li>
          </ul>
        </div>
      </div>

      {/* Weekend Classes Section */}
      <div>
        <h2 className="text-xl font-bold mb-4 text-black">Dhanurvidya Weekend Classes</h2>
        <div className="overflow-x-auto">
          <table className="table-auto border-collapse border border-gray-300 w-full text-left">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 p-2">Class</th>
                <th className="border border-gray-300 p-2">Day</th>
                <th className="border border-gray-300 p-2">Session Duration</th>
                <th className="border border-gray-300 p-2">Timings</th>
                <th className="border border-gray-300 p-2">Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-2">Dhanurvidya</td>
                <td className="border border-gray-300 p-2">Saturday & Sunday</td>
                <td className="border border-gray-300 p-2">1 to 1.5 hours per session</td>
                <td className="border border-gray-300 p-2">
                  Morning: 06:30 AM - 08:30 AM <br />
                  Evening: 04:30 PM - 06:30 PM
                </td>
                <td className="border border-gray-300 p-2">
                  Choose morning or evening session based on your convenience. Session length varies by skill level.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-4">
          <h3 className="font-bold text-black text-xl">Additional Information for Participants:</h3>
          <ul className="list-disc pl-5 pt-2">
            <li>
              <span className="font-semibold font-serif">Skill-based Duration:</span> Class length may vary between 1 to 1.5 hours
              depending on the participant's progress and skill level.
            </li>
            <li>
              <span className="font-semibold font-serif">Flexible Timing:</span> You may select either the morning or evening
              session as per your preference.
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="flex items-center justify-center bg-yellow-200 text-red-700">
  <h1 className="text-3xl font-bold">GADAVIDYA</h1>
</div>

<div className="p-4">
      {/* Regular Classes Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-black">Gadavidya Regular Classes</h2>
        <div className="overflow-x-auto">
          <table className="table-auto border-collapse border border-gray-300 w-full text-left">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 p-2">Class</th>
                <th className="border border-gray-300 p-2">Frequency</th>
                <th className="border border-gray-300 p-2">Session Duration</th>
                <th className="border border-gray-300 p-2">Timings</th>
                <th className="border border-gray-300 p-2">Holiday</th>
                <th className="border border-gray-300 p-2">Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-2">Gadavidya</td>
                <td className="border border-gray-300 p-2">Daily (Monday to Sunday)</td>
                <td className="border border-gray-300 p-2">1 to 1.5 hours per session</td>
                <td className="border border-gray-300 p-2">
                  Morning: 06:30 AM - 08:00 AM <br />
                  Evening: 05:00 PM - 06:30 PM
                </td>
                <td className="border border-gray-300 p-2">Every Ashtami and Amavasya</td>
                <td className="border border-gray-300 p-2">
                  Choose morning or evening session. Duration varies by skill level.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-4">
          <h3 className="font-bold text-xl text-black">Additional Information for Participants:</h3>
          <ul className="list-disc pl-5 mt-2">
            <li>
              <span className="font-semibold font-serif">Skill-based Duration:</span> Class duration may range from 1 to 1.5 hours,
              tailored to each participant's skill and progress.
            </li>
            <li>
              <span className="font-semibold font-serif">Flexible Timing:</span> Participants may select either the morning or
              evening session based on availability.
            </li>
            <li>
              <span className="font-semibold font-serif">Scheduled Holidays:</span> No classes are held on Ashtami (the 8th lunar
              day) and Amavasya (new moon day).
            </li>
          </ul>
        </div>
      </div>

      {/* Weekend Classes Section */}
      <div>
        <h2 className="text-xl font-bold mb-4 text-black">Gadavidya Weekend Classes</h2>
        <div className="overflow-x-auto">
          <table className="table-auto border-collapse border border-gray-300 w-full text-left">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 p-2">Class</th>
                <th className="border border-gray-300 p-2">Day</th>
                <th className="border border-gray-300 p-2">Session Duration</th>
                <th className="border border-gray-300 p-2">Timings</th>
                <th className="border border-gray-300 p-2">Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-2">Gadavidya</td>
                <td className="border border-gray-300 p-2">Saturday & Sunday</td>
                <td className="border border-gray-300 p-2">1 to 1.5 hours per session</td>
                <td className="border border-gray-300 p-2">
                  Morning: 06:30 AM - 08:30 AM <br />
                  Evening: 04:30 PM - 06:30 PM
                </td>
                <td className="border border-gray-300 p-2">
                  Choose morning or evening session based on your convenience. Session length varies by skill level.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-4">
          <h3 className="font-bold text-black text-xl">Additional Information for Participants:</h3>
          <ul className="list-disc pl-5 pt-2">
            <li>
              <span className="font-semibold font-serif">Skill-based Duration:</span> Class length may vary between 1 to 1.5 hours
              depending on the participant's progress and skill level.
            </li>
            <li>
              <span className="font-semibold font-serif">Flexible Timing:</span> You may select either the morning or evening
              session as per your preference.
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="flex flex-col items-center bg-gray-100 p-6">
  {/* Address Section */}
  <div className="text-center bg-yellow-100 p-4 rounded-t-md w-full">
    <h2 className="text-red-800 text-3xl font-bold uppercase mb-2">Address</h2>
    <h3 className="text-2xl font-bold text-red-800">Isodhan Dhanurveda Gurukulam</h3>
    <p className="text-xl text-black font-bold mt-2">
      Near Anna Rao Circle, Next to More Supermarket,<br></br> Shantinagar, Khadi Colony, Tirupati, Andhra Pradesh 517501
    </p>
  </div>

  {/* Contact Section */}
  <div className="bg-white p-4 text-center w-full">
  <h3 
  className="
    text-red-800 
    font-bold 
    text-2xl 
    md:text-3xl 
    lg:text-4xl 
    text-center 
    leading-snug 
    px-2 md:px-4"
>
  Contact: +91 91542 64942 | +91 9849 139115
</h3>

<div 
  className="
    bg-yellow-400 
    text-sm 
    md:text-base 
    rounded-md 
    py-3 
    px-5 
    flex 
    flex-col 
    md:flex-row 
    items-center 
    justify-center 
    gap-3 
    mt-4
  "
>
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
    alt="WhatsApp Icon"
    className="h-8 w-8 md:h-10 md:w-10"
  />
  <p 
    className="
      text-red-800 
      font-bold 
      text-center 
      text-base 
      md:text-lg 
      leading-snug
    "
  >
    WhatsApp available for inquiries at +91 91542 64942
  </p>
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
    alt="WhatsApp Icon"
    className="h-8 w-8 md:h-10 md:w-10"
  />
</div>

  </div>

  {/* Map Section */}
  <div className="relative w-full">
    <img
      src="https://cache.careers360.mobi/media/presets/640X300/colleges/staticmap/2022/4/27/40775.png" // Replace with actual map image
      alt="Map"
      className="w-full h-auto object-cover rounded-b-md"
    />
  </div>
</div>



    </div>
  )
}
