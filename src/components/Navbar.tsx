import { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      const sections = links.map((l) => document.getElementById(l.href.slice(1)));
      const y = window.scrollY + 120;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = sections[i];
        if (el && el.offsetTop <= y) {
          setActive(links[i].href.slice(1));
          break;
        }
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <nav
        className={`mx-auto max-w-6xl px-4 transition-all ${
          scrolled ? "scale-[0.98]" : ""
        }`}
      >
        <div className="glass rounded-2xl px-5 py-3 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2 font-display font-bold text-lg">
            <span className="grid place-items-center w-8 h-8 rounded-lg bg-primary/20 text-accent">
              <Sparkles className="w-4 h-4" />
            </span>
            <span className="text-gradient">Byneedi Bhargavi</span>
          </a>
          <ul className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={`px-3 py-1.5 rounded-lg text-sm transition-all ${
                    active === l.href.slice(1)
                      ? "text-accent bg-primary/15"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="hidden md:inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium bg-primary text-primary-foreground hover:shadow-[var(--shadow-glow)] transition-all"
          >
            Hire Me
          </a>
        </div>
      </nav>
    </header>
  );
}
