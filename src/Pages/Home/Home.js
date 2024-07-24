import React from 'react';
import { AiFillGithub, AiFillInstagram, AiOutlineX } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import HomeMain from '../../Assets/HomeMain.png'; // Replace with your illustration path
import headshot from '../../Assets/headshot.png'; // Replace with your introduction image path

const Home = () => {
    return (
        <div className="container mx-auto p-4 text-white flex-grow flex flex-col justify-center items-center text-center">
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col md:flex-row items-center w-full mb-16"
            >
                <div className="order-2 md:order-1 text-left md:w-1/2 mb-8 md:mb-0">
                    <h1 className="text-6xl font-bold mb-4">Hello, World! <span role="img" aria-label="wave">👋</span></h1>
                    <h2 className="text-4xl font-bold mb-4">I'M <span className="text-blue-500">JOEL PAYIPPARA SHIBU</span></h2>
                    <h3 className="text-2xl font-semibold mb-4">
                        <Typewriter
                            words={['Software Engineer', 'Freelancer', 'Tech Enthusiast', 'MERN Stack Developer']}
                            loop={0}
                            cursor
                            cursorStyle="|"
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </h3>
                </div>
                <div className="order-1 md:order-2 md:w-1/2">
                    <img
                        src={HomeMain}
                        alt="Desktop Setup"
                        className="mx-auto w-64 md:w-96 rounded-lg shadow-lg"
                    />
                </div>
            </motion.div>
            <motion.section
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full text-left mb-16"
            >
                <h2 className="text-4xl font-bold mb-8 text-center md:text-left">GET TO KNOW <span className="text-blue-500">ME</span></h2>
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-2/3 mb-8 md:mb-0">
                        <p className="text-lg mb-4">
                            From writing my first line of code to crafting complex applications, my journey in programming has been an exhilarating adventure. I began with C and C++ in India, and my passion truly ignited when I created a game in Java after moving to Canada.
                        </p>
                        <p className="text-lg mb-4">
                            I am fluent in <span className="text-blue-500">JavaScript, Java, and Python</span>, the languages that form the backbone of modern technology.
                        </p>
                        <p className="text-lg mb-4">
                            My enthusiasm lies in developing cutting-edge <span className="text-blue-500">web technologies and products</span>, exploring the realms of <span className="text-blue-500">app development and AI</span>.
                        </p>
                        <p className="text-lg mb-4">
                            I thrive on opportunities to work with <span className="text-blue-500">Node.js</span> and modern JavaScript libraries and frameworks like <span className="text-blue-500">React.js</span> and <span className="text-blue-500">Next.js</span>, transforming ideas into tangible products.
                        </p>
                    </div>

                    <div className="md:w-1/3 flex justify-center">
                        <motion.img
                            src={headshot}
                            alt="Joel Payippara Shibu"
                            className="w-48 md:w-64 rounded-full shadow-lg"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            transition={{ duration: 0.3 }}
                        />
                    </div>
                </div>
                <div className="text-lg mb-4 text-center md:text-left">
                    <p className="mb-4">Connect with me on:</p>
                    <div className="flex space-x-4 justify-center md:justify-start">
                        <a href="https://github.com/jpayippa" className="text-white hover:text-gray-400"><AiFillGithub size={30} /></a>
                        <a href="https://x.com/joel_p_s_" className="text-white hover:text-gray-400"><AiOutlineX size={30} /></a>
                        <a href="https://www.linkedin.com/in/joel-payippara-shibu/" className="text-white hover:text-gray-400"><FaLinkedinIn size={30} /></a>
                        <a href="https://www.instagram.com/joel_ps_/" className="text-white hover:text-gray-400"><AiFillInstagram size={30} /></a>
                    </div>
                </div>
            </motion.section>
        </div>
    );
};

export default Home;
