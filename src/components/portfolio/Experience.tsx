import { Section } from "./Section";

const items = [
  {
    role: "Machine Learning Engineer",
    org: "Digital Egypt Pioneers Initiative (DEPI)",
    when: "Jun 2025 — Present",
    body: "Practical ML & deep learning projects across the full pipeline — data cleaning, model development, and performance evaluation on real-world AI tasks.",
  },
  {
    role: "Flutter Developer (Freelance)",
    org: "Independent",
    when: "Jan 2025 — Present",
    body: "Designed and shipped mobile apps with Flutter & Dart. Integrated Firebase, SQLite, and advanced state management with GetX, Provider, and BLoC.",
  },
  {
    role: "AI Intern",
    org: "Information Technology Institute (ITI)",
    when: "Aug 2025",
    body: "Trained on AI fundamentals, data preprocessing and model implementation; applied Python and ML algorithms in hands-on labs.",
  },
  {
    role: "Internship",
    org: "CIB Egypt",
    when: "Jul 2025",
    body: "Professional banking-sector internship focused on technology and process exposure.",
  },
];

export function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Where I've trained and shipped.">
      <ol className="relative border-l border-border ml-2">
        {items.map((it) => (
          <li key={it.role + it.org} className="pl-8 pb-10 last:pb-0 relative">
            <span className="absolute -left-[7px] top-1.5 size-3 rounded-full bg-gold ring-4 ring-background" />
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-xl font-semibold">{it.role}</h3>
              <span className="text-xs uppercase tracking-wider text-muted-foreground">{it.when}</span>
            </div>
            <p className="text-primary text-sm mt-1">{it.org}</p>
            <p className="text-muted-foreground mt-3 leading-relaxed max-w-3xl">{it.body}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}