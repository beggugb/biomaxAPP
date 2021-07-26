import React, { useRef, useEffect }  from 'react'
import Moment from 'react-moment';
import { useDispatch } from 'react-redux'
import { crudActions } from '../../../actions/crud.actions'
import {     
  Table,    
  Button } from "reactstrap";

import ReactToPrint from "react-to-print";


 export class ComponentToPrint extends React.PureComponent {
  render() {
    const fechaHoy = new Date(); 
    return (
      <>
    <div className="invoice-box">                    
    <h5 className="text-center"><b>Resumen de Prestamo</b></h5>    
    <p className="text-center"><b> Fecha Prestamo: <Moment format="DD/MM/YYYY">{ this.props.pcaja.createdAt }</Moment></b></p>
    <p className="text-left mt-2 ml-2">Fecha Emisión : <Moment format="DD/MM/YYYY">{ fechaHoy }</Moment></p>
    
    <div className="sol">     
     <Table className="table-reporteh">
            <tbody>
            <tr>  
                <td>Nro:</td><td>{this.props.pcaja.id}</td>
                <td>Usuario:</td><td>{this.props.puser.nombre} </td>                                         
            </tr>
            <tr>
                <td>Estudiante:</td>
                <td colSpan="3" >{ this.props.pcaja.Estudiante.nombre }</td>                
            </tr>
            <tr>  
                <td>$ Fecha Prestamo:</td>                
                <td><Moment format="DD/MM/YYYY">{ this.props.pcaja.fechaPrestamo }</Moment></td>
                <td>$ Fecha Devolución:</td>
                <td><Moment format="DD/MM/YYYY">{ this.props.pcaja.fechaDevolucion }</Moment></td>
            </tr>                                    
            </tbody>
          </Table>  
          </div>
    

    <div className="sol">
        <Table className="table-reporteb">
        <thead>
            <tr>  
                <th width="10%" className="text-dark">#</th>
                <th width="20%" className="text-dark">Código</th>
                <th width="70%" className="text-dark">Titulo</th>                
            </tr>
        </thead>
        {this.props.pdata && (
            <tbody>
                {this.props.pdata.map((item) => (
				    <tr key={item.id}>
				    <td>{item.id}</td>                      				    
				    <td>{item.Libro.codigo}</td>
				    <td>{item.Libro.titulo}</td>    				    
                    </tr>  
                    ))}
            </tbody>
        )}
    </Table>                              
          </div>  

      <p><b> Usuario : </b>{this.props.puser.nombre}</p>   

    </div>   
    </> 
    );
  }}


function MovimientoItemsDetalle ({ user, caja, data }) {    
const dispatch = useDispatch()
const componentRef = useRef();   

 useEffect(() =>{        
     return () =>{            
        dispatch(crudActions.setReset('MOVIMIENTOS_RESET_ITEMS'))        
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
            puser={user}
            pcaja={caja}
            pdata={data}
        />
    </div>
     )
}


export default MovimientoItemsDetalle