import { Section } from "./Section";

const groups: { title: string; items: string[] }[] = [
  {
    title: "Languages",
    items: ["Dart", "Python", "C++", "C#", "JavaScript", "SQL"],
  },
  {
    title: "Mobile",
    items: ["Flutter", "Clean Architecture", "GetX", "Provider", "BLoC", "Cubit"],
  },
  {
    title: "Data / AI",
    items: ["TensorFlow", "Keras", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
  },
  {
    title: "Backend & Tools",
    items: ["Firebase", "SQLite", "Flask", "Hugging Face", "Git", "Linux"],
  },
];

export function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="Tools I reach for.">
      <div className="grid md:grid-cols-2 gap-5">
        {groups.map((g) => (
          <div key={g.title} className="rounded-2xl border border-border bg-card p-6">
            <h3 className="text-sm uppercase tracking-[0.2em] text-primary mb-4">{g.title}</h3>
            <ul className="flex flex-wrap gap-2">
              {g.items.map((s) => (
                <li
                  key={s}
                  className="text-sm px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground border border-border"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}