import { Dispatch, ReactNode, createContext, useReducer } from "react"
import { ActionTypes, ActividadesReducer, InitialStateType, initialState } from "../reducer/actividades-reducer"

interface ReducerProps {
    state: InitialStateType,
    dispatch: Dispatch<ActionTypes>
}

export const ReducerProvider = createContext({} as ReducerProps)

interface ReducerContextProps {
    children: ReactNode
}

export const ReducerContext = ({ children }: ReducerContextProps) => {

    const [state, dispatch] = useReducer(ActividadesReducer, initialState)

    return (
        <ReducerProvider.Provider value={{ state, dispatch }}>
            {children}
        </ReducerProvider.Provider>
    )
}
