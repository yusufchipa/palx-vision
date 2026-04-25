import { useEffect, useState } from "react";

export const Nav = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const istTime = new Intl.DateTimeFormat("en-GB", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      }).format(now);
      setTime(istTime);
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  const scrollTo = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md hairline-b border-foreground/20">
      <div className="editorial flex items-center justify-between py-4">
        <a href="#top" className="font-display text-2xl tracking-tight">
          PalX<span className="text-primary">.</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 font-mono-label">
          <a href="#work" onClick={scrollTo("work")} className="hover:text-primary transition-colors">Work</a>
          <a href="#services" onClick={scrollTo("services")} className="hover:text-primary transition-colors">Services</a>
          <a href="#studio" onClick={scrollTo("studio")} className="hover:text-primary transition-colors">Studio</a>
          <a href="#contact" onClick={scrollTo("contact")} className="hover:text-primary transition-colors">Contact</a>
        </nav>
        <div className="flex items-center gap-3 font-mono-label">
          <span className="hidden sm:inline text-foreground/50">UDR · IST</span>
          <span className="tabular-nums">{time}</span>
        </div>
      </div>
    </header>
  );
};
