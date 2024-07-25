import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className="container mx-auto p-4 text-white flex-grow flex flex-col justify-center items-center text-center">
            <div className="vs-code-window bg-gray-800 rounded-lg shadow-lg flex-grow relative">
                <div className="vs-code-header bg-gray-900 text-gray-400 flex items-center justify-between p-2 rounded-t-lg">
                    <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="flex-1 text-center">Error 404</div>
                </div>
                <div className="vs-code-content p-4">
                    <h2 className="text-4xl font-bold mb-4">404</h2>
                    <p className="text-lg mb-4">Oops! The page you're looking for doesn't exist.</p>
                    <Link to="/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Go Back Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;
