import { Sparkles, ShieldCheck } from "lucide-react";
import "./ProjectVisuals.css";

/**
 * InterviewPilotVisual — High-Fidelity App Window Mockup
 * Showcases the full InterviewPilot AI dashboard with zero clipping,
 * ambient background glow, AI laser scanner, floating animation, and light sheen sweep.
 */
export default function InterviewPilotVisual() {
  return (
    <div className="pv pv--showcase" aria-label="InterviewPilot AI Platform Dashboard Showcase">
      {/* Background ambient radial glow */}
      <div className="pv-showcase__ambient" aria-hidden="true" />

      {/* Floating App Window */}
      <div className="pv-showcase__window">
        {/* Browser / App Header Bar */}
        <div className="pv-showcase__bar">
          <div className="pv-showcase__dots" aria-hidden="true">
            <span className="pv-showcase__dot pv-showcase__dot--red" />
            <span className="pv-showcase__dot pv-showcase__dot--yellow" />
            <span className="pv-showcase__dot pv-showcase__dot--green" />
          </div>

          <div className="pv-showcase__address">
            <ShieldCheck size={10} className="pv-showcase__lock" />
            <span className="pv-showcase__url">interviewpilot.ai/eval</span>
          </div>

          <div className="pv-showcase__badge">
            <span className="pv-showcase__status-dot" />
            <Sparkles size={9} className="pv-showcase__sparkle" />
            <span>AI Live</span>
          </div>
        </div>

        {/* Dashboard Image Stage */}
        <div className="pv-showcase__stage">
          <img
            src="/interviewpilot_dashboard.png"
            alt="InterviewPilot AI Dashboard — AI Resume Evaluation, ATS Score Analyzer, and Mock Interview Insights"
            className="pv-showcase__img"
            loading="lazy"
          />

          {/* AI Laser Scanner Beam Animation */}
          <div className="pv-showcase__scanner" aria-hidden="true" />

          {/* Diagonal Glass Sheen Reflection */}
          <div className="pv-showcase__sheen" aria-hidden="true" />
        </div>
      </div>
    </div>
  );
}
