import { Link } from 'react-router-dom'
import PitchBackground from '../components/PitchBackground'
import { ShirtIcon, GlobeIcon, TargetIcon } from '../components/Icons'

function Home() {
  return (
    <div className="home">
      <PitchBackground />
      <div className="home-content">
        <h1>Explore Premier League player stats</h1>
        <p className="subtitle">Browse by team, nation, or position.</p>
        <nav className="nav-links">
          <Link to="/teams" className="nav-link">
            <ShirtIcon />
            Teams
          </Link>
          <Link to="/nations" className="nav-link">
            <GlobeIcon />
            Nation
          </Link>
          <Link to="/positions" className="nav-link">
            <TargetIcon />
            Positions
          </Link>
        </nav>
      </div>
    </div>
  )
}

export default Home
