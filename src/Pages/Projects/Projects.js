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
                    <div key={repo.id} className="bg-gray-800 p-4 rounded-lg shadow-lg">
                        <h3 className="text-xl font-bold mb-2">{repo.name}</h3>
                        <p className="text-gray-400 mb-4">{repo.description}</p>
                        <div className="flex justify-between items-center">
                            <a
                                href={repo.html_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 hover:underline"
                            >
                                View on GitHub
                            </a>
                            <FaGithub size={30} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
