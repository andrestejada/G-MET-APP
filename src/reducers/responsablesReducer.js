import {OBTNER_RESPONSABLES,AGREGAR_NUEVO_RESPONSABLE} from "../types";

const initialState={
    responsables:[],   
}

export const responsablesReducer =(state=initialState,action)=>{
    switch (action.type) {
        case OBTNER_RESPONSABLES:
            return{
                ...state,
                responsables:action.payload 
            };
        case AGREGAR_NUEVO_RESPONSABLE:
            return{
                ...state,
                responsables: [...state.responsables ,action.payload]
            };       
     
    
        default:
            return state;
    }
}