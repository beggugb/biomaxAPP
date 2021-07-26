import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { crudActions } from '../../../actions'
import {  
  Row,Col,Button, Form, FormGroup, Input, Label
} from "reactstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave } from "@fortawesome/free-solid-svg-icons";
import Switch from "react-switch";
import { stylesErp, paises  } from '../../../helpers'
import Select from 'react-select'

const defaultVal = (options, valor) =>{
  return options.filter(item =>
      item.value === valor
    )

}
function EditorialForm () {     
  const dispatch = useDispatch()  
  const item = useSelector(state => state.editoriales.item)  
       
  const changeHandler = event => {    
  const { name, value } = event.target    
   dispatch(crudActions.changeValue('EDITORIALES_CHANGE',name,value))  
 }

  const paisHandler = prop => event => { 
  const { value } = event ? event : '0'  
    dispatch(crudActions.changeValue('EDITORIALES_CHANGE',prop,value))
  }



const submitHandle = event => {       
    event.preventDefault()    
    if(item.id)
    {
      
      dispatch(crudActions.putList('EDITORIALES_ADD','editoriales',item))            
    }else{
      dispatch(crudActions.createList('EDITORIALES_ADD','editoriales',item))      
    }    
 }



         
  return (    
      <div className="herramientas">                 
        <Row>
          <Col md={12}>
            <Form onSubmit={ submitHandle}>   
            <h5>Datos </h5>
            <div className="sub-form">              
              <Row form>
                <Col md={2}>
                  <FormGroup>
                    <Label for="eId">Código</Label>
                    <Input type="text" name="id" id="eId" 
                           placeholder="codigo"  value={item.id || ''}
                           onChange={ (e) => changeHandler(e)} readOnly={true}/>    
                  </FormGroup>    
                </Col>
                <Col md={8}>
                  <FormGroup>
                    <Label for="eNombre">Nombre</Label>
                    <Input type="text" name="nombre" id="eNombre"  value={item.nombre || ''} 
                           onChange={ (e) => changeHandler(e)}  />
                  </FormGroup>   
                </Col>
                <Col md={2}>
                  <FormGroup>
                    <Label for="ePais">Pais</Label>
                     <Select                                                               
                          defaultValue={paises[0]}
                          name="pais"    
                          id="pais"                    
                          options={paises}      
                          isClearable={true}                          
                          value={defaultVal(paises,item.pais)} 
                          onChange={ paisHandler('pais')}                           
                          />
                  </FormGroup>   
                </Col>
              </Row>


              <Row form>                
                <Col md={9}>
                  <FormGroup>
                    <Label for="eDireccion">Dirección</Label>
                    <Input type="text" name="direccion" id="eDireccion"  value={item.direccion || ''} onChange={ changeHandler}  />
                  </FormGroup>   
                </Col>
                <Col md={3}>
                  <FormGroup>
                      <Button 
                        type="submit"
                        className={item.id ?"btn-md btn-warning mt-4" : "btn-md btn-info mt-4"}>
                        <FontAwesomeIcon icon={faSave} />  
                            {' '} {item.id ? " Actualizar" : " Guardar"}
                      </Button>        
                  </FormGroup>    
                </Col>
              </Row>
          </div>   
        </Form>    
      </Col>          
      </Row>  
      </div>            
  );
}

export default EditorialForm