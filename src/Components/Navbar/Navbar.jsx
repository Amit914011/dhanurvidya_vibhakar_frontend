import React, { useState } from "react";
// import { FaShoppingCart } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
// import { IoMdArrowDropright } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
export default function Navbar() {
  const [show, setShow] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuOpen1, setMenuOpen1] = useState(false);
  const [menuOpen2, setMenuOpen2] = useState(false);
  const [menuOpen3, setMenuOpen3] = useState(false);
  const [menuOpen4, setMenuOpen4] = useState(false);
  const [menuOpen5, setMenuOpen5] = useState(false);
  

  return (
    <>
      <nav className="fixed w-full">
        <div className="hidden lg:block">
          {/* Top Menu Bar */}

          {/* Bottom Menu Bar */}
          <div className="buttommenubar">
            <div>
              <Link to='/' className="text-black font-bold ">
                <img src={logo} alt="" className="w-44" />
              </Link>
            </div>
            <div>
              <ul className="mainMenu">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <p className="block">
                    About Us <IoMdArrowDropdown className="inline icon" />
                  </p>
                  <ul className="sumenu">
                      {
                        [{"title":"Guru Ji","link":"/guru"},
                          {"title":"Guru Ji Sankalpa","link":"/"},
                          {"title":" Associated centres","link":"/"},
                          {"title":" Upcoming projects","link":"/upcoming-projects"},
                          {"title":"Bhargava Upasana","link":"/"}
                      ].map((item,index)=>(
                     <li key={index}>
                      <Link to={item.link} className="block">
                        {item.title}
                      </Link>
                    </li>
                      ))}
                  </ul>
                </li>
                <li>
                  <p>
                    Rituals <IoMdArrowDropdown className="inline icon" />
                  </p>
                  <ul className="sumenu">

                  {
                        [{"title":"Parashurama Rituals","link":"/parashurama-rituals"},
                          {"title":"Online Rituals","link":"/"},
                          {"title":"Yagna and Homam","link":"/"},
                          // {"title":" Lakshmi Homam","link":"/"},
                          // {"title":"Maha Mrithyunjaya Homam","link":"/"},
                          // {"title":"Mahalakshmi Homam","link":"/"},
                          // {"title":"Sri Suktha Homam","link":"/"},
                          // {"title":"Sudarshan Homam","link":"/"},
                          // {"title":" Chandi Homam","link":"/"},
                          // {"title":" Booh Varaha Homam","link":"/"},
                          // {"title":" Saraswathi Homam","link":"/"},
                          // {"title":" Ayushya Homam","link":"/"},
                      ].map((item,index)=>(
                     <li key={index}>
                      <Link to={item.link} className="block">
                        {item.title}
                      </Link>
                    </li>
                      ))}

                  </ul>
                </li>
                <li>
                  <p>
                    Dhanurveda <IoMdArrowDropdown className="inline icon" />
                  </p>
                  <ul className="sumenu">
                  {
                        [{"title":"Origin","link":"/origin"},
                          {"title":"Dhanurvidya","link":"/dhanur"},
                          {"title":"Khadgavidya","link":"/khadagvidya"},
                          {"title":" Gadavidya","link":"/gadavidya"},
                          {"title":"Maha Mrithyunjaya Homam","link":"/"},
                          {"title":"Mahalakshmi Homam","link":"/"},
                      ].map((item,index)=>(
                     <li key={index}>
                      <Link to={item.link} className="block">
                        {item.title}
                      </Link>
                    </li>
                      ))}

                    </ul>
                </li>
                <li>
                  <Link to="/course">
                    Courses <IoMdArrowDropdown className="inline icon" />
                  </Link>
                  <ul className="sumenu">
                  {
                        [{"title":"3 Days Camp","link":"/threedays"},
                          {"title":"5 Days Camp","link":"/fivedays"},
                          {"title":"7 Days Camp","link":"/"},
                          {"title":" 11 Days Camp","link":"/"},
                      ].map((item,index)=>(
                     <li key={index}>
                      <Link to={item.link} className="block">
                        {item.title}
                      </Link>
                    </li>
                      ))}
                  </ul>
                </li>
                <li>
                  <Link to="/gurukulam">
                    Gurukulam <IoMdArrowDropdown className="inline icon" />
                  </Link>
                  <ul className="sumenu">
                    <li>
                      <Link to="/" className="block">
                        Tirupati
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/temple">
                    Temple <IoMdArrowDropdown className="inline icon" />
                  </Link>
                  {/* <ul className="sumenu">
                    <li>
                      <Link to="/" className="block">
                        Tirupati
                      </Link>
                    </li>
                  </ul> */}
                </li>
                <li>
                  <p>
                    Get Involved <IoMdArrowDropdown className="inline icon" />
                  </p>
                  <ul className="sumenu">

                  {
                        [{"title":"Valentier","link":"/volenteer"},
                          {"title":" Offer Seva","link":"/"},
                          {"title":"Careers","link":"/career"},
                      ].map((item,index)=>(
                     <li key={index}>
                      <Link to={item.link} className="block">
                        {item.title}
                      </Link>
                    </li>
                      ))} 
                  </ul>
                </li>
                <li>
                  <Link to="/">Events</Link>
                </li>
                <li>
                  <Link to="/contact" className="block">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>



        {/* Mobile Menu */}
        <div className="h-[60px] block lg:hidden px-[20px] md:px-[50px] bg-[#5E0000] w-full overflow-hidden fixed">
          <div className="flex justify-between items-center">
            <Link to="/">
              <img src={logo} alt="" className="w-[150px]" />
            </Link>
            <div className="flex items-center">
              <GiHamburgerMenu
                className="text-3xl  cursor-pointer text-white"
                onClick={() => {
                  setShow("show");
                }}
              />
            </div>
          </div>
          <div className={`w-full overflow-hidden`}></div>
        </div>
        <div
          className={`w-[70vw] sm:w-[60vw] h-[100vh] overflow-auto border mobileMenu ${show}`}
        >
          <MdClose
            className="absolute top-[20px] text-2xl cursor-pointer"
            onClick={() => {setShow("");}}
          />
          <ul className="mainMobileMenu z-50">
            <li className="hover:bg-blue-50 ">
              <Link to="/" className="block pl-2" onClick={() => {
              setShow("");
            }}>
                Home
              </Link>
            </li>
            <li>
              <div className="flex justify-between " onClick={() => setMenuOpen(!menuOpen)}>
              <p className="mr-20 pl-2"  >
                About Us
              </p>
              <IoMdArrowDropdown
                className="inline cursor-pointer"
                
              />
              </div>
              <ul className={`${menuOpen ? "block" : "hidden"}`}>
              {
                        [{"title":"Guru","link":"/guru"},
                          {"title":"Guru Sankalpa","link":"/"},
                          {"title":" Associated centres","link":"/"},
                          {"title":" Upcoming projects","link":"/upcoming-projects"},
                          {"title":"Bhargava Upasana","link":"/"}
                      ].map((item,index)=>(
                     <li key={index}  onClick={() => {setShow("");}}>
                      <Link to={item.link} className="block">
                        {item.title}
                      </Link>
                    </li>
                      ))}
              </ul>
            </li>
            <li>
             <div className="flex justify-between" onClick={() => setMenuOpen1(!menuOpen1)}>
             <p className="mr-14 pl-2" >
                Rituals
              </p>
              <IoMdArrowDropdown
                className="inline cursor-pointer"
                
              />
             </div>
              <ul className={`${menuOpen1 ? "block" : "hidden"}`}>
              {
                        [{"title":"Abhisekam","link":"/abhi"},
                          {"title":"Abhisekam","link":"/"},
                          {"title":" Navagraha Homam / Shanti Homam","link":"/"},
                          {"title":" Lakshmi Homam","link":"/"},
                          {"title":"Maha Mrithyunjaya Homam","link":"/"},
                          {"title":"Mahalakshmi Homam","link":"/"},
                          {"title":"Sri Suktha Homam","link":"/"},
                          {"title":"Sudarshan Homam","link":"/"},
                          {"title":" Chandi Homam","link":"/"},
                          {"title":" Booh Varaha Homam","link":"/"},
                          {"title":" Saraswathi Homam","link":"/"},
                          {"title":" Ayushya Homam","link":"/"},
                      ].map((item,index)=>(
                     <li key={index} onClick={() => {setShow("");}}>
                      <Link to={item.link} className="block">
                        {item.title}
                      </Link>
                    </li>
                      ))}
                </ul>
            </li>
            <li>
             <div className="flex justify-between" onClick={() => setMenuOpen2(!menuOpen2)}>
             <p className="mr-14 pl-2" >
                Dhanurveda
              </p>
              <IoMdArrowDropdown
                className="inline cursor-pointer"
                
              />
             </div>
              <ul className={`${menuOpen2 ? "block" : "hidden"}`}>
              {
                        [{"title":"Origin","link":"/origin"},
                          {"title":"Dhanurvidya","link":"/khadagvidya"},
                          {"title":"Khadgavidya","link":"/"},
                          {"title":" Gadavidya","link":"/gadavidya"},
                          {"title":"Maha Mrithyunjaya Homam","link":"/"},
                          {"title":"Mahalakshmi Homam","link":"/"},
                      ].map((item,index)=>(
                     <li key={index} onClick={() => {setShow("");}}>
                      <Link to={item.link} className="block">
                        {item.title}
                      </Link>
                    </li>
                      ))}
              </ul>
            </li>
            <li>
             <div className="flex justify-between" onClick={() => setMenuOpen3(!menuOpen3)}>
             <p className="mr-14 pl-2" >
                Courses
              </p>
              <IoMdArrowDropdown
                className="inline cursor-pointer"
                
              />
             </div>
              <ul className={`${menuOpen3 ? "block" : "hidden"}`}>
              {
                        [{"title":"3 Days Camp","link":"/threedays"},
                          {"title":"5 Days Camp","link":"/fivedays"},
                          {"title":"7 Days Camp","link":"/"},
                          {"title":" 11 Days Camp","link":"/"},
                      ].map((item,index)=>(
                     <li key={index} onClick={() => {setShow("");}}>
                      <Link to={item.link} className="block">
                        {item.title}
                      </Link>
                    </li>
                      ))}
              </ul>
            </li>
            <li>
             <div className="flex justify-between" onClick={() => setMenuOpen4(!menuOpen4)}>
             <p className="mr-14 pl-2" >
             Gurukulam 
              </p>
              <IoMdArrowDropdown
                className="inline cursor-pointer"
                
              />
             </div>
              <ul className={`${menuOpen4 ? "block" : "hidden"}`}>
              {
                        [{"title":"Tirupati","link":"/threedays"},
                         
                      ].map((item,index)=>(
                     <li key={index} onClick={() => {setShow("");}}>
                      <Link to={item.link} className="block">
                        {item.title}
                      </Link>
                    </li>
                      ))}
              </ul>
            </li>
            <li>
             <div className="flex justify-between" onClick={() => setMenuOpen5(!menuOpen5)}>
             <p className="mr-14 pl-2" >            
Get Involved 
              </p>
              <IoMdArrowDropdown
                className="inline cursor-pointer"
                
              />
             </div>
              <ul className={`${menuOpen5 ? "block" : "hidden"}`}>
              {
                        [{"title":"Valentier","link":"/volenteer"},
                          {"title":" Offer Seva","link":"/"},
                          {"title":"Careers","link":"/"},
                      ].map((item,index)=>(
                     <li key={index} onClick={() => {setShow("");}}>
                      <Link to={item.link} className="block">
                        {item.title}
                      </Link>
                    </li>
                      ))}
              </ul>
            </li>
            <li>
              <Link to="/" className="block pl-2" onClick={() => {setShow("");}}>
                Events
              </Link>
            </li>
            <li>
              <Link to="/contact" className="block pl-2" onClick={() => {setShow("");}}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
