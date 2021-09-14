import { consultarFrecuencias } from "../actions/frecuenciasActions";
import { consultarMagnitudes } from "../actions/magnitudAction";
import { consultarResponbles } from "../actions/ResponsablesAction";
import { consultarUbicaciones } from "../actions/UbicacionesActions";
import { consultarUmedida } from "../actions/uMedidaActions";


export const dispararConsultas =()=>{
    return(dispatch)=>{
        dispatch(consultarResponbles());
        dispatch(consultarUbicaciones());
        dispatch(consultarUmedida());
        dispatch(consultarMagnitudes());
        dispatch(consultarFrecuencias());
    }
}