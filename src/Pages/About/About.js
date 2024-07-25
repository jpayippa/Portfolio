import React from 'react';
import { FaReact, FaNodeJs, FaPython, FaJava, FaGit, FaDocker } from 'react-icons/fa';
import { SiJavascript, SiNextdotjs, SiAmazonaws, SiGithub, SiDjango, SiGooglecloud, SiFirebase, SiMysql, SiMongodb, SiNodemon, SiNginx } from 'react-icons/si';
import { DiVisualstudio } from 'react-icons/di';
import GitHubCalendar from 'react-github-calendar';
import { motion } from 'framer-motion';
import headshot from '../../Assets/headshot.png';

const About = () => {
    return (
        <div className="container mx-auto p-4 text-white mb-16">
            {/* About Me Section */}
            <motion.section
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full text-left mb-16 relative"
            >
                <div className="flex flex-col md:flex-row items-start">
                    <div className="vs-code-window bg-gray-800 rounded-lg shadow-lg flex-grow relative md:w-2/3">
                        <div className="vs-code-header bg-gray-900 text-gray-400 flex items-center justify-between p-2 rounded-t-lg">
                            <div className="flex items-center space-x-2">
                                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                            </div>
                            <div className="flex-1 text-center">About Me</div>
                        </div>
                        <div className="vs-code-content p-4">
                            <p className="text-lg mb-4">
                                My journey in programming began in grade 9 in India with <span className="highlight">C</span> and <span className="highlight">C++</span>.
                            </p>
                            <p className="text-lg mb-4">
                                The real spark ignited when I created a game using <span className="highlight">Java</span> after moving to Canada in grade 10.
                            </p>
                            <p className="text-lg mb-4">
                                This experience was pivotal and led me to pursue a career in programming.
                            </p>
                            <p className="text-lg mb-4">
                                Today, I am in my fourth year of <span className="highlight">Software Engineering</span> at Western University in Ontario, Canada.
                            </p>
                            <p className="text-lg mb-4">Beyond coding, I enjoy:</p>
                            <ul className="list-disc list-inside text-lg mb-4">
                                <li className="highlight">Reading</li>
                                <li className="highlight">Diving into immersive PC games</li>
                                <li className="highlight">Exploring new places through travel</li>
                                <li className="highlight">Fishing</li>
                            </ul>
                            <p className="text-lg mb-4">
                                These activities help me unwind and fuel my creativity and inspiration.
                            </p>
                        </div>

                    </div>
                    <motion.img
                        src={headshot}
                        alt="Joel Payippara Shibu"
                        className="w-32 md:w-48 lg:w-64 rounded-full shadow-lg mb-8 md:mb-0 md:ml-4 lg:ml-8"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                    />
                </div>
            </motion.section>

            {/* Professional Skills Section */}
            <section className="mb-16">
                <h2 className="text-4xl font-bold mb-8 text-center">Professional Skills</h2>
                <div className="flex flex-wrap justify-center">
                    {[
                        { Icon: SiJavascript, color: "text-yellow-400", label: "JavaScript" },
                        { Icon: FaJava, color: "text-red-600", label: "Java" },
                        { Icon: FaPython, color: "text-blue-500", label: "Python" },
                        { Icon: FaReact, color: "text-blue-400", label: "React.js" },
                        { Icon: SiNextdotjs, color: "", label: "Next.js" },
                        { Icon: SiDjango, color: "text-green-400", label: "Django" },
                        { Icon: FaNodeJs, color: "text-green-500", label: "Node.js" },
                        { Icon: SiMongodb, color: "text-green-400", label: "MongoDB" }
                    ].map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="sticky-note"
                            whileHover={{ rotate: 0, scale: 1.05 }}
                        >
                            <skill.Icon size={40} className={skill.color} />
                            <p>{skill.label}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Tools I Use Section */}
            <section className="mb-16">
                <h2 className="text-4xl font-bold mb-8 text-center">Tools I Use</h2>
                <div className="flex flex-wrap justify-center">
                    {[
                        { Icon: SiGithub, color: "", label: "GitHub" },
                        { Icon: FaDocker, color: "text-blue-500", label: "Docker" },
                        { Icon: SiAmazonaws, color: "text-orange-500", label: "AWS" },
                        { Icon: SiGooglecloud, color: "text-blue-500", label: "GCP" },
                        { Icon: SiFirebase, color: "text-yellow-500", label: "Firebase" },
                        { Icon: SiMysql, color: "text-blue-400", label: "MySQL" },
                        { Icon: DiVisualstudio, color: "text-blue-500", label: "VS Code" },
                        { Icon: SiNodemon, color: "text-blue-500", label: "Nodemon" },
                        { Icon: SiNginx, color: "text-blue-500", label: "Nginx" },
                        { Icon: FaGit, color: "text-orange-600", label: "Git" }
                    ].map((tool, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="sticky-note"
                            whileHover={{ rotate: 0, scale: 1.05 }}
                        >
                            <tool.Icon size={40} className={tool.color} />
                            <p>{tool.label}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* GitHub Activity Section */}
            <section className="mb-16">
                <h2 className="text-4xl font-bold mb-8 text-center">GitHub Activity</h2>
                <div className="flex justify-center">
                    <div className="bg-transparent p-4 rounded-lg w-full max-w-3xl">
                        <GitHubCalendar
                            username="jpayippa"
                            theme={{
                                light: ['#ebedf0', '#c6e48b', '#7bc96f', '#239a3b', '#196127'],
                                dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
                            }}
                            blockMargin={2}
                            blockSize={11}
                            fontSize={14}
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
