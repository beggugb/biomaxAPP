import React,{ useState, useEffect}  from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { crudActions } from '../../../actions'
import {  
  Row,Col,Button, Form, FormGroup, Input, Label, FormText
} from "reactstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave } from "@fortawesome/free-solid-svg-icons";
import Select from 'react-select'
const defaultVal = (options, valor) =>{
  return options.filter(item =>
      item.value === valor
    )

}


function SelectDeweys () {     
  const dispatch = useDispatch()   
  const {item}  = useSelector(state => state.libros)
  const {items} = useSelector(state => state.deweys)  

  const [it, setIt] = useState({
    isClearable: true,
    isDisabled: false,
    isLoading: false,
    isRtl: false,
    isSearchable: true,
  }); 

   const changeHandler = event => {                      
    let iLabel = event ? event.codigo : '' 
    let iValue = event ? event.value : ''    
    const text = item.autor ? item.autor.substring(0,3) : '0'    
    dispatch(crudActions.changeValue('LIBROS_CHANGE','dewey',iLabel))    
    dispatch(crudActions.changeValue('LIBROS_CHANGE','deweyId',iValue))    
    dispatch(crudActions.getList('LIBROS_CUTTER','cutters',text))        
    
  }

  
 useEffect(() =>{          
      console.log('cargaFormClientes')         
    return () =>{                   
      dispatch(crudActions.setReset('DEWEY_RESET'))
    };
  }, []);

 return (        
     <Select
          className="basic-single"          
          classNamePrefix="select"              
          isDisabled={it.isDisabled}
          isLoading={it.isLoading}
          isClearable={it.isClearable}
          isRtl={it.isRtl}
          isSearchable={it.isSearchable}              
          options={items}
          value={defaultVal(items,item.deweyId)}   
          onChange={ changeHandler } 
        />                   
  );
}

export default SelectDeweys