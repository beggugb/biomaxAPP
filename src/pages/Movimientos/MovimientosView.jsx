import React,{ useEffect } from 'react';
import {  useDispatch, useSelector } from 'react-redux'
import { membresiaActions, cajaActions, crudActions } from '../../actions'
import {  
  Row,
  Modal,
  Button,
  ModalBody,
  Col  
} from "reactstrap"
import LibrosSearch from '../Libros/components/LibrosSearch'
import ListaPrestamo from '../Movimientos/components/ListaPrestamo'
import MovimientosTable from '../Movimientos/components/MovimientosTable'
import MovimientoItemsDetalle from './components/MovimientoItemsDetalle'


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";



function MovimientosView ({...props}) { 
   const dispatch = useDispatch()
   const { item, items, modalView } = useSelector(state => state.movimientos)
   let us = JSON.parse(localStorage.getItem('user'))

    const toggleModalView = () => {    
      let est = modalView === true ? false : true;        
        /*if(item){
          dispatch(cajaActions.getItem('MOVIMIENTOS_ITEMS_DATA','movimientos',item.id))
        } */       
        dispatch(cajaActions.viewModal('MOVIMIENTOS_VIEW',est))                
    };

   useEffect(() =>{        
        const {  match: { params }} = props;              
        dispatch(crudActions.getItem('ALUMNOS_ITEM','alumnos',params.alumnoId))  
        dispatch(membresiaActions.getDetalle('MOVIMIENTOS_DATA','movimientos',1,12, params.alumnoId)) 
          
     return () =>{            
        dispatch(crudActions.setReset('MOVIMIENTOS_RESET'))
    };
  }, []);
   
  return (
    <div className="content">     
      <div className="main-contenido"> 
      <Row>
        <Col className="tabss">
          
        </Col>
      </Row>
      
      <div className="tpv">        
       <Row>
          <Col md="7" className="tpvlista">
           <LibrosSearch/>
           <ListaPrestamo/>
          </Col>          
          <Col md="5" className="tpvlista">
           <MovimientosTable/>
          </Col>          
        </Row>   
      </div>

      <Modal isOpen={modalView} toggle={toggleModalView}>
        <Button className="btn-view btn-danger"  onClick={() => toggleModalView()} >
          <FontAwesomeIcon icon={faTimes} />
        </Button>
          <ModalBody>
              <MovimientoItemsDetalle
                user={us}          
                caja={item}
                data={items}
              />    
          </ModalBody>
      </Modal>

      </div>
    </div> 
  );
}

export default MovimientosView