import React,{ useEffect}  from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { crudActions } from '../../../actions'
import {  
  Row,Col,Button, Form, FormGroup, Input, Label, FormText
} from "reactstrap"
import { stylesErp, paises  } from '../../../helpers'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave } from "@fortawesome/free-solid-svg-icons";
import DatePicker from 'react-date-picker';
import Select from 'react-select'
import { format } from "date-fns";
import AlumnoImagen from './AlumnoImagen'
import CarrerasSelect from '../../Carreras/components/CarrerasSelect'

const defaultVal = (options, valor) =>{
  return options.filter(item =>
      item.value === valor
    )

}

function AlumnoForm () {     
  const dispatch = useDispatch()   
  const item = useSelector(state => state.alumnos.item)    
  const changeHandler = event => {    
  const { name, value } = event.target  
   dispatch(crudActions.changeValue('ALUMNOS_CHANGE',name,value))  
 }

 const changesHandler = prop => event => {                     
    const { value } = event ? event : '' 
    dispatch(crudActions.changeValue('ALUMNOS_CHANGE',prop,value))  

   
    
 }

  const dateHandler = prop => event => {                         
    let dd = format(event, "yyyy/MM/dd")
    dispatch(crudActions.changeValue('ALUMNOS_CHANGE','fnacimiento',dd))      
  }


 const paisHandler = prop => event => { 
  const { value } = event ? event : '0'  
  dispatch(crudActions.changeValue('ALUMNOS_CHANGE',prop,value))
}

const submitHandle = event => {       
    event.preventDefault()        
    if(item.id)
    {
      dispatch(crudActions.putUnit('alumnos',item))            
    }else{
      dispatch(crudActions.createUnit('ALUMNOS_ADD','alumnos',item))      
    }    
 }

 useEffect(() =>{          
      console.log('cargaFormClientes')         
    return () =>{             
        dispatch({type:'ALUMNOS_RESET_ITEM'})               
        dispatch(crudActions.getData('ALUMNOS_DATA','alumnos',1, 12, 'nombre','ASC'))
        console.log('descargar cargaFormClientes') 

    };
  }, []);

 return (    
      <div className="herramientas">                 
        <Row>
          <Col md={9}>
            <Form onSubmit={ submitHandle}>   
            <h5>Datos de contanto </h5>
            <div className="sub-form">              
              <Row form>
                <Col md={12}>
                  <FormGroup>
                    <Label for="eNombre">Nombres</Label>
                    <Input type="text" name="nombre" id="eNombre" placeholder="nombre"  value={item.nombre || ''}
                      onChange={changeHandler} required/>    
                  </FormGroup>    
                </Col>                
              </Row>
               <Row form>                                
                <Col md={4}>
                  <FormGroup>
                    <Label for="eCodigo">Código</Label>
                    <Input type="text" name="codigo" id="eCodigo"  value={item.codigo || ''} onChange={ changeHandler}  />
                  </FormGroup>   
                </Col>   
                <Col md={8}>
                  <FormGroup>
                    <Label for="eCarreras">Carrera</Label>
                    <CarrerasSelect/>
                  </FormGroup>    
                </Col>             
              </Row>
              
              <Row form>                
                <Col md={4}>
                  <FormGroup>
                    <FormGroup>
                    <Label for="eTelefono">Teléfono</Label>
                    <Input type="text" name="telefono" id="eTelefono"  value={item.telefono || ''} onChange={ changeHandler}  />    
                  </FormGroup>  
                  </FormGroup>   
                </Col>
                <Col md={8}>
                    <FormGroup>
                    <Label for="eEmail">Email</Label>
                    <Input type="text" name="email" id="eEmail"  value={item.email || ''} onChange={ changeHandler}  />    
                  </FormGroup>  
                </Col>
              </Row>

      
            <Button 
              type="submit"
              className={item.id ?"btn-md btn-warning mt-2" : "btn-md btn-info mt-2"}>
              <FontAwesomeIcon icon={faSave} />  
              {' '} {item.id ? " Actualizar" : " Guardar"}
            </Button>
          </div>   
        </Form>    
      </Col>


          {item.id ? 
          <Col md={3} >                          
              <AlumnoImagen/>
          </Col>: null
          }            
        </Row>  
      </div>               
  );
}

export default AlumnoForm