import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';
import logo1 from '../assets/logo1.png';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const Footer2 = () => {
  const navigate = useNavigate();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Function to navigate to services page and scroll to section
  const navigateToService = (serviceId) => {
    navigate('/our-services');
    setTimeout(() => {
      const element = document.getElementById(serviceId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  return (
    <motion.footer
      className="bg-black text-white py-5 md:py-12 relative z-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={stagger}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#311b3f] to-transparent opacity-30 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-6 z-20">
        <div className="flex flex-col md:flex-row justify-between gap-5 ">

          {/* About Section */}
          <motion.div className="flex-1" variants={fadeInUp}>
            <img className="w-24 h-22 mb-4" src={logo1} alt="PigoPi Logo" />
            <p className="text-gray-400 px-2">
              Elevate your digital presence with cutting-edge web design and development services.
            </p>

            {/* Updated Social Icons */}
            <div className="flex items-center gap-4 px-2 mt-6">
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1877F2] p-2 rounded-full hover:scale-110 transition transform shadow-lg"
              >
                <FaFacebookF className="text-white text-xl" />
              </a>
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-600 p-2 rounded-full hover:scale-110 transition transform shadow-lg"
              >
                <FaInstagram className="text-white text-xl" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0077B5] p-2 rounded-full hover:scale-110 transition transform shadow-lg"
              >
                <FaLinkedinIn className="text-white text-xl" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1DA1F2] p-2 rounded-full hover:scale-110 transition transform shadow-lg"
              >
                <FaTwitter className="text-white text-xl" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FF0000] p-2 rounded-full hover:scale-110 transition transform shadow-lg"
              >
                <FaYoutube className="text-white text-xl" />
              </a>
            </div>
          </motion.div>

          {/* Get in Touch Section */}
          <motion.div className="flex-1 mx-1" variants={fadeInUp} >
            <div className="rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 p-6 shadow-xl mt-3">
              <h4 className="text-xl font-semibold mb-2">Get in touch with us</h4>
              <p className="text-sm text-gray-200 mb-4">
                Have any questions or need help? We're here to assist you.
              </p>
              <div className="flex flex-col space-y-3">
                <a
                  href="mailto:info@pigo-pi.com"
                  className="text-lg text-gray-50 hover:text-white transition"
                >
                  info@CodeInspect.com
                </a>
                <p className="text-lg text-gray-50 hover:text-white transition">
                    Email : arunpe878@gmail.com 
                </p>
              </div>
            </div>
          </motion.div>


          {/* Services Section */}
          <motion.div className="order-last px-2 md:order-none" variants={fadeInUp}>
            <h4 className="text-xl font-semibold mb-4 text-white">Our Service</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => navigateToService('automation-testing')}
                  className="hover:text-pink-300 transition duration-300 w-full text-left"
                >
                  Automation testing
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateToService('functional-testing')}
                  className="hover:text-pink-300 transition duration-300 w-full text-left"
                >
                  Functional Testing
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateToService('mobile-app-testing')}
                  className="hover:text-pink-300 transition duration-300 w-full text-left"
                >
                  Mobile App Testing
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateToService('security-testing')}
                  className="hover:text-pink-300 transition duration-300 w-full text-left"
                >
                  Security Testing
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateToService('performance-testing')}
                  className="hover:text-pink-300 transition duration-300 w-full text-left"
                >
                  Performance Testing
                </button>
              </li>
            </ul>
          </motion.div>

          {/* Legal Links Section */}
          <motion.div className="order-last px-2 md:order-none" variants={fadeInUp}>
            <h4 className="text-xl font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={handleScrollToTop}
                  className="hover:text-pink-300 transition duration-300 w-full text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <Link to="/refund-policy" className="hover:text-pink-300 transition duration-300">Refund Policy</Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:text-pink-300 transition duration-300">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms-conditions" className="hover:text-pink-300 transition duration-300">Terms & Conditions</Link>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Copyright Section */}
        <motion.div
          className="mt-10 border-t border-gray-700 pt-4 flex justify-between items-center"
          variants={fadeInUp}
        >
          <p className="text-sm text-center text-transparent bg-clip-text bg-white">
            &copy; {new Date().getFullYear()} CodeInspect. All rights reserved.
          </p>
          <p className="text-sm text-right text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-yellow-500 to-green-400">
            Powered By PigoPi
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer2;