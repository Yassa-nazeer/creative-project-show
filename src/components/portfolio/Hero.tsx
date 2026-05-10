import profile from "@/assets/profile.jpg";

export function Hero() {
  return (
    <section className="relative pt-36 pb-24 md:pt-44 md:pb-32 overflow-hidden bg-hero">
      <div className="absolute inset-0 -z-10 opacity-[0.04] [background-image:linear-gradient(var(--color-foreground)_1px,transparent_1px),linear-gradient(90deg,var(--color-foreground)_1px,transparent_1px)] [background-size:60px_60px]" />
      <div className="container mx-auto px-6 grid md:grid-cols-[1.2fr_1fr] gap-12 items-center">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground border border-border rounded-full px-3 py-1">
            <span className="size-1.5 rounded-full bg-primary animate-pulse" /> Available for work
          </span>
          <h1 className="mt-6 text-5xl md:text-7xl font-semibold tracking-tight leading-[1.05]">
            Yassa Nazeer
            <br />
            <span className="text-gold">Gadelrabb</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
            Flutter Developer & Data Scientist crafting cross-platform mobile apps and shipping
            production-grade machine learning models.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="px-6 py-3 rounded-full bg-gold text-primary-foreground font-medium shadow-glow hover:translate-y-[-1px] transition-transform"
            >
              View projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-full border border-border text-foreground hover:bg-secondary transition-colors"
            >
              Get in touch
            </a>
          </div>
          <dl className="mt-12 grid grid-cols-3 gap-6 max-w-md">
            {[
              { k: "3.82", v: "GPA / CS" },
              { k: "8+", v: "Projects shipped" },
              { k: "96%", v: "Top model acc." },
            ].map((s) => (
              <div key={s.v}>
                <dt className="text-3xl font-semibold text-foreground">{s.k}</dt>
                <dd className="text-xs text-muted-foreground mt-1">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative justify-self-center md:justify-self-end animate-fade-up [animation-delay:120ms]">
          <div className="absolute -inset-6 rounded-[2rem] bg-gold opacity-30 blur-3xl" />
          <div className="relative rounded-[2rem] overflow-hidden border border-border ring-gold shadow-elegant w-[280px] sm:w-[340px] aspect-[3/4] animate-float">
            <img
              src={profile}
              alt="Yassa Nazeer Gadelrabb"
              className="w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 glass rounded-xl px-4 py-3 border border-border/60">
              <p className="text-xs text-muted-foreground">Currently</p>
              <p className="text-sm font-medium">ML Engineer @ DEPI</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}