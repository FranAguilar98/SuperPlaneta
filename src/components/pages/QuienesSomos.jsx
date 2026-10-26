import './Paginas.css'

// Página 2: información de la empresa
function QuienesSomos() {
  return (
    <section>
      <h1 className="titulo-pagina">Quiénes somos</h1>
      <p className="bajada">
        SuperPlaneta es el sistema de gestión de inventario creado para
        supermercados que quieren tener el control de sus productos.
      </p>

      <div className="bloques">
        <article className="bloque">
          <h2>Misión</h2>
          <p>
            Ayudar a los supermercados a controlar sus existencias de forma
            simple, evitando quiebres de stock y pérdidas por mermas.
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
