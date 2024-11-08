import { createContext, useContext, useEffect, useState } from "react";
import { UserSession } from "../types/user/user.types";
import { validateUserSession } from "../services/auth.service";

interface UserContextType {
  /** Objeto con los detalles del usuario actualmente logeado. Si no hay sesion, esto es nulo. */
  user: UserSession;

  /** La token de sesion del usuario. */
  token: string;

  /**
   * Establece la token de sesion del usuario.
   *
   * @param {string} token La JWT.
   *
   * @returns {void}
   */
  setToken: (token: string) => void;

  /**
   * Valida la sesion del usuario manualmente.
   *
   * @returns {Promise<boolean>}
   */
  validateSession: () => Promise<boolean>;

  /**
   * Cierra la sesion del usuario.
   *
   * @returns {void}
   */
  logout: () => void;
}

export const UserContext = createContext<UserContextType>(
  {} as unknown as UserContextType
);

export const useSession = () => useContext(UserContext);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UserSession | null>(null);

  const [token, setToken] = useState<string>(() => {
    return localStorage.getItem("token") ?? "";
  });

  const validateSession = async () => {
    if (!token) return false;

    try {
      // Validar la token.
      const isValid = await validateUserSession(token);

      return isValid;
    } catch (e) {
      console.error(e);
      return false;
    }
  };

  /**
   * Obtiene el objeto de usuario desde una token JWT.
   *
   * @param {string} token La JWT cruda.
   *
   * @returns {UserSession | null} El objeto de usuario, o nulo si no es valida.
   */
  function obtainUserFromToken(token: string): UserSession | null {
    const payload = JSON.parse(atob(token.split(".")[1]));

    if (!payload) return null;

    return {
      username: payload?.username,
      email: payload?.email,
    };
  }

  function logout() {
    // Limpiar datos del usuario.
    localStorage.removeItem("token");
    setToken("");
    setUser(null);

    // Redireccionar a la pagina de inicio.
    window.location.href = "/";
  }

  useEffect(() => {
    if (!token || !token?.length) {
      // Fijarse si hay token en el local storage.
      const localToken = localStorage.getItem("token");

      if (localToken) {
        setToken(localToken);
      } else return;
    }

    async function validateLocalStorageToken() {
      const isValid = await validateSession();

      console.log(isValid, token);

      if (!isValid) {
        logout();

        return;
      }

      // Establecer datos de usuario.
      const user = obtainUserFromToken(token);

      if (!user) return;

      setUser(user);

      return;
    }

    validateLocalStorageToken();
  }, [token]);

  const setAndValidateToken = (token: string) => {
    // Cambiar el estado de la token.
    setToken(token);

    // Establecer la token en el local storage.
    localStorage.setItem("token", token);

    // Obtener el usuario de la JWT.
    const user = obtainUserFromToken(token);

    if (!user) return;

    setUser(user);
  };

  return (
    <UserContext.Provider
      value={{
        user: (user as UserSession) ?? {},
        token,
        setToken: setAndValidateToken,
        validateSession,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
