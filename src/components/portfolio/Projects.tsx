import { Link } from "@tanstack/react-router";
import { Section } from "./Section";
import { useProjects } from "@/lib/projects";

export function Projects() {
  const { projects } = useProjects();
  return (
    <Section id="projects" eyebrow="Projects" title="Selected work.">
      <div className="flex items-center justify-between mb-8 -mt-6 gap-4 flex-wrap">
        <p className="text-muted-foreground max-w-xl">
          A growing collection of mobile and AI projects. New work is added regularly.
        </p>
        <Link
          to="/admin"
          className="text-sm px-4 py-2 rounded-full border border-border hover:bg-secondary transition-colors"
        >
          Add project
        </Link>
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        {projects.map((p) => (
          <article
            key={p.id}
            className="group relative rounded-2xl border border-border bg-card p-6 hover:border-primary/60 transition-colors shadow-elegant"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-primary">{p.category}</p>
                <h3 className="mt-2 text-xl font-semibold leading-tight">{p.title}</h3>
              </div>
              {p.metric && (
                <span className="shrink-0 text-xs font-medium px-3 py-1 rounded-full bg-secondary text-secondary-foreground">
                  {p.metric}
                </span>
              )}
            </div>
            <p className="mt-4 text-muted-foreground leading-relaxed">{p.description}</p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <li
                  key={t}
                  className="text-xs px-2.5 py-1 rounded-md bg-muted text-muted-foreground border border-border"
                >
                  {t}
                </li>
              ))}
            </ul>
            {p.link && (
              <a
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-1 text-sm text-primary hover:underline"
              >
                View project →
              </a>
            )}
          </article>
        ))}
      </div>
    </Section>
  );
}