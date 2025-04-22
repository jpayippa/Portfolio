import React from 'react';
import { FaDownload } from 'react-icons/fa';
import { Helmet } from 'react-helmet';

const Resume = () => {
    const resumeUrl = 'https://drive.google.com/file/d/10NsWPAkVhbi5XYeGfGmmF62VsKIuw69v/preview';

    return (
        <div className="container mx-auto p-4 text-white">
            <Helmet>
                <title>Resume | Joel Shibu</title>
                <meta name="description" content="View and download Joel Shibu's resume, highlighting experience in full-stack development, cloud tools, and software engineering." />
                <link rel="canonical" href="https://joelps.dev/resume" />
                <meta property="og:title" content="Joel Shibu's Resume" />
                <meta property="og:description" content="Download my resume to see my education, skills, and past projects." />
                <meta property="og:url" content="https://joelps.dev/resume" />
            </Helmet>

            <section className="mb-16">
                <h2 className="text-4xl font-bold mb-8 text-center">My Resume</h2>
                <div className="vs-code-window bg-gray-800 rounded-lg shadow-lg flex-grow relative">
                    <div className="vs-code-header bg-gray-900 text-gray-400 flex items-center justify-between p-2 rounded-t-lg">
                        <div className="flex items-center space-x-2">
                            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        </div>
                        <div className="flex-1 text-center">Resume</div>
                    </div>
                    <div className="vs-code-content p-4">
                        <div className="flex justify-center mb-8">
                            <iframe
                                src={resumeUrl}
                                style={{ width: '100%', height: '800px' }}
                                frameBorder="0"
                                title="Resume"
                            ></iframe>
                        </div>
                        <div className="flex justify-center">
                            <a
                                href={resumeUrl}
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center"
                                download
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaDownload className="mr-2" />
                                Download Resume
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Resume;
