import { ADD_NEW_LOCATION,  ADD_NEW_UNIT_MEASURE, AGREGAR_NUEVA_MAGNITUD, GET_LOCATIONS, GET_UNIT_MEASURE, OBTENER_MAGNITUDES} from "../types";

const initialState={
    responsables:[],
    ubicaciones:[],
    uMedidas:[],
    magnitudes:[],
}

export const configuracionesReducer =(state=initialState,action)=>{
    switch (action.type) {
          
        case GET_LOCATIONS:
            return{
                ...state,
                ubicaciones:action.payload 
            };     
        case ADD_NEW_LOCATION:
            return{
                ...state,
                ubicaciones: [...state.ubicaciones ,action.payload]
            };
        case GET_UNIT_MEASURE:
            return{
                ...state,
                uMedidas:action.payload 
            };
        case ADD_NEW_UNIT_MEASURE:
            return{
                ...state,
                uMedidas: [...state.uMedidas ,action.payload]
            };
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