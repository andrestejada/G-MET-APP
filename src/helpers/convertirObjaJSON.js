export const convertirObjaJSON =(objetoJSON={})=>{   
    let nuevoObjeto={}
    for( let propiedad in objetoJSON ){
        nuevoObjeto={
            ...nuevoObjeto,
            [propiedad]: JSON.stringify(objetoJSON[propiedad])
        }
    }
    return nuevoObjeto       
}