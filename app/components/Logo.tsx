/**
 * Sacred Line Studio Logo Component
 * Features a sacred geometry symbol (6-pointed star in circle) with elegant typography
 */
export function Logo({className = ''}: {className?: string}) {
  return (
    <svg
      width="200"
      height="60"
      viewBox="0 0 200 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Sacred Line Studio Logo"
    >
      {/* Sacred Geometry Symbol - Golden Circle with Star */}
      <g id="symbol">
        {/* Outer Circle */}
        <circle
          cx="30"
          cy="30"
          r="22"
          stroke="var(--color-sacred-gold, #d4af37)"
          strokeWidth="1.5"
          fill="none"
        />

        {/* Inner Sacred Star (6-pointed) */}
        <path
          d="M30 12 L36 26 L50 26 L38 34 L42 48 L30 40 L18 48 L22 34 L10 26 L24 26 Z"
          fill="var(--color-sacred-gold, #d4af37)"
          opacity="0.9"
        />

        {/* Center Dot */}
        <circle cx="30" cy="30" r="2" fill="var(--color-sacred-gold, #d4af37)" />
      </g>

      {/* Text: "SACRED LINE STUDIO" */}
      <g id="text">
        {/* "SACRED LINE" */}
        <text
          x="62"
          y="26"
          fontFamily="'Playfair Display', Georgia, serif"
          fontSize="14"
          fontWeight="600"
          letterSpacing="2"
          fill="var(--color-sacred-charcoal, #1a1a1a)"
        >
          SACRED LINE
        </text>

        {/* "STUDIO" */}
        <text
          x="62"
          y="42"
          fontFamily="'Inter', sans-serif"
          fontSize="10"
          fontWeight="300"
          letterSpacing="4"
          fill="var(--color-sacred-sage, #8b9d83)"
        >
          STUDIO
        </text>
      </g>
    </svg>
  );
}

/**
 * Compact version for mobile/small spaces
 */
export function LogoCompact({className = ''}: {className?: string}) {
  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Sacred Line Studio"
    >
      {/* Just the sacred geometry symbol */}
      <circle
        cx="30"
        cy="30"
        r="22"
        stroke="var(--color-sacred-gold, #d4af37)"
        strokeWidth="1.5"
        fill="none"
      />

      <path
        d="M30 12 L36 26 L50 26 L38 34 L42 48 L30 40 L18 48 L22 34 L10 26 L24 26 Z"
        fill="var(--color-sacred-gold, #d4af37)"
        opacity="0.9"
      />

      <circle cx="30" cy="30" r="2" fill="var(--color-sacred-gold, #d4af37)" />
    </svg>
  );
}
