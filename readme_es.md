# Api Explorer Hub

## Resumen
Api Explorer Hub es una app React pequena para explorar varias APIs publicas desde una sola interfaz. Incluye busqueda, vistas de detalle y paginacion.

## Funcionalidades
- Listado de miembros de GitHub con busqueda y paginacion.
- Detalle de miembro de GitHub.
- Listado de personajes de Rick & Morty con busqueda y paginacion.
- Detalle de personaje de Rick & Morty.
- Estilos compartidos para listas y detalles.
- Estados de carga, vacio y error.

## Rutas
- `/list/:filter` Lista de miembros de GitHub (filtro en URL).
- `/detail/:id/:filter` Detalle de miembro de GitHub.
- `/rick-y-morty` Lista de Rick & Morty.
- `/rick-y-morty/:id` Detalle de Rick & Morty.

## Stack Tecnologico
- React 19 + TypeScript.
- React Router.
- Vite.
- use-debounce.

## Puesta en marcha
1. Instalar dependencias:

```bash
npm install
```

2. Ejecutar en modo desarrollo:

```bash
npm start
```

## Scripts disponibles

- `npm start` Arranca el servidor de desarrollo de Vite.
- `npm run build` Genera el build de produccion.
- `npm run preview` Previsualiza el build de produccion.

## Notas

- Este proyecto consume APIs publicas, por lo que los resultados pueden variar.

## Que he construido
Una app React pequeña que agrega dos APIs publicas en una sola interfaz, con routing, busqueda, vistas de detalle, paginacion y estados claros de carga, vacio y error.

## Aprendizajes clave
- Construccion de patrones de UI reutilizables para listas y detalles.
- Gestion de fetching async con debounce y cache simple.
- Implementacion de routing en cliente con URLs parametrizadas.
- Mejora de la UX con estados de carga, vacio y error.
