import React, { useEffect, useState } from 'react'
import {
  Form,
  Row,
  Col,
  Button,
} from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import { updateEquipment } from '../../../../../../actions/equiposAction';
import FormMetrologicos from './FormMetrologicos';
import FormBasicos from './FormBasicos';

const EquiposForm = ({codigo}) => {
    const { consultas } = useSelector(state => state.equipos)
    const dispatch = useDispatch()
    const [disabled, setDisabled] = useState(true)
    const [values, setValues] = useState(consultas)
    
  
    useEffect(() => {
      setValues(consultas)
      setDisabled(true)
    }, [consultas])
  
    const handleInputChange = e => {
      setValues({
        ...values,
        [e.target.name]: e.target.value
      })
    }
  
    const handleEdit = e => {
      setDisabled(false)
    }
  
    const handleOnSubmit = e => {
      e.preventDefault()
      //validar campos vacios
      //actualizar los datos
      dispatch(updateEquipment(codigo, values))
    }

    if (!consultas) return null;
    return (
        <div>
        <Form className='form-container' onSubmit={handleOnSubmit}>
        
        <FormBasicos
            disabled={disabled}
            handleInputChange={handleInputChange}
            values={values}
        />
        
        {
            consultas.metrologicos 
                ? <FormMetrologicos
                    disabled={disabled}
                    handleInputChange={handleInputChange}
                    values={values}
                />
                : null
        }
        
        
        <Row>
            <Col md={4}>
            <Button block color='primary' onClick={handleEdit}>
                Editar
            </Button>
            </Col>
            <Col md={4}>
            <Button block color='success' type='submit' disabled={disabled}>
                Guardar
            </Button>
            </Col>
        </Row>
      </Form>
        </div>
    )
}

export default EquiposForm
