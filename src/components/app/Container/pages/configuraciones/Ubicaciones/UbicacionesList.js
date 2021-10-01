import React from 'react'
import { useSelector } from 'react-redux'

export const UbicacionesList = ({ubicacion}) => {
    const {ubicaciones} = useSelector(state => state.ubicaciones)
    return (
        <>
          {
                ubicaciones.map(r=>
                    <option 
                        key={r.codigo} 
                        value={ r.codigo }
                        selected={ r.codigo === ubicacion ? true :null } 
                        >{`${r.nombre}`}</option>
                )
            }   
        </>
    )
}
