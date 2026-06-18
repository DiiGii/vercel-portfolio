"use client";

import { useMemo, useState } from "react";
import { ExternalLink, FileText, GitBranch, Link as LinkIcon, Mail, MapPin } from "lucide-react";
import { profile, projects, resumeEntries, type LinkItem } from "../data/portfolio";

type ActiveResumeItem = {
  title: string;
  eyebrow: string;
  summary: string;
  links: LinkItem[];
  tags: string[];
};

function linkIcon(label: string) {
  const lowerLabel = label.toLowerCase();

  if (lowerLabel.includes("github")) {
    return <GitBranch size={16} />;
  }

  if (lowerLabel.includes("email")) {
    return <Mail size={16} />;
  }

  return <ExternalLink size={16} />;
}

export function InteractiveResume() {
  const initialItem = useMemo<ActiveResumeItem>(
    () => ({
      title: "Interactive resume",
      eyebrow: "Hover or focus any resume row",
      summary:
        "This section keeps the printable resume shape, then layers links and project context on top for web visitors.",
      links: [
        { label: "GitHub", href: profile.github },
        { label: "LinkedIn", href: profile.linkedin },
        { label: "Email", href: `mailto:${profile.email}` },
      ],
      tags: ["Resume", "Projects", "Links"],
    }),
    [],
  );
  const [activeItem, setActiveItem] = useState<ActiveResumeItem>(initialItem);
  const featuredProjects = projects.slice(0, 6);

  return (
    <div className="resume-layout">
      <article className="resume-sheet cat-card" aria-label="Interactive resume">
        <header className="resume-header">
          <div>
            <p className="eyebrow">Interactive Resume</p>
            <h2>{profile.name}</h2>
            <p>{profile.role}</p>
          </div>
          <div className="resume-contact">
            <span>
              <Mail size={14} /> {profile.email}
            </span>
            <span>
              <MapPin size={14} /> {profile.location}
            </span>
          </div>
        </header>

        <section className="resume-block">
          <div className="resume-block-heading">
            <FileText size={17} />
            <h3>Experience and Education</h3>
          </div>
          <div className="resume-stack">
            {resumeEntries.map((entry) => (
              <button
                type="button"
                className="resume-row"
                key={`${entry.role}-${entry.organization}`}
                onMouseEnter={() =>
                  setActiveItem({
                    title: entry.role,
                    eyebrow: entry.organization,
                    summary: entry.summary,
                    links: entry.links ?? [],
                    tags: entry.tags,
                  })
                }
                onFocus={() =>
                  setActiveItem({
                    title: entry.role,
                    eyebrow: entry.organization,
                    summary: entry.summary,
                    links: entry.links ?? [],
                    tags: entry.tags,
                  })
                }
              >
                <span className="resume-row-main">
                  <strong>{entry.role}</strong>
                  <span>{entry.organization}</span>
                </span>
                <span className="resume-row-meta">{entry.period}</span>
                <span className="resume-row-summary">{entry.bullets[0]}</span>
              </button>
            ))}
          </div>
        </section>

        <section className="resume-block">
          <div className="resume-block-heading">
            <LinkIcon size={17} />
            <h3>Linked Project Highlights</h3>
          </div>
          <div className="resume-project-list">
            {featuredProjects.map((project) => (
              <button
                type="button"
                className="resume-project-pill"
                key={project.title}
                onMouseEnter={() =>
                  setActiveItem({
                    title: project.title,
                    eyebrow: project.category,
                    summary: project.description,
                    links: project.links,
                    tags: project.stack,
                  })
                }
                onFocus={() =>
                  setActiveItem({
                    title: project.title,
                    eyebrow: project.category,
                    summary: project.description,
                    links: project.links,
                    tags: project.stack,
                  })
                }
              >
                {project.title}
              </button>
            ))}
          </div>
        </section>
      </article>

      <aside className="resume-inspector cat-card" aria-live="polite">
        <p className="eyebrow">{activeItem.eyebrow}</p>
        <h3>{activeItem.title}</h3>
        <p>{activeItem.summary}</p>

        <div className="tag-list">
          {activeItem.tags.map((tag) => (
            <span className="tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>

        {activeItem.links.length > 0 ? (
          <div className="inspector-links">
            {activeItem.links.map((link) => (
              <a href={link.href} target="_blank" rel="noreferrer" key={link.href}>
                {linkIcon(link.label)}
                {link.label}
              </a>
            ))}
          </div>
        ) : (
          <p className="muted">No external link attached yet. Add one in data/portfolio.ts.</p>
        )}
      </aside>
    </div>
  );
}
