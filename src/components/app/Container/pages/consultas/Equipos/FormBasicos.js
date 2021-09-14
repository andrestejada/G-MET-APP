import React from 'react'
import {    
    Row,
    Col,
    Input,
    Label,
    FormGroup,   
} from 'reactstrap';
import { ResponsablesList } from '../../configuraciones/Responsables/ResponsablesList';

const FormBasicos = ({handleInputChange,disabled,values}) => {
    const {
        marca,
        modelo,
        serie,
        ubicacion,
        responsable,
        descripcion,        
      } = values
    return (
        <>
        <h3 className='text-center' >Datos Basicos</h3>
        <hr/>
        <Row>
          <Col md={4}>
            <FormGroup>
              <Label>Modelo</Label>
              <Input
                onChange={handleInputChange}
                value={modelo}
                type='text'
                name='modelo'
                placeholder='modelo'
                disabled={disabled}
              />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label>Descripcion</Label>
              <Input
                onChange={handleInputChange}
                value={descripcion}
                type='text'
                name='descripcion'
                placeholder='Descripcion'
                disabled={disabled}
              />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label>Marca</Label>
              <Input
                onChange={handleInputChange}
                value={marca}
                type='text'
                name='marca'
                placeholder='marca'
                disabled={disabled}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <FormGroup>
              <Label>Serie</Label>
              <Input
                onChange={handleInputChange}
                value={serie}
                type='text'
                name='serie'
                placeholder='serie'
                disabled={disabled}
              />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label>Ubicacion</Label>
              <Input
                onChange={handleInputChange}
                value={ubicacion}
                type='select'
                name='ubicacion'
                placeholder='ubicacion'
                disabled={disabled}
                >
                <option>{ubicacion}</option>
                <option>Frabrica</option>
                <option>Laboratorio</option>
              </Input>
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label>Responsable</Label>
              <Input
                onChange={handleInputChange}
                value={responsable}
                type='select'
                name='responsable'
                placeholder='Responsable'
                disabled={disabled}
              >
                <ResponsablesList/>
              </Input>
            </FormGroup>
          </Col>
        </Row> 
        </>
    )
}

export default FormBasicos
