import { db } from "../firebase/firebase-config"

export const validarMetrologicos =(codigo,documento='')=>{
    return async(dispatch,getState)=>{
        try {
            const {user} = getState().auth
            const resp = await db.doc(`/${user.empresa}/${documento}/informacion/${codigo}`).get()
            if(resp.data().metrologia){
                return true
            }else{
                return false
            }
                       
        } catch (error) {
            console.log(error)
        }
    }
}