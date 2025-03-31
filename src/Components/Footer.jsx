import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram ,faYoutube, faWhatsapp} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import footerLogo from '../assets/logo.png'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-yellow-800 via-orange-800 to-red-950 text-gray-300 py-10  border">
 <div className="container mx-auto px-4 lg:px-0">
        {/* Main Container with space between in large screens */}
        <div className="flex flex-wrap justify-between space-y-8 lg:space-y-0">

          {/* First Section */}
          <div className="w-full lg:w-1/4  lg:mb-0">
            <h3 className="font-semibold text-white mb-3">International Society for Dhanurveda</h3>
            <Link tp='/'>
            <img 
              src={footerLogo}
              alt="Isodhan International Society Logo" 
              className="w-40 h-auto" 
            />
            </Link>
          </div>

          {/* About Section */}
          <div className="w-full lg:w-1/4  lg:mb-0">
            <h3 className="text-xl font-semibold text-white mb-3">Information</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to='/' className="hover:text-orange-500">Home</Link></li>
              <li><Link to='/guru' className="hover:text-orange-500">About Us</Link></li>
              <li><Link to='/volenteer' className="hover:text-orange-500">Valentier</Link></li>
              <li><Link to='/gurukulam' className="hover:text-orange-500">Gurukulam</Link></li>
              <li><Link to='/temple' className="hover:text-orange-500">Temple</Link></li>
              <li><Link to='/contact' className="hover:text-orange-500">Contact</Link></li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div className="w-full lg:w-1/4  lg:mb-0">
            <h3 className="text-xl font-semibold text-white mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to='/upcoming-projects' className="hover:text-orange-500">Upcoming Camps</Link></li>
              <li><Link to='/' className="hover:text-orange-500">Special Workshops</Link></li>
              <li><Link to='/' className="hover:text-orange-500">Upcoming Projects</Link></li>
              <li><Link to='/' className="hover:text-orange-500">Rituals</Link></li>
              <li><Link to='/' className="hover:text-orange-500">Yagna & Homan</Link></li>
              {/* <li><Link to='/' className="hover:text-orange-500">FAQ</Link></li> */}
              <li><Link to='/' className="hover:text-orange-500">Testimonials</Link></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="w-full lg:w-1/4 mb-4 lg:mb-0">
            <h3 className="text-xl font-semibold text-white mb-3">Connect With Us</h3>

            {/* Social Media Icons */}
            <div className="flex space-x-4 mb-3">
              <a href="https://www.facebook.com/Dhanurveda" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
              <a href="https://www.instagram.com/isodhan_dhanurveda/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
              <a href="https://www.youtube.com/channel/UCBnrjXRrwJtXze9LmnS7y3Q" target="_blank" rel="noopener noreferrer" className="hover:text-red-500">
                <FontAwesomeIcon icon={faYoutube} size="2x" />
              </a>
              <a href="https://api.whatsapp.com/send?phone=+919154264942&text=Hello" target="_blank" rel="noopener noreferrer" className="hover:text-green-500">
                <FontAwesomeIcon icon={faWhatsapp} size="2x" />
              </a>
              <a href="mailto:internationaldhanurveda@gmail.com" className="hover:text-orange-500">
                <FontAwesomeIcon icon={faEnvelope} size="2x" />
              </a>
            </div>

            {/* Address Row */}
            <div className="flex items-start mb-2">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="text-lg mr-2" />
              <address className="not-italic text-sm">
                Head office: ISODHAN DHANURVEDA GURUKULAM, Anna Rao Circle, beside more super market, Srinivasa Nagar, N G O Colony, Tirupati 517501, Andhra Pradesh
              </address>
            </div>
          </div>
        </div>
      </div>
      {/* Footer Bottom Section */}
      <div className="mt-8 pt-4 border-t border-gray-600 text-center">
        <p className="text-sm">
          Copyright © 2025 ISODHAN. All Rights Reserved.

        </p>
        <p className="text-sm">
          <Link to='/' className="hover:text-orange-500">Privacy Policy</Link> | <Link to='/' className="hover:text-orange-500">Terms & Conditions</Link>
        </p>
        <p>Developed By <a href='https://techxpert.in' target="_blank">Techxpert</a> </p>
      </div>
    </footer>
  );
};

export default Footer;
