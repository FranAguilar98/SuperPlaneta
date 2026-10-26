import './Paginas.css'

// Página 2: información de la empresa
function QuienesSomos() {
  return (
    <section>
      <h1 className="titulo-pagina">Quiénes somos</h1>
      <p className="bajada">
        SuperPlaneta es un supermercado con su propio sistema de gestión de
        inventario, creado para que nuestras tiendas siempre tengan sus
        productos en orden.
      </p>

      <div className="bloques">
        <article className="bloque">
          <h2>Qué hacemos</h2>
          <p>
            Vendemos productos de despensa y, además, ofrecemos un sistema de
            gestión de inventario para que los comercios locales mantengan sus
            productos organizados y disponibles para sus clientes.
          </p>
        </article>
        <article className="bloque">
          <h2>Visión</h2>
          <p>
            Ser la herramienta de inventario preferida por los comercios
            locales de Chile, con información clara y en tiempo real.
          </p>
        </article>
        <article className="bloque">
          <h2>Valores</h2>
          <p>
            Transparencia, orden, compromiso con el cliente y mejora continua
            en cada proceso de nuestra operación.
          </p>
        </article>
      </div>
    </section>
  )
}

export default QuienesSomos