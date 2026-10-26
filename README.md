# SuperPlaneta – Gestión de inventario para supermercado

Sitio web desarrollado con **React**, **Vite** y **React Router** para la actividad formativa 1: *"Utilizando tecnologías avanzadas de React en sitios web"*.

## Descripción

Aplicación de gestión de inventario para un supermercado. Muestra los productos de la despensa en tarjetas, con su imagen, precio, unidades disponibles y estado de stock. Los datos se cargan con `fetch` desde una URL creada en DummyJSON (Custom Response).

## Páginas y rutas (React Router)

| Ruta | Página | Descripción |
|------|--------|-------------|
| `/` | Inicio | Inventario de la despensa en tarjetas |
| `/quienes-somos` | Quiénes somos | Misión, visión y valores |
| `/contacto` | Contáctanos | Datos de contacto y formulario de mensaje |

La navegación se realiza con un **menú inferior** (`NavLink`) y el enlace del encabezado (`Link`). Se usa `HashRouter` para que el sitio funcione correctamente en GitHub Pages.

## Estructura del proyecto

```
super-inventario/
├── public/
│   └── img/                    # Imágenes de los productos
├── src/
│   ├── components/
│   │   ├── layout/             # Header y MenuInferior
│   │   ├── pages/              # Inicio, QuienesSomos, Contacto
│   │   └── inventario/         # ListaProductos y TarjetaProducto
│   ├── Cargando.jsx
│   ├── App.jsx                 # Definición de rutas
│   ├── App.css
│   ├── index.css
│   └── main.jsx                # HashRouter
├── index.html
├── package.json
└── vite.config.js
```

## Conceptos de React utilizados

- `useState`: lista de productos, estado de carga, errores y formulario de contacto.
- `useEffect` + `fetch`: carga del inventario desde la URL de DummyJSON.
- Renderizado condicional: pantalla de carga, errores, confirmación del formulario y estados de stock.
- Props: comunicación entre `Inicio`, `ListaProductos` y `TarjetaProducto`.
- React Router: `HashRouter`, `Routes`, `Route`, `Link`, `NavLink` y `Navigate`.

## Instalación y ejecución

```bash
npm install
npm run dev
```

## Despliegue en GitHub Pages

```bash
npm run deploy
```

