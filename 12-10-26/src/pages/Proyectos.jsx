import { Link, useNavigate } from 'react-router-dom';

const proyectos = [
  { id: 1, nombre: 'Proyecto 1', descripcion: 'Aplicación de gestión de tareas' },
  { id: 2, nombre: 'Proyecto 2', descripcion: 'Portal de clientes y reportes' },
  { id: 3, nombre: 'Proyecto 3', descripcion: 'Dashboard con analytics' },
];
export default function Proyectos() {
  const navigate = useNavigate();

  return (
    <main>
      <h1>Proyectos</h1>
      <button onClick={() => navigate('/')}>Volver al inicio</button>
      <ul>
        {proyectos.map((proyecto) => (
          <li key={proyecto.id}>
            <Link to={`/proyectos/${proyecto.id}`}>{proyecto.nombre}</Link>
            <p>{proyecto.descripcion}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}

