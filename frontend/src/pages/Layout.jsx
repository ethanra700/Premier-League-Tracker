import { Link, Outlet } from 'react-router-dom'
import Logo from '../components/Logo'

function Layout() {
  return (
    <>
      <header className="site-header">
        <Link to="/" className="brand">
          <Logo height={28} />
        </Link>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default Layout
