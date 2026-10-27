import { ArrowDown, FileText } from "lucide-react";
import { profile } from "../data/portfolio";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero section" id="hero" aria-label="Introduction">
      <div className="container">
        <div className="hero__grid">
          <div className="hero__content">
            <p className="hero__eyebrow">
              {profile.education} · {profile.institution}
            </p>
            <h1 className="hero__headline">{profile.headline}</h1>
            <p className="hero__subheadline">{profile.subheadline}</p>
            <div className="hero__actions">
              <a href="#projects" className="btn btn--primary">
                <ArrowDown size={16} />
                Explore my projects
              </a>
              <a href="#resume" className="btn btn--secondary">
                <FileText size={16} />
                View résumé
              </a>
            </div>
          </div>

          <div className="hero__visual" aria-label={`Photo of ${profile.name}`}>
            <div className="hero-avatar">
              {/* Ambient radial glow */}
              <div className="hero-avatar__glow" aria-hidden="true" />

              {/* Decorative rotating accent ring */}
              <div className="hero-avatar__ring" aria-hidden="true" />

              {/* Main circular frame */}
              <div className="hero-avatar__frame">
                <img
                  src="/portfolio_photo.jpeg"
                  alt={`Portrait of ${profile.name} — Computer Science Student at NIT Patna`}
                  className="hero-avatar__img"
                  width="340"
                  height="340"
                  loading="eager"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
