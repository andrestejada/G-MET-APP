export const validarCamposVacios =(initialState={})=>{
    const objectArray = Object.values(initialState);
    const resp = objectArray.map( key=>{
        if(key===''){
            return false
        }else{
            return true
        }
    })
    return resp.includes(false)
    
}


