// src/hooks/useFakeLoading.js
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useFakeLoading = () => {
    const [loading, setLoading] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000); // Adjust timing as needed

        return () => clearTimeout(timer);
    }, [location]);

    return loading;
};

export default useFakeLoading;
