import React from 'react';
import { Alert } from 'reactstrap';

export const mostrarAlerta=(mensaje='',tipo='danger')=>{

    return(
        <Alert className='mt-3 text-center' color={tipo} >{mensaje}</Alert>
    ) 
}