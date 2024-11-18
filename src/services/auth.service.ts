import axios from "axios";
import { BASE_URL } from "../common";

/**
 * Inicia sesión con el sistema y obtiene el token de autenticación.
 *
 * @param {string} username - El nombre de usuario.
 * @param {string} password - La contraseña.
 * @returns {Promise<string>} - El token de autenticación JWT.
 */
export async function login(username: string, password: string): Promise<string> {
  try {
    const { data } = await axios<string>({
      method: "POST",
      url: `${BASE_URL}/auth/login`,
      data: {
        username,
        password,
      },
    });

    return data; // Devuelve el token JWT
  } catch (e: any) {
    console.error(
      `Error al iniciar sesión: ${
        e?.response?.data ? JSON.stringify(e.response.data) : e
      }`
    );
    throw e;
  }
}

/**
 * Valida si una sesión de usuario es válida utilizando su token.
 *
 * @param {string} token - El token de sesión.
 * @returns {Promise<{ isValid: boolean, role: string }>} - Objeto que indica si la sesión es válida y el rol del usuario.
 */
export async function validateUserSession(
  token: string
): Promise<{ isValid: boolean; role: string }> {
  try {
    const { data } = await axios<{ isValid: boolean; role: string }>({
      method: "POST",
      url: `${BASE_URL}/auth/validate`,
      data: {
        authToken: token,
      },
    });

    return data; // Devuelve un objeto con `isValid` y `role`
  } catch (e: any) {
    console.error(
      `Error al validar la sesión: ${
        e?.response?.data ? JSON.stringify(e.response.data) : e
      }`
    );
    return { isValid: false, role: "" };
  }
}

/**
 * Verifica si el usuario es administrador basándose en su rol.
 *
 * @param {string} role - El rol del usuario.
 * @returns {boolean} - `true` si el usuario es administrador, de lo contrario `false`.
 */
export function isAdmin(role: string): boolean {
  return role === "administrador";
}
