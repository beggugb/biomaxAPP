import React, { useRef, useEffect }  from 'react'
import Moment from 'react-moment';
import { useDispatch, useSelector } from 'react-redux'
import { crudActions } from '../../../actions/crud.actions'
import { apiErp } from "../../../helpers";
import Barcode from 'react-barcode'
import {     
  Table,
  Col,
  Card,
  Row,    
  Button } from "reactstrap";

import ReactToPrint from "react-to-print";


 export class ComponentToPrint extends React.PureComponent {
  render() {
    const fechaHoy = new Date(); 
    return (
      <>
    <div className="reporte">     
      <div className="invoice-box">        
        <div className="sol">
          <Row className="crl">
            <Col md={12}>
             <h4 className="text-center"> {this.props.data.titulo}</h4>             
            </Col>            
          </Row>
        </div>

        <Row className="crl mt-2">      
        <Col md={4} >
        <div className="sol">
        <Row>
          <Col>
            <img alt="libro"
            className="text-center imglg" 
            src={apiErp + '/static/images/libros/lg/'+this.props.data.filename }/>                                 
            <div className="clasificacion"> 
            <p className="titulo">Ubicación</p>
            <p className="dewey">{ this.props.data.dewey }</p>              
            <p className="cutter">{ this.props.data.autor.substring(0,1).toUpperCase() + this.props.data.cutter +  this.props.data.titulo.substring(0,1).toLowerCase() }</p>              
            </div>
          </Col>
        </Row>
        <Row>
         <Col className="text-center">
         <div className="clasificacion">
            <Barcode 
            value={this.props.data.id}
            width={2} 
            height={50}
            fontSize={18}
            />
            </div>
          </Col> 
        </Row>
        </div> 
        </Col>      
        <Col md={8}>
          <div className="box mt-2">          
           <Table className="table-reporteh mt-2">
           <tbody>
          <tr>
            <td width="35%"><b>Código :</b></td><td width="75%">{ this.props.data.codigo}</td>                       
          </tr>          
          <tr><td><b>Titulo :</b></td></tr>
          <tr><td colSpan="2">{this.props.data.titulo}</td></tr>          
          <tr><td><b>Autor :</b></td></tr>
          <tr><td colSpan="2">{this.props.data.autor}</td></tr>
          <tr><td><b>Sub-Autor :</b></td></tr>
          <tr><td>{this.props.data.subAutor}</td></tr>
          <tr><td><b>Carrera :</b></td><td>{this.props.data.Carrera.nombre}</td></tr>
          <tr><td><b>Editorial :</b></td><td>{this.props.data.Editorial.nombre}</td></tr> 
          <tr><td><b>País :</b></td><td>{this.props.data.pais}</td></tr> 
          <tr><td><b>Edición :</b></td><td>{ this.props.data.edicion}</td></tr>  

          <tr><td><b>Origen :</b></td><td>{ this.props.data.origen}</td></tr>          
          <tr><td><b>I.S.B.N :</b></td><td>{ this.props.data.isbn}</td></tr>          
          <tr><td><b>Tipo :</b></td><td>{ this.props.data.tipo}</td></tr>  
          <tr><td><b>Estado :</b></td><td>{ this.props.data.estado ? 'Disponible': 'No Disponible' }</td></tr>          

          <tr><td><b>N° Copia :</b></td><td>{ this.props.data.nroCopias}</td></tr>          
          <tr><td><b>N° Tomos :</b></td><td>{ this.props.data.nroTomos}</td></tr>          
          <tr><td><b>N° Páginas :</b></td><td>{ this.props.data.nroPaginas}</td></tr>          






          <tr><td><b>Observaciones :</b></td></tr>   
          <tr><td colSpan="2">{ this.props.data.observaciones }</td></tr>          
          <tr><td><b>Tags :</b></td></tr>          
          <tr><td colSpan="2" >{ this.props.data.tags }</td></tr>          
        </tbody>
        </Table>
          </div>   


                     
        </Col>      
    </Row> 
    </div>
    </div>  
    </> 
    );
  }
}


function LibroDetalle ({ user, caja, data }) {    
const dispatch = useDispatch()
const { item } = useSelector(state => state.libros)
const componentRef = useRef();   

 useEffect(() =>{        
     return () =>{            
        dispatch({type:'LIBROS_RESET_ITEM'}) 
    };
  }, [dispatch]);
return(
    <div className="creporte">
        <ReactToPrint
            trigger={() => <Button className="fas fa-print btn-sm btn-info">Imprimir</Button>}
            content={() => componentRef.current}        
        />
        <ComponentToPrint
            ref={componentRef}                      
            data={item}
        />
    </div>
     )
}


export default LibroDetalle