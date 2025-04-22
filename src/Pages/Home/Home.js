import React from 'react';
import { AiFillGithub, AiOutlineX, AiFillInstagram } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import HomeMain from '../../Assets/HomeMain.png'; // Replace with your illustration path
import headshot from '../../Assets/headshot.png'; // Replace with your introduction image path
import { Helmet } from 'react-helmet';


const Home = () => {
    return (
        <div className="container mx-auto p-4 text-white flex-grow flex flex-col justify-center items-center text-center">
            <Helmet>
            <title>Joel Shibu | Software Engineer & Developer</title>
            <meta name="description" content="Welcome to Joel Shibu's portfolio. Explore my projects, skills, and experience in full-stack development and modern technologies." />
            <link rel="canonical" href="https://joelps.dev/" />
            <meta property="og:title" content="Joel Shibu | Software Engineer" />
            <meta property="og:description" content="Discover my journey in software development, from C++ to MERN stack and AI." />
            <meta property="og:url" content="https://joelps.dev/" />
            </Helmet>

            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col md:flex-row items-center w-full mb-8 space-y-8 md:space-y-0 md:space-x-8"
            >
                <div className="text-left md:w-1/2">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">Hello, World! <span role="img" aria-label="wave">👋</span></h1>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">I'M <span className="text-blue-500">JOEL SHIBU</span></h2>
                    <h3 className="text-xl md:text-2xl font-semibold mb-4">
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
                <div className="md:w-1/2">
                    <img
                        src={HomeMain}
                        alt="Desktop Setup"
                        className="mx-auto w-48 md:w-64 lg:w-96 rounded-lg shadow-lg"
                    />
                </div>
            </motion.div>
            <motion.section
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full text-left mb-16 relative"
            >
                <div className="flex flex-col md:flex-row items-start">
                    <motion.img
                        src={headshot}
                        alt="Joel Payippara Shibu"
                        className="w-32 md:w-48 lg:w-64 rounded-full shadow-lg mb-8 md:mb-0 md:mr-4 lg:mr-8"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                    />
                    <div className="vs-code-window bg-gray-800 rounded-lg shadow-lg flex-grow relative">
                        <div className="vs-code-header bg-gray-900 text-gray-400 flex items-center justify-between p-2 rounded-t-lg">
                            <div className="flex items-center space-x-2">
                                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                            </div>
                            <div className="flex-1 text-center">Get to Know Me</div>
                        </div>
                        <div className="vs-code-content p-4">
                            <ul className="list-disc list-inside text-sm md:text-lg">
                                <li className="mb-2"><span className="text-blue-500">Programming Journey</span>: Started with C and C++ in India, ignited passion with a Java game in Canada.</li>
                                <li className="mb-2"><span className="text-blue-500">Fluent Languages</span>: JavaScript, Java, and Python.</li>
                                <li className="mb-2"><span className="text-blue-500">Interests</span>: Web technologies, app development, and AI.</li>
                                <li className="mb-2"><span className="text-blue-500">Frameworks & Libraries</span>: Node.js, React.js, and Next.js.</li>
                            </ul>
                            <div className="text-sm md:text-lg mt-4 text-center md:text-left">
                                <p className="mb-4">Connect with me on:</p>
                                <div className="flex space-x-4 justify-center md:justify-start">
                                    <a href="https://github.com/jpayippa" className="text-white hover:text-gray-400"><AiFillGithub size={25} /></a>
                                    <a href="https://www.linkedin.com/in/joel-payippara-shibu/" className="text-white hover:text-gray-400"><FaLinkedinIn size={25} /></a>
                                    <a href="https://www.instagram.com/joel_ps_/" className="text-white hover:text-gray-400"><AiFillInstagram size={25} /></a>
                                    <a href="https://x.com/joel_p_s_" className="text-white hover:text-gray-400"><AiOutlineX size={25} /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="vs-code-window bg-gray-800 rounded-lg shadow-2xl w-48 md:w-64 mx-auto md:absolute md:bottom-0 md:right-0 transform translate-x-2 translate-y-2 md:translate-x-4 md:translate-y-4 border border-gray-700 mt-8 md:mt-0"
                >
                    <div className="vs-code-header bg-gray-900 text-gray-400 flex items-center justify-between p-2 rounded-t-lg">
                        <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 md:w-3 md:h-3 bg-red-500 rounded-full"></div>
                            <div className="w-2 h-2 md:w-3 md:h-3 bg-yellow-500 rounded-full"></div>
                            <div className="w-2 h-2 md:w-3 md:h-3 bg-green-500 rounded-full"></div>
                        </div>
                        <div className="flex-1"></div>
                    </div>
                    <div className="vs-code-content p-2 text-center">
                        <p className="mb-2 text-sm md:text-base">Want to know more about me?</p>
                        <Link to="/about" className="inline-block bg-blue-500 text-white py-1 px-2 rounded-lg shadow hover:bg-blue-600 transition duration-300 text-sm md:text-base">
                            Click Here
                        </Link>
                    </div>
                </motion.div>
            </motion.section>
        </div>
    );
};

export default Home;
