import { useContext } from "react"
import { Ejercicio } from "./components/Ejercicio"
import { RegistroDiario } from "./components/RegistroDiario"
import { Modal } from "./components/Modal"
import { ReducerProvider } from "./context/ReducerContext"

export const App = () => {

    const { state, dispatch } = useContext(ReducerProvider)

    return (
        <>
            <header>
                <h1 className="text-white heading-h1">Hola! <span>Empecemos con tu registro.</span></h1>
            </header>

            <RegistroDiario />
            {state?.ejercicio.length ? <Ejercicio /> : <p className="text-white">No hay</p>}

            <button
                onClick={() => dispatch({ type: "[ACTIVAR/DESACTIVAR Modal]", payload: true })}
                className="btn-agregar">+</button>

            {state?.isModal && <Modal dispatch={dispatch} />}

        </>
    )
}
