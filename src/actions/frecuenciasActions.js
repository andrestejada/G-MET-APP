import Swal from "sweetalert2";
import { db } from "../firebase/firebase-config";
import { AGREGAR_NUEVA_FRECUENCIA, OBTENER_FRECUENCIAS } from "../types";

export const ingresarNuevaFrecuencia =(frecuencia={})=>{
    const {nombre,diasInt:dias} = frecuencia;
        
    return async(dispatch,getState)=>{
        try {
            const {user} = getState().auth;
            await db.doc(`${user.empresa}/configuraciones/frecuencias/${dias}`).set({nombre,dias});
            Swal.fire({
                title:'Guardado Correctamente',
                text:`haz guardado la frecuencia ${nombre} (${dias} dias ) correctamente.`,
                icon:'success'
            });
            dispatch(agregarNuevaFrecuencia({nombre,dias}) )
           
        } catch (error) {
            console.log(error)
        }

    }
}

export const validarFrecuenciaExiste =(frecuencia)=>{
    return async(dispatch,getState)=>{
        try {          
            const {user} = getState().auth;
            const {exists} = await db.doc(`${user.empresa}/configuraciones/frecuencias/${frecuencia}`).get();
            return exists
        } catch (error) {
            console.log(error)
        }

    }
};

export const consultarFrecuencias=()=>{
    return async (dispatch , getState)=>{
          try {
            const {user} = getState().auth;
            const resp = await db.collection(`${user.empresa}/configuraciones/frecuencias`).get()
            let frecuencias=[]
            resp.forEach(doc=>{
                frecuencias.push( doc.data());
            });
            dispatch( obtenerFrecuencias(frecuencias))
                        
        } catch (error) {
            console.log(error)
        }

    }
}

const agregarNuevaFrecuencia=(data={})=>({
    type:AGREGAR_NUEVA_FRECUENCIA,
    payload:data
})

const obtenerFrecuencias=(data={})=>({
    type:OBTENER_FRECUENCIAS,
    payload:data
})