import { db } from "../firebase/firebase-config";


export const validarCodigoProgramcion = (codigo,documento='equipos')=>{
    return async(dispatch,getState)=>{
        try {
            const {user} = getState().auth
            const code = await db.doc(`/${user.empresa}/${documento}/programacion/${codigo}`).get()
            if(code.exists){
                return true
            }else{
                return false
            }
        } catch (error) {
            console.log(error)
        }
       
    }
}