import { AGREGAR_NUEVA_UBICACION, OBTENER_UBICACIONES} from "../types";

const initialState={   
    ubicaciones:[],  
}

export const ubicacionesReducer =(state=initialState,action)=>{
    switch (action.type) {
          
        case OBTENER_UBICACIONES:
            return{
                ...state,
                ubicaciones:action.payload 
            };     
        case AGREGAR_NUEVA_UBICACION:
            return{
                ...state,
                ubicaciones: [...state.ubicaciones ,action.payload]
            };             
        default:
            return state;
    }
}