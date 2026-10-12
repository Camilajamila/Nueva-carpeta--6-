import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Proyectos from "./pages/Proyectos";
import Detalle from "./pages/Detalle";

const router = createBrowserRouter([
  { path: "/", element: <Inicio /> },
  { path: "/proyectos", element: <Proyectos /> },
  { path: "/proyectos/:id", element: <Detalle /> },
]);

export default function App() {
  return <RouterProvider router={router} />;
}