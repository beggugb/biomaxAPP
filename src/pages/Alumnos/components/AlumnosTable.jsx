import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { crudActions } from '../../../actions/crud.actions'
import {      
    Table,    
    Button
  } from "reactstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import {    
  faEdit,
  faTags
} from "@fortawesome/free-solid-svg-icons";
import Pagination from '../../../components/Navbars/Pagination'


function AlumnosTable ({getComponent}) {          
  const dispatch = useDispatch()    
  const {data, total ,pagina, paginas, modalView }= useSelector(state => state.alumnos)


  const editCliente = (pky) => {        
    let est = modalView === true ? false : true;             
    dispatch({type:'ALUMNOS_VIEW',view:est}) 
    dispatch(crudActions.getItem('ALUMNOS_ITEM','alumnos',pky))
  };

  const makeHttpRequestWithPage = (page, num) =>{
    dispatch(crudActions.getData('ALUMNOS_DATA','alumnos',page, num, 'nombre','ASC'))  
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
                <th width="15%">Código</th>
                <th width="40%">Nombres</th>
                <th width="15%">Teléfono</th>
                <th width="20%">Carrera</th>   
                <th width="10%"></th>                
            </tr>
        </thead>
        {data && (
            <tbody>
                {data.map((item) => (
                    <tr key={item.id}>                      
                      <td>{item.codigo}</td>
                      <td>{item.nombre}</td>
                      <td>{item.telefono}</td>
                      <td>{item.Carrera.nombre}</td>                                      
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

export default AlumnosTable