import React, { useRef, useEffect }  from 'react'
import Moment from 'react-moment';
import { crudActions } from '../../actions/crud.actions'
import {     
  Table,    
  Button } from "reactstrap";
import { useSelector, useDispatch } from 'react-redux'


import ReactToPrint from "react-to-print";


 export class ComponentToPrint extends React.PureComponent {
  render() {
    
    return (
      <>
  <div className="invoice-box">
  <div className="sol">

    <h5 className="text-center mb-2">INFORME DE MOVIMIENTOS</h5>        
    <h6 className="ml-3" >Total: 
     {new Intl.NumberFormat().format(this.props.pdetalle)}
    </h6>      
 </div>

    <div className="sol"> 
          <Table className="table-reporteb">
            <thead>
                <tr>                      
                    <th width="45%" className="text-dark">Estudiante</th>
                    <th width="15%" className="text-dark">F.Prestamo</th>
                    <th width="15%" className="text-dark">F.Devolución</th>                                        
                    <th width="25%" className="text-dark">Usuario</th>          
                </tr>
            </thead>
        {this.props.pdata.data && (
            <tbody>
                {this.props.pdata.data.map((item) => (
                  <tr key={item.id}>                    
                    <td>{item.Estudiante.nombre ? item.Estudiante.nombre : ''}</td>                    
                    <td><Moment format="DD-MM-YYYY">{item.fechaPrestamo}</Moment></td>
                    <td><Moment format="DD-MM-YYYY">{item.fechaDevolucion}</Moment></td>                    
                    <td>{item.Usuario.nombres ? item.Usuario.nombres : ''}</td>                    
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


function Movimientos () {    
  const componentRef = useRef();   
  const { detalle, movimientos } = useSelector(state => state.informes)  
  const user = useSelector(state => state.usuarios.item)  
  const dispatch = useDispatch()

  
  useEffect(() =>{      
    return () =>{             
      dispatch(crudActions.setReset('INFORMES_RESET'))               
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
            pdetalle={detalle}
            pdata={movimientos}            
        />
    </div>
     )
}


export default Movimientos