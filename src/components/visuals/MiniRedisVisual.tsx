import "./ProjectVisuals.css";

/** MiniRedis — Systems architecture illustration */
export default function MiniRedisVisual() {
  return (
    <div className="pv pv--redis" aria-label="MiniRedis architecture illustration showing TCP server with epoll event loop and in-memory key-value store">
      <svg viewBox="0 0 480 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="pv-redis__svg">
        {/* Grid background */}
        <defs>
          <pattern id="redis-grid" width="24" height="24" patternUnits="userSpaceOnUse">
            <path d="M 24 0 L 0 0 0 24" fill="none" stroke="rgba(42,42,58,0.4)" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="480" height="320" fill="url(#redis-grid)" />

        {/* Section label: Clients */}
        <text x="50" y="22" textAnchor="middle" fill="rgba(147,148,165,0.7)" fontSize="9" fontFamily="'JetBrains Mono', monospace" fontWeight="500" letterSpacing="0.1em">CLIENTS</text>

        {/* Client 1 */}
        <rect x="16" y="36" width="68" height="32" rx="5" fill="rgba(249,112,102,0.08)" stroke="rgba(249,112,102,0.35)" strokeWidth="1" />
        <text x="50" y="56" textAnchor="middle" fill="#f97066" fontSize="10" fontFamily="'JetBrains Mono', monospace">redis-cli</text>

        {/* Client 2 */}
        <rect x="16" y="80" width="68" height="32" rx="5" fill="rgba(249,112,102,0.08)" stroke="rgba(249,112,102,0.35)" strokeWidth="1" />
        <text x="50" y="100" textAnchor="middle" fill="#f97066" fontSize="10" fontFamily="'JetBrains Mono', monospace">app:3000</text>

        {/* Client 3 */}
        <rect x="16" y="124" width="68" height="32" rx="5" fill="rgba(249,112,102,0.08)" stroke="rgba(249,112,102,0.35)" strokeWidth="1" />
        <text x="50" y="144" textAnchor="middle" fill="#f97066" fontSize="10" fontFamily="'JetBrains Mono', monospace">client_n</text>

        {/* TCP connection lines with animated packet flow */}
        <line x1="84" y1="52" x2="136" y2="88" stroke="rgba(249,112,102,0.4)" strokeWidth="1.2" className="pv-redis__tcp-line" />
        <line x1="84" y1="96" x2="136" y2="96" stroke="rgba(249,112,102,0.4)" strokeWidth="1.2" className="pv-redis__tcp-line" />
        <line x1="84" y1="140" x2="136" y2="104" stroke="rgba(249,112,102,0.4)" strokeWidth="1.2" className="pv-redis__tcp-line" />

        {/* TCP label */}
        <text x="110" y="72" textAnchor="middle" fill="rgba(249,112,102,0.5)" fontSize="8" fontFamily="'JetBrains Mono', monospace" transform="rotate(-20 110 72)">TCP</text>

        {/* Server block */}
        <rect x="136" y="34" width="120" height="130" rx="8" fill="rgba(249,112,102,0.05)" stroke="rgba(249,112,102,0.3)" strokeWidth="1" />
        <text x="196" y="52" textAnchor="middle" fill="#f97066" fontSize="11" fontFamily="'JetBrains Mono', monospace" fontWeight="600">TCP Server</text>
        <line x1="148" y1="60" x2="244" y2="60" stroke="rgba(249,112,102,0.15)" strokeWidth="0.5" />

        {/* socket() */}
        <rect x="148" y="68" width="96" height="22" rx="4" fill="rgba(249,112,102,0.08)" stroke="rgba(249,112,102,0.2)" strokeWidth="0.5" />
        <text x="196" y="83" textAnchor="middle" fill="rgba(249,112,102,0.7)" fontSize="9" fontFamily="'JetBrains Mono', monospace">socket() → fd</text>

        {/* bind + listen */}
        <rect x="148" y="96" width="96" height="22" rx="4" fill="rgba(249,112,102,0.08)" stroke="rgba(249,112,102,0.2)" strokeWidth="0.5" />
        <text x="196" y="111" textAnchor="middle" fill="rgba(249,112,102,0.7)" fontSize="9" fontFamily="'JetBrains Mono', monospace">bind() listen()</text>

        {/* accept */}
        <rect x="148" y="124" width="96" height="22" rx="4" fill="rgba(249,112,102,0.08)" stroke="rgba(249,112,102,0.2)" strokeWidth="0.5" />
        <text x="196" y="139" textAnchor="middle" fill="rgba(249,112,102,0.7)" fontSize="9" fontFamily="'JetBrains Mono', monospace">accept() → fd</text>

        {/* Arrow: server → epoll */}
        <line x1="256" y1="96" x2="292" y2="96" stroke="rgba(251,191,36,0.35)" strokeWidth="1" />
        <polygon points="290,92 298,96 290,100" fill="rgba(251,191,36,0.35)" />

        {/* epoll event loop */}
        <rect x="298" y="52" width="110" height="88" rx="8" fill="rgba(251,191,36,0.06)" stroke="rgba(251,191,36,0.3)" strokeWidth="1" className="pv-redis__epoll-box" />
        <text x="353" y="70" textAnchor="middle" fill="#fbbf24" fontSize="11" fontFamily="'JetBrains Mono', monospace" fontWeight="600">epoll Loop</text>
        <line x1="310" y1="78" x2="396" y2="78" stroke="rgba(251,191,36,0.15)" strokeWidth="0.5" />

        <text x="353" y="94" textAnchor="middle" fill="rgba(251,191,36,0.6)" fontSize="9" fontFamily="'JetBrains Mono', monospace">epoll_create()</text>
        <text x="353" y="108" textAnchor="middle" fill="rgba(251,191,36,0.6)" fontSize="9" fontFamily="'JetBrains Mono', monospace">epoll_ctl(ADD)</text>
        <text x="353" y="122" textAnchor="middle" fill="rgba(251,191,36,0.6)" fontSize="9" fontFamily="'JetBrains Mono', monospace">epoll_wait()</text>

        {/* Arrow: epoll → parser */}
        <line x1="353" y1="140" x2="353" y2="170" stroke="rgba(52,211,153,0.3)" strokeWidth="1" />
        <polygon points="349,168 353,176 357,168" fill="rgba(52,211,153,0.3)" />

        {/* Command Parser */}
        <rect x="298" y="176" width="110" height="40" rx="6" fill="rgba(52,211,153,0.06)" stroke="rgba(52,211,153,0.3)" strokeWidth="1" />
        <text x="353" y="194" textAnchor="middle" fill="#34d399" fontSize="10" fontFamily="'JetBrains Mono', monospace" fontWeight="500">Command Parser</text>
        <text x="353" y="208" textAnchor="middle" fill="rgba(52,211,153,0.5)" fontSize="8" fontFamily="'JetBrains Mono', monospace">SET | GET | DEL</text>

        {/* Arrow: parser → store */}
        <line x1="353" y1="216" x2="353" y2="242" stroke="rgba(59,130,246,0.3)" strokeWidth="1" />
        <polygon points="349,240 353,248 357,240" fill="rgba(59,130,246,0.3)" />

        {/* KV Store */}
        <rect x="280" y="248" width="146" height="52" rx="8" fill="rgba(59,130,246,0.06)" stroke="rgba(59,130,246,0.3)" strokeWidth="1" />
        <text x="353" y="268" textAnchor="middle" fill="#3b82f6" fontSize="11" fontFamily="'JetBrains Mono', monospace" fontWeight="600">KV Store</text>
        <text x="353" y="284" textAnchor="middle" fill="rgba(59,130,246,0.5)" fontSize="9" fontFamily="'JetBrains Mono', monospace">std::unordered_map</text>
        <text x="353" y="296" textAnchor="middle" fill="rgba(59,130,246,0.4)" fontSize="8" fontFamily="'JetBrains Mono', monospace">string → string</text>

        {/* Response path */}
        <path d="M 280 274 L 196 274 L 196 170 L 84 170" stroke="rgba(52,211,153,0.2)" strokeWidth="1" strokeDasharray="4 3" fill="none" />
        <text x="140" y="186" textAnchor="middle" fill="rgba(52,211,153,0.4)" fontSize="8" fontFamily="'JetBrains Mono', monospace">+OK / $value / -ERR</text>

        {/* FD lifecycle note */}
        <rect x="16" y="210" width="120" height="36" rx="5" fill="rgba(147,148,165,0.05)" stroke="rgba(147,148,165,0.2)" strokeWidth="0.5" />
        <text x="76" y="226" textAnchor="middle" fill="rgba(147,148,165,0.5)" fontSize="8" fontFamily="'JetBrains Mono', monospace">fd lifecycle</text>
        <text x="76" y="238" textAnchor="middle" fill="rgba(147,148,165,0.4)" fontSize="7" fontFamily="'JetBrains Mono', monospace">close() on disconnect</text>
      </svg>
    </div>
  );
}
