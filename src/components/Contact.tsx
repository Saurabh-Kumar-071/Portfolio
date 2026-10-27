import { useState } from "react";
import type { ReactNode, MouseEvent } from "react";
import { Mail, Check, Copy, ArrowUpRight, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { profile } from "../data/portfolio";
import "./Contact.css";

interface ContactCardData {
  id: string;
  category: string;
  title: string;
  value: string;
  description: string;
  href: string;
  actionText: string;
  icon: ReactNode;
  accent: string;
  accentGlow: string;
  accentBorder: string;
  isEmail?: boolean;
}

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  const contactCards: ContactCardData[] = [
    {
      id: "email",
      category: "Direct Inquiries",
      title: "Email",
      value: profile.email,
      description: "Fastest way to reach me for opportunities, internships, and discussions.",
      href: `mailto:${profile.email}`,
      actionText: "Send email",
      icon: <Mail size={22} />,
      accent: "#A78BFA",
      accentGlow: "rgba(167, 139, 250, 0.22)",
      accentBorder: "rgba(167, 139, 250, 0.45)",
      isEmail: true,
    },
    {
      id: "github",
      category: "Code & Projects",
      title: "GitHub",
      value: "@Saurabh-Kumar-071",
      description: "Explore my source code, repositories, commit history, and experiments.",
      href: profile.github,
      actionText: "View repositories",
      icon: <GithubIcon size={22} />,
      accent: "#E2E8F0",
      accentGlow: "rgba(226, 232, 240, 0.18)",
      accentBorder: "rgba(226, 232, 240, 0.35)",
    },
    {
      id: "linkedin",
      category: "Professional Network",
      title: "LinkedIn",
      value: "saurabh-kumar-254a50326",
      description: "Connect for professional updates, recommendations, and background.",
      href: profile.linkedin,
      actionText: "Connect on LinkedIn",
      icon: <LinkedinIcon size={22} />,
      accent: "#38BDF8",
      accentGlow: "rgba(56, 189, 248, 0.22)",
      accentBorder: "rgba(56, 189, 248, 0.45)",
    },
  ];

  return (
    <section className="section contact-section" id="contact" aria-label="Contact">
      <div className="container">
        {/* Availability Status Banner */}
        <div className="contact__status-wrapper">
          <div className="contact__status-pill">
            <span className="contact__status-indicator">
              <span className="contact__status-ping" />
              <span className="contact__status-dot" />
            </span>
            <span className="contact__status-text">
              Open to Software Engineering Internships & Opportunities
            </span>
            <Sparkles size={14} className="contact__status-sparkle" />
          </div>
        </div>

        <p className="section-label">
          <span className="section-label__dot" />
          Contact
        </p>
        <h2 className="section-title">Get in touch</h2>
        <p className="section-subtitle">
          Whether you have an internship opportunity, a project to collaborate on,
          or want to talk about systems programming and algorithms — my inbox is always open.
        </p>

        {/* 4 Responsive Contact Tiles */}
        <div className="contact__grid">
          {contactCards.map((card) => (
            <div
              key={card.id}
              className={`contact-card contact-card--${card.id}`}
            >
              {/* Card Top Row: Icon + Category Badge */}
              <div className="contact-card__top">
                <div className="contact-card__icon-box">
                  {card.icon}
                </div>
                <span className="contact-card__category">{card.category}</span>
              </div>

              {/* Card Body */}
              <div className="contact-card__body">
                <h3 className="contact-card__title">{card.title}</h3>
                <span className="contact-card__value" title={card.value}>
                  {card.value}
                </span>
                <p className="contact-card__description">{card.description}</p>
              </div>

              {/* Card Action Footer */}
              <div className="contact-card__footer">
                <a
                  href={card.href}
                  target={card.isEmail ? undefined : "_blank"}
                  rel={card.isEmail ? undefined : "noopener noreferrer"}
                  className="contact-card__action-link"
                  aria-label={`${card.actionText} for ${card.title}`}
                >
                  <span>{card.actionText}</span>
                  <ArrowUpRight size={15} className="contact-card__arrow" />
                </a>

                {card.isEmail && (
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className={`contact-card__copy-btn ${copied ? "contact-card__copy-btn--copied" : ""}`}
                    title={copied ? "Copied to clipboard!" : "Copy email address"}
                    aria-label="Copy email address"
                  >
                    {copied ? (
                      <>
                        <Check size={14} className="contact-card__check-icon" />
                        <span className="contact-card__copied-badge">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy size={14} />
                        <span className="contact-card__copy-text">Copy</span>
                      </>
                    )}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

