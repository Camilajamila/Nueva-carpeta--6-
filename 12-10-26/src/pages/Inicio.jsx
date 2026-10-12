import { Link } from 'react-router-dom';

const proyectos = [
  { id: 1, nombre: 'Proyecto 1' },
  { id: 2, nombre: 'Proyecto 2' },
  { id: 3, nombre: 'Proyecto 3' },
];

export default function Inicio() {
  return (
    <main>
      <h1>Inicio</h1>
      <p>Listado de proyectos:</p>
      <ul>
        {proyectos.map((proyecto) => (
          <li key={proyecto.id}>
            <Link to={`/proyectos/${proyecto.id}`}>{proyecto.nombre}</Link>
          </li>
        ))}
      </ul>
      <Link to="/proyectos">Ver todos los proyectos</Link>
    </main>
  );
}
