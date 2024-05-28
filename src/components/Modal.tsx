import { Dispatch } from "react"
import { ActionTypes } from "../reducer/actividades-reducer"
import { CardModal } from "./CardModal"

interface ModalProps {
    dispatch: Dispatch<ActionTypes>
}

export interface OpcionesInfo {
    [key: string]: string
}

const opcionesInfo: OpcionesInfo[] = [
    {
        titulo: "Ejercicio",
        id: "ejercicio",
    },
    {
        titulo: "Comida",
        id: "comida",
    },
    {
        titulo: "Agua",
        id: "agua",
    },
]

export const Modal = ({ dispatch }: ModalProps) => {

    return (
        <section className={`modal-background`}>
            <p
                onClick={() => dispatch({ type: "[ACTIVAR/DESACTIVAR Modal]", payload: false })}
                className="modal-close">X</p>

            <section>
                <h3 className="text-white select-opcion">Seleccione una opción</h3>
                <section className="modal-container-grid">
                    {opcionesInfo.map((opcion) => <CardModal key={opcion.id} opcion={opcion} />)}
                </section>
            </section>

        </section>
    )
}
