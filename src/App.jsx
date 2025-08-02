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

function App() {
  return (
    <>
    <BrowserRouter>
    <ScrollToHash />
      <Routes>
        <Route index element={<Home />}/>
        <Route path="/projects" element={<Index />}/>
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

{/* Manually save last scrolled location */}
function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      // Use timeout to wait for DOM update
      setTimeout(() => {
        const el = document.getElementById(location.hash.slice(1));
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 0);
    } else {
      // If no hash, scroll to top or do nothing
      window.scrollTo(0, 0);
    }
  }, [location]);

  return null; // no UI
}

export default App;
