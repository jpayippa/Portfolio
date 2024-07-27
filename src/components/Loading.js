import React from 'react';
import { motion } from 'framer-motion';

const Loading = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <motion.div
                className="w-12 h-12 border-4 border-t-4 border-blue-500 rounded-full animate-spin"
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
        </div>
    );
};

export default Loading;
