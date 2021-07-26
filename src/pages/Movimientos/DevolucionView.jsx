import React from 'react';
import {  useDispatch, useSelector } from 'react-redux'
import { cajaActions } from '../../actions'
import {    
  Modal,
  Button,
  ModalBody  
} from "reactstrap"
import DevolucionSearch from './components/DevolucionSearch'
import DevolucionTable from './components/DevolucionTable'


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";



function DevolucionView ({...props}) { 
   const dispatch = useDispatch()
   const { modalView } = useSelector(state => state.movimientos)
   
    const toggleModalView = () => {    
      let est = modalView === true ? false : true;        
        /*if(item){
          dispatch(cajaActions.getItem('MOVIMIENTOS_ITEMS_DATA','movimientos',item.id))
        } */       
        dispatch(cajaActions.viewModal('MOVIMIENTOS_VIEW',est))                
    };


   
  return (
      <div className="content">     
      <div className="main-contenido">   
        
        <h6 className="ml-2 mt-2">Alumnos</h6>
        <DevolucionSearch/>
        <DevolucionTable/>
        
        <Modal isOpen={modalView} toggle={toggleModalView}>
          <Button className="btn-view btn-danger"  onClick={() => toggleModalView()} >
            <FontAwesomeIcon icon={faTimes} />
          </Button>
          <ModalBody>
              
          </ModalBody>
        </Modal>

      </div>
    </div>  
  );
}

export default DevolucionView