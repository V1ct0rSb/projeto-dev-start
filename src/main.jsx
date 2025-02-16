import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";

import CusrosFront from "./pages/Usuario/CursosFront/CursosFront.jsx";
import Home from "./pages/Usuario/Home/Home.jsx";
import MenuCursos from "./pages/Usuario/MenuCursos/MenuCursos.jsx";
import "./styles/Global.css";
import LoginAdmin from "./pages/Admin/Login/LoginAdmin.jsx";
import CursosBackend from "./pages/Usuario/CursosBack/CursosBack.jsx";
import MiniForum from './pages/Usuario/MiniForum/MiniForum';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/MenuCursos",
        element: <MenuCursos />,
      },
      {
        path: "/CursosFront",
        element: <CusrosFront />,
      },
      {
        path: "/CursosBack",
        element: <CursosBackend />,
      },

      {
        path: "/LoginAdmin",
        element: <LoginAdmin />,
      },
      {
        path: "/MiniForum",
        element: <MiniForum />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
