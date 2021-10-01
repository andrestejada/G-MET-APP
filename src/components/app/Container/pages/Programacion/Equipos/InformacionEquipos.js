import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Row,
  Col,  
  CustomInput
} from 'reactstrap'
import React from 'react'
import { useSelector } from 'react-redux'

export const InformacionEquipos = () => {
  const {consultas} = useSelector(state => state.equipos)
  const {responsables} = useSelector(state => state.responsables)

  const {descripcion,responsable,ubicacion,marca,verificacion,calibracion} = consultas;

  const [respValue] = responsables.filter( r=> r.codigo === responsable)
  
  
  if(!consultas) return null
  return (
    <>
      <Form>
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
                value={`${respValue.nombre} ${respValue.apellido}`} />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label>Ubicacion</Label>
              <Input 
                disabled 
                type='text' 
                value={ubicacion} />
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
                value={verificacion}
                disabled />
            </FormGroup>
            <FormGroup>
              <Label>Fecha de Verificacion</Label>
              <Input type='date' />
            </FormGroup>
            <FormGroup >
            <Label for='servicio' >Tipo de Servicio</Label>                
              <CustomInput
                type='checkbox'               
                label='Externo'
                id='externo'
              />
              <CustomInput
                type='checkbox'               
                label='Interno'
                id='interno'
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <h4>Calibracion</h4>
            <FormGroup>
              <Label>Frecuencia</Label>
              <Input 
                type='text' 
                value={calibracion} 
                disabled />
            </FormGroup>
            <FormGroup>
              <Label>Fecha de Calibracion</Label>
              <Input type='date' />
            </FormGroup>
          </Col>
          <Col md={4}>
          <Button block color='primary' type='submit' >
            Ingresar
          </Button>
        </Col>
        </Row>
      </Form>
    </>
  )
}
