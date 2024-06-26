

type EjercicioType = {
    descripcion: string,
    km?: number,
    id: string,
}
type ActividadActiveTypes = {
    titulo: string,
    id:string,
    pregunta:string
}

export type InitialStateType = {
    calorias: number,
    agua: number,
    isModal: boolean,
    ejercicio: EjercicioType[],
    actividadActive: ActividadActiveTypes
}

export const initialState = {
    calorias: 0,
    agua: 0,
    isModal: false,
    ejercicio: [],
    actividadActive: {}
}
export type ActionTypes =
    | { type: "[AGREGAR Actividad]", payload: EjercicioType }
    | { type: "[ACTIVAR/DESACTIVAR Modal]", payload: InitialStateType["isModal"] }
    | { type: "[ACTIVAR/DESACTIVAR opcion]", payload: ActividadActiveTypes }

export const ActividadesReducer = (state: InitialStateType = initialState, action: ActionTypes) => {
    switch (action.type) {
        case "[AGREGAR Actividad]":
            return {
                ...state,
                ejercicio: [...state.ejercicio, action.payload]
            }
        case "[ACTIVAR/DESACTIVAR Modal]":
            return {
                ...state,
                isModal: action.payload
            }
        case "[ACTIVAR/DESACTIVAR opcion]":
            return {
                ...state,
                actividadActive: action.payload
            }
    }
}