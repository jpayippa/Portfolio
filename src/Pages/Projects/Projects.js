import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        const fetchRepos = async () => {
            try {
                const response = await axios.get('https://api.github.com/users/jpayippa/repos');
                setRepos(response.data);
            } catch (error) {
                console.error('Error fetching repos', error);
            }
        };
        fetchRepos();
    }, []);

    return (
        <div className="container mx-auto p-4 text-white">
            <h2 className="text-4xl font-bold mb-8 text-center">My Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {repos.map(repo => (
                    <div key={repo.id} className="laptop bg-gray-900 p-8 rounded-lg shadow-lg relative">
                        <div className="screen bg-gray-800 rounded-lg shadow-lg p-4">
                            <div className="vs-code-header bg-gray-900 text-gray-400 flex items-center justify-between p-2 rounded-t-lg">
                                <div className="flex items-center space-x-2">
                                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                </div>
                                <div className="flex-1 text-center">{repo.name}</div>
                            </div>
                            <div className="vs-code-content p-4">
                                <p className="text-gray-400 mb-4">{repo.description}</p>
                                <div className="flex justify-between items-center">
                                    <a
                                        href={repo.html_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-500 hover:underline flex items-center"
                                    >
                                        <FaGithub size={20} className="mr-2" /> View on GitHub
                                    </a>
                                    {repo.homepage && (
                                        <a
                                            href={repo.homepage}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-blue-500 text-white py-1 px-3 rounded-lg shadow hover:bg-blue-600 transition duration-300"
                                        >
                                            Visit Site
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="base bg-gray-700 w-full h-6 absolute bottom-0 left-0 rounded-b-lg"></div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
