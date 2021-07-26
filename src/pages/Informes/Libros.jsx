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

    <h5 className="text-center mb-2">INFORME DE DOCUMENTOS</h5>        
    <h6 className="ml-3" >Total: 
     {new Intl.NumberFormat().format(this.props.pdetalle)}
    </h6>      
 </div>

    <div className="sol"> 
          <Table className="table-reporteb">
            <thead>
                <tr>  
                    <th width="5%">Código</th>
                    <th width="35%" className="text-dark">Titulo</th>
                    <th width="20%" className="text-dark">Autor</th>
                    <th width="15%" className="text-dark">Carrera</th>
                    <th width="15%" className="text-dark">Editorial</th>          
                </tr>
            </thead>
        {this.props.pdata.data && (
            <tbody>
                {this.props.pdata.data.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>                                                                 
                    <td>{item.titulo}</td>
                    <td>{item.autor}</td>
                    <td>{item.Carrera.nombre ? item.Carrera.nombre : ''}</td>
                    <td>{item.Editorial.nombre ? item.Editorial.nombre: ''}</td>
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


function Libros () {    
  const componentRef = useRef();   
  const { detalle, libros } = useSelector(state => state.informes)  
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
            pdata={libros}            
        />
    </div>
     )
}


export default Libros