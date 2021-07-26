import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { crudActions, tpvActions } from '../../../actions'
import {  
  Row,
  Col,
  Table,
  Button, Form, FormGroup, Input, Label
} from "reactstrap"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faSave, faTimes, faPlus, faArrowRight } from "@fortawesome/free-solid-svg-icons";

function add_day(dt, n) 
 {

   return new Date(dt.setDate(dt.getDate() + n));      
 }

  function getFecha(today) 
 {
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    var tt = yyyy + '-' + mm + '-' + dd;    
    return tt
 }   

function LibrosSearch () {     
  const dispatch = useDispatch()
  const { data }= useSelector(state => state.libros)
  const { items, cantidadTotal }= useSelector(state => state.movimientos)
  const user = JSON.parse(localStorage.getItem('user'))  
  const alumno = useSelector(state => state.alumnos.item)
  const [item, setItem] = useState({
    "titulo":"",
    "autor":""
  });
  const [view,setView] = useState(false)

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
      setView(false)
      setItem({
    "titulo":"",
    "autor":""
  })

  }

  const changeHandler = event => {    
  const { name, value } = event.target  
  setItem({
    ...item,
    [name]: value
  })  
 }



 const submitHandle = event => {       
    event.preventDefault()    
    dispatch(crudActions.searchListu('LIBROS_DATA','libros',item))  
    setView(true)
 }


 const submitHandles = () => {           
    let dat = new Date()    
    let dato = {}        
    dato.usuarioId = user.id  
    dato.fechaPrestamo = getFecha(dat)
    dato.fechaPrevista = add_day(dat,5)
    dato.fechaDevolucion = add_day(dat,5)
    dato.estado = true
    dato.estudianteId = alumno.id   
    dato.tipo = 'prestamo'

    let dating = {}
    dating.item = dato
    dating.items = items
    dispatch(tpvActions.pagar(dating))     
    dispatch({type:'MOVIMIENTOS_RESET_ITEMS'})     
    
 }
          
  return (                                      
            <>
            <Row>              
              <Col md="12" className="barra">
                <Form onSubmit={ submitHandle}>     
                  <Row form>
                    <Col md={10}>
                      <FormGroup>                    
                        <Input type="text" name="titulo" placeholder="...introduzca busqueda" 
                               id="titulo"  value={item.titulo || ''}  onChange={changeHandler} />
                      </FormGroup>
                    </Col>
                    <Col md={2}>
                      <Button className="btn-rd btn-info ">
                       <FontAwesomeIcon icon={faSearch} />                          
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row> 
        
            {view === true ? 
            <Row>                          
              <Col className="resus">
                <Table className="table-simple">                  
                  <tbody>
                      {data.map((item) => (
                          <tr key={item.id} onClick={() => {add(item)}}>                                                  
                            <td>{item.titulo}</td>                                                   
                          </tr>  
                          ))}
                  </tbody>        
                </Table>    
              </Col>              
            </Row>  : null
          }  

          <Row>
            <Col>
              <Button 
              type="button"
              onClick={() => {submitHandles()}}
              className={item.id ?"btn-md btn-warning mt-2" : "btn-md btn-info mt-2"}>
              <FontAwesomeIcon icon={faSave} />  
              {' '} {item.id ? " Actualizar" : " Guardar"}
            </Button>
            </Col> 
          </Row>
        
      </>  
                                                 
  );
}

export default LibrosSearch