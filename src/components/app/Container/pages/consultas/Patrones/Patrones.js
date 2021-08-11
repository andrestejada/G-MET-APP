import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Form ,Row ,Col, Input, Label, FormGroup, Button } from 'reactstrap'
import { checkDataPattern } from '../../../../../../actions/patronesAction'
import { UseForm } from '../../../../../../hooks/UseForm'
import UseError from '../../../../../../hooks/UseError'
import PatronesForm from './PatronesForm'
import { mostrarAlerta } from '../../../../../../helpers/mostrarAlerta'
import SpinnerCustom from '../../../../../Spinner/SpinnerCustom'

let alert
let mensaje

const Patrones = () => {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  const [error, setError] = UseError(5000)
  const initialState={codigo:'123'};
  const [formValues,handleOnChange]=UseForm(initialState);
  const {codigo}= formValues;

    const handleOnsubmit =async(e)=>{
        setLoading(true);
        e.preventDefault();
        const patronExiste = await dispatch(checkDataPattern(codigo));
        if(!patronExiste){
          mensaje=`El patron con el codigo ${codigo} no existe intenta con otro codigo o crea un patron con ese codigo`;
          alert = mostrarAlerta(mensaje)
          setError(true)
          setLoading(false)
          return
        }
        setLoading(false)      
    }
    return (
      <>
        <h2 className='text-center mt-3'>Consulta de Patrones</h2>
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
            <Row>
               
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
          <PatronesForm
              codigo={codigo}
          />
      </>
    )
}

export default Patrones
