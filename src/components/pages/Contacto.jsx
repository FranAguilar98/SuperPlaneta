import { useState } from 'react'
import './Paginas.css'

// Página 3: Contáctanos (datos de contacto + formulario)
function Contacto() {
  // Un solo estado con los datos del formulario
  const [formulario, setFormulario] = useState({
    nombre: '',
    correo: '',
    mensaje: '',
  })
  // Indica si el mensaje ya fue enviado
  const [enviado, setEnviado] = useState(false)

  // Actualiza solo el campo que cambió, usando el atributo "name" del input
  const manejarCambio = (e) => {
    setFormulario({ ...formulario, [e.target.name]: e.target.value })
  }

  const manejarEnvio = (e) => {
    e.preventDefault() // evita que el formulario recargue la página
    setEnviado(true)
    setFormulario({ nombre: '', correo: '', mensaje: '' })
  }

  return (
    <section>
      <h1 className="titulo-pagina">Contáctanos</h1>
      <p className="bajada">
        ¿Tienes dudas o necesitas ayuda con el sistema? Escríbenos.
      </p>

      <div className="contacto-grid">
        <article className="bloque">
          <h2>📍 Datos de contacto</h2>
          <p>Av. Providencia 1234, Santiago, Chile</p>
          <p>📞 +56 2 2345 6789</p>
          <p>✉️ contacto@superplaneta.cl</p>
          <p>🕘 Lunes a sábado, 9:00 a 20:00 hrs</p>
        </article>

        <article className="bloque">
          <h2>💬 Envíanos un mensaje</h2>

          {/* Renderizado condicional: confirmación o formulario */}
          {enviado ? (
            <div className="confirmacion">
              <p>✅ ¡Gracias! Recibimos tu mensaje y te responderemos pronto.</p>
              <button className="boton" onClick={() => setEnviado(false)}>
                Enviar otro mensaje
              </button>
            </div>
          ) : (
            <form onSubmit={manejarEnvio} className="formulario">
              <label>
                Nombre
                <input
                  type="text"
                  name="nombre"
                  value={formulario.nombre}
                  onChange={manejarCambio}
                  required
                />
              </label>
              <label>
                Correo
                <input
                  type="email"
                  name="correo"
                  value={formulario.correo}
                  onChange={manejarCambio}
                  required
                />
              </label>
              <label>
                Mensaje
                <textarea
                  name="mensaje"
                  rows="4"
                  value={formulario.mensaje}
                  onChange={manejarCambio}
                  required
                ></textarea>
              </label>
              <button type="submit" className="boton">
                Enviar
              </button>
            </form>
          )}
        </article>
      </div>
    </section>
  )
}

export default Contacto