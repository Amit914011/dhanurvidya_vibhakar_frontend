import React, { useState } from "react";
// import { FaShoppingCart } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
// import { IoMdArrowDropright } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import "./Navbar.css";
import logo from "../../assets/logo1.jpeg";
import { Link } from "react-router-dom";
export default function Navbar() {
  const [show, setShow] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuOpen1, setMenuOpen1] = useState(false);
  const [menuOpen2, setMenuOpen2] = useState(false);
  const [menuOpen3, setMenuOpen3] = useState(false);

  return (
    <>
      <nav className="fixed w-full">
        <div className="hidden lg:block">
          {/* Top Menu Bar */}

          {/* Bottom Menu Bar */}
          <div className="buttommenubar">
            <div>
              <Link to='/' className="text-black font-bold ">
                <img src={logo} alt="" className="w-20" />
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
                    <li>
                      <Link to="/guru" className="block">
                        Guru
                      </Link>
                    </li>
                    <li>
                      <Link to="previous-live-draw" className="block">
                        Guru Sankalpa
                      </Link>
                    </li>
                    <li>
                      <Link to="previous-live-draw" className="block">
                        Associated centres
                      </Link>
                    </li>
                    <li>
                      <Link to="previous-live-draw" className="block">
                        Upcoming projects
                      </Link>
                    </li>
                    <li>
                      <Link to="previous-live-draw" className="block">
                        Bhargava Upasana
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <p>
                    Rituals <IoMdArrowDropdown className="inline icon" />
                  </p>
                  <ul className="sumenu">
                    <li>
                      <Link to="/abhi" className="block">
                        Abhisekam
                      </Link>
                    </li>
                    <li>
                      <Link to="/support" className="block">
                        Abhisekam
                      </Link>
                    </li>
                    <li>
                      <Link to="/support" className="block">
                        Navagraha Homam / Shanti Homam
                      </Link>
                    </li>
                    <li>
                      <Link to="/fraud-awareness" className="block">
                        Lakshmi Homam
                      </Link>
                    </li>
                    <li>
                      <Link to="/fraud-awareness" className="block">
                        Maha Mrithyunjaya Homam
                      </Link>
                    </li>
                    <li>
                      <Link to="/fraud-awareness" className="block">
                        Mahalakshmi Homam
                      </Link>
                    </li>
                    <li>
                      <Link to="/fraud-awareness" className="block">
                        Sri Suktha Homam
                      </Link>
                    </li>
                    <li>
                      <Link to="/fraud-awareness" className="block">
                        Sudarshan Homam
                      </Link>
                    </li>
                    <li>
                      <Link to="/fraud-awareness" className="block">
                        Chandi Homam
                      </Link>
                    </li>
                    <li>
                      <Link to="/fraud-awareness" className="block">
                        Booh Varaha Homam
                      </Link>
                    </li>
                    <li>
                      <Link to="/fraud-awareness" className="block">
                        Saraswathi Homam
                      </Link>
                    </li>
                    <li>
                      <Link to="/fraud-awareness" className="block">
                        Ayushya Homam
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/community">
                    Dhanurveda <IoMdArrowDropdown className="inline icon" />
                  </Link>
                  <ul className="sumenu">
                    <li>
                      <Link to="/support" className="block">
                        Origin
                      </Link>
                    </li>
                    <li>
                      <Link to="/dhanur" className="block">
                        Dhanurvidya
                      </Link>
                    </li>
                    <li>
                      <Link to="/support" className="block">
                        Khadgavidya
                      </Link>
                    </li>
                    <li>
                      <Link to="/fraud-awareness" className="block">
                        Gadavidya
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/community">
                    Courses <IoMdArrowDropdown className="inline icon" />
                  </Link>
                  <ul className="sumenu">
                    <li>
                      <Link to="/support" className="block">
                        3 Days Camp
                      </Link>
                    </li>
                    <li>
                      <Link to="/support" className="block">
                        5 Days Camp
                      </Link>
                    </li>
                    <li>
                      <Link to="/support" className="block">
                        7 Days Camp
                      </Link>
                    </li>
                    <li>
                      <Link to="/fraud-awareness" className="block">
                        11 Days Camp
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/community">
                    Gurukulam <IoMdArrowDropdown className="inline icon" />
                  </Link>
                  <ul className="sumenu">
                    <li>
                      <Link to="/support" className="block">
                        Tirupati
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/community">
                    Tempale <IoMdArrowDropdown className="inline icon" />
                  </Link>
                  <ul className="sumenu">
                    <li>
                      <Link to="/support" className="block">
                        Tirupati
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/community">
                    Get Involved <IoMdArrowDropdown className="inline icon" />
                  </Link>
                  <ul className="sumenu">
                    <li>
                      <Link to="/support" className="block">
                        Volunteer
                      </Link>
                    </li>
                    <li>
                      <Link to="/support" className="block">
                        Offer Seva
                      </Link>
                    </li>
                    <li>
                      <Link to="/support" className="block">
                        Careers
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/blog">Events</Link>
                </li>
                <li>
                  <Link to="/about-us" className="block">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="block lg:hidden px-[20px] md:px-[50px] relative w-full overflow-hidden">
          <div className="flex justify-between items-center">
            <Link to="/">
              <img src="" alt="" className="w-[100px]" />
            </Link>
            <div className="flex items-center">
              <GiHamburgerMenu
                className="text-3xl mt-3 cursor-pointer"
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
            onClick={() => {
              setShow("");
            }}
          />
          <ul className="mainMobileMenu z-50">
            <li className="hover:bg-blue-50 ">
              <Link to="#" className="block pl-2">
                Buy Now
              </Link>
            </li>
            <li>
              <Link to="/" className="mr-20 pl-2">
                Play
              </Link>
              <IoMdArrowDropdown
                className="inline cursor-pointer"
                onClick={() => setMenuOpen(!menuOpen)}
              />
              <ul className={`${menuOpen ? "block" : "hidden"}`}>
                <li className="hover:bg-gray-50">
                  <Link to="/how-to-withdraw" className="pl-2">
                    How To Withdraw
                  </Link>
                </li>
                <li className="hover:bg-gray-50">
                  <Link to="/faq" className="pl-2">
                    FAQs
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/draw" className="mr-14 pl-2">
                Draws
              </Link>
              <IoMdArrowDropdown
                className="inline cursor-pointer"
                onClick={() => setMenuOpen1(!menuOpen1)}
              />
              <ul className={`${menuOpen1 ? "block" : "hidden"}`}>
                <li className="hover:bg-gray-50">
                  <Link to="/previous-live-draw" className="pl-2">
                    Previous Live Draws
                  </Link>
                </li>
                <li className="hover:bg-gray-50">
                  <Link to="/faq" className="pl-2 mr-16">
                    Winners
                  </Link>
                  <IoMdArrowDropdown
                    className="inline cursor-pointer"
                    onClick={() => setMenuOpen3(!menuOpen3)}
                  />
                  <ul className={`${menuOpen3 ? "block" : "hidden"}`}>
                    <li>
                      <Link to="/mahzooz-millionaires" className="block ml-4">
                        Mahzooz Millionaires Club
                      </Link>
                    </li>
                    <li>
                      <Link to="/tripple" className="block pl-4">
                        Mahazooz Triple 100 Club
                      </Link>
                    </li>
                    <li>
                      <Link to="/hall-of-fame" className="block pl-4">
                        Mahazooz Hall of Fame
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/community" className="mr-14 pl-2">
                Community
              </Link>
              <IoMdArrowDropdown
                className="inline cursor-pointer"
                onClick={() => setMenuOpen2(!menuOpen2)}
              />
              <ul className={`${menuOpen2 ? "block" : "hidden"}`}>
                <li>
                  <Link to="/support" className="block pl-2">
                    Supports Initiatives
                  </Link>
                </li>
                <li>
                  <Link to="/fraud-awareness" className="block pl-2">
                    Fraud Awareness
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/blog" className="block pl-2">
                Latest News
              </Link>
            </li>
            <li>
              <Link to="/about-us" className="block pl-2">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/login" className="block pl-2">
                Log In
              </Link>
            </li>
            <li>
              <Link to="/create-account" className="block pl-2">
                Create Account
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
