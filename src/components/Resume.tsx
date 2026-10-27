import { Download, ExternalLink } from "lucide-react";
import { profile } from "../data/portfolio";
import "./Resume.css";

export default function Resume() {
  const isExternalUrl =
    profile.resumePath.startsWith("http://") ||
    profile.resumePath.startsWith("https://");

  return (
    <section className="section" id="resume" aria-label="Résumé">
      <div className="container">
        <p className="section-label">
          <span className="section-label__dot" />
          Résumé
        </p>
        <h2 className="section-title">Download my résumé</h2>

        <div className="resume__card">
          <div className="resume__content">
            <h3 className="resume__name">{profile.name}</h3>
            <p className="resume__headline">
              {profile.education} · {profile.institution}
            </p>
            <p className="resume__stage">{profile.academicStage}</p>
            <p className="resume__interests">
              Backend Systems · Low-Level Networking · Distributed Databases · DSA
            </p>
          </div>

          <div className="resume__actions">
            <a
              href={profile.resumePath}
              className="btn btn--primary resume__btn"
              target={isExternalUrl ? "_blank" : undefined}
              rel={isExternalUrl ? "noopener noreferrer" : undefined}
              download={!isExternalUrl ? "Saurabh_Kumar_Resume.pdf" : undefined}
              aria-label="Download or view Saurabh Kumar's resume"
            >
              {isExternalUrl ? <ExternalLink size={16} /> : <Download size={16} />}
              <span>{isExternalUrl ? "View Online Résumé" : "Download PDF Résumé"}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
