import { cn } from "@/lib/utils";
import { useState } from "react";
import { useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
    // Each section is engulfed by a div with an id that matches the href
    {name: "Home", href: "#home"},
    {name: "About", href: "#about"},
    {name: "Projects", href: "#projects"},
    {name: "Contact", href: "#contact"},
]

export const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [earsVisible, setEarsVisible] = useState(false);

    const toggleEars = () => {
        setEarsVisible(true);
        setTimeout(() => setEarsVisible(false), 1500); // ears visible for 1.5s
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    
    return (
        <nav className={cn("fixed w-full z-40 transition-all duration-300",
            isScrolled ? "pt-5 pb-4 bg-transparent backdrop-blur-md" : "pt-5",
        )}
        >
            <div className="container mx-auto flex items-center justify-between">
                {/* Dummy variable prevent ears from navigating */}
                <a
                    className="text-xl flex items-center relative"
                    href="#"
                    onClick={(e) => {
                        e.preventDefault();
                        toggleEars();
                    }}
                    aria-label="Click for cat ears!"
                >
                    {/* Left ear */}
                    <span
                        className={cn(
                            "absolute top-[-20px] left-[-5px] w-0 h-0",
                            "border-l-[12px] border-l-transparent",
                            "border-r-[12px] border-r-transparent", 
                            "border-b-[20px] border-b-white",
                            "transform origin-bottom transition-all duration-500 ease-out",
                            earsVisible 
                                ? "scale-90 rotate-[-15deg] translate-y-0" 
                                : "scale-0 rotate-[-45deg] translate-y-2"
                        )}
                    />
                    
                    {/* Left ear inner (pink) */}
                    <span
                        className={cn(
                            "absolute top-[-15px] left-[-2px] w-0 h-0",
                            "border-l-[8px] border-l-transparent",
                            "border-r-[8px] border-r-transparent", 
                            "border-b-[12px] border-b-pink-300",
                            "transform origin-bottom transition-all duration-500 ease-out delay-100",
                            earsVisible 
                                ? "scale-90 rotate-[-15deg] translate-y-0" 
                                : "scale-0 rotate-[-45deg] translate-y-2"
                        )}
                    />

                    {/* Right ear */}
                    <span
                        className={cn(
                            "absolute top-[-20px] right-[-5px] w-0 h-0",
                            "border-l-[12px] border-l-transparent",
                            "border-r-[12px] border-r-transparent", 
                            "border-b-[20px] border-b-white",
                            "transform origin-bottom transition-all duration-500 ease-out",
                            earsVisible 
                                ? "scale-90 rotate-[15deg] translate-y-0" 
                                : "scale-0 rotate-[45deg] translate-y-2"
                        )}
                    />
                    
                    {/* Right ear inner (pink) */}
                    <span
                        className={cn(
                            "absolute top-[-15px] right-[-2px] w-0 h-0",
                            "border-l-[8px] border-l-transparent",
                            "border-r-[8px] border-r-transparent", 
                            "border-b-[12px] border-b-pink-300",
                            "transform origin-bottom transition-all duration-500 ease-out delay-100",
                            earsVisible 
                                ? "scale-90 rotate-[15deg] translate-y-0" 
                                : "scale-0 rotate-[45deg] translate-y-2"
                        )}
                    />

                    {/* Name text */}
                    <span className={cn(
                        "text-glow text-primary font-bold font-press relative z-10 transition-all duration-300",
                        earsVisible && "animate-pulse"
                    )}>
                        Emily Ros
                    </span>
                </a>

                {/* Desktop Navigation */}
                <div className="hidden md:flex space-x-8 pr-5">
                    {navItems.map((item, key) => (
                        <a key={key} href={item.href} className="font-press text-primary hover:text-gray-400 transition-colors duration-300">
                            {item.name}
                        </a>
                    ))}
                </div>

                {/* Mobile Navigation */}

                {/* Mobile Menu Button */}
                <button onClick={() => setIsMenuOpen((prev) => !prev)}
                    className="md:hidden p-2 text-foreground z-50 pr-5"
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Adjust menu for window sizes */}
                <div className={cn("fixed inset-0 gradient-bg/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
                    "transition-all duration-300 md:hidden",
                    isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    )}
                >
                    <div className="flex flex-col space-y-8 text-xl">
                        {navItems.map((item, key) => (
                            <a key={key} href={item.href} className="font-press text-white/80 hover:text-white transition-colors duration-300"
                            onClick={() => setIsMenuOpen(false)}
                        >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};