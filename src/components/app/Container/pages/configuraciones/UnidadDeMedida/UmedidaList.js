import React from 'react'
import { useSelector } from 'react-redux'

export const UmedidaList = ({ magnitud,umedida}) => {
   
    const {uMedidas} = useSelector(state => state.uMedidas);    
    const uMedidasFiltradas = uMedidas.filter( m=>
        m.magnitud === magnitud
        )
        
    if(uMedidasFiltradas.length === 0) 
        return <option disabled >Primero seleccionar una magnitud valida</option>
    
    return (
        <>
          {
                uMedidasFiltradas.map(m=>
                    <option 
                        key={m.abreviatura} 
                        value={ m.abreviatura }                        
                        selected={ (m.abreviatura === umedida) ? true : null  }
                                     
                        >{`${m.nombre} (${m.abreviatura})`}
                    </option>
                )
            }   
        </>
    )
}
