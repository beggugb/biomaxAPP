import React,{ useState}  from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { crudActions } from '../../../actions'
import Select from 'react-select'
const defaultVal = (options, valor) =>{
  return options.filter(item =>
      item.value === valor
    )

}

const origens =[ 
                {"value":"Artes","label":"Artes"},
                {"value":"Filosofia","label":"Filosofia"},
                {"value":"Generalidades","label":"Generalidades"},
                {"value":"Geografia","label":"Geografia"},
                {"value":"Lenguas","label":"Lenguas"},
                {"value":"Literatura","label":"Literatura"},
                {"value":"Matematicas","label":"Matematicas"},
                {"value":"Religion","label":"Religion"},
                {"value":"Social","label":"Social"},
                {"value":"Tecnologia","label":"Tecnologia"}]; 

function SelectClasificacion () {     
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

    dispatch(crudActions.changeValue('LIBROS_CHANGE','clasificacion',iValue))
    dispatch(crudActions.getList('DEWEY_LISTA','deweys',iValue))    
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
          value={defaultVal(origens,item.clasificacion)}   
          onChange={ changeHandler } 
        />                   
  );
}

export default SelectClasificacion