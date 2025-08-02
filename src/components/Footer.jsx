import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 relative mt-12 pt-8 flex flex-wrap justify-between items-center">
      {" "}
      <p className="font-nunito text-sm text-muted-foreground">
        {" "}
        &copy; {new Date().getFullYear()} Emily Ros. All rights reserved.
      </p>
      <a
        href="#hero"
        className="p-2 hover:text-white text-primary transition-all duration-200"
      >
        <ArrowUp size={25} />
      </a>
    </footer>
  );
};