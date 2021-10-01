import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { patronesReducer } from "./patronesReducer";
import { uiReducer } from "./uiReducer";
import { equiposReducer } from "./equiposReducer";
import { frecuenciasReducer } from "./frecuenciasReducer";
import { responsablesReducer } from "./responsablesReducer";
import { ubicacionesReducer } from "./ubicacionesReducer";
import { umedidaReducer } from "./unidadMedidaReducer";
import { magnitudesReducer } from "./magnitudesReducer";

export const rootReducer = combineReducers({
    auth: authReducer,
    equipos:equiposReducer,
    frecuencias:frecuenciasReducer,
    responsables:responsablesReducer,
    patrones:patronesReducer,
    ubicaciones:ubicacionesReducer,
    uMedidas:umedidaReducer,
    magnitudes:magnitudesReducer,
    ui:uiReducer,
})