import type { FC, CSSProperties } from "react";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "./Icons";
import { projects } from "../data/portfolio";
import InterviewPilotVisual from "./visuals/InterviewPilotVisual";
import MiniRedisVisual from "./visuals/MiniRedisVisual";
import DSASagaVisual from "./visuals/DSASagaVisual";
import "./Projects.css";

const projectVisuals: Record<string, FC> = {
  interviewpilot: InterviewPilotVisual,
  miniredis: MiniRedisVisual,
  dsasaga: DSASagaVisual,
};

export default function Projects() {
  return (
    <section className="section" id="projects" aria-label="Featured Engineering Projects">
      <div className="container">
        <p className="section-label">
          <span className="section-label__dot" />
          Featured Projects
        </p>
        <h2 className="section-title">What I've been building</h2>
        <p className="section-subtitle">
          Key software systems representing my engineering interests — from
          systems programming in C++ to full-stack web platforms.
        </p>

        <div className="projects__list">
          {projects.map((project, index) => {
            const Visual = projectVisuals[project.id];
            return (
              <article
                key={project.id}
                className={`project-card project-card--${project.id}`}
                style={
                  {
                    "--project-accent": project.accentColor,
                    "--project-accent-dim": project.accentDim,
                  } as CSSProperties
                }
              >
                <div className="project-card__visual">
                  <div className="project-card__visual-inner">
                    {Visual && <Visual />}
                  </div>
                </div>

                <div className="project-card__content">
                  <div className="project-card__header">
                    <span className="project-card__number">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span
                      className="project-card__status"
                      style={{
                        background: project.accentDim,
                        color: project.accentColor,
                      }}
                    >
                      <span className="project-card__status-dot" />
                      {project.status}
                    </span>
                  </div>

                  <h3 className="project-card__name">{project.name}</h3>
                  <p className="project-card__tagline">{project.tagline}</p>
                  <p className="project-card__description">
                    {project.description}
                  </p>

                  <div className="project-card__tags">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tag tag--hoverable">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="project-card__actions">
                    <a
                      href={project.repoUrl}
                      className="btn btn--primary project-card__github-btn"
                      style={{ background: project.accentColor }}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.name} on GitHub`}
                    >
                      <GithubIcon size={16} className="project-card__github-icon" />
                      <span>View on GitHub</span>
                      <ExternalLink size={13} className="project-card__github-arrow" />
                    </a>

                    {project.demoUrl ? (
                      <a
                        href={project.demoUrl}
                        className="btn btn--secondary project-card__demo-btn"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={14} />
                        Live Demo
                      </a>
                    ) : null}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
