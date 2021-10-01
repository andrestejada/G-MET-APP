import React from 'react'
import {
    Row,
    Col,
    Input,
    Label,
    FormGroup,
  } from 'reactstrap';
import { FrecuenciasList } from '../../configuraciones/Frecuencias/FrecuenciasList';
import MagnitudList from '../../configuraciones/Magnitud/MagnitudList';
import { UmedidaList } from '../../configuraciones/UnidadDeMedida/UmedidaList';
const FormMetrologicos = ({handleInputChange,disabled,values}) => {
    const {
        inferior,
        superior,
        divisiondeEscala,
        resolucion,
        unidadDeMedida,
        verificacion,
        calibracion,
        trazabilidad,
        errorMaxPer,
        servicio,        
        magnitud,
        valorNominal,
    }=values;
    return (
        <>
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
            <h4>Caracteristicas Metrologicas</h4>
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
                    value={magnitud}
                  >
                    <MagnitudList/>
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
                    <UmedidaList 
                      cambiarMagnitud={magnitud}
                    />
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
                            <FrecuenciasList/>
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
                            <FrecuenciasList/>
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
        </>
    )
}

export default FormMetrologicos
