import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
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
import { ingresarNuevaUmedida, validarUmedidaExiste } from '../../../../../../actions/uMedidaActions';
import UseError from '../../../../../../hooks/UseError';
import { UseForm } from '../../../../../../hooks/UseForm';
import MagnitudList from '../Magnitud/MagnitudList';
export const Umedida = () => {
    const dispatch = useDispatch()
    const initialState = {
      nombre: '',     
      abreviatura:'',
      magnitud:''
    };  
    const [values, handleOnchange, reset] = UseForm(initialState);
   
    const [mensaje, setMensaje] = useState('')
    const { nombre, abreviatura,magnitud} = values
    const [error, setError] = UseError()
    const handleOnsubmit = async e => {
      e.preventDefault()
      
      //validar campos

      //Convertir en minuscula
      const nombreMin = nombre.toLowerCase()
      const abreviaturaMin = abreviatura.toLowerCase()
      
      //validar si la umedida existe
      const umedidaExiste = await dispatch(validarUmedidaExiste(abreviaturaMin));
      if(umedidaExiste){
        setError(true);
        setMensaje('Esa unidad de medida ya existe, intenta con otra')
        return;
      }
      
      //guardar ubicacion
      dispatch( ingresarNuevaUmedida({nombreMin,abreviaturaMin,magnitud}) );
      reset(initialState);
    }
  return (
    <>
      <h2 className='text-center mt-3'>Crea Unidades de Medida</h2>
      <div className='form-container'>
        <p> *Todas la unidades de medida deben ir en minuscula segun NTC1000 </p>
        <Form onSubmit={handleOnsubmit}>
          <Row>
          <Col>
              <FormGroup>
                  <Label>Magnitud</Label>
                  <Input
                    type='select'
                    onChange={handleOnchange}
                    name='magnitud'
                    value={magnitud}
                  >
                    <option selected hidden >Selecciona una Ubicacion</option>
                    <MagnitudList/>
                  </Input>
              </FormGroup>
            </Col>
            <Col md={4} sm={6}>
              <FormGroup>
                <Label>Nombre de la Unidad</Label>
                <Input
                  type='text'
                  onChange={handleOnchange}
                  name='nombre'
                  value={nombre}
                  placeholder='kilogramo'
                />
              </FormGroup>
            </Col>            
            <Col md={4} sm={6}>
              <FormGroup>
                <Label>Abreviatura</Label>
                <Input
                  type='text'
                  onChange={handleOnchange}
                  name='abreviatura'
                  value={abreviatura}
                  placeholder='kg'
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
