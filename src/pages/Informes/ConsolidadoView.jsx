import React, { useEffect, useState } from 'react';
import { crudActions, informeActions } from '../../actions'
import { useDispatch } from 'react-redux'

import DatePicker from 'react-date-picker';
import Consolidado  from './Consolidado';
import { Link } from "react-router-dom";

import {  
  Row,
  Col,    
  FormGroup,
  Label,
  Form,
  Button
} from "reactstrap"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faSave, faTags, faFunnelDollar, faCalculator, faChartBar, faChartPie } from "@fortawesome/free-solid-svg-icons";




function ConsolidadoView () {     
  const dispatch = useDispatch()    
    const [value1, onChange1] = useState(new Date());    
    const [value2, onChange2] = useState(new Date());      
    let us = JSON.parse(localStorage.getItem('user'))    

  useEffect(() =>{        
    return () =>{             
        dispatch(crudActions.setReset('INFORMES_RESET'))               
    };
  }, [dispatch]);



 const submitHandle = event => {       
   event.preventDefault()       
   const item = {}   
   dispatch(informeActions.informes('INFORMES_CONSOLIDADO','consolidado',item))          
   
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
          <Col md={2} className="link-active">
           <Link to={`/admin/consolidado/`}>            
                <FontAwesomeIcon icon={faChartBar} />
                { ' ' }
                Consolidado
            </Link>
          </Col>   
          <Col md={2} className="link-informe">
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
                
                <Col md={2}>
                  <Button 
                      type="submit"
                      className="btn-md btn-info">
                      <FontAwesomeIcon icon={faSave} />  
                      {' '} Generar
                  </Button>     
                </Col>
              </Row>
             
        </Form>   
        </div>   

      <Row>
        <Col>
          <Consolidado/>
        </Col>
      </Row>   
      </div>    
  </div> 
  );
}

export default ConsolidadoView