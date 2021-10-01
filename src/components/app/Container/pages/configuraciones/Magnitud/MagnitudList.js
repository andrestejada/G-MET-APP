import React from 'react'
import { useSelector } from 'react-redux'

const MagnitudList = ({magnitud}) => {
    const {magnitudes} = useSelector(state => state.magnitudes);
    return (
        <>
            {
                magnitudes.map(m=>
                    <option 
                        key={m.nombre} 
                        value={ m.nombre }
                        selected={ m.nombre === magnitud ? true :null } 
                        style={{textTransform:'capitalize'}} >{`${m.nombre}`}</option>
                )
            }   
        </>
    )
}

export default MagnitudList
