import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Importa el componente App
import "./index.css";
import "./styles/globals.css"; // Importa los estilos globales de Tailwind CSS

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App /> {/* Renderiza directamente App */}
  </React.StrictMode>,
);
