import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Row,
  Col,  
  CustomInput,
  Alert
} from 'reactstrap'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { generarFechasProgramacion, hoy } from '../../../../../../helpers/dates'
import { validarCamposVacios } from '../../../../../../helpers/validarCamposVacios'
import UseError from '../../../../../../hooks/UseError'
import { programarEquipo } from '../../../../../../actions/equiposAction'
import { validarCodigoProgramcion } from '../../../../../../helpers/validarCodigoProgramacion'

export const InformacionEquipos = () => {
  const dispatch = useDispatch();
  const [mensaje, setMensaje] = useState('')
  const [error,setError] = UseError()
  const {consultas} = useSelector(state => state.equipos)
  const {responsables} = useSelector(state => state.responsables)
  const {ubicaciones} = useSelector(state => state.ubicaciones)
  const {frecuencias} = useSelector(state => state.frecuencias)

  const {descripcion,responsable,ubicacion,marca,verificacion,calibracion,codigo} = consultas;

  const resposableValue = responsables.find( r=> r.codigo === responsable)
  const ubicacionValue = ubicaciones.find( u=> u.codigo === ubicacion)
  const verificacionValue = frecuencias.find( f=> f.dias == verificacion)
  const calibracionValue = frecuencias.find( f=> f.dias == calibracion)
  
  const initialState={
    fechaCalibracion:'',
    fechaVerificacion:'',
    servicio:[]
  };
  
  const [values, setValues] = useState(initialState);
  const {fechaCalibracion,fechaVerificacion,servicio}= values;
  const handleOnchange =e=>{

    if(e.target.name === 'servicio' && e.target.checked){
      setValues({
        ...values,
        servicio:[...servicio,e.target.value]   
      })
      return
    }

    if(e.target.name === 'servicio' && !e.target.checked){
      setValues({
        ...values,
        servicio:servicio.filter( elem=> elem !== e.target.value )
      })
      return
    }
    setValues({
      ...values,
      [e.target.name]:e.target.value,     
    })   

  }

  const handleOnSubmit = async e=>{
    e.preventDefault();
    setError(false)
    //validar campos vaciom
    const hayCamposVacio = validarCamposVacios(values)
    if(hayCamposVacio){
      setError(true)
      setMensaje('Todos los campos son obligatorios')
      return
    }

    //validar el checkbox
    if(servicio.length ===0){
      setError(true)
      setMensaje('Debe elegir un tipo de servicio')
      return
    }

    //validar que el equipo no este programdo
    const codigoProgramacionExiste = await dispatch(validarCodigoProgramcion(codigo,'equipos'));
    if(codigoProgramacionExiste){
      setError(true)
      setMensaje('El equipos ya fue programado no es posible reprogramarlo')
      return
    }

    //generar fechas para todo el año
    const calibracionProgramada = generarFechasProgramacion(fechaCalibracion,calibracionValue.dias)
    const verificacionProgramada = generarFechasProgramacion(fechaVerificacion,verificacionValue.dias)


    //guarda la programacion
    dispatch(programarEquipo({codigo,calibracionProgramada,verificacionProgramada,servicio}))
  }

  if(!consultas) return null

  return (
    <>
      <Form
        onSubmit={handleOnSubmit}
        className='form-container'
      >
        <h2 className='text-center mt-3'>Informacion basica del equipo</h2>
        <Row>
          <Col md={4}>
            <FormGroup>
              <Label>Descripcion</Label>
              <Input 
                disabled 
                type='text' 
                value={descripcion} />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label>Marca</Label>
              <Input 
                disabled 
                type='text' 
                value={marca} />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label>Responsable</Label>
              <Input 
                disabled 
                type='text' 
                value={`${resposableValue.nombre} ${resposableValue.apellido}`} />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label>Ubicacion</Label>
              <Input 
                disabled 
                type='text' 
                value={ubicacionValue.nombre}                 
              />
            </FormGroup>
          </Col>
        </Row>
        
        <Row>
          <Col md={6}>
            <h4>Verificacion</h4>
            <FormGroup>
              <Label>Frecuencia</Label>
              <Input 
                type='text' 
                value={`${verificacionValue.nombre} (${verificacionValue.dias} Dias)`}
                disabled />
            </FormGroup>
            <FormGroup>
              <Label>Fecha de Verificacion</Label>
              <Input 
                type='date'
                min={hoy}
                name='fechaVerificacion' 
                value={fechaVerificacion}
                onChange={handleOnchange}          
              />
            </FormGroup>
            <FormGroup >
            <Label for='servicio' >Tipo de Servicio</Label>                
              <CustomInput
                type='checkbox'               
                label='Externo'
                id='externo'
                name='servicio'
                value='externo'
                onChange={handleOnchange}
              />
              <CustomInput
                type='checkbox'               
                label='Interno'
                id='interno'
                name='servicio'
                value='interno'
                onChange={handleOnchange}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <h4>Calibracion</h4>
            <FormGroup>
              <Label>Frecuencia</Label>
              <Input 
                type='text' 
                value={`${calibracionValue.nombre} (${calibracionValue.dias} Dias)`} 
                disabled />
            </FormGroup>
            <FormGroup>
              <Label>Fecha de Calibracion</Label>
              <Input 
                type='date'
                min={hoy}
                name='fechaCalibracion'
                value={fechaCalibracion}
                onChange={handleOnchange} 
              />
            </FormGroup>
          </Col>
          <Col md={4}>
          <Button 
            block 
            color='primary' 
            type='submit' >
            Ingresar
          </Button>
        </Col>
        </Row>
              {
                error 
                  ? <Alert color='danger' className='mt-3 text-center ' >{mensaje}</Alert>
                  : null
              }
      </Form>
    </>
  )
}
