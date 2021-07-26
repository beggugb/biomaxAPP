import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { tpvActions } from '../../../actions'
import {      
    Table
  } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {      
  faTimes
} from "@fortawesome/free-solid-svg-icons";

function ListaPrestamo () {          
  const dispatch = useDispatch()    
  const { items, cantidadTotal }= useSelector(state => state.movimientos)

  const del = (index) => {      
    let movimiento  = [...items]    
    let cTotal = cantidadTotal - 1    
    movimiento.splice(index,1);
    dispatch(tpvActions.addItems(movimiento, cTotal))
  }
  
  return (      
    <div className="tpvlist">                             
        {items && (          
          <Table className="table-tpv">    
          <tbody>    
            {items.map((item) => (
            <tr key={item.libroId}>                      
              <td width="90%">{item.titulo}
                <table>
                  <tbody>
                    <tr>
                        <td>Ubicación /
                          {item.dewey} - {item.cutter}
                        </td>
                    </tr>
                  </tbody>  
                </table>  
              </td>                                                          
              <td width="10%">
              <FontAwesomeIcon icon={faTimes} onClick={() => {del(item)}} className="circulos"/> 
              </td>
            </tr>  
            ))}
          </tbody>  
          </Table>     
        )}
        {cantidadTotal !== 0 ? 
          <Table className="table-tpvs">  
          <tbody>
          <tr>
          <td width="70%">
          Total :
          </td>
          <td width="10%">
          { cantidadTotal}
          </td>
          <td width="20%">
          
          </td>
          </tr>
          </tbody>            
          </Table>     
          : null
        }

  </div> 
  );
}

export default ListaPrestamo