import { useEffect, useState } from "react";

export const CloudBackground = () => {
    const [clouds, setClouds] = useState([]);

    useEffect(() => {
        generateClouds();
        
        // Handle window resize to regenerate clouds
        const handleResize = () => {
            generateClouds();
        };
        
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const generateClouds = () => {
        // Ensure we have valid window dimensions
        const width = window.innerWidth || 1920;
        const height = window.innerHeight || 1080;
        
        // Generate fewer clouds than stars (5-15 clouds)
        const numOfClouds = Math.floor((width * height) / 150000) + 5;
        console.log(`Generating ${numOfClouds} clouds`); // Debug log

        const newClouds = [];

        for (let i = 0; i < numOfClouds; i++) {
            newClouds.push({
                id: i,
                width: Math.random() * 250 + 150, // 150-400px width
                height: Math.random() * 100 + 150, // 150-250px height
                x: Math.random() * 125 - 25, // Start some clouds off-screen (-20% to 100%)
                y: Math.random() * 70, // 70% from top (avoid bottom)
                opacity: Math.random() * 0.3 + 0.5, // 0.5-0.8 opacity (denser)
                animationDuration: Math.random() * 40 + 60, // 60-100 seconds (slow movement)
                animationDelay: Math.random() * 20, // 0-20 seconds delay
                blur: Math.random() * 1 + 0.5, // px blur for depth
                scale: Math.random() * 0.2 + 1, // 0.5-1.0 scale for variety
            });
        }
        
        console.log('Clouds generated:', newClouds.length); // Debug log
        setClouds(newClouds);
    };

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {clouds.map((cloud) => (
                <div 
                    key={cloud.id} 
                    className="absolute animate-float-horizontal block dark:hidden"
                    style={{
                        width: `${cloud.width}px`,
                        height: `${cloud.height}px`,
                        left: `${cloud.x}%`,
                        top: `${cloud.y}%`,
                        opacity: cloud.opacity,
                        animationDuration: `${cloud.animationDuration}s`,
                        animationDelay: `${cloud.animationDelay}s`,
                        filter: `blur(${cloud.blur}px)`,
                        transform: `scale(${cloud.scale})`,
                        background: `
                            radial-gradient(ellipse at 20% 50%, rgba(200, 220, 240, 0.8) 0%, transparent 50%),
                            radial-gradient(ellipse at 40% 40%, rgba(220, 235, 250, 0.9) 0%, transparent 50%),
                            radial-gradient(ellipse at 60% 60%, rgba(210, 230, 245, 0.7) 0%, transparent 50%),
                            radial-gradient(ellipse at 80% 45%, rgba(190, 210, 235, 0.8) 0%, transparent 50%)
                        `,
                        borderRadius: '50px',
                    }} 
                />
            ))}
            
            {/* CSS for the animation */}
            <style>{`
                @keyframes float-horizontal {
                    from {
                        transform: translateX(-100px) scale(var(--scale));
                    }
                    to {
                        transform: translateX(calc(100vw + 100px)) scale(var(--scale));
                    }
                }
                
                .animate-float-horizontal {
                    animation-name: float-horizontal;
                    animation-timing-function: linear;
                    animation-iteration-count: infinite;
                    --scale: ${clouds.length > 0 ? clouds[0]?.scale || 1 : 1};
                }
            `}</style>
        </div>
    );
};