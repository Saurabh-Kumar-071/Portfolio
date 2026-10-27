export function GithubIcon({ size = 18, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export function LinkedinIcon({ size = 18, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function LeetCodeIcon({ size = 22, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.874 5.874 0 0 0 .749 1.838 5.606 5.606 0 0 0 1.554 1.623 5.485 5.485 0 0 0 1.94.814c.26.046.52.069.782.069h8.586a1.373 1.373 0 0 0 1.373-1.373 1.373 1.373 0 0 0-1.373-1.373H6.786a2.748 2.748 0 0 1-1.01-.19 2.766 2.766 0 0 1-.876-.576 2.83 2.83 0 0 1-.58-.937 2.795 2.795 0 0 1-.036-1.196 2.81 2.81 0 0 1 .632-1.077l3.771-4.041 4.887-5.234a1.373 1.373 0 0 0-.19-1.937A1.364 1.364 0 0 0 13.483 0z"
        fill="#FFA116"
      />
      <path
        d="M19.345 10.96a1.373 1.373 0 0 0-1.938.19l-4.225 5.235a1.373 1.373 0 1 0 2.14 1.724l4.225-5.235a1.373 1.373 0 0 0-.202-1.914z"
        fill="#E0E0E6"
      />
    </svg>
  );
}

export function CodeforcesIcon({ size = 22, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="2" y="9.5" width="5" height="13" rx="1.5" fill="#EAB308" />
      <rect x="9.5" y="3" width="5" height="19.5" rx="1.5" fill="#3B82F6" />
      <rect x="17" y="6.5" width="5" height="16" rx="1.5" fill="#EF4444" />
    </svg>
  );
}

export function CodeChefIcon({ size = 22, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 2C9.5 2 7.5 3.5 7 5.5C5 5.5 3 7.5 3 10C3 12 4.5 13.5 6 14C6 14.5 6 15 6 15.5C6 17.5 8.7 19 12 19C15.3 19 18 17.5 18 15.5C18 15 18 14.5 18 14C19.5 13.5 21 12 21 10C21 7.5 19 5.5 17 5.5C16.5 3.5 14.5 2 12 2Z"
        fill="#A26B39"
      />
      <rect x="7" y="19" width="10" height="3" rx="1" fill="#D97706" />
      <circle cx="9.5" cy="11.5" r="1.5" fill="#FFFFFF" />
      <circle cx="14.5" cy="11.5" r="1.5" fill="#FFFFFF" />
      <path d="M10 14.5C10.8 15.5 13.2 15.5 14 14.5" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

/* --- Technology Icons --- */
export function CppIcon({ size = 20, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect width="24" height="24" rx="4" fill="#00599C" />
      <text x="12" y="16.5" fill="#FFFFFF" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="'JetBrains Mono', monospace">C++</text>
    </svg>
  );
}

export function TsIcon({ size = 20, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect width="24" height="24" rx="4" fill="#3178C6" />
      <text x="12" y="16.5" fill="#FFFFFF" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="'JetBrains Mono', monospace">TS</text>
    </svg>
  );
}

export function JsIcon({ size = 20, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect width="24" height="24" rx="4" fill="#F7DF1E" />
      <text x="12" y="16.5" fill="#000000" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="'JetBrains Mono', monospace">JS</text>
    </svg>
  );
}

export function ReactIcon({ size = 20, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="2.5" fill="#61DAFB" />
      <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.5" fill="none" />
      <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.5" fill="none" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.5" fill="none" transform="rotate(120 12 12)" />
    </svg>
  );
}

export function NextjsIcon({ size = 20, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="11" fill="#000000" stroke="#33334A" strokeWidth="1.5" />
      <path d="M8 8v8l8-9.5V16" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function NodeIcon({ size = 20, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M12 2L21 7.2v10.4L12 22.8 3 17.6V7.2L12 2z" fill="#339933" />
      <text x="12" y="15" fill="#FFFFFF" fontSize="9" fontWeight="700" textAnchor="middle" fontFamily="'JetBrains Mono', monospace">node</text>
    </svg>
  );
}

export function MongoIcon({ size = 20, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M12 2C12 2 6 8.5 6 13.5C6 17 8.5 20.5 12 22C15.5 20.5 18 17 18 13.5C18 8.5 12 2 12 2Z" fill="#47A248" />
      <path d="M12 2v20c-.5-.2-1-.5-1.5-.9C8.5 19.5 7.5 17 7.5 14c0-3.5 4.5-12 4.5-12z" fill="#499D4A" />
    </svg>
  );
}

export function LinuxIcon({ size = 20, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect width="24" height="24" rx="4" fill="#22222F" stroke="#33334A" strokeWidth="1" />
      <text x="12" y="16" fill="#FCC624" fontSize="12" fontWeight="700" textAnchor="middle">🐧</text>
    </svg>
  );
}
