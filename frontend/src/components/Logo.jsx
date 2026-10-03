function Logo({ height, className }) {
  return (
    <img
      src="/logo.png"
      alt="Premier League Tracker"
      className={className}
      style={height ? { height, width: 'auto', display: 'block' } : { display: 'block' }}
    />
  )
}

export default Logo
