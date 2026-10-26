import { useState } from 'react'
import TarjetaProducto from './TarjetaProducto'
import './Inventario.css'

// Muestra los productos con búsqueda y filtro por categoría
function ListaProductos({ productos, onCambiarStock }) {
  const [busqueda, setBusqueda] = useState('')
  const [categoria, setCategoria] = useState('Todas')

  // Categorías únicas para el selector
  const categorias = ['Todas', ...new Set(productos.map((p) => p.categoria))]

  const filtrados = productos.filter(
    (p) =>
      (categoria === 'Todas' || p.categoria === categoria) &&
      p.nombre.toLowerCase().includes(busqueda.toLowerCase())
  )

  return (
    <div>
      <div className="filtros">
        <input
          type="search"
          placeholder="Buscar producto..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
        <select value={categoria} onChange={(e) => setCategoria(e.target.value)}>
          {categorias.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      {/* Renderizado condicional: sin resultados */}
      {filtrados.length === 0 ? (
        <p className="sin-resultados">No se encontraron productos.</p>
      ) : (
        <div className="grilla">
          {filtrados.map((producto) => (
            <TarjetaProducto
              key={producto.id}
              producto={producto}
              onCambiarStock={onCambiarStock}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default ListaProductos
