import { Ejercicio } from "./components/Ejercicio"
import { RegistroDiario } from "./components/RegistroDiario"

export const App = () => {
    return (
        <>
            <header>
                <h1 className="text-white heading-h1">Hola! <span>Empecemos con tu registro.</span></h1>
            </header>

            <RegistroDiario />
            <Ejercicio />

            <div className="agregar-btn">
                <button>+</button>
            </div>
        </>
    )
}
