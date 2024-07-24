import React from 'react';
import { FaReact, FaNodeJs, FaPython, FaJava, FaGit, FaDocker } from 'react-icons/fa';
import { SiJavascript, SiNextdotjs, SiAmazonaws, SiDjango, SiGithub, SiGooglecloud, SiFirebase, SiMysql, SiMongodb, SiNodemon, SiNginx } from 'react-icons/si';
import { DiVisualstudio } from 'react-icons/di';

const About = () => {
    return (
        <div className="container mx-auto p-4 text-white mb-16">
            {/* Know Who I Am Section */}
            <section className="mb-16">
                <h2 className="text-4xl font-bold mb-8 text-center">Know Who I Am</h2>
                <p className="text-lg mb-4 text-center md:text-left">
                    I was introduced to programming in grade 9 with C and C++ in India, but my passion for programming truly blossomed when I created a game using Java after moving to Canada in grade 10. This experience solidified my decision to pursue programming as a career. Currently, I am in my fourth year of Software Engineering at Western University in Ontario, Canada.
                </p>
                <p className="text-lg mb-4 text-center md:text-left">
                    Outside of coding, I enjoy reading, diving into immersive PC games, and exploring new places through travel. These hobbies help me to unwind and stay inspired in my creative pursuits.
                </p>
            </section>

            {/* Professional Skills Section */}
            <section className="mb-16">
                <h2 className="text-4xl font-bold mb-8 text-center">Professional Skills</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
                    <div className="flex flex-col items-center">
                        <SiJavascript size={50} className="text-yellow-400 mb-2" />
                        <p className="text-lg">JavaScript</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <FaJava size={50} className="text-red-600 mb-2" />
                        <p className="text-lg">Java</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <FaPython size={50} className="text-blue-500 mb-2" />
                        <p className="text-lg">Python</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <FaReact size={50} className="text-blue-400 mb-2" />
                        <p className="text-lg">React.js</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <SiNextdotjs size={50} className="mb-2" />
                        <p className="text-lg">Next.js</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <SiDjango size={50} className="text-green-400 mb-2" />
                        <p className="text-lg">Django</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <FaNodeJs size={50} className="text-green-500 mb-2" />
                        <p className="text-lg">Node.js</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <SiMongodb size={50} className="text-green-400 mb-2" />
                        <p className="text-lg">MongoDB</p>
                    </div>
                </div>
            </section>

            {/* Tools I Use Section */}
            <section className="mb-16">
                <h2 className="text-4xl font-bold mb-8 text-center">Tools I Use</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
                    <div className="flex flex-col items-center">
                        <SiGithub size={50} className="mb-2" />
                        <p className="text-lg">GitHub</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <FaDocker size={50} className="text-blue-500 mb-2" />
                        <p className="text-lg">Docker</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <SiAmazonaws size={50} className="text-orange-500 mb-2" />
                        <p className="text-lg">AWS</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <SiGooglecloud size={50} className="text-blue-500 mb-2" />
                        <p className="text-lg">GCP</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <SiFirebase size={50} className="text-yellow-500 mb-2" />
                        <p className="text-lg">Firebase</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <SiMysql size={50} className="text-blue-400 mb-2" />
                        <p className="text-lg">MySQL</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <DiVisualstudio size={50} className="text-blue-500 mb-2" />
                        <p className="text-lg">VS Code</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <SiNodemon size={50} className="text-blue-500 mb-2" />
                        <p className="text-lg">Nodemon</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <SiNginx size={50} className="text-blue-500 mb-2" />
                        <p className="text-lg">Nginx</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <FaGit size={50} className="text-orange-600 mb-2" />
                        <p className="text-lg">Git</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
