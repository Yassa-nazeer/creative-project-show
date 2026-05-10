import { Section } from "./Section";

const links = [
  { label: "Email", value: "yassanazeer268@gmail.com", href: "mailto:yassanazeer268@gmail.com" },
  { label: "Phone", value: "+20 120 536 7154", href: "tel:+201205367154" },
  { label: "LinkedIn", value: "/in/yassa-nazeer", href: "https://www.linkedin.com/in/yassa-nazeer-07373531b/" },
  { label: "GitHub", value: "@Yassa-nazeer", href: "https://github.com/Yassa-nazeer" },
  { label: "Kaggle", value: "@yassanazeer", href: "https://www.kaggle.com/yassanazeer" },
];

export function Contact() {
  return (
    <Section id="contact" eyebrow="Contact" title="Let's build something great.">
      <div className="rounded-3xl border border-border bg-card overflow-hidden">
        <div className="p-8 md:p-12 grid md:grid-cols-[1.2fr_1fr] gap-10 items-center bg-hero">
          <div>
            <h3 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Open to internships, freelance, and full-time roles.
            </h3>
            <p className="mt-4 text-muted-foreground max-w-lg">
              Whether you need a Flutter app shipped or a model trained and deployed, I'd love to
              hear what you're working on.
            </p>
            <a
              href="mailto:yassanazeer268@gmail.com"
              className="inline-flex mt-6 px-6 py-3 rounded-full bg-gold text-primary-foreground font-medium shadow-glow"
            >
              Start a conversation
            </a>
          </div>
          <ul className="grid gap-3">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  target={l.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="flex items-center justify-between rounded-xl border border-border bg-background/40 px-4 py-3 hover:border-primary/60 transition-colors"
                >
                  <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    {l.label}
                  </span>
                  <span className="text-sm font-medium">{l.value}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="mt-10 text-xs text-muted-foreground text-center">
        © {new Date().getFullYear()} Yassa Nazeer Gadelrabb · Built with care.
      </p>
    </Section>
  );
}