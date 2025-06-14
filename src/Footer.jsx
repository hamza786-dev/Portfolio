import React from 'react'; 
import {
  FaRegArrowAltCircleRight,
  FaFacebookF,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from 'react-icons/fa';
import Contactus from './Contactus';

const Footer = () => {
  const companyLinks = [
    { label: 'About Us', icon: FaRegArrowAltCircleRight, link: 'about' },
    { label: 'Contact Us', icon: FaRegArrowAltCircleRight, link: 'contact' },
    { label: 'Reservation', icon: FaRegArrowAltCircleRight, link: 'reservation' },
    { label: 'Privacy Policy', icon: FaRegArrowAltCircleRight, link: 'privacy' },
    { label: 'Terms & Condition', icon: FaRegArrowAltCircleRight, link: 'terms' },
  ];

  const contactInfo = [
    { icon: FaMapMarkerAlt, text: 'Faislabad' },
    { icon: FaPhoneAlt, text: '03496881566' },
    { icon: FaEnvelope, text: 'Hamza@gmail.com' },
  ];

  const socialLinks = [
    { icon: FaTwitter, href: 'https://twitter.com', color: 'text-blue-400' },
    { icon: FaFacebookF, href: 'https://facebook.com', color: 'text-blue-600' },
    { icon: FaYoutube, href: 'https://youtube.com', color: 'text-red-600' },
    { icon: FaLinkedin, href: 'https://linkedin.com', color: 'text-blue-700' },
  ];

  const openingHours = [
    { day: 'Monday - Saturday', time: '09AM - 09PM' },
    { day: 'Sunday', time: '10AM - 08PM' },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12 mt-0">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between items-start lg:items-start space-y-8 lg:space-y-0">
          {/* Company Links */}
          <div className="w-full lg:w-1/4">
            <h4 className="text-2xl font-bold text-blue-400 mb-6">Company</h4>
            {companyLinks.map((link, index) => (
              <a key={index} href={link.link} className="flex items-center mb-2 text-white hover:text-gray-300 transition duration-300">
                {React.createElement(link.icon, { className: 'mr-2 text-blue-400' })}
                {link.label}
              </a>
            ))}
          </div>

          {/* Contact Info */}
          <div className="w-full lg:w-1/4">
            <h4 className="text-2xl font-bold text-blue-400 mb-6">Contact</h4>
            {contactInfo.map((info, index) => (
              <p key={index} className="flex items-center mb-2">
                {React.createElement(info.icon, { className: 'mr-3 text-blue-400' })}
                {info.text}
              </p>
            ))}
            <div className="flex space-x-4 mt-4">
              {socialLinks.map((social, index) => (
                <a key={index} href={social.href} target="_blank" rel="noopener noreferrer" className={`text-white hover:${social.color} transition duration-300 text-2xl`}>
                  {React.createElement(social.icon)}
                </a>
              ))}
            </div>
          </div>

          {/* Opening Hours */}
          <div className="w-full lg:w-1/4">
            <h4 className="text-2xl font-bold text-blue-400 mb-6">Opening Hours</h4>
            {openingHours.map((hours, index) => (
              <div key={index} className="mb-2">
                <h5 className="text-white text-lg font-semibold">{hours.day}</h5>
                <p className="text-gray-400">{hours.time}</p>
              </div>
            ))}
          </div>

          {/* Newsletter */}
          <div className="w-full lg:w-1/4">
            <h4 className="text-2xl font-bold text-blue-400 mb-6">Newsletter</h4>
            <p className="text-gray-400 mb-4">Stay updated with our latest news and offers. Subscribe to our newsletter!</p>
            <div className="relative">
              <input
                type="text"
                className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your email"
              />
              <button
                type="button"
                className="absolute top-0 right-0 mt-2 mr-2 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-transform transform hover:scale-105"
              >
                SignUp
              </button>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
<Contactus/>

        {/* Footer Bottom */}
        <div className="mt-12 text-center border-t border-gray-700 pt-6">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <p className="text-gray-400">©️ 2024 Your Site HAMZA. All Rights Reserved.</p>
            <div className="flex space-x-4 mt-4 lg:mt-0">
              <a href="#" className="text-gray-400 hover:text-white">Home</a>
              <a href="#" className="text-gray-400 hover:text-white">Cookies</a>
              <a href="#" className="text-gray-400 hover:text-white">Help</a>
              <a href="#" className="text-gray-400 hover:text-white">FAQs</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;