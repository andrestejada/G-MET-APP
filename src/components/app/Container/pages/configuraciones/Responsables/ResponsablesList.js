import React from 'react'
import { useSelector } from 'react-redux'


export const ResponsablesList = () => {
    const {responsables} = useSelector(state => state.responsables)
    const {consultas} = useSelector(state => state.equipos);
    console.log(consultas)
    return (
        <>
            {
                responsables.map(r=>
                    <option 
                        key={r.codigo} 
                        value={r.codigo}
                        selected={ consultas.responsable === r.codigo ? true : null } 
                        >{`${r.nombre} ${r.apellido} `}</option>
                )
            }
        </>
    )
}
