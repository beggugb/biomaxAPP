import React, { useState,useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { crudActions } from '../../../actions/crud.actions'
import { stylesErp } from '../../../helpers'

import { useCallback } from 'react';
import Select from 'react-select'
const defaultVal = (options, valor) =>{
    return options.filter(item =>
        item.value === valor
      )
  
  }

function CarreraSelect () {          
  const dispatch = useDispatch()  
  const [mount, setMount] = useState(false)
  const { data } = useSelector(state => state.carreras)
  const { item } = useSelector(state => state.libros)
  
 
  const makeHttpRequestWithPage = (xredux, payload) =>{
    dispatch(crudActions.getLis(xredux, payload))  
  }

  useEffect(() =>{   
    makeHttpRequestWithPage('CARRERAS_LISTA','carreras')     
     return () =>{            
        dispatch(crudActions.setReset('CARRERAS_RESET'))
    };
  }, []);

  const changeHandler = event => {    
    let io = event ? event.value: 0    
    dispatch(crudActions.changeValue('LIBROS_CHANGE','carreraId',io))        
   }
    
  return (    
    <>
        <Select                                                               
            defaultValue={data[0]}
            name="carreraId"    
            id="carreraId"                    
            options={data}      
            isClearable={true} 
            onChange={ (e) => changeHandler(e) }                         
            value={defaultVal(data,item.carreraId)}                                   
        />
    </>
  );
}

export default CarreraSelect