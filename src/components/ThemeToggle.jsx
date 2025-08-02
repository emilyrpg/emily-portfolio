import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils.js';

// Custom Sun Icon Component
const SunIcon = ({ className }) => (
  <svg 
    className={className} 
    fill="none" 
    viewBox="0 0 24 24" 
    stroke="currentColor" 
    strokeWidth={2}
    style={{ background: 'transparent', border: 'none' }}
  >
    <circle cx="12" cy="12" r="5" />
    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
  </svg>
);

// Custom Moon Icon Component
const MoonIcon = ({ className }) => (
  <svg 
    className={className} 
    fill="none" 
    viewBox="0 0 24 24" 
    stroke="currentColor" 
    strokeWidth={2}
    style={{ background: 'transparent', border: 'none' }}
  >
    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
  </svg>
);

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme === "dark") {
            document.documentElement.classList.add('dark');
            setIsDarkMode(true);
        } else {
            localStorage.setItem('theme', 'light');
            setIsDarkMode(false);
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = !isDarkMode;
        setIsDarkMode(newTheme);
        document.documentElement.classList.toggle('dark', newTheme);
        localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    };

    return (
        <button 
            onClick={toggleTheme} 
            className={cn(
                "fixed max-sm:hidden top-5 right-5 z-50 p-3 rounded-full",  
                "transition-colors duration-300 hover:text-gray-400",
                "text-white dark:text-gray-800 dark:hover:text-gray-600",
                "bg-transparent p-0 m-0 border-none outline-none",
                "group"
            )}
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
            <div className="relative w-6 h-6 overflow-hidden">
                {/* Sun Icon */}
                <SunIcon 
                    className={cn(
                        "absolute inset-0 w-6 h-6 transition-all duration-500 ease-in-out text-yellow-400",
                        isDarkMode 
                            ? "opacity-100 rotate-0 scale-100" 
                            : "opacity-0 rotate-180 scale-75",
                            "group-hover:text-yellow-600"
                    )}
                />
                
                {/* Moon Icon */}
                <MoonIcon 
                    className={cn(
                        "absolute inset-0 w-6 h-6 transition-all duration-500 ease-in-out text-white-400",
                        !isDarkMode 
                            ? "opacity-100 rotate-0 scale-100" 
                            : "opacity-0 -rotate-180 scale-75",
                            "group-hover:text-white-600"
                    )}
                />
            </div>
        </button>
    );
};