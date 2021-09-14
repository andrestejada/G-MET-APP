import Swal from "sweetalert2";
import { db } from "../firebase/firebase-config";
import { ADD_NEW_UNIT_MEASURE, GET_UNIT_MEASURE } from "../types";

export const ingresarNuevaUmedida =(uMedida={})=>{
    const {abreviaturaMin:abreviatura ,nombreMin:nombre,magnitud} = uMedida
        
    return async(dispatch,getState)=>{
        try {
            const {user} = getState().auth;
            await db.doc(`${user.empresa}/configuraciones/umedida/${abreviatura}`).set({abreviatura,nombre,magnitud});
            Swal.fire({
                title:'Guardado Correctamente',
                text:`haz guardado la Unidad de Medida ${nombre} (${abreviatura}) correctamente.`,
                icon:'success'
            });
            
            dispatch( agregarNuevoUmedida({abreviatura,nombre,magnitud}) )
        } catch (error) {
            console.log(error)
        }

    }
}

export const validarUmedidaExiste =(uMedida)=>{
    return async(dispatch,getState)=>{
        try {          
            const {user} = getState().auth;
            const {exists} = await db.doc(`${user.empresa}/configuraciones/umedida/${uMedida}`).get();
            return exists
        } catch (error) {
            console.log(error)
        }

    }
};


export const consultarUmedida=()=>{
    return async (dispatch , getState)=>{
          try {
            const {user} = getState().auth;
            const resp = await db.collection(`${user.empresa}/configuraciones/umedida`).get()
            let uMedidas=[]
            resp.forEach(doc=>{
                uMedidas.push( doc.data());
            });
            dispatch( getUmedida(uMedidas))
                        
        } catch (error) {
            console.log(error)
        }

    }
}


const getUmedida=(data={})=>({
    type:GET_UNIT_MEASURE,
    payload:data
})

const agregarNuevoUmedida=(data={})=>({
    type:ADD_NEW_UNIT_MEASURE,
    payload:data
});