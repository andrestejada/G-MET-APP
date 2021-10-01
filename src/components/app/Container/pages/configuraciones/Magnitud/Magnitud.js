import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Form ,Input ,Row,Col,Button ,FormGroup, Label, Alert } from 'reactstrap'
import { ingresarNuevaMagnitud, validarMagnitudExiste } from '../../../../../../actions/magnitudAction'
import UseError from '../../../../../../hooks/UseError'
import { UseForm } from '../../../../../../hooks/UseForm'

const Magnitud = () => {
    const dispatch = useDispatch();
    const initialState={
        nombre:'',       
    };

    const [values,handleOnchange,reset] = UseForm(initialState);
    const [mensaje, setMensaje] = useState('')
    const {
        nombre,        
    } = values;
    const [error,setError] = UseError()
    const handleOnsubmit=async(e)=>{
        e.preventDefault();
        //validar campos
        //Convertir en minuscula
        const nombreMin = nombre.toLowerCase()
        
        //validar si la magnitud existe
        const maginitudExiste =await dispatch( validarMagnitudExiste(nombreMin) );
        if(maginitudExiste){
            setError(true);
            setMensaje(`La magnitud ${nombre} ya existe, intenta con otra`);
            return
        }
        //guardar responsable
         dispatch( ingresarNuevaMagnitud({nombreMin}) )
         reset(initialState)
    }
    return (
        <>
            <h2 className='text-center mt-3' >Magnitudes</h2>
        <div className='form-container' >
            <Form
                onSubmit={handleOnsubmit}
            >
                <Row>
                    <Col md={5} >
                        <FormGroup>
                            <Label>Nombre de la Magnitud</Label>
                            <Input
                                type='text'
                                onChange={handleOnchange}
                                name='nombre'
                                value={nombre}
                            />
                        </FormGroup>
                    </Col>
                    
                </Row>
                <Col md={4}>
                        <Button
                            type='submit'
                            color='primary'
                            block
                        >Ingresar</Button>
                </Col>
            
            {
                error && <Alert className='mt-2' color='danger' >{mensaje}</Alert>
            }
            </Form>

        </div>
        </>
    )
}

export default Magnitud
