import recharge from '../../assets/partners/recharge.png';
import border from '../../assets/partners/border.png';
import inspire from '../../assets/partners/inspire.png';
import minty from '../../assets/partners/minty.png';
import snowflake from '../../assets/partners/snowflake.png';
import sitemark from '../../assets/partners/sitemark.png';
import image1 from '../../assets/aboutdata/image1.jpg';
import image2 from '../../assets/aboutdata/image2.jpg';
import image3 from '../../assets/aboutdata/image3.jpg';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import Lights from '../../Components/Lights';
import Lightning from '../../Components/Lightning';
import Earth from '../../Components/Earth';
import { motion } from 'framer-motion';
import image24 from "../../assets/services/image24.png"
import image10 from "../../assets/services/image10.jpg"
import image25 from "../../assets/services/image25.jpg"

// COMMIT CHECK

const services = [
  {
    title: 'Test Automation Strategy & Consulting',
    description: `Helping teams choose the right tools, frameworks, and approaches tailored to their product and workflow.`,
    gradient: 'from-purple-600 to-black'
  },
  {
    title: 'Framework Development',
    description: `Building reusable, scalable test automation frameworks (e.g., keyword-driven, data-driven, hybrid).`,
    gradient: 'from-pink-600 to-black'
  },
  {
    title: 'Software Testing Service',
    description: `Deliver bug-free software with our all-inclusive testing services. From functionality and performance to security and automation, our QA specialists ensure your product is dependable, safe, and provides an exceptional user experience before going live.`,
    gradient: 'from-blue-600 to-black'
  },
];

const partners = [
  { name: 'Recharge', img: recharge },
  { name: 'Inspire', img: border },
  { name: 'Minty', img: inspire },
  { name: 'Sitemark', img: minty },
  { name: 'Snowflake', img: snowflake },
  { name: 'Border', img: sitemark },
  { name: 'Border', img: recharge },
  { name: 'Border', img: border },
];

const aboutData = [
  {
    title: 'Regression Testing',
    description:
      ' Re-running tests to ensure new code changes haven’t broken existing functionality.',
    img: image25,
    gradient: 'from-purple-400 to-black',
  },
  {
    title: 'Functional Testing',
    description:
      "To make sure every feature works as expected. Think of it as the “does it do what it should?” test.",
    img: image24,
    gradient: 'from-blue-600 to-black',
  },
  {
    title: 'Performance & Load Testing',
    description:
      'Measuring how your app behaves under stress or high traffic',
    img: image10,
    gradient: 'from-pink-500 to-black',
  },
];

const HomePage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      const el = document.getElementById(location.state.scrollTo.substring(1));
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div id="home" className="text-white font-sans ">
      <div className="fixed w-full h-screen bg-gradient-to-r from-blue-400 via-purple-400 to-pink-300 overflow-hidden">
        {/* 3D Canvas
        <Canvas
          className='pointer-events-none touch-none'
          camera={{ position: [0, 0, 6], fov: 45 }}
        >
          <Lights />
          <Lightning />
          <Earth />
          <OrbitControls
            enableZoom={false}
            autoRotate
            autoRotateSpeed={0.25}
            touches={{ rotate: 0, pan: 0, zoom: 0 }}
          />
          <Stars radius={100} depth={50} count={5000} factor={4} fade />
        </Canvas> */}
      </div>
      

      <div className="relative top-20 left-0 w-full h-screen " />
      <div className="absolute w-full h-screen inset-0 flex flex-col items-center justify-center text-white text-center px-4 z-10 pointer-events-none">
        <h1 className="text-[11vw] font-extrabold tracking-wide font-[Host_Grotesk] text-center">
          CodeInspect
        </h1>
        {/* <h1 className="text-[11vw] font-extrabold tracking-wide font-[Host_Grotesk] text-center bg-gradient-to-r from-yellow-400 via-red-500 to-green-500 bg-clip-text text-transparent ">
  CodeInspect
</h1> */}



        <p className="text-xl font-[Host_Grotesk] tracking-wider text-center">- Automate Everything. Deliver Anything - </p>
      </div>
      <div className="relative z-0">

        {/* Services Section */}
        <section className="relative w-full bg-gradient-to-r from-blue-400 via-purple-400 px-3 text-center">
          {/* <div className=" bg-gradient-to-br from-indigo-900 via-purple-900 to-zinc-900 max-w-7xl mx-auto text-white py-20 px-2"> */}
            <div className="bg-gradient-to-br from-orange-300 via-pink-300 to-purple-300 max-w-7xl mx-auto text-white py-20 px-4 sm:px-8">
            <h2 className="text-[9vw] md:text-[4.5vw] font-bold uppercase">Services</h2>
            {/* <div className="w-24 h-1 mx-auto mb-10 bg-gradient-to-r from-yellow-400 via-pink-500 to-blue-500 animate-gradientMove rounded-full"></div> */}

            {/* <div className="max-w-7xl text-start mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
              {services.map((service, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.7, delay: idx * 0.15 }}
                  className={`p-6 md:p-8 font-[Host_Grotesk] rounded-3xl bg-gradient-to-br ${service.gradient} shadow-lg transition-transform duration-400 hover:scale-105`}
                >
                  <h3 className="text-4xl font-bold mb-4">{service.title}</h3>
                  <p className="text-lg leading-relaxed ">{service.description}</p>
                </motion.div>
              ))}
            </div> */}

            <div className="max-w-7xl text-start mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
  {services.map((service, idx) => (
    <motion.div
      key={idx}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ 
        duration: 0.7, 
        delay: idx * 0.15,
        ease: [0.16, 1, 0.3, 1] // Custom easing curve
      }}
      className={`p-8 font-[Host_Grotesk] rounded-3xl bg-gradient-to-br ${service.gradient} shadow-xl hover:shadow-2xl relative overflow-hidden group transition-all duration-500 hover:-translate-y-2`}
    >
      {/* Subtle shine effect on hover */}
      <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Animated border effect */}
      <div className="absolute inset-0 rounded-3xl border-2 border-white/0 group-hover:border-white/20 transition-all duration-500 pointer-events-none"></div>
      
      <h3 className="text-3xl font-bold mb-4 text-white relative z-10">{service.title}</h3>
      <p className="text-lg leading-relaxed text-white/90 relative z-10">{service.description}</p>
      
      {/* Animated arrow indicator */}
      <div className="absolute bottom-6 right-6 text-white transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="transition-transform duration-500 group-hover:rotate-45">
          <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </motion.div>
  ))}
</div>


            <h2 id="about" className="text-[8vw] md:text-[4.5vw] font-bold text-center mt-35 uppercase">Our Main Goals</h2>
            {/* <div className="w-24 h-1 mx-auto mb-15 bg-gradient-to-r from-yellow-400 via-pink-500 to-blue-500 animate-gradientMove rounded-full"></div> */}
            <div className="max-w-7xl text-center md:text-start mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-2">
              {aboutData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60, scale: 0.9, rotateX: 10 }}
                whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
                whileHover={{
                scale: 1.03,
                rotateZ: 1,
                boxShadow: "0px 15px 30px rgba(0,0,0,0.25)",
                transition: { duration: 0.3 },
              }}
              className={`w-full bg-gradient-to-b ${item.gradient} p-6 rounded-3xl text-white backdrop-blur-lg bg-opacity-70 shadow-xl hover:shadow-2xl transition-all duration-300`}
              >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="overflow-hidden rounded-2xl mb-4"
              >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-60 object-cover transition-transform duration-300"
              />
            </motion.div>
              <h3 className="text-4xl font-extrabold py-3 text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
            {item.title}
            </h3>
              <p className="mt-2 text-lg leading-relaxed text-white/90">{item.description}</p>
            </motion.div>
            ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <div className="w-full bg-gradient-to-r from-blue-400 via-purple-400 text-white px-10 sm:px-6 md:px-8 py-12 sm:py-16">
          <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-8">
            {/* Left Section Title */}
            <div className="w-full lg:w-2/5 mb-6 lg:mb-0">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-normal">The Benefits</h2>
            </div>

            {/* Right Section Content */}
          <div className="w-full lg:w-3/5 space-y-8 sm:space-y-10">
            {[
              {
                title: "🚀 Speed & Efficiency",
                desc: "Automated tests run significantly quicker than manual ones, especially for repetitive tasks."
              },
              {
                title: "🎯 Accuracy & Reliability",
                desc: "Automated tests perform consistently, reducing the risk of oversight. Tools can validate data and UI elements with pinpoint accuracy."
              },
              {
                title: "📊 Better Resource Allocation",
                desc: "-  Human testers can concentrate on exploratory and edge-case testing while automation handles the routine."
              },
              {
                title: "🔐 Security & Risk Management",
                desc: "Automated security tests can catch flaws before they’re exploited."
              }
            ].map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: idx * 0.2, ease: "easeOut" }}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.3 },
                }}
                className="group transition-all duration-300"
              >
                <h3 className="text-2xl sm:text-3xl font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                  {item.title}
                </h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 + idx * 0.2, duration: 0.5 }}
                  className="mt-2 text-base sm:text-lg md:text-xl text-gray-300 group-hover:text-gray-200 transition-colors duration-300"
                >
                  {item.desc}
                </motion.p>
              </motion.div>
            ))}
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;