function PitchBackground() {
  return (
    <svg
      className="pitch-bg"
      viewBox="0 0 300 200"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <rect x="4" y="4" width="292" height="192" fill="none" stroke="currentColor" strokeWidth="1" />
      <line x1="150" y1="4" x2="150" y2="196" stroke="currentColor" strokeWidth="1" />
      <circle cx="150" cy="100" r="28" fill="none" stroke="currentColor" strokeWidth="1" />
      <circle cx="150" cy="100" r="1.4" fill="currentColor" />

      <rect x="4" y="60" width="40" height="80" fill="none" stroke="currentColor" strokeWidth="1" />
      <rect x="4" y="80" width="16" height="40" fill="none" stroke="currentColor" strokeWidth="1" />
      <path d="M 44 76 A 24 24 0 0 1 44 124" fill="none" stroke="currentColor" strokeWidth="1" />

      <rect x="256" y="60" width="40" height="80" fill="none" stroke="currentColor" strokeWidth="1" />
      <rect x="280" y="80" width="16" height="40" fill="none" stroke="currentColor" strokeWidth="1" />
      <path d="M 256 76 A 24 24 0 0 0 256 124" fill="none" stroke="currentColor" strokeWidth="1" />
    </svg>
  )
}

export default PitchBackground
