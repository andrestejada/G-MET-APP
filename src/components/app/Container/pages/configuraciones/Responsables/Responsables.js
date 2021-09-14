import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Form ,Input ,Row,Col,Button ,FormGroup, Label, Alert } from 'reactstrap'
import { ingresarNuevoResponsable, validarResponsableExiste } from '../../../../../../actions/ResponsablesAction'
import UseError from '../../../../../../hooks/UseError'
import { UseForm } from '../../../../../../hooks/UseForm'

const Responsables = () => {
    const dispatch = useDispatch();
    const initialState={
        nombre:'',
        apellido:'',
        codigo:'',
        cargo:''
    };

    const [values,handleOnchange,reset] = UseForm(initialState);
    const [mensaje, setMensaje] = useState('')
    const {
        nombre,
        apellido,
        codigo,
        cargo,
    } = values;
    const [error,setError] = UseError()
    const handleOnsubmit=async(e)=>{
        e.preventDefault();
        //validar campos
        const responsableExiste = await dispatch( validarResponsableExiste(codigo) );
        if(responsableExiste){
            setError(true);
            setMensaje(`El codigo ${codigo} del responsable ya existe, intenta con otro`)
            return
        }
        //guardar responsable
         dispatch( ingresarNuevoResponsable(values));
         reset(initialState)
    }
    return (
        <>
            <h2 className='text-center mt-3' >Responsables</h2>
        <div className='form-container' >
            <Form
                onSubmit={handleOnsubmit}
            >
                <Row>
                    <Col md={3} >
                        <FormGroup>
                            <Label>Nombre</Label>
                            <Input
                                type='text'
                                onChange={handleOnchange}
                                name='nombre'
                                value={nombre}
                            />
                        </FormGroup>
                    </Col>
                    <Col md={3} >
                        <FormGroup>
                            <Label>Apellido</Label>
                            <Input
                                type='text'
                                onChange={handleOnchange}
                                name='apellido'
                                value={apellido}
                            />
                        </FormGroup>
                    </Col>     
                    <Col md={3} >
                        <FormGroup>
                            <Label>Cargo</Label>
                            <Input
                                type='text'
                                onChange={handleOnchange}
                                name='cargo'
                                value={cargo}
                            />
                        </FormGroup>
                    </Col>
                    <Col md={3} >
                        <FormGroup>
                            <Label>Codigo</Label>
                            <Input
                                type='text'
                                onChange={handleOnchange}
                                name='codigo'
                                value={codigo}
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

export default Responsables
