import { useState } from 'react'
import './App.css'
import Header from './components/layout/Header'
import MenuInferior from './components/layout/MenuInferior'
import Inicio from './components/pages/Inicio'
import QuienesSomos from './components/pages/QuienesSomos'
import Contacto from './components/pages/Contacto'
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

function App() {
  // El estado de los productos vive en App y se pasa por props
  const [productos, setProductos] = useState([])

  return (
    <Router>
      <div className="app">
        <Header />

        <main className="contenido">
          <Routes>
            <Route path="/" element={<Inicio productos={productos} setProductos={setProductos} />} />
            <Route path="/quienes-somos" element={<QuienesSomos />} />
            <Route path="/contacto" element={<Contacto />} />
            {/* Cualquier otra URL redirige al inicio */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        <MenuInferior />
      </div>
    </Router>
  )
}

export default App