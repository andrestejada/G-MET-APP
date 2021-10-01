import { AGREGAR_NUEVA_UNIDAD_MEDIDA,OBTENER_UNIDAD_MEDIDAD} from "../types";

const initialState={   
    uMedidas:[],   
}

export const umedidaReducer =(state=initialState,action)=>{
    switch (action.type) {          
      
        case OBTENER_UNIDAD_MEDIDAD:
            return{
                ...state,
                uMedidas:action.payload 
            };
        case AGREGAR_NUEVA_UNIDAD_MEDIDA:
            return{
                ...state,
                uMedidas: [...state.uMedidas ,action.payload]
            };
      
        default:
            return state;
    }
}