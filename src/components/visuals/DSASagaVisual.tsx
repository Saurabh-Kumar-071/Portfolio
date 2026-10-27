import { Terminal, ShieldCheck } from "lucide-react";
import "./ProjectVisuals.css";

/**
 * DSASagaVisual — High-Fidelity App Window Mockup
 * Showcases the full DSASaga collaborative coding & execution platform
 * with zero clipping, ambient blue/cyan glow, scanner beam, and floating animation.
 */
export default function DSASagaVisual() {
  return (
    <div className="pv pv--showcase pv--showcase-dsa" aria-label="DSASaga Platform Showcase">
      {/* Background ambient radial glow */}
      <div className="pv-showcase__ambient pv-showcase__ambient--dsa" aria-hidden="true" />

      {/* Floating App Window */}
      <div className="pv-showcase__window pv-showcase__window--dsa">
        {/* Browser / App Header Bar */}
        <div className="pv-showcase__bar">
          <div className="pv-showcase__dots" aria-hidden="true">
            <span className="pv-showcase__dot pv-showcase__dot--red" />
            <span className="pv-showcase__dot pv-showcase__dot--yellow" />
            <span className="pv-showcase__dot pv-showcase__dot--green" />
          </div>

          <div className="pv-showcase__address">
            <ShieldCheck size={10} className="pv-showcase__lock" />
            <span className="pv-showcase__url">dsasaga.com/practice</span>
          </div>

          <div className="pv-showcase__badge pv-showcase__badge--dsa">
            <span className="pv-showcase__status-dot pv-showcase__status-dot--blue" />
            <Terminal size={9} className="pv-showcase__sparkle--dsa" />
            <span>Live Sandbox</span>
          </div>
        </div>

        {/* Dashboard Image Stage */}
        <div className="pv-showcase__stage">
          <img
            src="/dsasaga.png"
            alt="DSASaga — Collaborative DSA Practice and Code Execution Platform"
            className="pv-showcase__img"
            loading="lazy"
          />

          {/* Code Execution Scanner Beam Animation */}
          <div className="pv-showcase__scanner pv-showcase__scanner--dsa" aria-hidden="true" />

          {/* Diagonal Glass Sheen Reflection */}
          <div className="pv-showcase__sheen" aria-hidden="true" />
        </div>
      </div>
    </div>
  );
}
