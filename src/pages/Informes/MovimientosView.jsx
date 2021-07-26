import React, { useEffect, useState } from 'react';
import { crudActions, informeActions } from '../../actions'
import { useDispatch, useSelector } from 'react-redux'

import Select from 'react-select'
import Movimientos  from './Movimientos';
import { Link } from "react-router-dom";
import {  
  Row,
  Col,    
  FormGroup,
  Label,
  Form,  
  Button
} from "reactstrap"
import DatePicker from 'react-date-picker';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faSave, faChartBar, faChartPie } from "@fortawesome/free-solid-svg-icons";

const defaultVal = (options, valor) =>{
  return options.filter(item =>
      item.value === valor
    )

}

const tipos =  [{"value":"prestamo","label":"prestamo"},
                {"value":"devolucion","label":"devolucion"},];


function MovimientosView () {     
  const dispatch = useDispatch()            
    const [value1, onChange1] = useState(new Date());    
    const [value2, onChange2] = useState(new Date());
    const [tipo, setTipo] = useState("prestamo"); 
    const libro = useSelector(state => state.libros.item) 

  useEffect(() =>{        
    return () =>{             
        dispatch(crudActions.setReset('INFORMES_RESET'))       
        console.log('descarga')
    };
  }, []);

  const submitHandle = event => {       
   event.preventDefault()       
   const item = {}
   item.desde = value1
   item.hasta = value2     
   item.tipo = tipo   
   dispatch(informeActions.informes('INFORMES_MOVIMIENTOS','movimientos',item))             
   
 }

  const tipoHandler = prop => event => {                     
    const { value } = event ? event : '' 
    setTipo(value)
    
 }

  
  return (
     <div className="content">     
    <div className="main-contenido"> 
      <h6 className="ml-2 mt-2">Informes</h6>
      <Row className="tabs">      
        <Col md={2} className="link-informe">
         <Link to={`/admin/ilibros/`}>            
              <FontAwesomeIcon icon={faUsers} />
              { ' ' }
              Documentos
            
          </Link>
        </Col>
        <Col md={2} className="link-informe">
         <Link to={`/admin/consolidado/`}>            
              <FontAwesomeIcon icon={faChartBar} />
              { ' ' }
              Consolidado
          </Link>
        </Col>       
        <Col md={2} className="link-active">
         <Link to={`/admin/imovimientos/`}>            
              <FontAwesomeIcon icon={faChartPie} />
              { ' ' }
              Movimientos
          </Link>
        </Col>  
      </Row>

      <div className="sub-form mt-3">              
      <Form onSubmit={ submitHandle}>         
              <Row form>                
                <Col md={4}>
                  <FormGroup className="mt-2">
                    <Label for="eDesde">Desde :</Label>
                    <DatePicker onChange={onChange1} value={value1}/>
                  </FormGroup>    
                </Col>
                <Col md={3}>
                  <FormGroup className="mt-2">
                    <Label for="eHasta">Hasta : </Label>
                    <DatePicker onChange={onChange2} value={value2}/>
                  </FormGroup>   
                </Col>                
                <Col md={3}>
                  <FormGroup>                    
                    <Select                                                               
                          defaultValue={tipos[0]}
                          name="tipo"    
                          id="tipo"                    
                          options={tipos}      
                          isClearable={true}                          
                          value={defaultVal(tipos,tipo)} 
                          onChange={ tipoHandler()}                           
                          />
                  </FormGroup>    
                </Col>
                <Col md={2}>
                  <Button 
                      type="submit"
                      className="btn-md btn-info mt-4">
                      <FontAwesomeIcon icon={faSave} />  
                      {' '} Generar
                  </Button>    
                </Col>
              </Row>
             
        </Form>   
        </div>   

      <Row>
        <Col>
          <Movimientos/>
        </Col>
      </Row>    
           
    </div>
  </div> 
  );
}

export default MovimientosView