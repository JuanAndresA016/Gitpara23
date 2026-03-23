/**
 * ---------------------------------------------------------
 * FUNCIÓN: sumar
 * ---------------------------------------------------------
 * Envía dos números al backend (Spring Boot) mediante
 * una petición HTTP POST y retorna el resultado en JSON.
 *
 * @param {number} numero1 - Primer número a sumar
 * @param {number} numero2 - Segundo número a sumar
 * @returns {Promise<Object>} Objeto JSON con el resultado
 * ---------------------------------------------------------
 */
export async function sumar(numero1, numero2) {

    /**
     * ---------------------------------------------------------
     * BLOQUE 1: Petición HTTP al backend
     * ---------------------------------------------------------
     * Se utiliza fetch para enviar una solicitud POST
     * al endpoint del backend.
     *
     * - method: "POST" → porque estamos enviando datos
     * - headers: indica que el contenido es JSON
     * - body: se convierte el objeto JS a JSON string
     * ---------------------------------------------------------
     */
    const response = await fetch("http://localhost:8080/api/suma", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            numero1: numero1,
            numero2: numero2
        })
    });


    /**
     * ---------------------------------------------------------
     * BLOQUE 2: Validación de respuesta HTTP
     * ---------------------------------------------------------
     * response.ok es true si el status HTTP está
     * entre 200–299.
     *
     * Si ocurre un error (400, 500, etc.),
     * lanzamos una excepción.
     * ---------------------------------------------------------
     */
    if (!response.ok) {
        throw new Error("Error en la petición");
    }


    /**
     * ---------------------------------------------------------
     * BLOQUE 3: Conversión de respuesta a JSON
     * ---------------------------------------------------------
     * El backend devuelve un JSON como:
     *
     * {
     *   "resultado": 15
     * }
     *
     * Aquí lo convertimos a objeto JavaScript.
     * ---------------------------------------------------------
     */
    return await response.json();
}