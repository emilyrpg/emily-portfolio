// Site frame
import { ThemeToggle } from "./ThemeToggle";
import { CloudBackground } from "./CloudBackground";
import { StarBackground } from "./StarBackground";
import { NavBar } from "./NavBar";
import { Footer } from "./Footer";

export const SiteChrome = ({ children }) => {
  return (
    <div className="min-h-dvh gradient-bg text-foreground overflow-x-hidden relative">
      {/* Background Effects */}
      <CloudBackground />
      <StarBackground />

      {/* Global UI */}
      <NavBar />

      {/* Page content */}
      <main>{children}</main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
