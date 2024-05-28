import { useReducer } from "react"
import { Ejercicio } from "./components/Ejercicio"
import { RegistroDiario } from "./components/RegistroDiario"
import { ActividadesReducer, initialState } from "./reducer/actividades-reducer"
import { Modal } from "./components/Modal"

export const App = () => {

    const [state, dispatch] = useReducer(ActividadesReducer, initialState)
    return (
        <>
            <header>
                <h1 className="text-white heading-h1">Hola! <span>Empecemos con tu registro.</span></h1>
            </header>

            <RegistroDiario />
            {state?.ejercicio.length ? <Ejercicio /> : <p className="text-white">No hay nada</p>}

            <button
                onClick={() => dispatch({ type: "[ACTIVAR/DESACTIVAR Moda]", payload: true })}
                className="btn-agregar">+</button>

            {state?.isModal && <Modal dispatch={dispatch}/>}

        </>
    )
}
