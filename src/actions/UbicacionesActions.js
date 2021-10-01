import Swal from "sweetalert2";
import { db } from "../firebase/firebase-config";
import { AGREGAR_NUEVA_UBICACION,OBTENER_UBICACIONES } from "../types";

export const ingresarNuevaUbicacion =(ubicacion={})=>{
    const {codigo ,nombre,} = ubicacion
    return async(dispatch,getState)=>{
        try {
            const {user} = getState().auth;
            await db.doc(`${user.empresa}/configuraciones/ubicaciones/${codigo}`).set(ubicacion);
            Swal.fire({
                title:'Guardado Correctamente',
                text:`haz guardado la ubicacion ${nombre} correctamente.`,
                icon:'success'
            });
            dispatch( agregarNuevaUbicacion(ubicacion) )            
            
        } catch (error) {
            console.log(error)
        }

    }
}


export const validarUbicacioneExiste =(codigo)=>{
    return async(dispatch,getState)=>{
        try {          
            const {user} = getState().auth;
            const {exists} = await db.doc(`${user.empresa}/configuraciones/ubicaciones/${codigo}`).get();
            return exists
        } catch (error) {
            console.log(error)
        }

    }
};

export const consultarUbicaciones=()=>{
    return async (dispatch , getState)=>{
          try {
            const {user} = getState().auth;
            const resp = await db.collection(`${user.empresa}/configuraciones/ubicaciones`).get()
            let ubicaciones=[]
            resp.forEach(doc=>{
                ubicaciones.push( doc.data());
            });
            dispatch( getUbicaciones(ubicaciones))
                        
        } catch (error) {
            console.log(error)
        }

    }
}

const getUbicaciones=(data)=>({
    type:OBTENER_UBICACIONES,
    payload:data
});

const agregarNuevaUbicacion=(data)=>({
    type:AGREGAR_NUEVA_UBICACION,
    payload:data
});

