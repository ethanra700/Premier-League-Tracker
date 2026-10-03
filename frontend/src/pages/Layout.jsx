import { Link, Outlet, useLocation } from 'react-router-dom'
import Logo from '../components/Logo'

function Layout() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  return (
    <>
      {!isHome && (
        <header className="site-header">
          <Link to="/" className="brand">
            <Logo height={28} />
          </Link>
        </header>
      )}
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default Layout
