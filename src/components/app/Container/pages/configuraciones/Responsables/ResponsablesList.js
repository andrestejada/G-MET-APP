import React from 'react'
import { useSelector } from 'react-redux'


export const ResponsablesList = ({responsable}) => {
    const {responsables} = useSelector(state => state.responsables)
    return (
        <>
            {
                responsables.map(r=>
                    <option 
                        key={r.codigo} 
                        value={r.codigo}                        
                        selected={r.codigo === responsable ? true : null}                                                
                        >{`${r.nombre} ${r.apellido} `}</option>
                )
            }
        </>
    )
}
