import './Inventario.css'

// Tarjeta de un producto con su imagen, precio y estado de stock
function TarjetaProducto({ producto }) {
  const { nombre, categoria, precio, stock, stockMinimo, imagen } = producto

  // El estado se calcula según el stock disponible
  let estado = 'Disponible'
  let clase = 'ok'
  if (stock === 0) {
    estado = 'Sin stock'
    clase = 'critico'
  } else if (stock < stockMinimo) {
    estado = 'Stock bajo'
    clase = 'alerta'
  }

  return (
    <article className="tarjeta">
      {/* BASE_URL hace que la imagen también se vea en GitHub Pages */}
      <img
        className="tarjeta-imagen"
        src={`${import.meta.env.BASE_URL}${imagen}`}
        alt={nombre}
      />
      <span className="tarjeta-categoria">{categoria}</span>
      <h3>{nombre}</h3>
      <p className="tarjeta-precio">${precio.toLocaleString('es-CL')}</p>
      <p className="tarjeta-stock">Stock: {stock} unidades</p>
      <p className={`etiqueta ${clase}`}>{estado}</p>
    </article>
  )
}

export default TarjetaProducto