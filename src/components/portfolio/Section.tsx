import { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="py-24 md:py-32 scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mb-14">
          <p className="text-xs uppercase tracking-[0.25em] text-primary mb-4">{eyebrow}</p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
}