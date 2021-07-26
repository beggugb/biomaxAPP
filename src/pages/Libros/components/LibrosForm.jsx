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
import LibroImagen from './LibroImagen'

import SelectOrigenes from './SelectOrigenes'
import SelectClasificacion from './SelectClasificacion'
import SelectDeweys from './SelectDeweys'
import SelectTipos from './SelectTipos'
import EditorialSelect from '../../Editoriales/components/EditorialSelect'
import CarreraSelect from '../../Carreras/components/CarreraSelect'


import Switch from 'react-switch'
const defaultVal = (options, valor) =>{
  return options.filter(item =>
      item.value === valor
    )

}

const tipos =  [{"value":"personal","label":"personal"},
                {"value":"empresarial","label":"empresarial"},];
const sexos =  [{"value":"masculino","label":"masculino"},
                {"value":"femenino","label":"femenino"},];                

function LibrosForm () {     
  const dispatch = useDispatch()   
  const item = useSelector(state => state.libros.item)    

  const changeHandler = event => {    
  const { name, value } = event.target  
   dispatch(crudActions.changeValue('LIBROS_CHANGE',name,value))  
 }

 const changesHandler = prop => event => {                     
    const { value } = event ? event : '' 
    dispatch(crudActions.changeValue('LIBROS_CHANGE',prop,value))  
    
 }



 const paisHandler = prop => event => { 
  const { value } = event ? event : '0'  
  dispatch(crudActions.changeValue('LIBROS_CHANGE',prop,value))
}

const submitHandle = event => {       
    event.preventDefault()        
    if(item.id)
    {
      dispatch(crudActions.putUnit('libros',item))            
    }else{
      dispatch(crudActions.createUnit('LIBROS_ADD','libros',item))           
    }    
    console.log(item) 
 }

 useEffect(() =>{          
      console.log('cargaFormClientes')         
    return () =>{             
        dispatch({type:'LIBROS_RESET_ITEM'})               
        dispatch(crudActions.getData('LIBROS_DATA','libros',1, 12, 'titulo','ASC'))
        console.log('descargar cargaFormClientes') 

    };
  }, []);

 return (    
      <div className="herramientas">                 
        <Row>
          <Col md={9}>
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
                <Col md={10}>
                  <FormGroup>
                    <Label for="eTitulo">Título</Label>
                    <Input type="text" name="titulo" id="eTitulo"  value={item.titulo || ''} 
                           onChange={ (e) => changeHandler(e)}  />
                  </FormGroup>   
                </Col>
              </Row>
              <Row form>                
                <Col md={6}>
                  <FormGroup>
                    <Label for="autor">Autor</Label>
                    <Input type="text" name="autor" id="autor"  value={item.autor || ''} 
                           onChange={ (e) => changeHandler(e)}  />
                  </FormGroup>   
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="esubAutor">Autor 2</Label>
                    <Input type="text" name="esubAutor" id="subAutor"  value={item.subAutor || ''} 
                           onChange={ (e) => changeHandler(e)}  />    
                  </FormGroup>    
                </Col>
              </Row>

              <Row form>
                <Col md={5}>
                  <FormGroup>
                    <Label for="eEditorial">Editorial</Label>
                    <EditorialSelect/>
                  </FormGroup>   
                </Col>  
                <Col md={4}>
                  <FormGroup>
                    <Label for="eCarrrera">Carrera</Label>
                    <CarreraSelect/>
                  </FormGroup>    
                </Col>                                
                <Col md={3}>
                  <FormGroup>
                    <Label for="eOrigen">Origen</Label>
                    <SelectOrigenes/>
                  </FormGroup>   
                </Col> 
              </Row>

              <Row form>
                <Col md={5}>
                  <FormGroup>
                    <Label for="eClasificacion">Clasificción</Label>
                    <SelectClasificacion/>
                  </FormGroup>    
                </Col>                
                <Col md={4}>
                  <FormGroup>
                    <Label for="eDewey">Dewey</Label>
                    <SelectDeweys/>
                  </FormGroup>   
                </Col>    
                <Col md={3}>
                  <FormGroup>
                    <Label for="eTipo">Tipo</Label>
                    <SelectTipos/>
                  </FormGroup>    
                </Col>  
              </Row>
              
              <Row form>                
                <Col md={5}>
                  <FormGroup>
                    <Label for="isbn">ISBN</Label>
                    <Input type="text" name="isbn" id="isbn"  value={item.isbn || ''} 
                           onChange={ (e) => changeHandler(e)}  />
                  </FormGroup>   
                </Col>                
                <Col md={4}>
                  <FormGroup>
                    <Label for="eEdicion">Edición</Label>
                    <Input type="text" name="edicion" id="edicion"  value={item.edicion || ''} 
                           onChange={ (e) => changeHandler(e)}  />    
                  </FormGroup>    
                </Col>
                <Col md={3}>
                  <FormGroup>
                    <Label for="eAnio">Año</Label>
                    <Input type="text" name="anio" id="anio"  value={item.anio || ''} 
                           onChange={ (e) => changeHandler(e)}  />    
                  </FormGroup>    
                </Col>
              </Row>

               <Row form>                
                <Col md={6}>
                  <FormGroup>
                    <Label for="ncopias">País</Label>
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
                <Col md={2}>
                  <FormGroup>
                    <Label for="ncopias"># Copias</Label>
                    <Input type="number" name="nroCopias" id="nroCopias"  value={item.nroCopias || ''} 
                           onChange={ (e) => changeHandler(e)}  />
                  </FormGroup>   
                </Col>
                <Col md={2}>
                  <FormGroup>
                    <Label for="nroTomos"># Tomos</Label>
                    <Input type="number" name="nroTomos" id="nroTomos"  value={item.nroTomos || ''} 
                           onChange={ (e) => changeHandler(e)}  />    
                  </FormGroup>    
                </Col>
                <Col md={2}>
                  <FormGroup>
                    <Label for="nroPaginas"># Páginas</Label>
                    <Input type="number" name="nroPaginas" id="nroPaginas"  value={item.nroPaginas || ''} 
                           onChange={ (e) => changeHandler(e)}  />    
                  </FormGroup>    
                </Col>
              </Row>




              <FormGroup>
                <Label for="eObservaciones">Observaciones</Label>
                <Input type="text" name="observaciones" id="eObservaciones"  value={item.observaciones || ''} onChange={ changeHandler}  />
              </FormGroup>   
              <FormGroup>
                <Label for="eTags">Tags</Label>
                <Input type="text" name="tags" id="eTags"  value={item.tags || ''} onChange={ changeHandler}  />
              </FormGroup>   
      
            <Button 
              type="submit"
              className={item.id ?"btn-md btn-warning mt-2" : "btn-md btn-info mt-2"}>
              <FontAwesomeIcon icon={faSave} />  
              {' '} {item.id ? " Actualizar" : " Guardar"}
            </Button>
          </div>   
        </Form>    
      </Col>
      
        <Col md={3} >                          
          {item.id ? 
            <LibroImagen/>
          : null  }
          <div className="clasificacion">   
            <p className="titulo">Ubicación</p>                       
            <p className="dewey">{ item.dewey }</p>              
            <p className="cutter">{ item.autor.substring(0,1).toUpperCase() + item.cutter +  item.titulo.substring(0,1).toLowerCase() }</p>              
          </div>
        </Col>     
      </Row>  
      </div>               
  );
}

export default LibrosForm