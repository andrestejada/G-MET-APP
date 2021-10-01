import React, { useEffect, useState } from 'react'
import {
  Form,
  Row,
  Col,
  Button,
  Alert,
 
} from 'reactstrap'
import { useSelector, useDispatch } from 'react-redux'
import { updatePattern } from '../../../../../../actions/patronesAction'
import { FormBasicos } from './FormBasicos'
import FormMetrologicos from './FormMetrologicos'
import { convertirObjaJSON } from '../../../../../../helpers/convertirObjaJSON'
import { convertirJSONaObjeto } from '../../../../../../helpers/convertirStringObjeto'
import { validarCamposVacios } from '../../../../../../helpers'
import UseError from '../../../../../../hooks/UseError'

const PatronesForm = ({ codigo }) => {
  const { consultas } = useSelector(state => state.patrones)
  const dispatch = useDispatch()
  const [disabled, setDisabled] = useState(true)
  const [values, setValues] = useState(consultas);
  const {responsable,ubicacion}= values
  const [loading, setLoading] = useState(false)
  const [error, setError] = UseError(5000)
  const [mensaje, setMensaje] = useState('')
  
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
     //si se preciona dos veces el boton editar se convetir en doble Json :TODO hace validacion o desabilitar boton
     const obj = convertirObjaJSON({responsable,ubicacion})
     setValues({...values,...obj}) 
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

    //parsear los objetos
    const valuesJSON = convertirJSONaObjeto({ubicacion,responsable})
    //actualizar los datos
    dispatch(updatePattern(codigo,{...values,...valuesJSON}))
  }

  if (!consultas) return null
  return (
    <>
      <Form className='form-container' onSubmit={handleOnSubmit}>
        <FormBasicos
          disabled={disabled}
          handleInputChange={handleInputChange}
          values={values}
        />

        {
          consultas.metrologicos
            ?<FormMetrologicos
            disabled={disabled}
            handleInputChange={handleInputChange}
            values={values}
           />
           :null
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
    </>
  )
}

export default PatronesForm
