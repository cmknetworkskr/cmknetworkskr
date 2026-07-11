import type { ReactNode } from "react";

type PageIntroProps = {
  index: string;
  label: string;
  title: ReactNode;
  description: ReactNode;
};

export function PageIntro({ index, label, title, description }: PageIntroProps) {
  return (
    <section className="subpage-hero" aria-labelledby="page-title">
      <div className="subpage-glow" aria-hidden="true" />
      <div className="subpage-hero-inner shell">
        <p className="section-label">
          {index} · {label}
        </p>
        <div className="subpage-heading">
          <h1 id="page-title">{title}</h1>
          <p>{description}</p>
        </div>
        <div className="subpage-motif" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>
    </section>
  );
}
