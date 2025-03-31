import React from 'react'
import volenteer from '../../assets/volunteerbanner.jpg'
import volenteer1 from '../../assets/volenteericon.png'
import pic from '../../assets/volunteer image 1.jpg'
import pic1 from '../../assets/volunteer image 2.jpg'
import pic2 from '../../assets/volunteer image 3.jpg'
import pic4 from '../../assets/volunteer image 4.jpg'
import bluebg from '../../assets/bluebg.png'
import { useForm } from 'react-hook-form'
export default function Volenteer() {
    const {
          register,
          handleSubmit,
          formState: { errors },
        } = useForm();
      
        const onSubmit = (data) => {
          console.log("Form Data:", data);
          alert("Subscription Successful!");
          reset();
        };
  return (
    <div className='pt-[60px] md:pt-16 '>
        <div className='w-full'>
            <img src={volenteer} alt="" className='w-full bg-cover' />
        </div>

        <div className="flex justify-center items-center">
  <img src={volenteer1} alt="" className="max-w-full "/>
</div>


<div className="px-[15px] md:px-[60px]">
  {/* Title Section */}
  <h1 className="text-red-700 font-bold text-2xl sm:text-3xl lg:text-3xl leading-tight">
    A Pillar of Support for Isodhan Foundation and Parashurama Seva
  </h1>

  {/* Paragraph Section */}
  <p className="text-black text-justify mx-auto">
    Volunteers play a unique and invaluable role in the services we provide at Isodhan Foundation, supporting Parashurama Seva and promoting the traditional Gurukulam way of life rooted in Dhanurveda. Your time, commitment, dedication, and skills are deeply valued by us and by the community that benefits from your contributions. Volunteer for many reasons, but the main motivation is often the joy of helping others. Volunteering can also provide opportunities to learn new skills, gain experience, and build confidence and self-esteem while connecting with like-minded individuals. <br></br><br></br>
        At Isodhan Foundation, we actively recruit volunteers to complement and enhance the services we offer. We recognize the immense value volunteers bring to our initiatives, supporting and encouraging those who generously dedicate their time and energy to enriching the quality of services, enhancing the spiritual experience, and preserving sacred traditions.
  </p>
</div>
<div className="px-[15px] md:px-[60px]">
  {/* Title Section */}
  <h1 className="text-red-800 font-bold pt-5  text-2xl sm:text-3xl lg:text-2xl leading-tight">
    WHY VOLUNTEER WITH ISODHAN FOUNDATION?
  </h1>

  {/* Paragraph Section */}
  <p className="text-black text-lg sm:text-xl text-justify mx-auto leading-relaxed">
    Volunteering with Isodhan Foundation is deeply rewarding. It nurtures your personal growth, boosts self-confidence, and fosters a sense of fulfillment as you make meaningful contributions to the spiritual and cultural well-being of the community. Whether you're seeking new experiences, hoping to develop skills, or looking for a way to fulfill your dharma, volunteering with us is a unique opportunity.<br></br>
    We provide training and support, so no prior experience is required. Volunteers can engage in a variety of activities, such as:
  </p>
</div>

<div className="w-full  bg-white text-gray-800 px-[15px] md:px-[60px] pt-2">
      <div className=" flex flex-wrap">
        {/* Left Section */}
        <div className='md:w-[80%] '>
        
          <ul className="list-disc list-inside">
            <li>
              <span className="font-bold text-red-700">Supporting Gurukulam Activities</span>
              <p className='text-black'> Assisting in classes, cultural sessions, and skill development programs.</p>
            </li>
            <li>
              <span className="font-bold text-red-700">Dhanurveda Camps</span>
              <p className='text-black '> Helping organize traditional martial arts and yoga training camps.</p>
            </li>
            <li>
              <span className="font-bold text-red-700">Community Outreach</span> 
              <p className='text-black'>Befriending, mentoring, and serving in spiritual and cultural initiatives.</p>
            </li>
            <li>
              <span className="font-bold text-red-700">Event Participation and Organization</span>
              <p className='text-black'> Preparing for festivals and events such as Parashurama Jayanti, Ayudha Puja, Yagnas, and other sacred occasions. </p>
            </li>
            <li>
              <span className="font-bold text-red-700">Food Service</span>
              <p className='text-black'> Preparing and serving prasadam during festivals and functions.</p>
            </li>
            <li>
              <span className="font-bold text-red-700">Administrative and Fundraising Support</span>
              <p className='text-black'> Assisting with logistics, records, and fundraising efforts for temple and gurukulam activities.</p>
            </li>
            <li>
              <span className="font-bold text-red-700">Media and Promotions</span>
              <p className='text-black'> Capturing photos and videos of events, updating websites, and managing social media platforms (YouTube, Facebook, Instagram, etc.)</p>
            </li>
            <li>
              <span className="font-bold text-red-700">Preserving Dharma and Sacred Knowledge</span>
              <p className='text-black'>Teaching initiatives that promote Sanatana Dharma, sacred texts, and traditional teachings.</p>
            </li>
          </ul>
        </div>

        {/* Right Section - Images */}
        <div className="flex flex-col w-fill md:w-[20%]">
  <img
    src={pic}
    alt="Activity 1"
    className=" h-auto object-cover rounded-lg shadow-md  mb-2"/>
  <img
    src={pic1}
    alt="Activity 2"
    className=" h-auto object-cover rounded-lg shadow-md  mb-2"/>
  <img
    src={pic2}
    alt="Activity 3"
    className=" h-auto object-cover rounded-lg shadow-md mb-2" />
</div>

      </div>
    </div>

    <div className="px-[15px] md:px-[60px] pt-5 rounded-lg  md:text-left">
  <h1 className="text-xl font-extrabold text-red-700 ">
    Fulfill Your Dharma
  </h1>
  <p className="text-justify text-gray-700 font-medium leading-relaxed">
    By volunteering with <span className="font-bold text-red-700">Isodhan Foundation</span>, you contribute to preserving sacred traditions, supporting a holistic <span className="font-semibold">Gurukulam lifestyle</span>, serving <span className="italic text-red-600">Lord Parashurama</span>, and promoting the wisdom of <span className="font-semibold text-red-700">Dhanurveda</span>. This is a profound way to fulfill your duty as a follower of <span className="font-semibold text-red-700">Sanatana Dharma</span> while gaining invaluable knowledge and spiritual insights.
  </p>
</div>

<div className="flex flex-col md:flex-row items-center md:items-start gap-6 px-[15px] pt-5 md:px-[60px] rounded-lg shadow-md">
  {/* Text Content */}
  <div className="md:w-1/1 md:text-left">
    <h1 className="text-2xl sm:text-2xl font-bold text-red-700 ">Serving Lord Parashurama</h1>
    <p className="text-black text-base  leading-relaxed">
    --Engage in seva (service) as a volunteer<br></br>
--Join in divine aspects of life.<br></br>
--Participate in Abhisekam activities and other spiritual (events) as a volunteer <br></br>
Volunteers may lead these activities, provide support to participants, and help create a conducive environment for spiritual growth. <br></br> <br></br>
Join us to make a difference in the lives of others and be part of this transformative journey! <br></br><br></br>
Join us to make a difference in the lives of others and be a part of this transformative journey!
    </p>
  </div>

  {/* Image */}
  <div className="md:w-1/2">
    <img
      src={pic4}
      alt="Example"
      className="w-96 h-auto object-cover rounded-lg mb-3 md:mb-0"
    />
  </div>
</div>

<div>
    <img src={bluebg} alt="" className='w-full bg-cover' />
</div>


<div className="px-[15px] md:p-[60px] bg-gray-50 rounded-lg shadow-md  mx-auto pt-2">
  <h1 className="text-red-700 font-extrabold text-2xl sm:text-3xl mb-4 text-center">
    Get Involved
  </h1>
  <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
    - Reach out through Isodhan's official channels <br />
    - Attend events to learn more and become a volunteer
  </p>
  <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
    If you're interested in becoming an Isodhan volunteer, you can fill out the form below:
  </p>
  
  <div className="bg-[#ffedd2] p-6 rounded-lg shadow-lg w-full max-w-4xl mx-auto">
  {/* <h2 className="text-2xl font-semibold text-center mb-4 text-red-700">Subscribe Now</h2> */}

  <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-4">
    {/* Full Name */}
    <div className="col-span-1 md:col-span-1">
      <input
        type="text"
        {...register("firstName", { required: "First Name is required" })}
        className="w-full p-2 border rounded mt-1"
        placeholder="First Name"
      />
      {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName.message}</p>}
    </div>
    <div className="col-span-1 md:col-span-1">
      <input
        type="text"
        {...register("lastName", { required: "Last Name is required" })}
        className="w-full p-2 border rounded mt-1"
        placeholder="Last Name"
      />
      {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName.message}</p>}
    </div>

    {/* Email */}
    <div className="col-span-1">
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
        placeholder="Email"
      />
      {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
    </div>

    {/* WhatsApp Number */}
    <div className="col-span-1">
      <input
        type="tel"
        {...register("whatsapp", {
          required: "WhatsApp number is required",
          pattern: {
            value: /^[0-9]{10}$/,
            message: "Enter a valid 10-digit phone number",
          },
        })}
        className="w-full p-2 border rounded mt-1"
        placeholder="WhatsApp Number"
      />
      {errors.whatsapp && <p className="text-red-500 text-sm">{errors.whatsapp.message}</p>}
    </div>

    {/* Alternate Number */}
    <div className="col-span-1">
      <input
        type="tel"
        {...register("alternate", {
          required: "Alternate number is required",
          pattern: {
            value: /^[0-9]{10}$/,
            message: "Enter a valid 10-digit phone number",
          },
        })}
        className="w-full p-2 border rounded mt-1"
        placeholder="Alternate Number"
      />
      {errors.alternate && <p className="text-red-500 text-sm">{errors.alternate.message}</p>}
    </div>

    {/* State */}
    <div className="col-span-1">
      <input
        type="text"
        {...register("state", { required: "State is required" })}
        className="w-full p-2 border rounded mt-1"
        placeholder="State"
      />
      {errors.state && <p className="text-red-500 text-sm">{errors.state.message}</p>}
    </div>

    {/* City */}
    <div className="col-span-1">
      <input
        type="text"
        {...register("city", { required: "City is required" })}
        className="w-full p-2 border rounded mt-1"
        placeholder="City"
      />
      {errors.city && <p className="text-red-500 text-sm">{errors.city.message}</p>}
    </div>

    {/* Address */}
    <div className="col-span-1 md:col-span-2">
      <textarea
        {...register("address", { required: "Address is required" })}
        className="w-full p-2 border rounded mt-1"
        placeholder="Address"
        rows={3}
      ></textarea>
      {errors.address && <p className="text-red-500 text-sm">{errors.address.message}</p>}
    </div>

    {/* Submit Button */}
    <div className="col-span-1 md:col-span-2">
      <button type="submit" className="w-full bg-red-700 text-white p-2 rounded hover:bg-red-900">
        Subscribe
      </button>
    </div>
  </form>
</div>

</div>





      
    </div>
  )
}
