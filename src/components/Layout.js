import React from 'react';
import StarryBackground from './StarryBackground';
import NavBar from './NavBar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="relative min-h-screen flex flex-col">
      <StarryBackground />
      <NavBar />
      {/* <Footer /> */}

      <div className="flex-grow relative  pt-16">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
