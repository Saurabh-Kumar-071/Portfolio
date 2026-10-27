import { profile } from "../data/portfolio";
import "./About.css";

export default function About() {
  return (
    <section className="section" id="about" aria-label="About Saurabh Kumar">
      <div className="container">
        <p className="section-label">
          <span className="section-label__dot" />
          About
        </p>
        <h2 className="section-title">Who I am</h2>

        <div className="about__grid">
          <div className="about__content">
            {profile.bio.map((paragraph, i) => (
              <p key={i} className="about__paragraph">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="about__sidebar">
            <div className="about__info-card">
              <div className="about__info-item">
                <span className="about__info-label">Education</span>
                <span className="about__info-value">{profile.education}</span>
              </div>
              <div className="about__info-item">
                <span className="about__info-label">Institution</span>
                <span className="about__info-value">{profile.institution}</span>
              </div>
              <div className="about__info-item">
                <span className="about__info-label">Stage</span>
                <span className="about__info-value">{profile.academicStage}</span>
              </div>
              <div className="about__info-item">
                <span className="about__info-label">Interests</span>
                <span className="about__info-value">
                  Backend Systems, Concurrency, Networking, DSA
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
