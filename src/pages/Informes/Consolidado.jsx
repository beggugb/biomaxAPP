import React, { useRef }  from 'react'
import Moment from 'react-moment';
import {     
  Table,    
  Button } from "reactstrap";
import { useSelector } from 'react-redux'


import ReactToPrint from "react-to-print";


 export class ComponentToPrint extends React.PureComponent {
  render() {
    
    return (
      <>
    
    <div className="invoice-box">
    <div className="sol">
    <h5 className="text-center mb-2">INFORME CONSOLIDADO</h5>                               
    <h6 className="ml-5">Total : 
    {new Intl.NumberFormat().format(this.props.pdetalle)}
    </h6>
    </div> 


    <div className="sol"> 
          <Table className="table-reporteb">
            <thead>
                <tr>                      
                    <th width="80%" className="text-dark">Carreras</th>                    
                    <th width="20%" className="text-dark">Cantidad</th>                           
                </tr>
            </thead>
        {this.props.pdata && (
            <tbody>
                {this.props.pdata.map((item) => (
                  <tr key={item.carreraId}>
                    <td>{item.Carrera.nombre}</td>
                    <td>{item.cantidad}</td>                    
                  </tr>  
                  ))}
            </tbody>
        )}
         </Table>                    
           </div>    
      <p className="text-dark"><b> Usuario : </b>{this.props.puser.nombre}</p>    
    </div>     
    </> 
    );
  }}


function Consolidado () {    
  const componentRef = useRef();   
  const {detalle, consolidado } = useSelector(state => state.informes)    
  let us = JSON.parse(localStorage.getItem('user')) 

return(
    <div className="creporte">
        <ReactToPrint
            trigger={() => <Button className="fas fa-print btn-sm btn-info">Imprimir</Button>}
            content={() => componentRef.current}        
        />
        <ComponentToPrint
            ref={componentRef}          
            puser={us}
            pdetalle={detalle}
            pdata={consolidado}            
        />
    </div>
     )
}


export default Consolidado