export const convertirJSONaObjeto =(objetoJSON={})=>{   
        let nuevoObjeto={}
        for( let propiedad in objetoJSON ){
            nuevoObjeto={
                ...nuevoObjeto,
                [propiedad]: JSON.parse(objetoJSON[propiedad])
            }
        }
        return nuevoObjeto       
}