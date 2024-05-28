

type EjercicioType = {
    descripcion: string,
    km?: number,
    id: string,
}

type InitialStateType = {
    calorias: number,
    agua: number,
    isModal: boolean,
    ejercicio: EjercicioType[]
}

export const initialState = {
    calorias: 0,
    agua: 0,
    isModal: false,
    ejercicio: []
}
export type ActionTypes =
    | { type: "[AGREGAR Actividad]", payload: EjercicioType }
    | { type: "[ACTIVAR/DESACTIVAR Moda]", payload: InitialStateType["isModal"] }

export const ActividadesReducer = (state: InitialStateType = initialState, action: ActionTypes) => {
    switch (action.type) {
        case "[AGREGAR Actividad]":
            return {
                ...state,
                ejercicio: [...state.ejercicio, action.payload]
            }
        case "[ACTIVAR/DESACTIVAR Moda]":
            return {
                ...state,
                isModal:action.payload
            }
    }
}