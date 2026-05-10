import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef, useState } from "react";
import {
  useProjects,
  useCV,
  setCV,
  exportProjectsJSON,
  importProjectsJSON,
  type Project,
} from "@/lib/projects";

export const Route = createFileRoute("/admin")({
  head: () => ({ meta: [{ title: "Admin — Manage portfolio" }] }),
  component: Admin,
});

const empty = {
  title: "",
  category: "",
  description: "",
  tech: "",
  link: "",
  metric: "",
};

function Admin() {
  const { projects, add, remove, reset } = useProjects();
  const cv = useCV();
  const [form, setForm] = useState(empty);
  const fileRef = useRef<HTMLInputElement>(null);
  const cvRef = useRef<HTMLInputElement>(null);
  const [msg, setMsg] = useState<string | null>(null);

  function flash(m: string) {
    setMsg(m);
    setTimeout(() => setMsg(null), 2500);
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.title || !form.category) return;
    const p: Omit<Project, "id"> = {
      title: form.title.trim(),
      category: form.category.trim(),
      description: form.description.trim(),
      tech: form.tech.split(",").map((t) => t.trim()).filter(Boolean),
      link: form.link.trim() || undefined,
      metric: form.metric.trim() || undefined,
    };
    add(p);
    setForm(empty);
    flash("Project added.");
  }

  function onExport() {
    const blob = new Blob([exportProjectsJSON()], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `portfolio-projects-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }

  function onImport(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const items = importProjectsJSON(String(reader.result));
        flash(`Imported ${items.length} projects.`);
      } catch (err: any) {
        flash(`Import failed: ${err.message}`);
      } finally {
        if (fileRef.current) fileRef.current.value = "";
      }
    };
    reader.readAsText(file);
  }

  function onCVUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 8 * 1024 * 1024) {
      flash("CV must be under 8MB.");
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setCV({ name: file.name, dataUrl: String(reader.result) });
      flash("CV uploaded.");
      if (cvRef.current) cvRef.current.value = "";
    };
    reader.readAsDataURL(file);
  }

  const input =
    "w-full rounded-lg border border-border bg-card px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary";
  const btn =
    "text-sm px-4 py-2 rounded-full border border-border hover:bg-secondary transition-colors";

  return (
    <main className="min-h-screen bg-background text-foreground py-16">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="flex items-center justify-between mb-10">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">Admin</p>
            <h1 className="text-3xl md:text-4xl font-semibold">Manage portfolio</h1>
          </div>
          <Link to="/" className={btn}>
            ← Back to site
          </Link>
        </div>

        {msg && (
          <div className="mb-6 rounded-lg border border-primary/40 bg-primary/10 px-4 py-3 text-sm">
            {msg}
          </div>
        )}

        <section className="mb-10 rounded-2xl border border-border bg-card p-6">
          <h2 className="text-lg font-semibold mb-4">CV / Resume</h2>
          <p className="text-sm text-muted-foreground mb-4">
            Upload your CV (PDF). Visitors will see a “Download CV” button on the homepage.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <input
              ref={cvRef}
              type="file"
              accept="application/pdf"
              onChange={onCVUpload}
              className="text-sm"
            />
            {cv && (
              <>
                <a href={cv.dataUrl} download={cv.name} className={btn}>
                  Download current ({cv.name})
                </a>
                <button onClick={() => setCV(null)} className={btn}>
                  Remove
                </button>
              </>
            )}
          </div>
        </section>

        <section className="mb-10 rounded-2xl border border-border bg-card p-6">
          <h2 className="text-lg font-semibold mb-4">Backup & restore</h2>
          <div className="flex flex-wrap gap-3">
            <button onClick={onExport} className={btn}>
              Export JSON
            </button>
            <button onClick={() => fileRef.current?.click()} className={btn}>
              Import JSON
            </button>
            <input
              ref={fileRef}
              type="file"
              accept="application/json"
              onChange={onImport}
              className="hidden"
            />
            <button
              onClick={() => {
                if (confirm("Reset to default projects?")) {
                  reset();
                  flash("Projects reset.");
                }
              }}
              className={btn}
            >
              Reset to defaults
            </button>
          </div>
        </section>

        <section className="mb-10 rounded-2xl border border-border bg-card p-6">
          <h2 className="text-lg font-semibold mb-4">Add a new project</h2>
          <form onSubmit={onSubmit} className="grid md:grid-cols-2 gap-4">
            <input
              className={input}
              placeholder="Title *"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              required
            />
            <input
              className={input}
              placeholder="Category * (e.g. Flutter, NLP)"
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value })}
              required
            />
            <textarea
              className={`${input} md:col-span-2 min-h-24`}
              placeholder="Description"
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
            />
            <input
              className={`${input} md:col-span-2`}
              placeholder="Tech (comma separated, e.g. Flutter, Firebase, BLoC)"
              value={form.tech}
              onChange={(e) => setForm({ ...form, tech: e.target.value })}
            />
            <input
              className={input}
              placeholder="Metric (e.g. 95% accuracy)"
              value={form.metric}
              onChange={(e) => setForm({ ...form, metric: e.target.value })}
            />
            <input
              className={input}
              placeholder="Link (https://...)"
              value={form.link}
              onChange={(e) => setForm({ ...form, link: e.target.value })}
            />
            <div className="md:col-span-2">
              <button
                type="submit"
                className="px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
              >
                Add project
              </button>
            </div>
          </form>
        </section>

        <section className="rounded-2xl border border-border bg-card p-6">
          <h2 className="text-lg font-semibold mb-4">
            All projects <span className="text-muted-foreground font-normal">({projects.length})</span>
          </h2>
          <ul className="divide-y divide-border">
            {projects.map((p) => (
              <li key={p.id} className="py-3 flex items-center justify-between gap-4">
                <div className="min-w-0">
                  <p className="font-medium truncate">{p.title}</p>
                  <p className="text-xs text-muted-foreground truncate">{p.category}</p>
                </div>
                <button
                  onClick={() => {
                    if (confirm(`Delete "${p.title}"?`)) remove(p.id);
                  }}
                  className="text-xs px-3 py-1.5 rounded-full border border-border hover:bg-destructive hover:text-destructive-foreground transition-colors"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}