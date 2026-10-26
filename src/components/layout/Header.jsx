import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
  return (
    <header className="header">
      {/* Link navega sin recargar la página */}
      <Link to="/" className="header-logo">
        🛒 SuperPlaneta
      </Link>
    </header>
  )
}

export default Header