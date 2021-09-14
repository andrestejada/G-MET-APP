import React from 'react'
import { useSelector } from 'react-redux'

const MagnitudList = () => {
    const {magnitudes} = useSelector(state => state.configuraciones)

    return (
        <>
            {
                magnitudes.map(m=>
                    <option 
                        key={m.nombre} 
                        value={m.nombre} 
                        style={{textTransform:'capitalize'}} >{`${m.nombre}`}</option>
                )
            }   
        </>
    )
}

export default MagnitudList
