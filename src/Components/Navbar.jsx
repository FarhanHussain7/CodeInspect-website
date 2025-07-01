import React, { useState, useEffect, useRef } from 'react';
import logo1 from '../assets/logo1.png';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [activeSection, setActiveSection] = useState('');
  const lastScrollY = useRef(window.scrollY);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const sectionIds = ['services', 'about', 'events', 'contact'];
    const handleScroll = () => {
      let found = '';
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom > 120) {
            found = `#${id}`;
            break;
          }
        }
      }
      setActiveSection(found);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAnchorClick = (e, id) => {
    e.preventDefault();
    setMenuOpen(false);
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: id } });
    } else {
      const el = document.getElementById(id.substring(1));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const getActiveClass = (pathOrHash) => {
    // Home link is neutral when services or about is active
    if (pathOrHash === '/') {
      if (activeSection === '#services' || activeSection === '#about') {
        return '';
      }
      return location.pathname === '/' && !activeSection ? 'text-blue-400 font-bold underline underline-offset-8' : '';
    }
    if (pathOrHash.startsWith('#')) {
      return activeSection === pathOrHash ? 'text-blue-400 font-bold underline underline-offset-8' : '';
    }
    return location.pathname === pathOrHash ? 'text-blue-400 font-bold underline underline-offset-8' : '';
  };

  return (
    <div
      className={
        `fixed top-0 w-full z-50 bg-black/20 backdrop-blur-xl` // Removed scroll-hide logic
      }
    >
      <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
        {/* Logo clickable, navigates home and scrolls to top */}
        <Link to="/" onClick={handleScrollToTop} className="cursor-pointer flex items-center group">
          <svg xmlns="http://www.w3.org/2000/svg" width="250" height="60">
            <g transform="translate(0 10)">
              <circle cx="25" cy="25" r="20" fill="none" stroke="#2563EB" stroke-width="3"/>
              <path stroke="#2563EB" stroke-width="3" d="m40 40 15 15"/>
              <circle cx="25" cy="25" r="6" fill="#22c55e"/>
              <path stroke="#22c55e" stroke-width="1.5" d="m19 20-4-5M31 20l4-5M19 30l-4 5M31 30l4 5"/>
            </g>
            <text x="70" y="30" fill="white" font-family="Arial, sans-serif" font-size="20">CodeInspects</text>
            <text x="70" y="50" fill="white" font-family="Arial, sans-serif" font-size="12">Automation Testing</text>
          </svg>
        </Link>

        {/* Desktop Nav - always show on desktop width, even in desktop mode on mobile browsers */}
        <div className="hidden xl:flex xl:items-center font-[Host_Grotesk] text-lg space-x-8 px-6 py-2 rounded-xl text-white whitespace-nowrap">
          <Link
            to="/"
            className={`relative group transition-all duration-300 ${getActiveClass('/')}`}
          >
            <span onClick={handleScrollToTop} className="group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-blue-400 via-purple-400 to-pink-300 transition-all duration-300">
              Home
            </span>
          </Link>

          <a
            href="#services"
            onClick={e => handleAnchorClick(e, '#services')}
            className={`relative group transition-all duration-300 ${getActiveClass('#services')}`}
          >
            <span className="group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-blue-400 via-purple-400 to-pink-300 transition-all duration-300">
              Services
            </span>
          </a>

          <a
            href="#about"
            onClick={e => handleAnchorClick(e, '#about')}
            className={`relative group transition-all duration-300 ${getActiveClass('#about')}`}
          >
            <span className="group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-blue-400 via-purple-400 to-pink-300 transition-all duration-300">
              About Us
            </span>
          </a>

          <a
            href="#events"
            onClick={e => handleAnchorClick(e, '#events')}
            className={`relative group transition-all duration-300 ${getActiveClass('#events')}`}
          >
            <span className="group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-blue-400 via-purple-400 to-pink-300 transition-all duration-300">
              Events
            </span>
          </a>

          {/* <Link
            to="/privacy-policy"
            className={`relative group transition-all duration-300 ${getActiveClass('/privacy-policy')}`}
          >
            <span className="group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-blue-400 via-purple-400 to-pink-300 transition-all duration-300">
              Privacy Policy
            </span>
            <span className="absolute left-1/2 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-300 transition-all duration-500 ease-in-out transform -translate-x-1/2 group-hover:w-full rounded-full"></span>
          </Link> */}

          <Link
            to="/terms-conditions"
            className={`relative group transition-all duration-300 ${getActiveClass('/terms-conditions')}`}
          >
            <span className="group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-blue-400 via-purple-400 to-pink-300 transition-all duration-300">
              Terms <span className="font-mono">&</span> Conditions
            </span>
            {/* <span className="absolute left-1/2 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-300 transition-all duration-500 ease-in-out transform -translate-x-1/2 group-hover:w-full rounded-full"></span> */}
          </Link>
      {/* <a
        href="#contact"
        className="relative px-8 py-2 font-bold text-lg text-white bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 rounded-xl group overflow-hidden transition-all duration-300"
        onClick={e => handleAnchorClick(e, '#contact')}
      >
        { Glow effect }
        <span className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out scale-125 group-hover:scale-100 blur-md"></span>

        { Shine effect }
        <span className="absolute inset-0 z-0 bg-white/10 group-hover:animate-pulse"></span>

        <span className="relative z-10">Contact Now</span>
      </a> */}
      <a
  href="#contact"
  className="relative px-8 py-2 font-bold text-lg text-white border-2 border-white rounded-xl group overflow-hidden transition-all duration-300 bg-zinc-300 hover:bg-gray-900"
  onClick={e => handleAnchorClick(e, '#contact')}
>
  {/* Subtle glow effect on hover */}
  <span className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out scale-110 group-hover:scale-100 blur-sm"></span>

  {/* Animated shine effect */}
  <span className="absolute inset-0 z-0 bg-white/5 group-hover:bg-white/10 transition-all duration-700 ease-in-out transform -translate-x-full group-hover:translate-x-0"></span>

  <span className="relative z-10 flex items-center justify-center gap-2 font-bold text-blue-500">
    Contact Now
    {/* Optional arrow icon */}
    <svg 
      width="16" 
      height="16" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      className="transition-transform duration-300 group-hover:translate-x-1"
    >
      <path d="M5 12h14M12 5l7 7-7 7"/>
    </svg>
  </span>
</a>
        </div>


        {/* Mobile Icon */}
        <div className="xl:hidden text-white text-3xl" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="xl:hidden bg-black/80 h-screen text-white flex flex-col items-center gap-6 py-6">
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <a href="#services" onClick={e => handleAnchorClick(e, '#services')}>Services</a>
          <a href="#about" onClick={e => handleAnchorClick(e, '#about')}>About Us</a>
          <a href="#events" onClick={e => handleAnchorClick(e, '#events')}>Events</a>
          {/* <Link to="/privacy-policy" onClick={() => setMenuOpen(false)}>Privacy Policy</Link> */}
          <Link to="/terms-conditions" onClick={() => setMenuOpen(false)}>Terms & Conditions</Link>
          <a href="#contact" className='bg-blue-500 px-12 rounded-xl py-2' onClick={e => handleAnchorClick(e, '#contact')}>Contact Now</a>
        </div>
      )}
    </div>
  );
};

export default Header;
