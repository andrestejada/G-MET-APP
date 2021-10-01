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
import { ingresarNuevaFrecuencia } from '../../../../../../actions/frecuenciasActions'
import { validarCamposVacios } from '../../../../../../helpers'
import UseError from '../../../../../../hooks/UseError'
import { UseForm } from '../../../../../../hooks/UseForm'

const Frecuencia = () => {
  const dispatch = useDispatch()
  const initialState = {
    nombre: '',
    dias: ''
  }

  const [values, handleOnchange, reset] = UseForm(initialState)
  const [mensaje, setMensaje] = useState('')
  const { nombre, dias } = values
  const [error, setError] = UseError()
  const handleOnsubmit = async e => {
    e.preventDefault()
    //validar campos
    const camposVacios =validarCamposVacios(initialState)
    if(camposVacios){
      setMensaje('Todos los campos son obligatorios')
      setError(true);
      return
    }

    //parsear los dias
    const diasInt = parseInt(dias);   
    
    //guardar responsable
    dispatch( ingresarNuevaFrecuencia({nombre,diasInt}))
    reset(initialState)
  }
  return (
    <>
      <h2 className='text-center mt-3'>Crear Frecuencias </h2>
      <div className='form-container'>
        <Form onSubmit={handleOnsubmit}>
          <Row>
            <Col md={4}>
              <FormGroup>
                <Label>Nombre de la frecuencia</Label>
                <Input
                  type='text'
                  onChange={handleOnchange}
                  name='nombre'
                  value={nombre}
                />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label>Dias Equivalentes</Label>
                <Input
                  type='number'
                  onChange={handleOnchange}
                  name='dias'
                  value={dias}
                />
              </FormGroup>
            </Col>
          </Row>
          <Col md={4}>
            <Button type='submit' color='primary' block>
              Ingresar
            </Button>
          </Col>

          {error 
            ?
              <Alert 
                className='mt-2 text-center' 
                color='danger'>
                {mensaje}
              </Alert>
            : null
          }
        </Form>
      </div>
    </>
  )
}

export default Frecuencia
