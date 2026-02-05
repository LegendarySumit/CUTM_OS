export default function CollegeLogo({ size = 80 }) {
  return (
    <svg
      viewBox="0 0 200 200"
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer Circle Background */}
      <circle cx="100" cy="100" r="95" fill="#F5F1E6" stroke="#8B4513" strokeWidth="2"/>
      
      {/* Left Laurel Wreath */}
      <g>
        <path
          d="M 70 85 Q 60 95 55 110 Q 52 125 60 135"
          stroke="#8B4513"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
        />
        {/* Leaves Left */}
        {[0, 12, 24, 36, 48, 60].map((angle) => (
          <ellipse
            key={`left-${angle}`}
            cx={65 + Math.cos((angle * Math.PI) / 180) * 10}
            cy={108 + Math.sin((angle * Math.PI) / 180) * 18}
            rx="3.5"
            ry="7"
            fill="#A0522D"
            transform={`rotate(${angle - 90} ${65 + Math.cos((angle * Math.PI) / 180) * 10} ${108 + Math.sin((angle * Math.PI) / 180) * 18})`}
          />
        ))}
      </g>

      {/* Right Laurel Wreath */}
      <g>
        <path
          d="M 130 85 Q 140 95 145 110 Q 148 125 140 135"
          stroke="#8B4513"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
        />
        {/* Leaves Right */}
        {[0, 12, 24, 36, 48, 60].map((angle) => (
          <ellipse
            key={`right-${angle}`}
            cx={135 + Math.cos((angle * Math.PI) / 180) * 10}
            cy={108 + Math.sin((angle * Math.PI) / 180) * 18}
            rx="3.5"
            ry="7"
            fill="#A0522D"
            transform={`rotate(${angle + 90} ${135 + Math.cos((angle * Math.PI) / 180) * 10} ${108 + Math.sin((angle * Math.PI) / 180) * 18})`}
          />
        ))}
      </g>

      {/* Top Three Stars */}
      <g>
        {/* Left Star */}
        <path
          d="M 75 38 L 77 44 L 84 45 L 79 49 L 81 56 L 75 52 L 69 56 L 71 49 L 66 45 L 73 44 Z"
          fill="#DAA520"
        />
        {/* Center Star (Larger) */}
        <path
          d="M 100 28 L 104 37 L 114 39 L 107 45 L 109 55 L 100 50 L 91 55 L 93 45 L 86 39 L 96 37 Z"
          fill="#DAA520"
        />
        {/* Right Star */}
        <path
          d="M 125 38 L 127 44 L 134 45 L 129 49 L 131 56 L 125 52 L 119 56 L 121 49 L 116 45 L 123 44 Z"
          fill="#DAA520"
        />
      </g>

      {/* Graduation Cap */}
      <g>
        {/* Cap Main */}
        <ellipse cx="100" cy="72" rx="26" ry="11" fill="#00205B" />
        {/* Cap Front Visor */}
        <path
          d="M 74 72 L 74 82 Q 74 84 76 84 L 124 84 Q 126 84 126 82 L 126 72"
          fill="#00205B"
        />
        {/* Cap Brim */}
        <ellipse cx="100" cy="72" rx="32" ry="6" fill="#00205B" opacity="0.8" />
        {/* Tassel */}
        <line x1="100" y1="84" x2="100" y2="102" stroke="#DAA520" strokeWidth="2.5" />
        <circle cx="100" cy="105" r="3.5" fill="#DAA520" />
      </g>

      {/* Books Section */}
      <g>
        {/* Left Book */}
        <rect x="52" y="105" width="22" height="16" fill="#00205B" stroke="#003D7A" strokeWidth="1" rx="1" />
        <line x1="52" y1="109" x2="74" y2="109" stroke="#DAA520" strokeWidth="1.5" />
        <line x1="52" y1="113" x2="74" y2="113" stroke="#DAA520" strokeWidth="0.8" opacity="0.7" />
        
        {/* Center Open Book */}
        <path
          d="M 82 110 L 100 104 L 118 110 L 100 120 Z"
          fill="#00205B"
          stroke="#003D7A"
          strokeWidth="1"
        />
        <line x1="100" y1="104" x2="100" y2="120" stroke="#DAA520" strokeWidth="1.5" />
        <line x1="90" y1="112" x2="100" y2="107" stroke="#DAA520" strokeWidth="0.8" opacity="0.7" />
        <line x1="110" y1="112" x2="100" y2="107" stroke="#DAA520" strokeWidth="0.8" opacity="0.7" />
        
        {/* Right Book */}
        <rect x="126" y="105" width="22" height="16" fill="#1E3A5F" stroke="#003D7A" strokeWidth="1" rx="1" />
        <line x1="126" y1="109" x2="148" y2="109" stroke="#DAA520" strokeWidth="1.5" />
        <line x1="126" y1="113" x2="148" y2="113" stroke="#DAA520" strokeWidth="0.8" opacity="0.7" />
      </g>
    </svg>
  );
}
