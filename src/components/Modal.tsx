import { Dispatch } from "react"
import { ActionTypes } from "../reducer/actividades-reducer"
import { CardModal } from "./CardModal"
import { FaAppleAlt } from "react-icons/fa";
import { CgGym } from "react-icons/cg";
import { FaBottleWater } from "react-icons/fa6";

interface ModalProps {
    dispatch: Dispatch<ActionTypes>
}
const CardModalInfo = [
    {
        categoria: "Comida",
        icono: <FaAppleAlt color="#fff"/>
    },
    {
        categoria: "Agua",
        icono: <FaBottleWater color="#fff"/>
    },
    {
        categoria: "Ejercicio",
        icono: <CgGym color="#fff"/>
    },
]
export const Modal = ({ dispatch }: ModalProps) => {
    return (
        <section className="modal-background">
            <p
                onClick={() => dispatch({ type: "[ACTIVAR/DESACTIVAR Moda]", payload: false })}
                className="modal-close">X</p>

            {
                CardModalInfo.map((info) => <CardModal info={info}/>)
            }
        </section>
    )
}
