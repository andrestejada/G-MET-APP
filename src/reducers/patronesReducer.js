import { CHECK_PATTERN ,CLEAN_CHECKING} from "../types";

const initialState={
    consultas:false
}

export const patronesReducer =(state=initialState,action)=>{
    switch (action.type) {
        case CHECK_PATTERN:
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