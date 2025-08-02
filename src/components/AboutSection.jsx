import { cn } from "@/lib/utils";

export const AboutSection = () => {
        const skills = [
        { name: "Data Analysis", level: 5 },
        { name: "Machine Learning", level: 4 },
        { name: "Data Visualization", level: 5 },
        { name: "Python", level: 4 },
        { name: "SQL", level: 5 },
        { name: "Tableau", level: 3 },
        { name: "+ More" , level: 5 }
    ];

    {/* Skill bar */}
    const SkillBar = ({ skill, level, maxLevel = 5 }) => {
        const getTextSize = (text) => {
            if (text.length > 15) return "text-xs";
            if (text.length > 12) return "text-sm";
            return "text-sm";
        };

        return (
            <div className="flex flex-wrap items-center justify-between mb-3">
                <span className="text-sm font-press text-foreground min-w-[120px]">
                    {skill}
                </span>
                <div className="flex items-center gap-1 ml-4">
                    {[...Array(maxLevel)].map((_, index) => (
                        <div
                            key={index}
                            className={cn(
                                "w-4 h-5 border-2 border-primary/60 relative",
                                "transition-all duration-300 ease-in-out",
                                index < level 
                                    ? "bg-gradient-to-br from-[#E3793F] to-[#D4652A] shadow-[0_0_8px_rgba(227,121,63,0.4)]" 
                                    : "bg-muted/20"
                            )}
                            style={{
                                clipPath: "polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)",
                                animationDelay: `${index * 100}ms`
                            }}
                        >
                            {/* Inner glow effect for filled stars */}
                            {index < level && (
                                <div 
                                    className="absolute inset-[2px] bg-gradient-to-br from-[#FFB366] to-[#E3793F] opacity-80"
                                    style={{
                                        clipPath: "polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)"
                                    }}
                                />
                            )}
                        </div>
                    ))}
                    <span className="ml-2 text-xs text-muted-foreground font-press">
                        {level}
                    </span>
                </div>
            </div>
        );
    };

    return (
        <section id="about" className="min-h-dvh py-24 px-4 relative overflow-auto">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-primary drop-shadow-custom-dark text-3xl md:text-4xl font-press font-bold text-center mb-12">
                    About Me
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center font-press">
                    {/* Left Column: Intro */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">
                            Creativity powered by data &lt;3
                        </h3>

                        <div className="text-xs text-muted-foreground space-y-4">
                            <p>
                                Emily is a dynamic, results-driven data scientist with a background in marketing. She excels at uncovering hidden insights 
                                and transforming data into actionable strategies.                        
                            </p>

                            <p>
                                Currently, she&apos;s a Marketing Ops Analyst at Central Computers, focused on process optimization and analytics.
                            </p>

                            <p>
                                She&apos;s also obtaining her Master&apos;s in Information Systems at Santa Clara University.
                            </p>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col  gap-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                Press to Talk
                            </a>

                            <a href="" className={cn(
                                    "px-6 py-2 rounded-full border border-primary text-white font-press text-xs",
                                    "transition-all duration-200 hover:shadow-[0_0_10px_rgba(255,190,140,0.9)]",
                                    "hover:scale-105 active:scale-95 origin-center"
                            )}
                            >
                                Download CV
                            </a>
                        </div>
                    </div>

                    {/* Right Column: Skills */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">
                            Skills
                        </h3>
                        <div className="text-left bg-muted/10 p-6 rounded-lg border border-primary/20">
                            {skills.map((skill, index) => (
                                <SkillBar 
                                    key={index}
                                    skill={skill.name} 
                                    level={skill.level} 
                                />
                            ))}
                        </div>
                </div>
                </div>
            </div>
        </section>
    )
};