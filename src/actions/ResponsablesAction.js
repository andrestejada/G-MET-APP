import Swal from 'sweetalert2';
import {db} from '../firebase/firebase-config'
import {  AGREGAR_NUEVO_RESPONSABLE,  OBTNER_RESPONSABLES } from '../types';

export const ingresarNuevoResponsable =(responsable={})=>{
    const {codigo ,nombre,apellido} = responsable
    return async(dispatch,getState)=>{
        try {
            const {user} = getState().auth;
            await db.doc(`${user.empresa}/configuraciones/responsables/${codigo}`).set(responsable);
            Swal.fire({
                title:'Guardado Correctamente',
                text:`haz guardado el responsable ${nombre} ${apellido} correctamente.`,
                icon:'success'
            });           
            dispatch(agregarNuevoResponsable(responsable)) 
        } catch (error) {
            console.log(error)
        }

    }
}

export const validarResponsableExiste =(codigo)=>{
    return async(dispatch,getState)=>{
        try {          
            const {user} = getState().auth;
            const {exists} = await db.doc(`${user.empresa}/configuraciones/responsables/${codigo}`).get();
            return exists;
        } catch (error) {
            console.log(error)
        }

    }
}

export const consultarResponbles=()=>{
    return async (dispatch , getState)=>{
          try {
            const {user} = getState().auth;
            const resp = await db.collection(`${user.empresa}/configuraciones/responsables`).get()
            let responsables=[]
            resp.forEach(doc=>{
                responsables.push( doc.data());
            });
            dispatch( getResponsables(responsables))
                        
        } catch (error) {
            console.log(error)
        }

    }
}

const getResponsables=(data={})=>({
    type:OBTNER_RESPONSABLES,
    payload:data
})

const agregarNuevoResponsable=(data={})=>({
    type:AGREGAR_NUEVO_RESPONSABLE,
    payload:data
});