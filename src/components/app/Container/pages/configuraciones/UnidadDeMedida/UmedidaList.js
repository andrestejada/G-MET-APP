import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

export const UmedidaList = ({cambiarMagnitud}) => {
    const {uMedidas} = useSelector(state => state.configuraciones);

    const uMedidasFiltradas = uMedidas.filter( m=>
        m.magnitud === cambiarMagnitud
    )
    console.log(uMedidas)
    console.log(uMedidasFiltradas)
    if(uMedidasFiltradas.length === 0) 
        return <option disabled >Primero seleccionar una magnitud valida</option>
    return (
        <>
          {
                uMedidasFiltradas.map(m=>
                    <option 
                        key={m.abreviatura} 
                        value={m.abreviatura} 
                        >{`${m.nombre} (${m.abreviatura})`}</option>
                )
            }   
        </>
    )
}
