import React from 'react';
import { FaReact, FaNodeJs, FaPython, FaJava, FaGit, FaDocker } from 'react-icons/fa';
import { SiJavascript, SiNextdotjs, SiAmazonaws, SiGithub, SiDjango, SiGooglecloud, SiFirebase, SiMysql, SiMongodb, SiNodemon, SiNginx } from 'react-icons/si';
import { DiVisualstudio } from 'react-icons/di';
import GitHubCalendar from 'react-github-calendar';

const About = () => {
    return (
        <div className="container mx-auto p-4 text-white mb-16">
            {/* Know Who I Am Section */}
            <section className="mb-16">
                <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
                <p className="text-lg mb-4 text-center md:text-left">
                    My journey in programming began in grade 9 in India with C and C++. The real spark, however, ignited when I created a game using Java after moving to Canada in grade 10. This experience was pivotal and led me to pursue a career in programming. Today, I am in my fourth year of Software Engineering at Western University in Ontario, Canada.
                </p>
                <p className="text-lg mb-4 text-center md:text-left">
                    Beyond the realm of coding, I find joy in reading, diving into immersive PC games, exploring new places through travel, and fishing. These activities not only help me unwind but also fuel my creativity and inspiration.
                </p>
            </section>

            {/* Professional Skills Section */}
            <section className="mb-16">
                <h2 className="text-4xl font-bold mb-8 text-center">Professional Skills</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-items-center">
                    <div className="flex flex-col items-center">
                        <SiJavascript size={40} className="text-yellow-400 mb-2" />
                        <p className="text-lg">JavaScript</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <FaJava size={40} className="text-red-600 mb-2" />
                        <p className="text-lg">Java</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <FaPython size={40} className="text-blue-500 mb-2" />
                        <p className="text-lg">Python</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <FaReact size={40} className="text-blue-400 mb-2" />
                        <p className="text-lg">React.js</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <SiNextdotjs size={40} className="mb-2" />
                        <p className="text-lg">Next.js</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <SiDjango size={40} className="text-green-400 mb-2" />
                        <p className="text-lg">Django</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <FaNodeJs size={40} className="text-green-500 mb-2" />
                        <p className="text-lg">Node.js</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <SiMongodb size={40} className="text-green-400 mb-2" />
                        <p className="text-lg">MongoDB</p>
                    </div>
                </div>
            </section>

            {/* Tools I Use Section */}
            <section className="mb-16">
                <h2 className="text-4xl font-bold mb-8 text-center">Tools I Use</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-items-center">
                    <div className="flex flex-col items-center">
                        <SiGithub size={40} className="mb-2" />
                        <p className="text-lg">GitHub</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <FaDocker size={40} className="text-blue-500 mb-2" />
                        <p className="text-lg">Docker</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <SiAmazonaws size={40} className="text-orange-500 mb-2" />
                        <p className="text-lg">AWS</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <SiGooglecloud size={40} className="text-blue-500 mb-2" />
                        <p className="text-lg">GCP</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <SiFirebase size={40} className="text-yellow-500 mb-2" />
                        <p className="text-lg">Firebase</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <SiMysql size={40} className="text-blue-400 mb-2" />
                        <p className="text-lg">MySQL</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <DiVisualstudio size={40} className="text-blue-500 mb-2" />
                        <p className="text-lg">VS Code</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <SiNodemon size={40} className="text-blue-500 mb-2" />
                        <p className="text-lg">Nodemon</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <SiNginx size={40} className="text-blue-500 mb-2" />
                        <p className="text-lg">Nginx</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <FaGit size={40} className="text-orange-600 mb-2" />
                        <p className="text-lg">Git</p>
                    </div>
                </div>
            </section>

            {/* GitHub Activity Section */}
            <section className="mb-16">
                <h2 className="text-4xl font-bold mb-8 text-center">GitHub Activity</h2>
                <div className="flex justify-center">
                    <div className="bg-transparent p-4 rounded-lg w-full max-w-3xl">
                        <h3 className="text-2xl font-semibold mb-4 text-center">My Contributions</h3>
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
