import { useNavigate, Link } from "react-router-dom";
import { SiteChrome } from "@/components/SiteChrome";
import * as Lucide from "lucide-react";

// Projects index page
export const Index = () => {
  const projects = [
    {
      href: "https://github.com/emilyrpg/nyc-shooting-analysis",
      title: "NYC Incident Analysis",
      subtitle: "Python · scikit-learn · Pandas",
      thumb: "/assets/Apple.png",
      tags: ["Growth", "Engagement", "500+ Signups"],
      external: true
    },
    {
      href: "/projects/Project2",
      title: "Netflix Database Design",
      subtitle: "Created EER diagrams and logical database designs",
      thumb: "/assets/TV.png",
      tags: ["Python", "Data Wrangling", "2025"],
    },
    {
      href: "/projects/Project3",
      title: "General Motors Case Study",
      subtitle: "Identified a digital transformation to drive business value",
      thumb: "/assets/Car.png",
      tags: ["SEO", "UX", "2024"],
    },
    {
      href: "https://goshippo.com/blog/shippo-ships-it-tracking-shipments-and-spend-analytics",
      title: "Shippo Ships It",
      subtitle: "Blog · Long-form Content · Storytelling",
      thumb: "/assets/Mailbox.png",
      tags: ["Long-form copywriting", "2025"],
      external: true
    },
    {
      href: "https://www.centralcomputer.com/blog/post/AMD-Launches-Ryzen-Threadripper-9000",
      title: "Ryzen Threadripper 9000 Series",
      subtitle: "Technical Writing · SEO",
      thumb: "/assets/Cpu.png",
      tags: ["Automation", "NLP", "2025"],
      external: true
    },
  /*
  {
    href: "/projects/email-ab-test",
    title: "Email A/B Test for Events",
    subtitle: "Boosted open rate & engagement",
    thumb: "/thumbs/email-test.png",
    tags: ["Email", "Experimentation", "Engagement"],
  },
    // { href: "/projects/ai-keyword-briefs", title: "...", subtitle: "...", thumb: "/thumbs/ai-briefs.png", tags: ["Automation","NLP","2025"] },
    // Add more…
    */
  ];

  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/#projects");
  };

  function ThumbOrIconName({ thumb, iconName, title }) {
    const Icon = iconName ? Lucide[iconName] : null;
    if (Icon) {
      return (
        <div className="h-24 w-24 sm:h-24 sm:w-32 flex items-center justify-center">
          <Icon className="h-24 w-24 text-primary" aria-hidden="true" />
        </div>
      );
    }
    return (
      <img
        src={thumb}
        alt={`Thumbnail for ${title}`}
        loading="lazy"
        className="h-20 w-24 sm:h-24 sm:w-32 object-cover"
      />
    );
  }

  return (
    <SiteChrome>
      <section id="projects-index" className="min-h-dvh py-24 px-4">
        <div className="container mx-auto max-w-7xl">
          <h1 className="opacity-0 animate-fade-in animate-fade-in-delay-1 font-press text-3xl md:text-4xl font-bold text-center text-primary drop-shadow-custom-dark">
            Projects
          </h1>

          {/* Content container */}
          <div className="container mt-8">
            {/* Projects Menu Pane (scrolls inside) */}
            <section
              className="opacity-0 animate-fade-in animate-fade-in-delay-1 mx-auto max-w-4xl rounded-2xl border-4 border-border bg-card 
              shadow-xl overflow-hidden"
              aria-labelledby="projects-title"
            >
              <h2 id="projects-title" className="sr-only">Projects Index</h2>

              <div
                className="max-h-[70vh] overflow-y-auto overscroll-contain"
                role="listbox"
                aria-label="Project list"
              >
                <ul className="divide-y divide-border">
                  {projects.map((p, i) => (
                    <li key={p.href}>
                      {p.external ? (
                        <a
                          href={p.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group grid grid-cols-[1fr,96px] sm:grid-cols-[1fr,128px] 
                                    items-center gap-4 sm:gap-6 px-4 sm:px-6 py-4 
                                    hover:bg-primary/10 focus:outline-none 
                                    focus-visible:ring-2 focus-visible:ring-zinc-400 block
                                    transition-transform duration-300 hover:scale-[1.02]"
                          role="option"
                        >
                          <div className="font-press min-w-0 text-left">
                            <div className="flex items-baseline gap-2">
                              <span className="text-xl font-black">{i + 1}.</span>
                              <h3 className="text-xl font-black">{p.title}</h3>
                            </div>
                            <p className="font-vt mt-1 text-2xl text-zinc-600 ml-[calc(4ch+0.5rem)]">{p.subtitle}</p>
                          </div>
                          <div className="justify-self-end">
                            <ThumbOrIconName {...p} />
                          </div>
                        </a>
                      ) : (
                        <Link
                          to={p.href}
                          state={{ from: "projects-index" }}
                          className="group grid grid-cols-[1fr,96px] sm:grid-cols-[1fr,128px] 
                                    items-center gap-4 sm:gap-6 px-4 sm:px-6 py-4 
                                    hover:bg-primary/10 focus:outline-none 
                                    focus-visible:ring-2 focus-visible:ring-zinc-400 block
                                    transition-transform duration-300 hover:scale-[1.02]"
                          role="option"
                        >
                          <div className="font-press min-w-0 text-left">
                            <div className="flex items-baseline gap-2">
                              <span className="text-xl font-black">{i + 1}.</span>
                              <h3 className="text-xl font-black">{p.title}</h3>
                            </div>
                            <p className="font-vt mt-1 text-2xl text-zinc-600 ml-[calc(4ch+0.5rem)]">{p.subtitle}</p>
                          </div>
                          <div className="justify-self-end">
                            <ThumbOrIconName {...p} />
                          </div>
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Back button OUTSIDE the pane (bottom-right) */}
            <div className="opacity-0 animate-fade-in animate-fade-in-delay-1 mx-auto max-w-4xl flex justify-end mt-2">
              <button
                onClick={handleBack}
                className="inline-flex items-center gap-2 rounded-lg border-4 border-border bg-card px-4 py-2 text-sm font-press hover:shadow-[0_0_10px_rgba(255,190,140,0.9)] 
                           focus:outline-none focus:ring-2 transition-transform transition-all duration-300 hover:scale-105"
                aria-label="Go back"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M15 19l-7-7 7-7" />
                </svg>
                Back
              </button>
            </div>
          </div>
        </div>
      </section>
    </SiteChrome>
  );
};