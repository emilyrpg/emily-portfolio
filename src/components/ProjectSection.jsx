import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "Quest Accepted",
        description: "Journey in progress.",
        image: "/projects/Project1.png",
        tags: ["JavaScript", "React", "CSS"],
        link: "/projects/Project1"
    },

    {
        id: 2,
        title: "Quest Pending",
        description: "The path ahead is still unfolding.",
        image: "/projects/Project2.png",
        tags: ["Trail Unmarked", "Caution"],
        link: "/projects/Project2"
    },

    {
        id: 3,
        title: "Still Loading",
        description: "Danger nears. Remain vigilant",
        image: "/projects/Project3.png",
        tags: ["Standby", "Blocked Path"],
        link: "/projects/Project3"
    }
]

export const ProjectSection = () => {
    return (
        <section id="projects" className="min-h-dvh py-24 px-4 relative overflow-auto">
            <div className="container mx-auto max-w-7xl">
                <h2 className="text-primary drop-shadow-custom-dark text-3xl md:text-4xl font-press font-bold text-center mb-12">
                    <span>Projects</span>
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
                    {projects.map((project, key) => (
                        <Link key={key} to={project.link} className="group gradient-bg rounded-lg overflow-hidden shadow-xs card-hover">
                            <div className="h-48 overflow-hidden">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform group-hover:scale-110" />
                            </div>
                            
                            <div className="p-6">
                                <h3 className="text-lg font-press text-primary font-semibold mb-2">{project.title}</h3>
                                <p className="font-nunito text-sm text-muted-foreground mb-2">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, tagIndex) => (
                                        <span key={tagIndex} className="px-2 py-1 text-xl font-vt font-medium rounded-full bg-transparent text-primary">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
                <div className="text-center mt-20">
                    <Link to="/projects" className="cosmic-button w-fit flex items-center mx-auto gap-2">
                        View All Projects <ArrowRight size={16} 
                        />
                    </Link>
                </div>
            </div>
        </section>
    )
};