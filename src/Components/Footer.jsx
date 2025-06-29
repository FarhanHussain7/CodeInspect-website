import React from 'react';
import { Link } from 'react-router-dom';
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

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
        <div className="flex flex-col md:flex-row justify-between gap-10">

          {/* About Section */}
          <motion.div className="flex-1" variants={fadeInUp}>
            {/* <img className="w-24 h-22 mb-4" src={logo1} alt="PigoPi Logo" /> */}

            <svg xmlns="http://www.w3.org/2000/svg" width="250" height="60">
  <g transform="translate(0 10)">
    <circle cx="25" cy="25" r="20" fill="none" stroke="#2563EB" stroke-width="3"/>
    <path stroke="#2563EB" stroke-width="3" d="m40 40 15 15"/>
    <circle cx="25" cy="25" r="6" fill="#22c55e"/>
    <path stroke="#22c55e" stroke-width="1.5" d="m19 20-4-5M31 20l4-5M19 30l-4 5M31 30l4 5"/>
  </g>
  <text x="70" y="30" fill="white" font-family="Arial, sans-serif" font-size="20">CodeInspects</text>
  <text x="70" y="50" fill="#6b7280" font-family="Arial, sans-serif" font-size="12">Automation Testing</text>
</svg>
            <p className="text-gray-400 px-2">
              Elevate your digital presence with cutting-edge testing and development services.
            </p>

            {/* Updated Social Icons */}
            <div className="flex items-center gap-4 px-2 mt-6">
              <a
                // href="https://www.facebook.com/profile.php?id=61576543783204&sk=about"
                 href=""
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1877F2] p-2 rounded-full hover:scale-110 transition transform shadow-lg"
              >
                <FaFacebookF className="text-white text-xl" />
              </a>
              <a
                // href="https://www.instagram.com/pigopi_314?igsh=dzMwamsycmpkd204&utm_source=qr"
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
          <motion.div className="flex-1 mx-5" variants={fadeInUp}>
            <div className="rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 p-6 shadow-xl">
              <h4 className="text-xl font-semibold mb-2">Get in touch with us</h4>
              <p className="text-sm text-gray-200 mb-4">
                Have any questions or need help? We're here to assist you.
              </p>
              <div className="flex flex-col space-y-3">
                <a
                  href="mailto:info@CodeInspects.com"
                  className="text-lg text-gray-50 hover:text-white transition"
                >
                  info@CodeInspects.com
                </a>
                <p className="text-lg text-gray-50 hover:text-white transition">
                    Email : arunpe878@gmail.com 
                </p>
              </div>
            </div>
          </motion.div>

          {/* Legal Links Section */}
          <motion.div className="order-last px-2 md:order-none" variants={fadeInUp}>
            <h4 className="text-xl font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={handleScrollToTop}
                  className="hover:text-pink-300 transition duration-300"
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

        {/* Divider */}
        {/* <motion.div
          className="mt-10 border-t border-gray-700 pt-4 text-center"
          variants={fadeInUp}
        >
          <p className="text-sm max-w-xs mx-auto text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-pink-400">
            &copy; {new Date().getFullYear()} CodeInspects. All rights reserved.
          </p>
          <p className="text-sm max-w-xs mx-auto text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-pink-400">
            &copy; Powered By PigoPi.
          </p>
        </motion.div> */}

        <motion.div
  className="mt-10 border-t border-gray-700 pt-4 flex justify-between items-center"
  variants={fadeInUp}
>
  <p className="text-sm text-left text-transparent bg-clip-text bg-white">
    &copy; {new Date().getFullYear()} CodeInspects. All rights reserved.
  </p>
  <p className="text-sm text-right text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-yellow-500 to-green-400">
     Powered By PigoPi
  </p>
</motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
