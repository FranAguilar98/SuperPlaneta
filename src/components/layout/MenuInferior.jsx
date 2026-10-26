import { NavLink } from 'react-router-dom'
import './MenuInferior.css'

// Menú fijo en la parte inferior. NavLink agrega la clase "activo" a la ruta actual
const opciones = [
  { ruta: '/', texto: 'Inicio' },
  { ruta: '/quienes-somos', texto: 'Quiénes somos'},
  { ruta: '/contacto', texto: 'Contáctanos' },
]

function MenuInferior() {
  return (
    <nav className="menu-inferior" aria-label="Navegación principal">
      {opciones.map((op) => (
        <NavLink
          key={op.ruta}
          to={op.ruta}
          end={op.ruta === '/'}
          className={({ isActive }) =>
            isActive ? 'menu-item activo' : 'menu-item'
          }
        >
          <span className="menu-icono">{op.icono}</span>
          <span className="menu-texto">{op.texto}</span>
        </NavLink>
      ))}
    </nav>
  )
}

export default MenuInferior
