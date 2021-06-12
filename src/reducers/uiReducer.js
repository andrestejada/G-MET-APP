import { COLLAPSE_NAVBAR } from "../types";

const initialState={    
    isCollapse:false
}


export const uiReducer =(state=initialState,action)=>{
    switch (action.type) {
        case COLLAPSE_NAVBAR:
            return{
                ...state,
                isCollapse: action.payload
            }
    
        default:
            return state;
    }
}