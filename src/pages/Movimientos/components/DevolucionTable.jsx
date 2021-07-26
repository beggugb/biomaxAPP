import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { crudActions } from '../../../actions/crud.actions'
import {      
    Table,    
    Button
  } from "reactstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Moment from 'react-moment'
import {    
  faEdit,
  faTags
} from "@fortawesome/free-solid-svg-icons";
import Pagination from '../../../components/Navbars/Pagination'


function DevolucionTable ({getComponent}) {          
  const dispatch = useDispatch()    
  const { devoluciones, total ,pagina, paginas, modalView }= useSelector(state => state.movimientos)


  const editCliente = (pky) => {        
    let est = modalView === true ? false : true;             
    dispatch({type:'DEVOLUCIONES_VIEW',view:est}) 
    dispatch(crudActions.getItem('DEVOLUCIONES_ITEM','devoluciones',pky))
  };

  const makeHttpRequestWithPage = (page, num) =>{
    dispatch(crudActions.getData('DEVOLUCIONES_DATA','devoluciones',page, num, 'fechaPrestamo','ASC'))  
  }

  useEffect(() =>{        
      makeHttpRequestWithPage(1,12);    
     return () =>{            
        /*dispatch(crudActions.getReset('ALUMNOS_RESET'))*/
        console.log('descarga table clientes')
    };  
  }, []);

  
  return (    
    <>    
    <div className="table-single">             
        <Table className="table-simple">
        <thead>
            <tr>                  
                <th width="10%">Código</th>
                <th width="40%">Estudiante</th>   
                <th width="10%">F.Prestamo</th>
                <th width="10%">F.Devolución</th>
                <th width="20%">Estado</th>   
                <th width="10%"></th>                
            </tr>
        </thead>
        {devoluciones && (
            <tbody>
                {devoluciones.map((item) => (
                    <tr key={item.id}>                      
                      <td>{item.id}</td>
                      <td>{item.Estudiante.nombre ? item.Estudiante.nombre: ''}</td>
                      <td><Moment format="DD-MM-YYYY">{item.fechaPrestamo}</Moment></td>
                      <td><Moment format="DD-MM-YYYY">{item.fechaDevolucion}</Moment></td>
                      <td>{item.estado ? 'prestado': 'devuelto'}</td>                      
                      <td>
                        <Button className="btn btn-success btn-xs" onClick={() => { editCliente(item.id)}} >
                          <FontAwesomeIcon icon={faEdit} />
                        </Button>
                        <Link to={`/admin/movimiento/${item.id}`}>
                           <Button className={"btn btn-warning btn-xs"}>
                              <FontAwesomeIcon icon={faTags} />
                           </Button>
                        </Link>
                      </td>
                    </tr>  
                    ))}
            </tbody>
        )}
    </Table>    
 </div>
 <div className="navegador" >
    <Pagination
    makeHttpRequestWithPage={ makeHttpRequestWithPage }
    total={total}
    paginas={paginas}
    current= {pagina} 
    pagina= {12}
    />
 </div>
 </>
  );
}

export default DevolucionTable