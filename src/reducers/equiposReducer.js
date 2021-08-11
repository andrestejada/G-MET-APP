import { CREATE_NEW_EQUIPMENT } from "../types";

const initialState={
    
}

export const authReducer =(state=initialState,action)=>{
    switch (action.type) {
        case CREATE_NEW_EQUIPMENT:
            return{
                ...state 
            }

    
        default:
            return;
    }
}
