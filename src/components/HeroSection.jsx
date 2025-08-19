import { cn } from "@/lib/utils";
import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
    return (
    <section id="hero" className="relative min-h-dvh flex flex-col items-center justify-center px-4"
    >
        <div className="container max-w-4xl mx-auto text-center z-10">
            <div className="space-y-6">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-press font-bold text-primary">
                    <span className="text-glow opacity-0 animate-fade-in-delay-1 drop-shadow-custom-dark">Hello,</span>
                    <span className="text-gradient text-glow opacity-0 animate-fade-in-delay-2 drop-shadow-custom-dark"> I'm</span>
                    <span className="text-gradient text-glow ml-2 opacity-0 animate-fade-in-delay-3 drop-shadow-custom-dark"> Emily</span>
                </h1>
                <p className="text-lg font-press text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-4">
                    Data Scientist
                </p>

                <div className="pt-4 opacity-0 animate-fade-in-delay-5">
                    <a href="#projects" className="cosmic-button">
                        View my work
                    </a>
                </div>
            </div>
        </div>

        {/* Animated scroll down arrow */}
        <a href="#about" className={cn("absolute bottom-8 flex flex-col",
            "items-center animate-bounce")}>
            <span className="text-xs font-press text-muted-foreground mb-2">
                Scroll
            </span>
            <ArrowDown className="h-5 w-5 text-primary" />
        </a>
    </section>
    )
};