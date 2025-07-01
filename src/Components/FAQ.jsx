import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqData = [
  {
    question: "Question 1: What services does an automation testing company offer?",
    answer: "An automation testing company typically provides,  Test strategy and framework design, Test script development and execution, Integration with CI/CD pipelines, Performance and load testing, Test data generation and management, Maintenance of existing automated test suites "
},
  {
    question: "Question 2: How much does it cost to hire an automation testing company?",
    answer: "The cost varies based on : Project complexity and duration, Number of platforms supported (e.g., web, mobile, APIs), Tools used (open-source vs. commercial), Level of customization and integration"
  },
  {
    question: "Question 3: How long does it take to implement automation testing?",
    answer: "In general, for most mid-sized applications, a reliable automation suite can be built in 2–3 months. However, scaling and optimizing takes time and continuous effort."
  },
  {
    question: "Question 4: What is software development, and why is it important for your business?",
    answer: "Software development is the process of designing, building, testing, and maintaining applications or systems that solve specific problems or enhance user experiences. It involves writing code, creating user interfaces, managing databases, and ensuring performance and security."
  },
  {
    question: "Question 5: How do you ensure website performance and speed?",
    answer: "We optimize performance by : Minimizing and compressing assets (images, scripts, styles), Using lazy loading and caching, Writing clean, efficient code, Leveraging CDNs and fast hosting"
  },
  {
    question: "Question 6: What is the typical cost of a web development project?",
    answer: "Costs vary based on the project’s scope, features, and complexity. A basic website might start around a few hundred dollars, while a custom web application can range into the thousands. We’ll provide a detailed quote after understanding your needs."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="bg-gradient-to-r from-blue-400 via-purple-400 text-white py-5 md:py-24 px-10 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Left Column - Title and Contact */}
          <div className=" space-y-10">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl font-bold bg-white text-transparent bg-clip-text"
            >
            Ask Us Anything <br/> About <br /> CodeInspects <br/> 
           </motion.h1>
          
           <div className="mt-2 block font-normal text-xl text-black">
                                      - Find Your Answer <br />
                                       - Solve It Here <br />
                                       - Explore Solutions <br />
                                       - Start Debugging<br />
                                       - Fix It Fast
          </div>
          {/* <div className="mt-2 block font-bold text-xl md:text-2xl bg-gradient-to-r from-black via-pink-500 to-red-500 text-transparent bg-clip-text font-[cursive] tracking-wide italic drop-shadow-lg">
  - Find Your Answer <br />
  - Solve It Here <br />
  - Explore Solutions <br />
  - Start Debugging <br />
  - Fix It Fast
</div> */}
</div>

          {/* Right Column - FAQ Items */}
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="border-b border-gray-800"
              >
                <button
                  onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                  className="w-full py-4 flex justify-between items-center text-left"
                >
                  <span className="text-lg font-medium text-black">{faq.question}</span>
                  <span className={`transform transition-transform duration-300 text-3xl md:text-4xl ${activeIndex === index ? 'rotate-45' : ''}`}>
                    {activeIndex === index ? '×' : '+'}
                  </span>
                </button>
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="pb-4 text-blue-500 font-bold">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;