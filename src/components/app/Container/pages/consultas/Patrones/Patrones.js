import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Form ,Row ,Col, Input, Label, FormGroup, Button ,Alert} from 'reactstrap'
import { checkDataPattern } from '../../../../../../actions/patronesAction'
import { UseForm } from '../../../../../../hooks/UseForm'
import UseError from '../../../../../../hooks/UseError'
import PatronesForm from './PatronesForm'
import SpinnerCustom from '../../../../../Spinner/SpinnerCustom'


const Patrones = () => {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  const [mensaje, setMensaje] = useState('')
  const [error, setError] = UseError(5000)
  const initialState={codigo:'123'};
  const [formValues,handleOnChange]=UseForm(initialState);
  const {codigo}= formValues;

    const handleOnsubmit =async(e)=>{
        setLoading(true);
        e.preventDefault();
        //validar que patron exista
        const patronExiste = await dispatch(checkDataPattern(codigo));
        if(!patronExiste){
          setMensaje(`El patron con el codigo ${codigo} no existe intenta con otro codigo o crea un patron con ese codigo`);
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
                ? <Alert color='danger' className='mt-5 text-center' >{mensaje}</Alert>
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
