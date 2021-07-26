import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Col, Row } from "reactstrap";
import { apiErp } from "../../../helpers";
import Moment from 'react-moment'

function Consulta ({getComponent}) {            
  const {data }= useSelector(state => state.libros)  
  
  return (    
    <>    
     
        <div  className="resultado">  
                { data.map(item=>(
                  <Row key={item.id} className="citem">            
                    <Col sm={10}>
                      <h3>{item.titulo}</h3>                  
                      <p>{ item.observaciones }</p>     
                      <ul>
                        <li><b>Autor: </b>{item.autor}</li>
                        <li><b>Carrera: </b>{item.Carrera.nombre}</li>
                        <li><b>Edición: </b>{item.edicion}</li>
                        <li><b>Año: </b><Moment format="YYYY">{item.anio}</Moment></li>                
                      </ul>     
                      <span>Ubicación: { item.dewey } </span> 
                      <span>{ item.autor.substring(0,1).toUpperCase() + item.cutter +  item.titulo.substring(0,1).toLowerCase() } </span>             
                    </Col>
                    <Col sm={2} >
                      <img alt="libro" className="img-libro" src={apiErp + '/static/images/libros/sm/'+ item.filename }/>   
                    </Col>           
                  </Row>
                ))} 
        </div>
      
    </>
  );
}

export default Consulta