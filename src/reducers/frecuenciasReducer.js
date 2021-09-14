import { AGREGAR_NUEVA_FRECUENCIA, OBTENER_FRECUENCIAS } from "../types";

const initialState={    
    frecuencias:[]
}


export const frecuenciasReducer =(state=initialState,action)=>{
    switch (action.type) {
        case OBTENER_FRECUENCIAS:
            return{
                ...state,
                frecuencias:action.payload,
            }
        case AGREGAR_NUEVA_FRECUENCIA:
            return{
                ...state,
                frecuencias:[...state.frecuencias ,action.payload]
            }     
        default:
            return state;
    }
}