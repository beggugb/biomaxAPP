import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { crudActions } from '../../../actions/crud.actions'
import {      
    Table,    
    Button
  } from "reactstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {    
  faEdit, faTrash
} from "@fortawesome/free-solid-svg-icons";
import Pagination from '../../../components/Navbars/Pagination'
import { useCallback } from 'react';

function PaquetesTable () {          
  const dispatch = useDispatch()    
  const { data, total, pagina, paginas } = useSelector(state => state.editoriales)
 
  const makeHttpRequestWithPage = useCallback((page, num) =>{
    dispatch(crudActions.getData('EDITORIALES_DATA','editoriales', page, num,'nombre','ASC'))  
  },[dispatch])

  useEffect(() =>{        
    makeHttpRequestWithPage(1,12);    
     return () =>{                    
        dispatch(crudActions.setReset('EDITORIALES_RESET'))
    };
  }, []);

  const delHandler = (pky) => {               
    dispatch(crudActions.deleteList('EDITORIALES_DATA','editoriales',pky))            
  }
  const itemHandler = (pky) => {                   
    dispatch(crudActions.getItem('EDITORIALES_ITEM','editoriales',pky))
  }


  return (    
    <>
    <div className="table-single">             
        <Table className="table-simple">
        <thead>
            <tr>  
                <th width="15%">Código</th>
                <th width="50%">Nombre</th>
                <th width="25%">País</th>
                <th width="10%"></th>                             
            </tr>
        </thead>
        {data && (
            <tbody>
                {data.map((item) => (
                    <tr key={item.id}>                      
                      <td>{item.codigo}</td>
                      <td>{item.nombre}</td>
                      <td>{item.pais}</td>                      
                      <td className="text-center">
                      <Button className="btn btn-success btn-xs" onClick={() => {itemHandler(item.id)}} >
                      <FontAwesomeIcon icon={faEdit} />
                      </Button>
                      <Button className="btn btn-danger btn-xs" onClick={() => {delHandler(item.id)}} >
                      <FontAwesomeIcon icon={faTrash} />
                      </Button>
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
    total={ total}
    paginas={ paginas}
    current= { pagina} 
    pagina= {12}
    />
 </div>
 </>
  );
}

export default PaquetesTable