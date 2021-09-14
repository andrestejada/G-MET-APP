import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  Form,
  Input,
  Row,
  Col,
  Button,
  FormGroup,
  Label,
  Alert
} from 'reactstrap'

import { ingresarNuevaUbicacion, validarUbicacioneExiste } from '../../../../../../actions/UbicacionesActions'
import UseError from '../../../../../../hooks/UseError'
import { UseForm } from '../../../../../../hooks/UseForm'

const Ubicaciones = () => {
  const dispatch = useDispatch()
  const initialState = {
    nombre: '',
    codigo: ''
  }

  const [values, handleOnchange, reset] = UseForm(initialState)
  const [mensaje, setMensaje] = useState('')
  const { nombre, codigo } = values
  const [error, setError] = UseError()
  const handleOnsubmit = async e => {
    e.preventDefault()
    //validar campos
    const ubicacionExiste = await dispatch( validarUbicacioneExiste(codigo) );
        if(ubicacionExiste){
            setError(true);
            setMensaje(`El codigo ${codigo} del responsable ya existe, intenta con otro`)
            return
        }
    //guardar ubicacion
    
    dispatch( ingresarNuevaUbicacion(values) )
    reset(initialState)
  }
  return (
    <>
      <h2 className='text-center mt-3'>Ubicaciones</h2>
      <div className='form-container'>
        <Form onSubmit={handleOnsubmit}>
          <Row>
            <Col md={4} sm={6} >
              <FormGroup>
                <Label>Nombre de la Ubicacion</Label>
                <Input
                  type='text'
                  onChange={handleOnchange}
                  name='nombre'
                  value={nombre}
                />
              </FormGroup>
            </Col>
           
            
            <Col md={4}  sm={6}>
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
            <Button type='submit' color='primary' block>
              Ingresar
            </Button>
          </Col>

          {error && (
            <Alert className='mt-2' color='danger'>
              {mensaje}
            </Alert>
          )}
        </Form>
      </div>
    </>
  )
}

export default Ubicaciones
