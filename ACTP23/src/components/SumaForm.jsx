/**
 * ---------------------------------------------------------
 * IMPORTACIONES
 * ---------------------------------------------------------
 * useState → Hook de React para manejar estado interno
 * sumar → función que llama al backend (Spring Boot)
 * ---------------------------------------------------------
 */
import { useState } from "react";
import { sumar } from "../services/sumaService";


/**
 * ---------------------------------------------------------
 * COMPONENTE: SumaForm
 * ---------------------------------------------------------
 * Componente funcional que:
 * 1. Captura dos números desde inputs
 * 2. Envía los datos al backend
 * 3. Muestra el resultado de la suma
 * ---------------------------------------------------------
 */
function SumaForm() {

    /**
     * ---------------------------------------------------------
     * BLOQUE 1: Estados del componente
     * ---------------------------------------------------------
     * numero1 → almacena valor del primer input
     * numero2 → almacena valor del segundo input
     * resultado → guarda la respuesta del backend
     *
     * useState permite que React re-renderice cuando
     * el estado cambia.
     * ---------------------------------------------------------
     */
    const [numero1, setNumero1] = useState("");
    const [numero2, setNumero2] = useState("");
    const [resultado, setResultado] = useState(null);


    /**
     * ---------------------------------------------------------
     * BLOQUE 2: Manejo del envío del formulario
     * ---------------------------------------------------------
     * - e.preventDefault() evita que la página se recargue
     * - Se llama al servicio "sumar"
     * - parseFloat convierte texto → número
     * - Se actualiza el estado resultado
     * - Manejo básico de errores
     * ---------------------------------------------------------
     */
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const data = await sumar(
                parseFloat(numero1),
                parseFloat(numero2)
            );

            // Guardamos el resultado que viene del backend
            setResultado(data.resultado);

        } catch (error) {
            console.error(error);
            alert("Error al calcular");
        }
    };


    /**
     * ---------------------------------------------------------
     * BLOQUE 3: Renderizado del componente (JSX)
     * ---------------------------------------------------------
     * - Formulario controlado (inputs dependen del estado)
     * - onChange actualiza el estado en tiempo real
     * - onSubmit ejecuta handleSubmit
     * - Renderizado condicional del resultado
     * ---------------------------------------------------------
     */
    return (
        <div>
            <h2>Sumar dos números</h2>

            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type="text"
                        placeholder="Número 1"
                        value={numero1}
                        onChange={(e) => setNumero1(e.target.value)}
                    />
                </div>

                <div>
                    <input
                        type="text"
                        placeholder="Número 2"
                        value={numero2}
                        onChange={(e) => setNumero2(e.target.value)}
                    />
                </div>

                <button type="submit">Sumar</button>
            </form>

            {/**
             * Renderizado condicional:
             * Solo muestra el resultado si no es null.
             */}
            {resultado !== null && (
                <h3>Resultado: {resultado}</h3>
            )}
        </div>
    );
}

export default SumaForm;