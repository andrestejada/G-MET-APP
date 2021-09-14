import React from 'react'
import { useSelector } from 'react-redux'

export const UbicacionesList = () => {
    const {ubicaciones} = useSelector(state => state.configuraciones)

    return (
        <>
          {
                ubicaciones.map(r=>
                    <option key={r.codigo} value={r.codigo} >{`${r.nombre}`}</option>
                )
            }   
        </>
    )
}
