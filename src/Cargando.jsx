// Mensaje que se muestra mientras se cargan los datos
function Cargando() {
  return (
    <div className="cargando" role="status">
      <div className="spinner"></div>
      <p>Cargando inventario...</p>
    </div>
  )
}

export default Cargando
