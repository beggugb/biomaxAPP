import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { crudActions } from '../../actions/crud.actions'
import {    
  Modal,
  ModalBody,
  Button
} from "reactstrap"


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import LibrosTable from './components/LibrosTable'
import LibrosSearch from './components/LibroSearch'
import LibrosForm from './components/LibrosForm'
import LibroDetalle from  './components/LibroDetalle'

function LibrosView () {     
  const dispatch = useDispatch()    
  const { modalView, modalPdf } = useSelector(state => state.libros)

  const toggleModalView = (item) => {    
    let est = modalView === true ? false : true;             
    dispatch({type:'LIBROS_VIEW',view:est})          
  };

  const toggleModalViews = (item) => {    
    let est = modalPdf === true ? false : true;             
    dispatch({type:'LIBROS_VIEW_PDF',pdf:est})          
  };



  useEffect(() =>{                    
    return () =>{             
        dispatch(crudActions.setReset('LIBROS_RESET'))                       
    };
  }, []);  
  return (
    <div className="content">     
      <div className="main-contenido">   
        
        <h6 className="ml-2 mt-2">Bibliografia</h6>
        <LibrosSearch/>
        <LibrosTable/>
        
        <Modal isOpen={modalView} toggle={toggleModalView}>
          <Button className="btn-view btn-danger"  onClick={() => toggleModalView()} >
            <FontAwesomeIcon icon={faTimes} />
          </Button>
          <ModalBody>          
           <LibrosForm/>                
          </ModalBody>
        </Modal>

        <Modal isOpen={modalPdf} toggle={toggleModalViews}>
          <Button className="btn-view btn-danger"  onClick={() => toggleModalViews()} >
            <FontAwesomeIcon icon={faTimes} />
          </Button>
          <ModalBody>          
           <LibroDetalle/>                
          </ModalBody>
        </Modal>

      </div>
    </div> 
  );
}

export default LibrosView