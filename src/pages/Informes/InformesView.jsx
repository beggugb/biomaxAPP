import React, { useEffect } from 'react';
import { crudActions, informeActions } from '../../actions'
import { useDispatch, useSelector } from 'react-redux'


import Libros  from './Libros';
import { Link } from "react-router-dom";
import EditorialSelect from '../Editoriales/components/EditorialSelect'
import CarreraSelect from '../Carreras/components/CarreraSelect'
import SelectTipos from '../Libros/components/SelectTipos'
import {  
  Row,
  Col,    
  FormGroup,
  Label,
  Form,  
  Button
} from "reactstrap"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faSave, faChartBar, faChartPie } from "@fortawesome/free-solid-svg-icons";




function InformesView () {     
  const dispatch = useDispatch()            
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
   item.editorialId = libro.editorialId
   item.carreraId = libro.carreraId   
   item.tipo = libro.tipo   
   dispatch(informeActions.informes('INFORMES_LIBROS','libros',item))          
   
 }
  
  return (
     <div className="content">     
    <div className="main-contenido"> 
      <h6 className="ml-2 mt-2">Informes</h6>
      <Row className="tabs">      
        <Col md={2} className="link-active">
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
                <Col md={4}>
                  <FormGroup>
                    <Label for="eCarrera">Carrera :</Label>
                    <CarreraSelect/>
                  </FormGroup>    
                </Col>
                <Col md={3}>
                  <FormGroup>
                    <Label for="eEditorial">Editorial : </Label>
                    <EditorialSelect/>
                  </FormGroup>   
                </Col>                
                <Col md={3}>
                  <FormGroup>
                    <Label for="eTipo">Tipo :</Label>
                    <SelectTipos/>
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
          <Libros/>
        </Col>
      </Row>    
           
    </div>
  </div> 
  );
}

export default InformesView