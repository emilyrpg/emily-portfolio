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
    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 
             12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
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


export const ThemeToggle = ({ inline = false }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Remote control for theme
    const applyTheme = (dark) => {
        setIsDarkMode(dark);
        document.documentElement.classList.toggle("dark", dark);
    };

    // Compute time-based theme (local TZ)
    const isNightTime = () => {
        const hour = new Date().getHours();
        return hour < 7 || hour >= 19; // 7PM–6:59AM = dark
    };

    // Find ms until the next 7:00 boundary (local TZ)
    const msUntilNextBoundary = () => {
        const now = new Date();
        const next = new Date(now);
        const hour = now.getHours();
        // next boundary is 07:00 if currently night, otherwise 19:00
        const targetHour = (hour < 7 || hour >= 19) ? 7 : 19;
        next.setHours(targetHour, 0, 0, 0);
        if (next <= now) next.setDate(next.getDate() + 1);
        return next.getTime() - now.getTime();
    };

    useEffect(() => {
        const stored = localStorage.getItem("theme");
        const hasUserPreference = stored=== "light" || stored === "dark";

        // Apply initial theme
        if (hasUserPreference) {
            applyTheme(stored === "dark");
        } else {
            applyTheme(isNightTime());
        }

        let timerId;

        const scheduleSwitch = () => {
            // Only set timer if there's NO user preference
            if (localStorage.getItem("theme") == null) {
                timerId = setTimeout(() => {
                    // Double-check user hasn't set a preference since timer was set
                    if (localStorage.getItem("theme") == null) {
                        applyTheme(isNightTime());
                        scheduleSwitch(); // Set next timer
                    }
                }, msUntilNextBoundary());
            }
        };
        scheduleSwitch();

        const onStorage = (e) => {
            if (e.key === "theme") {
                if (e.newValue === "light") {
                    applyTheme(false);
                } else if (e.newValue === "dark") {
                    applyTheme(true);
                } else if (e.newValue == null) {
                    // User cleared preference - return to time-based
                    applyTheme(isNightTime());
                    scheduleSwitch(); // Restart timer
                }
            }
        };
        window.addEventListener("storage", onStorage);

        return () => {
            clearTimeout(timerId);
            window.removeEventListener("storage", onStorage);
        };
    }, []);

    const toggleTheme = () => {
        const next = !isDarkMode;
        localStorage.setItem("theme", next ? "dark" : "light");
        applyTheme(next);
    };

    return (
            <button
            onClick={toggleTheme}
            className={cn(
                inline ? "md:fixed md:top-3 md:right-3" : "relative",
                "p-2 rounded-full",
                "transition-colors duration-300 hover:text-gray-400",
                "text-white dark:text-gray-800 dark:hover:text-gray-600",
                "bg-transparent border-none outline-none",
                "group"
            )}
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
            <div className="relative w-6 h-6 overflow-hidden">
                {/* Sun Icon */}
                <SunIcon 
                    className={cn(
                        "absolute inset-0 w-6 h-6 transition-all duration-500 ease-in-out text-yellow-300",
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