import { Link, useParams } from 'react-router-dom';

const proyectos = [
  { id: 1, nombre: 'Proyecto 1', descripcion: 'Aplicación de gestión de tareas' },
  { id: 2, nombre: 'Proyecto 2', descripcion: 'Portal de clientes y reportes' },
  { id: 3, nombre: 'Proyecto 3', descripcion: 'Dashboard con analytics' },
];

export default function Detalle() {
  const { id } = useParams();
  const proyecto = proyectos.find((p) => String(p.id) === id);

  if (!proyecto) {
    return (
      <main>
        <h1>Proyecto no encontrado</h1>
        <Link to="/proyectos">Volver a proyectos</Link>
      </main>
    );
  }

  return (
    <main>
      <h1>{proyecto.nombre}</h1>
      <p>{proyecto.descripcion}</p>
      <Link to="/proyectos">Volver</Link>
    </main>
  );
}
