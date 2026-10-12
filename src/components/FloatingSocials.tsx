import { Linkedin, Mail } from "lucide-react";

export function FloatingSocials() {
  return (
    <div className="fixed left-4 bottom-6 z-40 hidden md:flex flex-col gap-3">
      {[
        { icon: Linkedin, href: "https://www.linkedin.com/in/byneedibhargavi", label: "LinkedIn", external: true },
        { icon: Mail, href: "mailto:bharubhargavi220@gmail.com", label: "Email", external: false },
      ].map((s) => (
        <a
          key={s.label}
          href={s.href}
          {...(s.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          aria-label={s.label}
          className="grid place-items-center w-11 h-11 rounded-xl glass glass-hover text-muted-foreground hover:text-accent"
        >
          <s.icon className="w-4 h-4" />
        </a>
      ))}
    </div>
  );
}
