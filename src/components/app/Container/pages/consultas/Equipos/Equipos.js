import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Form ,Row ,Col, Input, Label, FormGroup, Button } from 'reactstrap'
import { UseForm } from '../../../../../../hooks/UseForm'
import UseError from '../../../../../../hooks/UseError'
import { mostrarAlerta } from '../../../../../../helpers/mostrarAlerta'
import SpinnerCustom from '../../../../../Spinner/SpinnerCustom'
import { checkDataEquipment, cleanCheking } from '../../../../../../actions/equiposAction'
import EquiposForm from './EquiposForm'

let alert
let mensaje

const Equipos = () => {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  const [error, setError] = UseError(5000)
  const initialState={codigo:'123'};
  const [formValues,handleOnChange]=UseForm(initialState);
  const {codigo}= formValues;

    const handleOnsubmit =async(e)=>{
      setLoading(true);
      e.preventDefault();
        dispatch( cleanCheking() )
        const equipoExiste = await dispatch(checkDataEquipment(codigo));
        //validar codigo existe
        if(!equipoExiste){
          mensaje=`El Equipo con el codigo ${codigo} no existe intenta con otro codigo o crea un equipo con ese codigo`;
          alert = mostrarAlerta(mensaje)
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
                ? alert
                :null
            }
        </Form>
            {
              loading && <SpinnerCustom color='success'/>
            }
          <EquiposForm
              codigo={codigo}
          />
      </>
    )
}

export default Equipos
