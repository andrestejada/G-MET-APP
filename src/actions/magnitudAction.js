import Swal from "sweetalert2";
import { db } from "../firebase/firebase-config";
import { AGREGAR_NUEVA_MAGNITUD, OBTENER_MAGNITUDES } from "../types";

export const ingresarNuevaMagnitud =(magnitud={})=>{
    const {nombreMin:nombre,} = magnitud;
        
    return async(dispatch,getState)=>{
        try {
            const {user} = getState().auth;
            await db.doc(`${user.empresa}/configuraciones/magnitud/${nombre}`).set({nombre});
            Swal.fire({
                title:'Guardado Correctamente',
                text:`haz guardado la Magnitud ${nombre} correctamente.`,
                icon:'success'
            });
            dispatch( agregarNuevaMagnitud({nombre}) )
           
        } catch (error) {
            console.log(error)
        }

    }
}

export const validarMagnitudExiste =(magnitud)=>{
    return async(dispatch,getState)=>{
        try {          
            const {user} = getState().auth;
            const {exists} = await db.doc(`${user.empresa}/configuraciones/magnitud/${magnitud}`).get();
            return exists
        } catch (error) {
            console.log(error)
        }

    }
};

export const consultarMagnitudes=()=>{
    return async (dispatch , getState)=>{
          try {
            const {user} = getState().auth;
            const resp = await db.collection(`${user.empresa}/configuraciones/magnitud`).get()
            
            let magnitudes=[]
            resp.forEach(doc=>{
                magnitudes.push( doc.data());
            });
            dispatch( obtenerMagnitudes(magnitudes))
                        
        } catch (error) {
            console.log(error)
        }

    }
}

const agregarNuevaMagnitud=(data={})=>({
    type:AGREGAR_NUEVA_MAGNITUD,
    payload:data
})

const obtenerMagnitudes=(data={})=>({
    type:OBTENER_MAGNITUDES,
    payload:data
})