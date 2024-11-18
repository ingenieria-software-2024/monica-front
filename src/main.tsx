import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Importa el componente App
import "./index.css";
import { UserProvider } from "./context/UserContext";

import "./styles/globals.css"; // Importa los estilos globales de Tailwind CSS

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>
);
