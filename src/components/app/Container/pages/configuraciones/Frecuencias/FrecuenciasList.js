import React from 'react'
import { useSelector } from 'react-redux'


export const FrecuenciasList = ({frecuencia}) => {
    const {frecuencias} = useSelector(state => state.frecuencias)
    return (
        <>
            {
                frecuencias.map(f=>
                    <option 
                        style={{textTransform:'capitalize'}}
                        key={f.dias} 
                        value={ f.dias }
                        selected={ f.dias === Number(frecuencia) ? true : null }
                        >{`${f.nombre} (${f.dias} dias)`}</option>
                )
            }
        </>
    )
}
