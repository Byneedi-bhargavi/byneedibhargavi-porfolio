import { Github, Linkedin } from "lucide-react";

export function FloatingSocials() {
  return (
    <div className="fixed left-4 bottom-6 z-40 hidden md:flex flex-col gap-3">
      {[
        { icon: Github, href: "https://github.com/Byneedi-bhargavi", label: "GitHub" },
        { icon: Linkedin, href: "https://linkedin.com/in/byneedibhargavi", label: "LinkedIn" },
      ].map((s) => (
        // eslint-disable-next-line
        <></>
      ))}
      {[
        { icon: Github, href: "https://github.com/Byneedi-bhargavi", label: "GitHub" },
        { icon: Linkedin, href: "https://linkedin.com/in/byneedibhargavi", label: "LinkedIn" },
      ].map((s) => (
        <a
          key={s.label}
          href={s.href}
          aria-label={s.label}
          className="grid place-items-center w-11 h-11 rounded-xl glass glass-hover text-muted-foreground hover:text-accent"
        >
          <s.icon className="w-4 h-4" />
        </a>
      ))}
    </div>
  );
}
