// src/components/Layout.js
import React from 'react';
import StarryBackground from './StarryBackground';
import NavBar from './NavBar';
import Footer from './Footer';
import useFakeLoading from './Hooks/useFakeLoading';
import SpaceshipLoading from './SpaceshipLoading';

const Layout = ({ children }) => {
    const loading = useFakeLoading();

    return (
        <div className="relative min-h-screen">
            <StarryBackground />
            <NavBar />
            <div className="relative z-10 pt-16">
                {loading ? <SpaceshipLoading /> : children}
            </div>
            <Footer />
        </div>
    );
};

export default Layout;
