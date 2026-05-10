import { Link } from "@tanstack/react-router";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  return (
    <header className="fixed top-4 left-1/2 z-50 -translate-x-1/2 w-[min(1100px,92%)]">
      <nav className="glass border border-border/60 rounded-full px-5 py-3 flex items-center justify-between shadow-elegant">
        <Link to="/" className="font-semibold tracking-tight text-foreground flex items-center gap-2">
          <span className="size-2 rounded-full bg-gold" />
          Yassa<span className="text-muted-foreground font-normal">.dev</span>
        </Link>
        <ul className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-foreground transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="mailto:yassanazeer268@gmail.com"
          className="text-xs md:text-sm font-medium px-4 py-2 rounded-full bg-gold text-primary-foreground hover:opacity-90 transition-opacity"
        >
          Hire me
        </a>
      </nav>
    </header>
  );
}