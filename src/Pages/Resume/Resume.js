import React from 'react';
import { FaDownload } from 'react-icons/fa';

const Resume = () => {
    const resumeUrl = 'https://drive.google.com/file/d/10NsWPAkVhbi5XYeGfGmmF62VsKIuw69v/preview'; // Replace with your Google Drive or Firebase Storage link

    return (
        <div className="container mx-auto p-4 text-white">
            <section className="mb-16">
                <h2 className="text-4xl font-bold mb-8 text-center">My Resume</h2>
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
            </section>
        </div>
    );
};

export default Resume;
