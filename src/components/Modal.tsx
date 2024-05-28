import { Dispatch } from "react"
import { ActionTypes } from "../reducer/actividades-reducer"

interface ModalProps {
    dispatch: Dispatch<ActionTypes>
}

export const Modal = ({ dispatch }: ModalProps) => {
    return (
        <section className="modal-background">
            <p
            onClick={() => dispatch({type:"[ACTIVAR/DESACTIVAR Moda]",payload:false})}
             className="modal-close">X</p>
        </section>
    )
}
