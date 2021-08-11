import Swal from "sweetalert2";
import { db } from "../firebase/firebase-config";


export const createNewEquipment =(equipment)=>{

    const {codigo} =equipment
    return async (dispatch,getState)=>{

        const {user} = getState().auth;
       
        await db.collection(`${user.empresa}/equipos/${codigo}`).add(equipment)
        Swal.fire({
            title: `El equipo ${codigo} se ha guarado correctamente`,
            icon:'success',            
        })
    }
}

