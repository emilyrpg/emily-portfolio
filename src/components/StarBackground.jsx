import { useEffect, useState } from "react";

export const StarBackground = () => {
    const [stars, setStars] = useState([]);
    const [meteors, setMeteors] = useState([]);

    useEffect(() => {
        generateStars();
        generateMeteors();
        
        // Handle window resize to regenerate stars else it stays static
        const handleResize = () => {
            generateStars();
            generateMeteors();
        };
        
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const generateStars = () => {
        // Ensure valid window dimensions
        const width = window.innerWidth || 1920;
        const height = window.innerHeight || 1080;
        
        // Generate more stars for better visibility
        const numOfStars = Math.floor((width * height) / 8000);
        console.log(`Generating ${numOfStars} stars`); // Debug log

        const newStars = [];

        for (let i = 0; i < numOfStars; i++) {
            newStars.push({
                id: i,
                size: Math.random() * 2 + 1, // 1-3px stars
                x: Math.random() * 100, // 0-100%
                y: Math.random() * 100, // 0-100%
                opacity: Math.random() * 0.5 + 0.5, // 0.5-1.0 opacity
                animationDuration: Math.random() * 4 + 2, // 2-6 seconds
                animationDelay: Math.random() * 2, // 0-2 seconds delay
            });
        }
        
        console.log('Stars generated:', newStars.length); // Debug log
        setStars(newStars);
    };

    // Loop through meteors and get a meteor for each of them
    const generateMeteors = () => {
        // Meteors are large so we'll set a number
        const numOfMeteors = 4;
        const newMeteors = [];

        for (let i = 0; i < numOfMeteors; i++) {
            newMeteors.push({
                id: i,
                size: Math.random() * 2 + 1, // 1-3px stars
                x: Math.random() * 100, // 0-100%
                y: Math.random() * 20, // 0-20%
                delay: Math.random() * 15,
                animationDuration: Math.random() * 4 + 2, // 2-6 seconds
            });
        }

        console.log('Meteors generated:', newMeteors.length); // Debug log
        setMeteors(newMeteors);
    };

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {stars.map((star) => (
                <div 
                    key={star.id} 
                    className="absolute rounded-full bg-white animate-pulse-subtle hidden dark:block" 
                    style={{
                        width: `${star.size}px`,
                        height: `${star.size}px`,
                        left: `${star.x}%`,
                        top: `${star.y}%`,
                        opacity: star.opacity,
                        animationDuration: `${star.animationDuration}s`,
                        animationDelay: `${star.animationDelay}s`,
                        boxShadow: '0 0 10px 2px rgba(255, 255, 255, 0.4)',
                    }} 
                />
            ))}

            {meteors.map((meteor) => (
                <div 
                    key={meteor.id} 
                    className="absolute meteor animate-meteor hidden dark:block" 
                    style={{
                        width: `${meteor.size * 40}px`,
                        height: `${meteor.size * 1.5}px`,
                        left: `${meteor.x}%`,
                        top: `${meteor.y}%`,
                        animationDuration: `${meteor.animationDuration}s`,
                        animationDelay: `${meteor.animationDelay}s`,
                    }} 
                />
            ))}
        </div>
    );
};