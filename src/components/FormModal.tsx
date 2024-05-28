import { useContext } from "react"
import { ReducerProvider } from "../context/ReducerContext"

export const FormModal = () => {

    const { state:{actividadActive} } = useContext(ReducerProvider);
    
    return (
        <form className={"form"}>
            <label className="text-white" htmlFor="categoria">
                {actividadActive.pregunta}
            </label>
            <input type="text" />
        </form>
    )
}
