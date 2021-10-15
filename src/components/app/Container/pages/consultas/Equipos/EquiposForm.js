import React, { useEffect, useState } from 'react'
import {
  Form,
  Row,
  Col,
  Button,
  Alert,
} from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import { updateEquipment } from '../../../../../../actions/equiposAction';
import FormMetrologicos from './FormMetrologicos';
import FormBasicos from './FormBasicos';
import UseError from '../../../../../../hooks/UseError';
import { validarCamposVacios } from '../../../../../../helpers';

const EquiposForm = ({codigo}) => {
    const { consultas } = useSelector(state => state.equipos)
    const dispatch = useDispatch()
    const [disabled, setDisabled] = useState(true)
    const [values, setValues] = useState(consultas)  

    const [loading, setLoading] = useState(false)
    const [error, setError] = UseError(5000)
    const [mensaje, setMensaje] = useState('')
    useEffect(() => {
      setValues(consultas)
      setDisabled(true)
    }, [consultas])
  
    const handleInputChange = e => {

      if(e.target.name === 'magnitud'){
        setValues({
          ...values,
          [e.target.name]: e.target.value,
          unidadDeMedida:''
        });
        return
      }

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
      //validar si los campos estan vacios
      const validar = validarCamposVacios(values)
      if (validar) {
        setError(true)
        setLoading(false)
        setMensaje('Todos los campos son obligatorios')
        return
      }      
     
      //actualizar los datos
      dispatch(updateEquipment(codigo,values))
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
        
        {
          error ? <Alert color='danger' className='text-center mt-3' >{mensaje}</Alert> : null
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
