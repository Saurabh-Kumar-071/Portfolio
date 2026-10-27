import type { FC, CSSProperties } from "react";
import { ExternalLink, Trophy, Flame } from "lucide-react";
import { competitiveProgramming } from "../data/portfolio";
import { LeetCodeIcon, CodeforcesIcon, CodeChefIcon } from "./Icons";
import "./DSA.css";

const platformIcons: Record<string, FC<{ size?: number; className?: string }>> = {
  LeetCode: LeetCodeIcon,
  Codeforces: CodeforcesIcon,
  CodeChef: CodeChefIcon,
};

const platformAccents: Record<string, { bg: string; border: string; glow: string; text: string }> = {
  LeetCode: {
    bg: "rgba(255, 161, 22, 0.08)",
    border: "rgba(255, 161, 22, 0.3)",
    glow: "rgba(255, 161, 22, 0.2)",
    text: "#FFA116",
  },
  Codeforces: {
    bg: "rgba(59, 130, 246, 0.08)",
    border: "rgba(59, 130, 246, 0.3)",
    glow: "rgba(59, 130, 246, 0.2)",
    text: "#3B82F6",
  },
  CodeChef: {
    bg: "rgba(217, 119, 6, 0.08)",
    border: "rgba(217, 119, 6, 0.3)",
    glow: "rgba(217, 119, 6, 0.2)",
    text: "#F59E0B",
  },
};

export default function DSA() {
  return (
    <section className="section" id="dsa" aria-label="Competitive Programming Profiles">
      <div className="container">
        <p className="section-label">
          <span className="section-label__dot" />
          Competitive Programming
        </p>
        <h2 className="section-title">Algorithmic Problem Solving</h2>
        <p className="section-subtitle">
          Active participant in algorithmic contests and data structure problem solving.
          Here are my competitive programming profiles, handles, and active platforms.
        </p>

        {/* CP Profile Cards with Icons and Direct Links */}
        <div className="dsa__profiles-grid">
          {competitiveProgramming.map((cp) => {
            const Icon = platformIcons[cp.platform];
            const accent = platformAccents[cp.platform] || {
              bg: "rgba(139, 92, 246, 0.08)",
              border: "rgba(139, 92, 246, 0.3)",
              glow: "rgba(139, 92, 246, 0.2)",
              text: "#8B5CF6",
            };

            return (
              <div
                key={cp.platform}
                className="dsa__card"
                style={
                  {
                    "--cp-accent-bg": accent.bg,
                    "--cp-accent-border": accent.border,
                    "--cp-accent-glow": accent.glow,
                    "--cp-accent-text": accent.text,
                  } as CSSProperties
                }
              >
                <div className="dsa__card-header">
                  <div className="dsa__platform-brand">
                    <div className="dsa__icon-wrapper">
                      {Icon ? <Icon size={28} /> : <Trophy size={24} />}
                    </div>
                    <div>
                      <h3 className="dsa__platform-name">{cp.platform}</h3>
                      <span className="dsa__handle-tag">
                        @{cp.handle}
                      </span>
                    </div>
                  </div>

                  <span className="dsa__badge">
                    <Flame size={12} />
                    Active
                  </span>
                </div>

                <div className="dsa__stat-banner">
                  <p className="dsa__stat-text">{cp.focus}</p>
                </div>

                <p className="dsa__note-text">{cp.note}</p>

                <div className="dsa__card-actions">
                  <a
                    href={cp.url}
                    className="dsa__visit-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit Saurabh's ${cp.platform} profile`}
                  >
                    <span>Visit {cp.platform} Profile</span>
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
