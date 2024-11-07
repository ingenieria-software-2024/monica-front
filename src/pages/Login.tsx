import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/auth.service";
import { useSession } from "../context/UserContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  /** Estado que controla si se esta logeando al usuario. */
  const [isLoggingIn, setIsLoggingIn] = useState<boolean>(false);

  const { setToken } = useSession();

  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isLoggingIn) return;

    setIsLoggingIn(true);

    try {
      // Loguear al usuario.
      const token = await login(username, password);

      // Settear la sesion del usuario.
      setToken(token);

      navigate("/");
    } catch (e: any) {
      console.error(e);
      alert(
        `Fallo al iniciar sesion: ${e?.response?.data?.message ?? e?.message}`
      );
    }

    setIsLoggingIn(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="max-w-md w-full p-8 bg-gray-800 rounded-lg shadow-md relative overflow-hidden">
        {/* Efectos de fondo */}
        <div className="absolute top-0 left-0 w-40 h-40 bg-purple-600 rounded-full blur-3xl opacity-30 -z-10"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-sky-400 rounded-full blur-3xl opacity-30 -z-10"></div>

        <h2 className="text-3xl font-bold text-white text-center mb-8">
          Iniciar Sesión
        </h2>

        <form onSubmit={handleLogin} className="space-y-6">
          {/* Campo de usuario */}
          <div>
            <label
              className="block text-sm font-medium text-gray-300"
              htmlFor="username"
            >
              Usuario
            </label>
            <input
              className="mt-2 w-full p-3 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-600 focus:outline-none"
              type="text"
              name="username"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Ingresa tu usuario"
            />
          </div>

          {/* Campo de contraseña */}
          <div>
            <label
              className="block text-sm font-medium text-gray-300"
              htmlFor="password"
            >
              Contraseña
            </label>
            <input
              className="mt-2 w-full p-3 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-600 focus:outline-none"
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Ingresa tu contraseña"
            />
          </div>

          {/* Botón de inicio de sesión */}
          <div className="flex justify-center">
            <button
              className="bg-gradient-to-r from-purple-600 via-purple-400 to-blue-500 text-white px-6 py-3 font-bold rounded-md hover:opacity-80 transition-opacity duration-300"
              type="submit"
            >
              Iniciar Sesión
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
