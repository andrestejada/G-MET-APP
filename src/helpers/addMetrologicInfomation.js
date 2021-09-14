import Swal from "sweetalert2";
import { db } from "../firebase/firebase-config";



export const addMetrologicInfomation=(data,documeto='')=>{
    const {codigo} = data
    return  async(dispatch,getState)=>{
        const {user} = getState().auth;
        await db.doc(`${user.empresa}/${documeto}/informacion/${codigo}`).update(data);
        Swal.fire({
            title: `Los datos metrologicos del ${documeto} ${codigo} se han guardado correctamente `,
            icon:'success',            
        })
    }
}