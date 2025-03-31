import React from 'react'
import gurukulam from '../assets/gurukulam.jpg'
import scholar from '../assets/scholar.png'


export default function Gurukulam() {
  return (
    <div>
     <div className="w-full pt-[60px] md:pt-16">
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
<div className="flex items-center justify-center py-2 bg-[#ffedd2] text-red-700">
  <h1 className="text-4xl font-bold">DHANURVIDYA</h1>
</div>


<div className="p-4">
      {/* Regular Classes Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold  text-black">Dhanurvidya Regular Classes</h2>
        <div className="overflow-x-auto">
          <table className="table-auto border-collapse border border-gray-300 w-full text-left">
            <thead>
              <tr className="">
                <th className="border border-gray-300 p-2 text-[16px] text-center">Class</th>
                <th className="border border-gray-300 p-2 text-[16px] text-center">Frequency</th>
                <th className="border border-gray-300 p-2 text-[16px] text-center">Session Duration</th>
                <th className="border border-gray-300 p-2 text-[16px] text-center">Timings</th>
                <th className="border border-gray-300 p-2 text-[16px] text-center">Holiday</th>
                <th className="border border-gray-300 p-2 text-[16px] text-center">Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-2 text-[14px]">Dhanurvidya</td>
                <td className="border border-gray-300 p-2 text-[14px] w-[230px]">Daily (Monday to Sunday)</td>
                <td className="border border-gray-300 p-2 text-[14px]">1 to 1.5 hours per session</td>
                <td className="border border-gray-300 p-2 text-[14px] w-[260px]">
                  <strong>Morning:</strong> 06:30 AM - 08:00 AM <br />
                  <strong>Evening:</strong> 05:00 PM - 06:30 PM
                </td>
                <td className="border border-gray-300 p-2 text-[14px]">Every Ashtami and Amavasya</td>
                <td className="border border-gray-300 p-2 text-[14px]">
                  Choose morning or evening session. Duration varies by skill level.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-4">
          <h3 className="font-bold text-lg text-black">Additional Information for Participants:</h3>
          <ul className="list-disc pl-10 mt-2 ">
            <li>
              <span className="font-semibold ">Skill-based Duration:</span> Class duration may range from 1 to 1.5 hours,
              tailored to each participant's skill and progress.
            </li>
            <li>
              <span className="font-semibold ">Flexible Timing:</span> Participants may select either the morning or
              evening session based on availability.
            </li>
            <li>
              <span className="font-semibold ">Scheduled Holidays:</span> No classes are held on Ashtami (the 8th lunar
              day) and Amavasya (new moon day).
            </li>
          </ul>
        </div>
      </div>

      {/* Weekend Classes Section */}
      <div>
        <h2 className="text-2xl font-bold text-black">Dhanurvidya Weekend Classes</h2>
        <div className="overflow-x-auto">
          <table className="table-auto border-collapse border border-gray-300 w-full text-left">
            <thead>
              <tr className="">
                <th className="border border-gray-300 p-2 text-[16px] text-center">Class</th>
                <th className="border border-gray-300 p-2 text-[16px] text-center">Day</th>
                <th className="border border-gray-300 p-2 text-[16px] text-center">Session Duration</th>
                <th className="border border-gray-300 p-2 text-[16px] text-center">Timings</th>
                <th className="border border-gray-300 p-2 text-[16px] text-center">Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-2 text-[14px]">Dhanurvidya</td>
                <td className="border border-gray-300 p-2 text-[14px]">Saturday & Sunday</td>
                <td className="border border-gray-300 p-2 text-[14px]">1 to 1.5 hours per session</td>
                <td className="border border-gray-300 p-2 text-[14px] w-[300px]">
                 <strong> Morning:</strong> 06:30 AM - 08:30 AM <br />
                  <strong>Evening:</strong> 04:30 PM - 06:30 PM
                </td>
                <td className="border border-gray-300 p-2 text-[14px]">
                  Choose morning or evening session based on your convenience. Session length varies by skill level.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-4">
          <h3 className="font-bold text-black text-lg">Additional Information for Participants:</h3>
          <ul className="list-disc pl-5 pt-2">
            <li>
              <span className="font-bold ">Skill-based Duration:</span> Class length may vary between 1 to 1.5 hours
              depending on the participant's progress and skill level.
            </li>
            <li>
              <span className="font-bold ">Flexible Timing:</span> You may select either the morning or evening
              session as per your preference.
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="flex items-center justify-center bg-[#ffedd2] py-2 text-red-700">
  <h1 className="text-4xl font-bold">GADAVIDYA</h1>
</div>

<div className="p-4">
      {/* Regular Classes Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-black">Gadavidya Regular Classes</h2>
        <div className="overflow-x-auto">
          <table className="table-auto border-collapse border border-gray-300 w-full text-left">
            <thead>
              <tr className="">
                <th className="border border-gray-300 p-2 text-[16px] text-center">Class</th>
                <th className="border border-gray-300 p-2 text-[16px] text-center">Frequency</th>
                <th className="border border-gray-300 p-2 text-[16px] text-center">Session Duration</th>
                <th className="border border-gray-300 p-2 text-[16px] text-center">Timings</th>
                <th className="border border-gray-300 p-2 text-[16px] text-center">Holiday</th>
                <th className="border border-gray-300 p-2 text-[16px] text-center">Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-2 text-[14px]">Gadavidya</td>
                <td className="border border-gray-300 p-2 text-[14px]">Daily (Monday to Sunday)</td>
                <td className="border border-gray-300 p-2 text-[14px]">1 to 1.5 hours per session</td>
                <td className="border border-gray-300 p-2 text-[14px] w-[270px]">
                  <strong>Morning:</strong> 06:30 AM - 08:00 AM <br />
                  <strong>Evening:</strong> 05:00 PM - 06:30 PM
                </td>
                <td className="border border-gray-300 p-2 text-[14px]">Every Ashtami and Amavasya</td>
                <td className="border border-gray-300 p-2 text-[14px]">
                  Choose morning or evening session. Duration varies by skill level.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-4">
          <h3 className="font-bold text-lg text-black">Additional Information for Participants:</h3>
          <ul className="list-disc pl-5 mt-2">
            <li>
              <span className="font-bold ">Skill-based Duration:</span> Class duration may range from 1 to 1.5 hours,
              tailored to each participant's skill and progress.
            </li>
            <li>
              <span className="font-bold ">Flexible Timing:</span> Participants may select either the morning or
              evening session based on availability.
            </li>
            <li>
              <span className="font-bold ">Scheduled Holidays:</span> No classes are held on Ashtami (the 8th lunar
              day) and Amavasya (new moon day).
            </li>
          </ul>
        </div>
      </div>

      {/* Weekend Classes Section */}
      <div>
        <h2 className="text-xl font-bold text-black">Gadavidya Weekend Classes</h2>
        <div className="overflow-x-auto">
          <table className="table-auto border-collapse border border-gray-300 w-full text-left">
            <thead>
              <tr className="">
                <th className="border border-gray-300 p-2 text-[16px] text-center">Class</th>
                <th className="border border-gray-300 p-2 text-[16px] text-center">Day</th>
                <th className="border border-gray-300 p-2 text-[16px] text-center">Session Duration</th>
                <th className="border border-gray-300 p-2 text-[16px] text-center">Timings</th>
                <th className="border border-gray-300 p-2 text-[16px] text-center">Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-2 text-[14px]">Gadavidya</td>
                <td className="border border-gray-300 p-2 text-[14px]">Saturday & Sunday</td>
                <td className="border border-gray-300 p-2 text-[14px]">1 to 1.5 hours per session</td>
                <td className="border border-gray-300 p-2 text-[14px] w-[270px]">
                  <strong>Morning:</strong> 06:30 AM - 08:30 AM <br />
                  <strong>Evening:</strong> 04:30 PM - 06:30 PM
                </td>
                <td className="border border-gray-300 p-2 text-[14px]">
                  Choose morning or evening session based on your convenience. Session length varies by skill level.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-4">
          <h3 className="font-bold text-black text-lg">Additional Information for Participants:</h3>
          <ul className="list-disc pl-5 pt-2">
            <li>
              <span className="font-bold ">Skill-based Duration:</span> Class length may vary between 1 to 1.5 hours
              depending on the participant's progress and skill level.
            </li>
            <li>
              <span className="font-bold ">Flexible Timing:</span> You may select either the morning or evening
              session as per your preference.
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="flex flex-col items-center p-6">
  {/* Address Section */}
  <div className="text-center bg-[#ffedd2] p-4 rounded-t-md w-full">
    <h2 className="text-red-800 text-3xl font-bold uppercase mb-2">Address</h2>
    <h3 className="text-2xl font-bold text-red-800">Isodhan Dhanurveda Gurukulam</h3>
    <p className="text-xl text-black font-semibold mt-2">
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
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3877.180884316132!2d79.41854577382279!3d13.646758299719295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4d4bb0716bd763%3A0x407db597031a0437!2sIsodhan%20Dhanurveda%20Gurukul!5e0!3m2!1sen!2sin!4v1735190479699!5m2!1sen!2sin"
        width="100%"
        height="500"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      ></iframe>
    </div>
</div>



    </div>
  )
}
