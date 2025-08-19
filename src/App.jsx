import { BrowserRouter, Route, Routes} from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster"
import { Home } from "@/pages/Home.jsx";
import { NotFound } from "@/pages/NotFound.jsx";
import './index.css';
import { Index } from "@/pages/projects/Index.jsx";
import { Project1 } from "@/pages/projects/Project1.jsx";
import { Project2 } from "@/pages/projects/Project2.jsx";
import { Project3 } from "@/pages/projects/Project3.jsx";
import { useRef } from "react";

function App() {
  return (
    <>
    <BrowserRouter>
    <SmoothScrollToggle />
    <ScrollManager />
    <ScrollToHash />
      <Routes>
        <Route index element={<Home />}/>
        <Route path="/projects-index" element={<Index />}/>
        <Route path="/projects/Project1" element={<Project1 />}/>
        <Route path="/projects/Project2" element={<Project2 />}/>
        <Route path="/projects/Project3" element={<Project3 />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
      <Toaster />
    </BrowserRouter>
    </>
  );
}

// Manually save last scrolled location
function SmoothScrollToggle() {
  const { pathname } = useLocation();
  useEffect(() => {
    const root = document.documentElement;
    root.style.scrollBehavior = pathname === "/" ? "smooth" : "auto";
    return () => { root.style.scrollBehavior = "auto"; };
  }, [pathname]);
  return null;
}

// Restore per-route scroll positions
function ScrollManager() {
  const { pathname } = useLocation();
  const positionsRef = useRef(new Map()); // pathname -> number

  useEffect(() => {
    // Take over native restoration
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // On route change, restore saved position (or 0)
    const root = document.documentElement;
    const prevBehavior = root.style.scrollBehavior;
    root.style.scrollBehavior = "auto"; // ensure no smooth during restore

    const y = positionsRef.current.get(pathname) ?? 0;
    window.scrollTo(0, y);

    root.style.scrollBehavior = prevBehavior;

    // Before unmount/route change, save current position
    const onSave = () => {
      positionsRef.current.set(pathname, window.scrollY || 0);
    };
    window.addEventListener("beforeunload", onSave);
    return () => {
      onSave();
      window.removeEventListener("beforeunload", onSave);
    };
  }, [pathname]);

  // Update saved position while scrolling this page
  useEffect(() => {
    const onScroll = () => {
      positionsRef.current.set(pathname, window.scrollY || 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  return null;
}

// Only handle hash scrolling on Home; do nothing elsewhere
function ScrollToHash() {
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/" && location.hash) {
      const id = location.hash.slice(1);
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);
  return null;
}

export default App;
