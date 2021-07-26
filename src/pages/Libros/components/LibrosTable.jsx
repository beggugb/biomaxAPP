import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { crudActions } from '../../../actions/crud.actions'
import {      
    Table,    
    Button
  } from "reactstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {    
  faEdit,  
  faFilePdf
} from "@fortawesome/free-solid-svg-icons";
import Pagination from '../../../components/Navbars/Pagination'


function LibrosTable ({getComponent}) {          
  const dispatch = useDispatch()    
  const {data, total ,pagina, paginas, modalView, pdfView }= useSelector(state => state.libros)


  const editLibro = (pky) => {        
    let est = modalView === true ? false : true;             
    dispatch({type:'LIBROS_VIEW',view:est}) 
    dispatch(crudActions.getItem('LIBROS_ITEM','libros',pky))
  };

  const viewLibro = (pky) => {        
    let est = pdfView === true ? false : true;             
    dispatch({type:'LIBROS_VIEW_PDF',pdf:true}) 
    dispatch(crudActions.getItem('LIBROS_ITEM','libros',pky))
  };


  const makeHttpRequestWithPage = useCallback((page, num) =>{
    dispatch(crudActions.getData('LIBROS_DATA','libros',page, num, 'titulo','ASC'))  
  },[dispatch])

  useEffect(() =>{        
      makeHttpRequestWithPage(1,12);    
     return () =>{            
        /*dispatch(crudActions.getReset('LIBROS_RESET'))*/
        console.log('descarga table clientes')
    };  
  }, []);

  
  return (    
    <>    
    <div className="table-single">             
        <Table className="table-simple">
        <thead>
            <tr>                  
                <th width="5%">Código</th>
                <th width="50%">Título</th>
                <th width="25%">Autor</th>
                <th width="10%">Carrera</th>                
                <th width="10%"></th>                
            </tr>
        </thead>
        {data && (
            <tbody>
                {data.map((item) => (
                    <tr key={item.id}>                      
                      <td>{item.codigo}</td>
                      <td>{item.titulo}</td>
                      <td>{item.autor}</td>                      
                      <td >{ item.Carrera.nombre }</td>
                      <td>
                        <Button className="btn btn-success btn-xs" onClick={() => { editLibro(item.id)}} >
                          <FontAwesomeIcon icon={faEdit} />
                        </Button>
                        <Button className="btn btn-danger btn-xs" onClick={() => { viewLibro(item.id)}} >
                          <FontAwesomeIcon icon={faFilePdf} />
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
    total={total}
    paginas={paginas}
    current= {pagina} 
    pagina= {12}
    />
 </div>
 </>
  );
}

export default LibrosTable