import React, { useEffect, useState } from 'react'
import {
  Form,
  Row,
  Col,
  Input,
  Label,
  FormGroup,
  Button,
  Alert
} from 'reactstrap'
import { useSelector, useDispatch } from 'react-redux'
import { updatePattern } from '../../../../../../actions/patronesAction'
import { ResponsablesList } from '../../configuraciones/Responsables/ResponsablesList'
import { FormBasicos } from './FormBasicos'
import FormMetrologicos from './FormMetrologicos'

const PatronesForm = ({ codigo }) => {
  const { consultas } = useSelector(state => state.patrones)
  const dispatch = useDispatch()
  const [disabled, setDisabled] = useState(true)
  const [values, setValues] = useState(consultas)
  const {
    marca,
    modelo,
    serie,
    ubicacion,
    responsable,
    descripcion,   
    inferior,
    superior,
    valorNominal,
    divisiondeEscala,
    resolucion,
    unidadDeMedida,
    verificacion,
    calibracion,
    trazabilidad,
    errorMaxPer,
    magnitud,
    servicio
  } = values

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
    dispatch(updatePattern(codigo, values))
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
       <FormMetrologicos
          disabled={disabled}
          handleInputChange={handleInputChange}
          values={values}
       />
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
