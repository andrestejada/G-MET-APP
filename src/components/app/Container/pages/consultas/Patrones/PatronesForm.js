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
                <option>Luis Tejada</option>
                <option>Andres Tejada</option>
              </Input>
            </FormGroup>
          </Col>
        </Row>
        <h3 className='text-center' >Datos Metrologicos</h3>
        <hr/>
        <Row form>
          <Col md={4}>
            <h4>Intervalo de Medida</h4>
            <FormGroup>
              <Label>Inferior</Label>
              <Input
                type='text'
                name='inferior'
                onChange={handleInputChange}
                value={inferior}
                disabled={disabled}
              />
            </FormGroup>
            <FormGroup>
              <Label>Superior</Label>
              <Input
                type='text'
                name='superior'
                onChange={handleInputChange}
                value={superior}
                disabled={disabled}
              />
            </FormGroup>
            <FormGroup>
              <Label>Valor Nominal</Label>
              <Input
                type='text'
                name='valorNominal'
                onChange={handleInputChange}
                value={valorNominal}
                disabled={disabled}
              />
            </FormGroup>
          </Col>
          <Col md={8}>
            <h4>***Nombre Pendiente***</h4>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label>Division de Escala</Label>
                  <Input
                    type='text'
                    name='divisiondeEscala'
                    onChange={handleInputChange}
                    value={divisiondeEscala}
                    disabled={disabled}
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label>Magnitud</Label>
                  <Input
                    type='select'
                    name='magnitud'
                    onChange={handleInputChange}
                    disabled={disabled}
                  >
                    <option value={magnitud}>{magnitud}</option>
                    <option value='30'>30</option>
                    <option value='40'>40</option>
                  </Input>
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label>Resolución</Label>
                  <Input
                    type='text'
                    name='resolucion'
                    onChange={handleInputChange}
                    value={resolucion}
                    disabled={disabled}
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label>Unidad de medida</Label>
                  <Input
                    type='select'
                    name='unidadDeMedida'
                    onChange={handleInputChange}
                    value={unidadDeMedida}
                    disabled={disabled}
                    >
                    <option>{unidadDeMedida}</option>
                    <option>mts</option>
                  </Input>
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label>Error max. Permitido</Label>
                  <Input
                    type='text'
                    name='errorMaxPer'
                    onChange={handleInputChange}
                    value={errorMaxPer}
                    disabled={disabled}
                  />
                </FormGroup>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row form >
                <Col md={4}>
                    <h4>Frecuencias</h4>
                    <FormGroup>
                        <Label>Verificación</Label>
                        <Input 
                            type="select"
                            name='verificacion'
                            onChange={handleInputChange}
                            value={verificacion}
                            disabled={disabled}
                        >
                            <option>{verificacion}</option>
                            <option>2</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label>Calibración</Label>
                        <Input 
                            type="select"
                            name='calibracion'
                            onChange={handleInputChange}
                            value={calibracion}
                            disabled={disabled}
                        >
                            <option>{calibracion}</option>
                            <option>1</option>
                        </Input>
                    </FormGroup>
                </Col>
                <Col md={4}>
                    <h4>Tipo de Trazabilidad</h4>
                    <FormGroup check>
                        <Label check>
                        <Input  
                            type="radio" 
                            onChange={handleInputChange}
                            name="trazabilidad" 
                            value='calibracion externa'
                            checked={ trazabilidad === 'calibracion externa' && true }
                            disabled={disabled}
                        />
                        Calibración Externa
                        </Label>
                    </FormGroup>                         
                    <FormGroup check>
                        <Label check>
                        <Input 
                            type="radio" 
                            name="trazabilidad"
                            value='calibracion interna'
                            onChange={handleInputChange}
                            checked={ trazabilidad === 'calibracion interna' && true }
                            disabled={disabled}
                        />
                        Calibración Interna
                        </Label>
                    </FormGroup>     
                </Col>
                <Col md={4}>
                    <h4>Tipo de Servicio</h4>
                    <FormGroup check>
                        <Label check>
                        <Input 
                            type="radio" 
                            name="servicio"
                            value='externo'
                            onChange={handleInputChange}  
                            checked={ servicio === 'externo' && true }
                            disabled={disabled}
                        />
                        Externo
                        </Label>
                    </FormGroup>                         
                    <FormGroup check>
                        <Label check>
                        <Input 
                            type="radio" 
                            name="servicio"
                            value='interno'
                            onChange={handleInputChange}
                            checked={ servicio === 'interno' && true }
                            disabled={disabled} 
                        />
                        Interno
                        </Label>
                    </FormGroup>                         
                </Col>
                
            </Row>
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
