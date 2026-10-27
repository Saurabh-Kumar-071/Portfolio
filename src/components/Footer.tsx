import { ArrowUp, Terminal, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, LeetCodeIcon, CodeforcesIcon } from "./Icons";
import { profile, navLinks } from "../data/portfolio";
import "./Footer.css";

const currentYear = new Date().getFullYear();

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <a href="#" className="footer__logo" onClick={scrollToTop}>
              <Terminal size={18} className="footer__logo-icon" />
              <span>{profile.name}</span>
            </a>
            <p className="footer__tagline">
              {profile.education} · {profile.institution}
            </p>
            <p className="footer__desc">
              Systems programming in C++, backend architecture, networking, and algorithmic problem solving.
            </p>
          </div>

          <div className="footer__nav">
            <h4 className="footer__nav-title">Navigation</h4>
            <ul className="footer__nav-list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="footer__nav-link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__connect">
            <h4 className="footer__nav-title">Profiles &amp; Coding</h4>
            <div className="footer__socials">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
                aria-label="GitHub Profile"
              >
                <GithubIcon size={18} />
                <span>GitHub (@Saurabh-Kumar-071)</span>
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon size={18} />
                <span>LinkedIn</span>
              </a>

              <a
                href={profile.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
                aria-label="LeetCode Profile"
              >
                <LeetCodeIcon size={18} />
                <span>LeetCode</span>
              </a>

              <a
                href={profile.codeforces}
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
                aria-label="Codeforces Profile"
              >
                <CodeforcesIcon size={18} />
                <span>Codeforces</span>
              </a>

              <a
                href={`mailto:${profile.email}`}
                className="footer__social-link"
                aria-label="Direct Email"
              >
                <Mail size={18} />
                <span>{profile.email}</span>
              </a>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copy">
            &copy; {currentYear} {profile.name} · Built with React &amp; TypeScript.
          </p>
          <button
            onClick={scrollToTop}
            className="footer__back-to-top"
            aria-label="Back to top of page"
          >
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
