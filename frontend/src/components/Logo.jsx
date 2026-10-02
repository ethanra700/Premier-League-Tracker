function Logo({ height = 48 }) {
  return (
    <img
      src="/logo.png"
      alt="Premier League Tracker"
      height={height}
      style={{ height, width: 'auto', display: 'block' }}
    />
  )
}

export default Logo
