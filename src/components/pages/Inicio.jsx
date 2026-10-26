import { useState, useEffect } from 'react'
import Cargando from '../../Cargando'
import ListaProductos from '../inventario/ListaProductos'
import './Paginas.css'

// URL generada en DummyJSON (Custom Response) con los productos
const URL_API = 'https://dummyjson.com/c/6db2-3a41-4907-ae54'
// Página principal (home): recibe la lista por props y la carga desde la API
function Inicio({ productos, setProductos }) {
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(null)

  // useEffect se ejecuta al montar el componente
  useEffect(() => {
    fetch(URL_API)
      .then((respuesta) => {
        if (!respuesta.ok) throw new Error('No se pudo cargar el inventario')
        return respuesta.json()
      })
      .then((datos) => {
        setProductos(datos)
        setCargando(false)
      })
      .catch((err) => {
        setError(err.message)
        setCargando(false)
      })
  }, [setProductos])

  // Renderizado condicional: carga, error o inventario
  if (cargando) return <Cargando />
  if (error) return <p className="mensaje-error">⚠️ {error}</p>

  return (
    <section>
      <h1 className="titulo-pagina">Inventario</h1>
      <p className="bajada">Despensa: productos disponibles en el supermercado.</p>
      <ListaProductos productos={productos} />
    </section>
  )
}

export default Inicio