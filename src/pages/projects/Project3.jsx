import { SiteChrome } from "@/components/SiteChrome";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";

export const Project3 = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Persist the "from" info across refreshes (optional but nice)
  const fromRef = useRef(location.state?.from);
  useEffect(() => {
    if (location.state?.from) {
      sessionStorage.setItem("project3_from", location.state.from);
      fromRef.current = location.state.from;
    } else {
      const saved = sessionStorage.getItem("project3_from");
      if (saved) fromRef.current = saved;
    }
  }, [location.state?.from]);

  const handleBack = () => {
    const from = fromRef.current;

    if (from === "projects-index") {
      // Send back to the ProjectsIndex page
      navigate("/projects-index");
      return;
    }

    if (from === "projects") {
      // Send back to the Projects section on homepage
      navigate("/#projects");
      return;
    }

    // Fallbacks:
    if (window.history.length > 1) {
      navigate(-1);                // normal browser back
    } else {
      navigate("/#projects");      // hard fallback
    }
  };

  return (
    <SiteChrome>
      <section
        id="project-2"
        className="opacity-0 animate-fade-in animate-fade-in-delay-1 min-h-dvh py-24 px-4 text-foreground overflow-x-hidden"
      >
        <div className="container mx-auto max-w-7xl">
          {/* Page Title */}
          <h1 className="font-press text-3xl md:text-3xl font-bold text-center text-primary drop-shadow-custom-dark">
            General Motors Case Study
          </h1>

          {/* Google Slides Embed */}
          <div className="relative w-full max-w-4xl mx-auto mt-12 aspect-video">
            <iframe
              src="https://docs.google.com/presentation/d/e/2PACX-1vQhPfHQZE1WsmMOnG40UszI5hbZixjBM9gsnsNnJ-q245zii_Gbr-8BlZNbtrHRxA/pubembed?start=true&loop=true&delayms=3000"
              frameBorder="0"
              allowFullScreen={true}
              className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
            ></iframe>
          </div>
          {/* Back button (bottom-right) */}
          <div className="mx-auto max-w-4xl flex justify-end mt-4">
            <button
              onClick={handleBack}
              className="z-20 inline-flex items-center gap-2 rounded-lg border-4 
                        border-border bg-card px-4 py-2 text-sm font-press hover:shadow-[0_0_10px_rgba(255,190,140,0.9)]
                        transition-transform duration-300 hover:scale-105"
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
      </section>
    </SiteChrome>
  );
};
