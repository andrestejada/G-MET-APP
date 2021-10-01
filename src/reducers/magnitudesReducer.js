import { AGREGAR_NUEVA_MAGNITUD, OBTENER_MAGNITUDES} from "../types";

const initialState={  
    magnitudes:[],
}

export const magnitudesReducer =(state=initialState,action)=>{
    switch (action.type) {                
    
        case OBTENER_MAGNITUDES:
            return{
                ...state,
                magnitudes:action.payload,
            }
        case AGREGAR_NUEVA_MAGNITUD:
            return{
                ...state,
                magnitudes:[...state.magnitudes ,action.payload]
            }         
        default:
            return state;
    }
}