import { COLLAPSE_NAVBAR } from "../types";

export const toggleMenuAction=(toggle)=>({
    type: COLLAPSE_NAVBAR,
    payload:toggle
})