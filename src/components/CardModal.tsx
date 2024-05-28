import { useContext } from "react";
import { CiApple } from "react-icons/ci";
import { CgGym } from "react-icons/cg";
import { FaBottleWater } from "react-icons/fa6";
import { ReducerProvider } from "../context/ReducerContext";
import { OpcionesInfo } from "../data";

const getIconByTitle = (titulo: string) => {
  switch (titulo) {
    case "Comida":
      return CiApple
    case "Ejercicio":
      return CgGym
    case "Agua":
      return FaBottleWater
    default:
      return CiApple
  }
}

interface CardModalProps {
  opcion: OpcionesInfo
}

export const CardModal = ({ opcion }: CardModalProps) => {
  const IconComponent = getIconByTitle(opcion.titulo);

  const { state, dispatch } = useContext(ReducerProvider)

  return (
    <section onClick={() => dispatch({ type: "[ACTIVAR/DESACTIVAR opcion]", payload: opcion })} className={`card-modal-container ${opcion.id === state.actividadActive.id ? "opcion-active" : ""}`}>
      <h2 className="text-white card-modal-titulo">{opcion.titulo}</h2>
      <IconComponent size={"1.5rem"} color="#fff" />
    </section>
  )
}
