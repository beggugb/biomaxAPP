import React from 'react';
import { useSelector, useDispatch } from 'react-redux'

function Prestamo () {          
  const dispatch = useDispatch()    
  const { items, cantidadTotal }= useSelector(state => state.movimientos)

    
  return (      
    <div className="tprestamo">                        

    </div> 
  );
}

export default Prestamo