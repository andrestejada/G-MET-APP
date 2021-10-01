import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Form ,Row ,Col, Input, Label, FormGroup, Button, Alert } from 'reactstrap'
import { UseForm } from '../../../../../../hooks/UseForm'
import UseError from '../../../../../../hooks/UseError'
import SpinnerCustom from '../../../../../Spinner/SpinnerCustom'
import { checkDataEquipment, cleanCheking } from '../../../../../../actions/equiposAction'
import EquiposForm from './EquiposForm'


const Equipos = () => {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  const [error, setError] = UseError(5000)
  const [mensaje, setMensaje] = useState('')
  const initialState={codigo:'123'};
  const [formValues,handleOnChange]=UseForm(initialState);
  const {codigo}= formValues;

    const handleOnsubmit =async(e)=>{
      setLoading(true);
      e.preventDefault();
        dispatch( cleanCheking() )
        //validar codigo existe
        const equipoExiste = await dispatch(checkDataEquipment(codigo));
        if(!equipoExiste){
          setMensaje(`El Equipo con el codigo ${codigo} no existe intenta con otro codigo o crea un equipo con ese codigo`);
          setError(true)
          setLoading(false)
          return
        }
        setLoading(false)      
    }
    return (
      <>
        <h2 className='text-center mt-3'>Consulta de Equipos</h2>
        <Form 
            className='form-container'
            onSubmit={handleOnsubmit}            
        >
          <Row className='align-items-center' >
            <Col md={4}>
              <FormGroup>
                <Label>Codigo</Label>
                <Input
                  type='text'
                  name='codigo'
                  placeholder='Codigo'
                  autoFocus
                  onChange={handleOnChange}
                  value={codigo}                  
                />                
              </FormGroup>
            </Col>
            <Col>
                <Button
                    color='primary'
                >Consultar</Button>
            </Col>
            </Row>
 
            {
              error 
                ? <Alert color='danger' className='mt-5 text-center' >{mensaje}</Alert>
                :null
            }
        </Form>
            {
              loading ? <SpinnerCustom color='success'/> :null
            }
          <EquiposForm
              codigo={codigo}
          />
      </>
    )
}

export default Equipos
