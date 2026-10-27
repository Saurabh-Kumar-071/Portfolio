import { Terminal, ShieldCheck } from "lucide-react";
import "./ProjectVisuals.css";

/**
 * MiniRedisVisual — High-Fidelity Terminal App Window Mockup
 * Showcases the live MiniRedis Cloud Terminal with zero clipping,
 * ambient coral/amber glow, TCP packet scanner beam, and floating animation.
 */
export default function MiniRedisVisual() {
  return (
    <div className="pv pv--showcase pv--showcase-redis" aria-label="MiniRedis Cloud Terminal Showcase">
      {/* Background ambient radial glow */}
      <div className="pv-showcase__ambient pv-showcase__ambient--redis" aria-hidden="true" />

      {/* Floating App Window */}
      <div className="pv-showcase__window pv-showcase__window--redis">
        {/* Browser / Terminal Header Bar */}
        <div className="pv-showcase__bar">
          <div className="pv-showcase__dots" aria-hidden="true">
            <span className="pv-showcase__dot pv-showcase__dot--red" />
            <span className="pv-showcase__dot pv-showcase__dot--yellow" />
            <span className="pv-showcase__dot pv-showcase__dot--green" />
          </div>

          <div className="pv-showcase__address">
            <ShieldCheck size={10} className="pv-showcase__lock" />
            <span className="pv-showcase__url">miniredis-web.onrender.com</span>
          </div>

          <div className="pv-showcase__badge pv-showcase__badge--redis">
            <span className="pv-showcase__status-dot pv-showcase__status-dot--redis" />
            <Terminal size={9} className="pv-showcase__sparkle--redis" />
            <span>TCP Live</span>
          </div>
        </div>

        {/* Dashboard Image Stage */}
        <div className="pv-showcase__stage">
          <img
            src="/miniredis.png"
            alt="MiniRedis Cloud Terminal — In-Memory Key-Value Server in C++"
            className="pv-showcase__img"
            loading="lazy"
          />

          {/* TCP / Command Scanner Beam Animation */}
          <div className="pv-showcase__scanner pv-showcase__scanner--redis" aria-hidden="true" />

          {/* Diagonal Glass Sheen Reflection */}
          <div className="pv-showcase__sheen" aria-hidden="true" />
        </div>
      </div>
    </div>
  );
}
