import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { crudActions } from '../../actions'
import {  
  Row,
  Col,
  Button, Form, FormGroup, Input, Label
} from "reactstrap"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes, faPlus } from "@fortawesome/free-solid-svg-icons";
import Consulta from './components/Consulta'


function RegistroView () {     
  const dispatch = useDispatch()
  const [item, setItem] = useState({
    "parametro":""
  });

  const newCliente = (item) => {        
    dispatch({type:'LIBROS_VIEW',view:true})                
  };

  const changeHandler = event => {    
  const { name, value } = event.target  
  setItem({
    ...item,
    [name]: value
  })  
 }



 const submitHandle = event => {       
    event.preventDefault()    
    dispatch(crudActions.searchLista('LIBROS_DATA','libros',item))  

 }

  useEffect(() =>{              
     return () =>{            
        /*dispatch(crudActions.getReset('LIBROS_RESET'))
        console.log('descarga table clientes')*/
    };  
  }, []);

          
  return (    
       <div className="cos">
        <div className="main-cos">  
            <Row>
              <Col md="3" className="barra">
                Consultas 
              </Col>
              <Col md="4" className="barra">

              </Col>
              <Col md="5" className="barra">
                <Form onSubmit={ submitHandle}>     
                  <Row form>
                    <Col md={10}>
                      <FormGroup>                    
                        <Input type="text" name="parametro" placeholder="...introduzca busqueda" 
                               id="parametro"  value={item.parametro || ''}  onChange={changeHandler} />
                      </FormGroup>
                    </Col>
                    <Col md={2}>
                      <Button className="btn-rd btn-info ">
                       <FontAwesomeIcon icon={faSearch} />                          
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Col>
          </Row>

          <Row>
            <Col>
              <Consulta/>
            </Col>
          </Row>                
                                     
      </div>
    </div>                 
  );
}

export default RegistroView