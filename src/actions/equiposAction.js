import Swal from "sweetalert2";
import { db } from "../firebase/firebase-config";
import { CHECK_EQUIPMENT, CLEAN_CHECKING } from "../types";


export const createNewEquipment =(equipment)=>{

    const {codigo} =equipment
    return async (dispatch,getState)=>{

        const {user} = getState().auth;
       
        await db.doc(`${user.empresa}/equipos/informacion/${codigo}`).set(equipment)
        Swal.fire({
            title: `El equipo ${codigo} se ha guarado correctamente`,
            icon:'success',            
        })
    }
}


export const checkDataEquipment=(codigo)=>{
    return async(dispatch,getState)=>{
       try {
        const {user} = getState().auth;
        const data = (await db.doc(`${user.empresa}/equipos/informacion/${codigo}`).get()).data();
        if(data){
            return dispatch( checkEquipment(data) ) 
        }else{
            return false
        }        
        
       } catch (error) {
           console.log(error)
       }
    }
}

const checkEquipment=(data)=>({
    type:CHECK_EQUIPMENT,
    payload:data
});


export const updateEquipment =(codigo,data={})=>{
    return async(dispatch,getState)=>{
        try {
         const {user} = getState().auth;
         await db.doc(`${user.empresa}/equipos/informacion/${codigo}`).update(data);
         Swal.fire({
            title: `Los datos del equipo ${codigo} se han actualizado correctamente `,
            icon:'success',            
         })
        
        await dispatch( cleanCheking() )
        } catch (error) {
            console.log(error)
        }
     }
}

export const cleanCheking=()=>({
    type:CLEAN_CHECKING
})

export const programarEquipo =(equipment)=>{

    const {codigo,...rest} =equipment
    return async (dispatch,getState)=>{

        const {user} = getState().auth;
        await db.doc(`${user.empresa}/equipos/programacion/${codigo}`).set({
            codigo,
            ...rest            
        })
        Swal.fire({
            title: `El equipo ${codigo} se ha Programado correctamente`,
            icon:'success',            
        })
        dispatch(cleanCheking())
    }
}
