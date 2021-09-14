import { CREATE_NEW_EQUIPMENT ,CHECK_EQUIPMENT ,CLEAN_CHECKING} from "../types";

const initialState={
    consultas:false
}

export const equiposReducer =(state=initialState,action)=>{
    switch (action.type) {
        case CREATE_NEW_EQUIPMENT:
            return{
                ...state 
            }
        case CHECK_EQUIPMENT:
            return{
                ...state,
                consultas:action.payload
            }
        case CLEAN_CHECKING:
            return{
                ...state,
                consultas:false
            }    
        default:
            return state;
    }
}
