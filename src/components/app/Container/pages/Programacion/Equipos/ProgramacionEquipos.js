import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Col, Form, FormGroup, Input, Label, Row ,Alert } from 'reactstrap'
import UseError from '../../../../../../hooks/UseError'
import { UseForm } from '../../../../../../hooks/UseForm'
import { InformacionEquipos } from './InformacionEquipos'
import SpinnerCustom from '../../../../../Spinner/SpinnerCustom'
import { checkDataEquipment } from '../../../../../../actions/equiposAction'

const ProgramacionEquipos = () => {
    const dispatch = useDispatch();
    const initialState ={ codigo:'' };
    const [value,handleOnChange,reset]=UseForm(initialState);
    const {codigo}= value
    const [mensaje, setMensaje] = useState('')
    const [error ,setError]=UseError()
    const [loading, setLoading] = useState(false)

    const handleOnsubmit = async(e)=>{
      e.preventDefault();
      setLoading(true)
      //validar campos vacios
      if(codigo.trim()===''){
        setError(true);
        setMensaje(`El codigo es requerido`)
        setLoading(false)
        return
      }
      //validar que el codigo exista
      const equipoExiste = await dispatch(checkDataEquipment(codigo));
      if(!equipoExiste){
        setError(true);
        setMensaje(`El codigo ${codigo} no existe `)
        setLoading(false)
        return
      }

      setError(false)
      setLoading(false)
      reset(initialState)

    }
    return (
        <>
        <h2 className='text-center mt-3'>Programacion de Equipos</h2>
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
               loading ? <SpinnerCustom color="primary" className='text-center d-block'/> :null             
            }
            {
              error ? <Alert color='danger' className='mt3' >{mensaje}</Alert> :null
            }
        </Form>
        <InformacionEquipos />
            
      </>
    )
}

export default ProgramacionEquipos
