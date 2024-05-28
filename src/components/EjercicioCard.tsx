import { FaRunning } from "react-icons/fa";

export const EjercicioCard = () => {
    return (
        <section className="ejercicio-container">
            <div>
                <FaRunning color="#fff" size={"1.7rem"} />
                <h2 className="text-white ejercicio-h2">Salir a correr</h2>
            </div>
            <button className="eliminar-btn">X</button>
        </section>
    )
}
