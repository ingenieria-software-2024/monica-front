import axios from "axios";
import { BASE_URL } from "../common";

/**
 * Logea al usuario con Monica.
 *
 * @param {string} username El nombre de usuario.
 * @param {string} password La contraseña.
 *
 * @returns {Promise<string>} El token de autenticación.
 */
export async function login(
  username: string,
  password: string
): Promise<string> {
  try {
    // Obtener la token de login.
    const { data } = await axios<string>({
      method: "POST",
      url: `${BASE_URL}/auth/login`,
      data: {
        username,
        password,
      },
    });

    return data;
  } catch (e: any) {
    console.error(
      `Fallo al iniciar sesion: ${e?.response?.data ? JSON.stringify(e.response.data) : e}`
    );
    throw e;
  }
}

/**
 * Valida la sesion de un usuario dada su token.
 *
 * @param {string} token La token de sesion.
 *
 * @returns {Promise<boolean>} Si la sesion es valida.
 */
export async function validateUserSession(token: string): Promise<boolean> {
  try {
    // Validar la token.
    await axios({
      method: "POST",
      url: `${BASE_URL}/auth/validate`,
      data: {
        authToken: token,
      },
    });

    return true;
  } catch (e: any) {
    console.error(
      `Fallo al validar la sesion: ${e?.response?.data ? JSON.stringify(e.response.data) : e}`
    );
    return false;
  }
}
