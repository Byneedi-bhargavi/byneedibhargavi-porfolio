
export function Footer() {
  return (
    <footer className="relative border-t border-border mt-12">
      <nav className="mx-auto max-w-6xl px-4 py-10 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
        <a href="#about" className="hover:text-accent transition-colors">
          About
        </a>
        <a href="#skills" className="hover:text-accent transition-colors">
          Skills
        </a>
        <a href="#projects" className="hover:text-accent transition-colors">
          Projects
        </a>
        <a href="#contact" className="hover:text-accent transition-colors">
          Contact
        </a>
      </nav>
      <div className="text-center text-xs text-muted-foreground pb-6">
        © {new Date().getFullYear()} Byneedi Bhargavi. Crafted with intelligence & code.
      </div>
    </footer>
  );
}
