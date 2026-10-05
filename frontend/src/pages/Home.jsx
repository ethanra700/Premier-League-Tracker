import { Link } from 'react-router-dom'
import Logo from '../components/Logo'
import heroPhoto from '../assets/haaland.png'

function Home() {
  return (
    <div className="home">
      <img src={heroPhoto} alt="" className="home-bg-photo" aria-hidden="true" />
      <div className="home-content">
        <Logo className="home-logo" />
        <h1>Explore Premier League player stats</h1>
        <p className="subtitle">Browse by team, nation, or position.</p>
        <nav className="nav-links">
          <Link to="/teams" className="nav-link">
            Teams
            <span className="nav-link-arrow" aria-hidden="true">→</span>
          </Link>
          <Link to="/nations" className="nav-link">
            Nation
            <span className="nav-link-arrow" aria-hidden="true">→</span>
          </Link>
          <Link to="/positions" className="nav-link">
            Positions
            <span className="nav-link-arrow" aria-hidden="true">→</span>
          </Link>
        </nav>
      </div>
    </div>
  )
}

export default Home
