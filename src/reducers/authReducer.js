import { LOGIN_SUCCESS, LOGOUT_SUCCESS ,START_LOADING,LOGIN_FAIL} from "../types";

const initialState={
    isAuth:false,
    loading:false,
    user:{
        uid:null,
        nombre:null,
        apellido:null,
        empresa:null,
        rol:null
    }
}


export const authReducer =(state=initialState,action)=>{
    switch (action.type) {
        case LOGIN_SUCCESS:            
            return{
                ...state,
                isAuth:true,
                user:{
                    uid:action.payload.uid,
                    nombre:action.payload.nombre,
                    apellido:action.payload.apellido,
                    empresa:action.payload.empresa,
                    rol:action.payload.rol,
                },
                loading:false
            }
        case LOGOUT_SUCCESS:
            return initialState
        case  START_LOADING:
            return{
                ...state,
                loading:true
            }
        case LOGIN_FAIL:
            return{
                ...state,
                loading:false
            }
    
        default:
            return state ;
    }
}