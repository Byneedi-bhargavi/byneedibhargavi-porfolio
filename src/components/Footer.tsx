import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-border mt-12">
      <div className="mx-auto max-w-6xl px-4 py-10 grid md:grid-cols-3 gap-6 items-center">
        <div className="font-display font-bold text-lg">
          <span className="text-gradient">Byneedi Bhargavi</span>
        </div>
        <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
          <a href="#about" className="hover:text-accent transition-colors">About</a>
          <a href="#skills" className="hover:text-accent transition-colors">Skills</a>
          <a href="#projects" className="hover:text-accent transition-colors">Projects</a>
          <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
        </nav>
        <div className="flex md:justify-end gap-3">
          {[
            { icon: Github, href: "#" },
            { icon: Linkedin, href: "#" },
            { icon: Mail, href: "mailto:bhargavi@example.com" },
          ].map((s, i) => (
            <a
              key={i}
              href={s.href}
              className="grid place-items-center w-10 h-10 rounded-xl glass glass-hover text-muted-foreground hover:text-accent"
            >
              <s.icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>
      <div className="text-center text-xs text-muted-foreground pb-6">
        © {new Date().getFullYear()} Byneedi Bhargavi. Crafted with intelligence & code.
      </div>
    </footer>
  );
}
