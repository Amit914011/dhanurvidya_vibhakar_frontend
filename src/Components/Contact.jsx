import React from 'react'
import contact from '../assets/contact.jpg'
import contact1 from '../assets/contactimg.png'

export default function Contact() {
  return (
    <div className='pt-[60px] md:pt-16'>

        <div className='w-full'>
            <img src={contact} alt="" className='w-full bg-cover'/>
        </div>

       <div className="flex justify-center items-center">
  <img src={contact1} alt="Contact" className="max-w-full h-auto" />
</div>

<div className="py-10">
  <div className="px-5  mx-auto text-center sm:text-left">
    <h1 className="text-3xl sm:text-3xl font-bold  text-red-800 mb-6">
      Connect with Us on the Path of Dharma
    </h1>
    <p className="text-lg text-justify text-black leading-relaxed ">
      Welcome to <span className="font-semibold">ISODHAN Dhanurveda Gurukulam</span>, a sanctuary for ancient wisdom, spiritual growth, and the art of Dhanurveda. We invite you to reach out and connect with us, whether you seek guidance, wish to learn about our teachings, or are drawn to support our mission of preserving and sharing sacred knowledge.
    </p>
    <p className="text-lg text-black pt-2 text-justify leading-relaxed">
      Each message, inquiry, and visit is valued as part of our spiritual journey together. Through your connection with our foundation, you join a lineage of seekers dedicated to the pursuit of Dharma, wisdom, and inner harmony.
    </p>
  </div>
</div>

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
    ">
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
    alt="WhatsApp Icon"
    className="h-8 w-8 md:h-10 md:w-10"/>
  <p 
    className="
      text-red-800 
      font-bold 
      text-center 
      text-base 
      md:text-lg 
      leading-snug ">
    WhatsApp available for inquiries at +91 91542 64942
  </p>
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
    alt="WhatsApp Icon"
    className="h-8 w-8 md:h-10 md:w-10"/>
</div>

<div className="flex flex-wrap gap-6 mt-10">
    <div className="flex-1 min-w-[250px] p-4 bg-yellow-200">
        <h1 className="text-2xl font-bold text-center text-red-700" >HEAD OFFICE</h1>
        <p className="mt-2 text-center text-black font-bold">
            Address: ISODHAN DHANURVEDA GURUKULAM, <br /> near Anna Roo Circle, Next to More <br />
            Supermarket, Shantinagar, Khadi Colony, <br /> Tirupati, Andhra Pradesh 517501.
        </p>
        <p className="mt-2 text-center text-black font-bold">
            +91 9849130115 | +91 9154264942
        </p>
        <div className="mt-4">
        <div className="w-full flex justify-center items-center bg-gray-100 ">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3877.180884316132!2d79.41854577382279!3d13.646758299719295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4d4bb0716bd763%3A0x407db597031a0437!2sIsodhan%20Dhanurveda%20Gurukul!5e0!3m2!1sen!2sin!4v1735218348417!5m2!1sen!2sin"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="rounded-lg shadow-md"
        title="Google Map"
      ></iframe>
    </div>
        </div>
    </div>
    <div className="flex-1 min-w-[250px] p-4 bg-yellow-200">
        <h1 className="text-2xl font-bold text-center text-red-700">GURUKULAM</h1>
        <p className="mt-2 text-center text-black font-bold">
            DHANURVEDA GURUKULAM TEMPLE <br /> Plot no 118, Veerlapally Village, Nandigama <br />
            Mandal, Ranga Reddy distt, Near Hyderabad, <br /> TELANGANA, 509325.
        </p>
        <p className="mt-2 text-center text-black font-bold ">
            +91 9849130115 | +91 6301725680
        </p>
        <div className="mt-4">
        <div className="w-full flex justify-center items-center bg-gray-100">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3877.180884316132!2d79.41854577382279!3d13.646758299719295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4d4bb0716bd763%3A0x407db597031a0437!2sIsodhan%20Dhanurveda%20Gurukul!5e0!3m2!1sen!2sin!4v1735218348417!5m2!1sen!2sin"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="rounded-lg shadow-md"
        title="Google Map"
      ></iframe>
    </div>
        </div>
    </div>
</div>

<div className="max-w-2xl mx-auto bg-yellow-200 border border-yellow-300 shadow-lg rounded-lg p-6 mt-8">
    <h1 className="text-2xl font-bold text-center text-red-700">HYDERABAD OFFICE</h1>
    <p className="mt-4 text-center text-black font-bold "> ISODHAN HYDERABAD <br></br> H.No.21-19/4/304, Ravi Residency Apartments, Road No.4,  Shardanagar Colony, P.O.P&T. Colony, <br></br> Dilsukhnagar, Hyderabad TELENGANA - 500060
    </p>
    <p className="mt-4 text-center text-black font-bold">
        +91 9701165644 | +91 9154264942
    </p>
    <div className="mt-6">
    <div className="w-full flex justify-center items-center bg-gray-100">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3877.180884316132!2d79.41854577382279!3d13.646758299719295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4d4bb0716bd763%3A0x407db597031a0437!2sIsodhan%20Dhanurveda%20Gurukul!5e0!3m2!1sen!2sin!4v1735218348417!5m2!1sen!2sin"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="rounded-lg shadow-md"
        title="Google Map"
      ></iframe>
    </div>
    </div>
</div>




    </div>
  )
}
