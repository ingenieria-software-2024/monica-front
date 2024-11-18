import axios from "axios";

// URL base de la API
const BASE_URL = "http://localhost:3000/api";

/**
 * Obtiene la lista de productos.
 *
 * @param {string} token - El token de autenticación JWT.
 * @param {string} [category] - (Opcional) Filtrar productos por categoría.
 * @returns {Promise<any[]>} - Lista de productos.
 */
export const fetchProducts = async (token: string, category?: string): Promise<any[]> => {
  try {
    const response = await axios.get(`${BASE_URL}/products`, {
      headers: { Authorization: `Bearer ${token}` },
      params: category ? { category } : {}, // Agrega la categoría si existe
    });
    return response.data;
  } catch (error: any) {
    console.error(
      `Error al obtener los productos: ${
        error?.response?.data ? JSON.stringify(error.response.data) : error
      }`
    );
    throw error;
  }
};

/**
 * Crea un nuevo producto.
 *
 * @param {object} product - Datos del producto.
 * @param {string} product.name - Nombre del producto.
 * @param {number} product.price - Precio del producto.
 * @param {string} product.category - Categoría del producto.
 * @param {string} token - El token de autenticación JWT.
 * @returns {Promise<any>} - El producto creado.
 */
export const createProduct = async (
  product: { name: string; price: number; category: string },
  token: string
): Promise<any> => {
  try {
    const response = await axios.post(`${BASE_URL}/products`, product, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error: any) {
    console.error(
      `Error al crear el producto: ${
        error?.response?.data ? JSON.stringify(error.response.data) : error
      }`
    );
    throw error;
  }
};

/**
 * Actualiza un producto existente.
 *
 * @param {number} id - ID del producto.
 * @param {object} product - Datos actualizados del producto.
 * @param {string} product.name - Nuevo nombre del producto.
 * @param {number} product.price - Nuevo precio del producto.
 * @param {string} product.category - Nueva categoría del producto.
 * @param {string} token - El token de autenticación JWT.
 * @returns {Promise<any>} - El producto actualizado.
 */
export const updateProduct = async (
  id: number,
  product: { name: string; price: number; category: string },
  token: string
): Promise<any> => {
  try {
    const response = await axios.put(`${BASE_URL}/products/${id}`, product, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error: any) {
    console.error(
      `Error al actualizar el producto: ${
        error?.response?.data ? JSON.stringify(error.response.data) : error
      }`
    );
    throw error;
  }
};

/**
 * Elimina un producto existente.
 *
 * @param {number} id - ID del producto.
 * @param {string} token - El token de autenticación JWT.
 * @returns {Promise<void>}
 */
export const deleteProduct = async (id: number, token: string): Promise<void> => {
  try {
    await axios.delete(`${BASE_URL}/products/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  } catch (error: any) {
    console.error(
      `Error al eliminar el producto: ${
        error?.response?.data ? JSON.stringify(error.response.data) : error
      }`
    );
    throw error;
  }
};
