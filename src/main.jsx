import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";

import Home from "./pages/Usuario/Home/Home.jsx";
import "./styles/Global.css";
import MenuCursos from "./pages/Usuario/MenuCursos/MenuCursos.jsx";
import CusrosFront from "./pages/Usuario/CursosFront/CusrosFront.jsx";

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
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
