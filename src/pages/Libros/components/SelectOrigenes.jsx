import React,{ useState }  from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { crudActions } from '../../../actions'
import Select from 'react-select'

const origens =[ {"value":"Compra","label":"Compra"},
                {"value":"Producción","label":"Producción"},
                {"value":"Donación","label":"Donación"}
                ];
const defaultVal = (options, valor) =>{
  return options.filter(item =>
      item.value === valor
    )

}


function SelectOrigenes () {     
  const dispatch = useDispatch()   
  const {item}  = useSelector(state => state.libros)  

  const [it, setIt] = useState({
    isClearable: true,
    isDisabled: false,
    isLoading: false,
    isRtl: false,
    isSearchable: true,
  }); 

   const changeHandler = event => {                      
    let iLabel = event ? event.label : '' 
    let iValue = event ? event.value : ''    
    dispatch(crudActions.changeValue('LIBROS_CHANGE','origen',iLabel))        
    
  }

  return (        
     <Select
          className="basic-single"          
          classNamePrefix="select"              
          isDisabled={it.isDisabled}
          isLoading={it.isLoading}
          isClearable={it.isClearable}
          isRtl={it.isRtl}
          isSearchable={it.isSearchable}              
          options={origens}
          value={defaultVal(origens,item.origen)}   
          onChange={ changeHandler } 
        />                   
  );
}

export default SelectOrigenes