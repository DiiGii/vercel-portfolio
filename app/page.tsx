import type { ComponentType } from "react";
import {
  Brain,
  Code2,
  Cpu,
  Database,
  Download,
  ExternalLink,
  Gamepad2,
  GitBranch,
  Mail,
  Server,
  Sparkles,
  Contact,
} from "lucide-react";
import { InteractiveResume } from "../components/InteractiveResume";
import { ThemeSwitcher } from "../components/ThemeSwitcher";
import { navLinks, profile, projects, skillGroups, type Project } from "../data/portfolio";

const categoryIcons: Record<Project["category"], ComponentType<{ size?: number }>> = {
  Web: Code2,
  ML: Brain,
  Games: Gamepad2,
  Systems: Cpu,
  Data: Database,
};

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="logo" href="#top" aria-label="Daniel Guo home">
          DG
        </a>
        <nav aria-label="Primary navigation">
          {navLinks.map((link) => (
            <a href={link.href} key={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
      </header>

      <section className="hero section" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Hello, I&apos;m</p>
          <h1>{profile.name}</h1>
          <p className="hero-role">{profile.role}</p>
          <p className="hero-intro">{profile.intro}</p>

          <div className="hero-actions">
            <a className="button primary" href={profile.resumePath}>
              <Download size={18} />
              Resume PDF
            </a>
            <a className="button" href="#contact">
              <Mail size={18} />
              Contact
            </a>
          </div>

          <div className="social-links" aria-label="Social links">
            <a href={profile.github} target="_blank" rel="noreferrer">
              <GitBranch size={20} />
              GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              <Contact size={20} />
              LinkedIn
            </a>
          </div>
        </div>

        <aside className="hero-panel cat-card">
          <p className="eyebrow">Theme Lab</p>
          <h2>Pick the site mood</h2>
          <p>
            Themes use CSS variables, so new palettes can be added without rewriting the
            components.
          </p>
          <ThemeSwitcher />
        </aside>
      </section>

      <section className="section split-section" id="about">
        <div>
          <p className="eyebrow">About</p>
          <h2>Simple structure, more room to grow.</h2>
        </div>
        <p>
          This version keeps the light portfolio feel while moving repeated HTML into
          reusable React components. Skills, resume entries, and projects now come from
          typed data arrays, which makes the site easier to extend without layout drift.
        </p>
      </section>

      <section className="section" id="experience">
        <div className="section-heading">
          <p className="eyebrow">Explore My</p>
          <h2>Experience</h2>
          <p>
            The old experience layout used repeated flex rows. This grid keeps cards aligned
            evenly as skills are added or removed.
          </p>
        </div>

        <div className="skill-grid">
          {skillGroups.map((group) => (
            <article className="skill-card cat-card" key={group.title}>
              <div className="card-title-row">
                <Server size={20} />
                <h3>{group.title}</h3>
              </div>
              <ul>
                {group.skills.map((skill) => (
                  <li key={skill.name}>
                    <span>{skill.name}</span>
                    <small>{skill.level}</small>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="resume">
        <div className="section-heading">
          <p className="eyebrow">Not Just A PDF</p>
          <h2>Interactive Resume</h2>
          <p>
            Hover or tab through rows to reveal links, tags, and supporting context while
            keeping a resume-like reading experience.
          </p>
        </div>
        <InteractiveResume />
      </section>

      <section className="section" id="projects">
        <div className="section-heading">
          <p className="eyebrow">Browse My Recent</p>
          <h2>Projects</h2>
          <p>
            Add or reorder projects in one data file. Cards automatically keep consistent
            spacing, tags, and action links.
          </p>
        </div>

        <div className="project-grid">
          {projects.map((project) => {
            const Icon = categoryIcons[project.category];

            return (
              <article className="project-card cat-card" key={project.title}>
                <div className="project-card-top">
                  <span className="project-icon">
                    <Icon size={20} />
                  </span>
                  <span>{project.category}</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tag-list">
                  {project.stack.map((item) => (
                    <span className="tag" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  {project.links.map((link) => (
                    <a href={link.href} target="_blank" rel="noreferrer" key={link.href}>
                      {link.label}
                      <ExternalLink size={14} />
                    </a>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section vanity-section">
        <div className="cat-card vanity-card">
          <Sparkles size={28} />
          <div>
            <p className="eyebrow">Vanity Interaction Placeholder</p>
            <h2>Next idea: a tiny command palette.</h2>
            <p>
              A future visitor toy could let people type commands like projects, resume, or
              theme catppuccin without needing a backend.
            </p>
          </div>
        </div>
      </section>

      <footer className="site-footer" id="contact">
        <p className="eyebrow">Get In Touch</p>
        <h2>Contact Me</h2>
        <div className="footer-links">
          <a href={`mailto:${profile.email}`}>
            <Mail size={18} />
            {profile.email}
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer">
            <GitBranch size={18} />
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            <Contact size={18} />
            LinkedIn
          </a>
        </div>
      </footer>
    </main>
  );
}
