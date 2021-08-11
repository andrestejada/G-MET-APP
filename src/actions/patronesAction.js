import Swal from "sweetalert2";
import { db } from "../firebase/firebase-config";
import { CHECK_PATTERN,CLEAN_CHECKING } from "../types";
export const createNewPattern =(pattern)=>{

    const {codigo} =pattern
    return async (dispatch,getState)=>{

        const {user} = getState().auth;
       
        await db.doc(`${user.empresa}/patrones/informacion/${codigo}`).set(pattern)
        Swal.fire({
            title: `El patron ${codigo} se ha guarado correctamente`,
            icon:'success',            
        })
    }
}


export const addMetrologicInfomation=(data)=>{
    const {codigo} = data
    return  async(dispatch,getState)=>{
        const {user} = getState().auth;
        await db.doc(`${user.empresa}/patrones/informacion/${codigo}`).update(data);
        Swal.fire({
            title: `Los datos metrologicos del patron ${codigo} se han guardado correctamente `,
            icon:'success',            
        })
    }
}


export const checkDataPattern=(codigo)=>{
    return async(dispatch,getState)=>{
       try {
        const {user} = getState().auth;
        const data = (await db.doc(`${user.empresa}/patrones/informacion/${codigo}`).get()).data();
        if(data){
            return dispatch( checkPatter(data) ) 
        }else{
            return false
        }        
        
       } catch (error) {
           console.log(error)
       }
    }
}

const checkPatter=(data)=>({
    type:CHECK_PATTERN,
    payload:data
})

export const updatePattern =(codigo,data)=>{
    return async(dispatch,getState)=>{
        try {
         const {user} = getState().auth;
         await db.doc(`${user.empresa}/patrones/informacion/${codigo}`).update(data);
         Swal.fire({
            title: `Los datos del patron ${codigo} se han actualizado correctamente `,
            icon:'success',            
         })
        
        await dispatch( cleanCheking() )
        } catch (error) {
            console.log(error)
        }
     }
}

const cleanCheking=()=>({
    type:CLEAN_CHECKING
})