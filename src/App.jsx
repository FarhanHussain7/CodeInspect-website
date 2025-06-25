import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
// import CustomCursor from './Components/CustomCursor';

const App = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      {/* <CustomCursor /> */}
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
