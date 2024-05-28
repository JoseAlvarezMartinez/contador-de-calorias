import { Dispatch } from "react"
import { ActionTypes } from "../reducer/actividades-reducer"
import { CardModal } from "./CardModal"
import { opcionesInfo } from "../data"
import { FormModal } from "./FormModal"

interface ModalProps {
    dispatch: Dispatch<ActionTypes>,
}

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


            <FormModal />
        </section>
    )
}
