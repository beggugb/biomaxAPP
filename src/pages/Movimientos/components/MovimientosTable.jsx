import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { membresiaActions, cajaActions } from '../../../actions'
import {      
    Table,    
    Button
  } from "reactstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {      
  faFilePdf
} from "@fortawesome/free-solid-svg-icons";
import Pagination from '../../../components/Navbars/Pagination'
import Moment from 'react-moment'

function MovimientosTable () {          
  const dispatch = useDispatch()  

  const {data, total ,pagina, paginas, modalView }= useSelector(state => state.movimientos)
  const  item  = useSelector(state => state.alumnos.item)
  
  const makeHttpRequestWithPage = (page, num) =>{        
    dispatch(membresiaActions.getDetalle('MOVIMIENTOS_DATA','movimientos',page, num, item.id))    
           
  }


    const toggleModalView = (item) => {    
      let est = modalView === true ? false : true;        
        if(item){          
          dispatch(cajaActions.getItem('MOVIMIENTOS_ITEMS_DATA','movimientos',item.id))
        }        
        dispatch(cajaActions.viewModal('MOVIMIENTOS_VIEW',est))                
    };

  
  return (    
    <>    
    <div className="table-single">             
        <Table className="table-simple">
        <thead>
            <tr>                  
                <th width="10%">Id</th>
                <th width="20%">F. Prestamo</th>
                <th width="20%">F. Devolución</th>
                <th width="10%">Estado</th>                
                <th width="10%"></th>                
            </tr>
        </thead>
        {data && (
            <tbody>
                {data.map((item) => (
                    <tr key={item.id}>                      
                      <td>{item.id }</td>
                      <td><Moment format="DD/MM/YYYY">{item.fechaPrestamo}</Moment></td>
                      <td><Moment format="DD/MM/YYYY">{item.fechaDevolucion}</Moment></td>                      
                      <td>{item.estado ? 'prestado':'devuelto' }</td>
                        <td>
                        <Button className="btn btn-danger btn-xs" onClick={() => { toggleModalView(item)}} >
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

export default MovimientosTable