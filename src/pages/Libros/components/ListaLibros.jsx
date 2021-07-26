import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { tpvActions } from '../../../actions'
import {      
    Table
  } from "reactstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {      
  faArrowRight
} from "@fortawesome/free-solid-svg-icons";

function ListaLibros () {          
  const dispatch = useDispatch()    
  const { data }= useSelector(state => state.libros)
  const { items, cantidadTotal }= useSelector(state => state.movimientos)
  
  const add = (libro) => {      
    let movimiento  = [...items]    
    let cTotal = cantidadTotal
    let repeat = false

    movimiento.map((item, index) =>{              
        if(item.libroId === libro.id)
        {           
          repeat = true;    
          return null
        }
        
      })     

    
    if(!repeat)
      {
        let itemMovimiento = {};
        itemMovimiento.cantidad = 1;          
        itemMovimiento.libroId = libro.id; 
        itemMovimiento.titulo = libro.titulo;
        itemMovimiento.autor = libro.autor;
        itemMovimiento.dewey = libro.dewey;
        itemMovimiento.cutter = libro.cutter;
        movimiento.push(itemMovimiento);   
        cTotal = cTotal +1;
      }
      dispatch(tpvActions.addItems(movimiento, cTotal))

  }

  return (      
    <div className="table-single">             
      <Table className="table-simple">
        <thead>
            <tr>                  
                <th width="10%">Código</th>
                <th width="50%">Título</th>
                <th width="30%">Autor</th>                
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
                      <td>                      
                      <FontAwesomeIcon icon={faArrowRight} onClick={() => {add(item)}} className="circulo" />                                           
                      </td>
                    </tr>  
                    ))}
            </tbody>
        )}
      </Table>    
    </div>
  );
}

export default ListaLibros