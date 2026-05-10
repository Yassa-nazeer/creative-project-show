import { Section } from "./Section";

export function About() {
  return (
    <Section id="about" eyebrow="About" title="A builder at the intersection of mobile and AI.">
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 text-lg text-muted-foreground leading-relaxed">
          <p>
            I'm a Computer Science student at Ahram Canadian University (GPA 3.82), shipping
            cross-platform Flutter apps and training deep learning models that actually make it to
            production. I've completed professional training with{" "}
            <span className="text-foreground">ITI</span>,{" "}
            <span className="text-foreground">CIB Bank</span>, and{" "}
            <span className="text-foreground">DEPI</span>, and I love turning messy data and rough
            ideas into clean, fast, useful products.
          </p>
        </div>
        <div className="grid gap-3">
          {[
            { k: "Based in", v: "Sohag, Egypt" },
            { k: "Focus", v: "Flutter · ML · CV · NLP" },
            { k: "Languages", v: "Arabic · English · French" },
          ].map((it) => (
            <div key={it.k} className="rounded-xl border border-border bg-card p-4">
              <p className="text-xs uppercase tracking-wider text-muted-foreground">{it.k}</p>
              <p className="mt-1 font-medium">{it.v}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}