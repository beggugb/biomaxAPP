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

import AlumnosTable from './components/AlumnosTable'
import AlumnosSearch from './components/AlumnoSearch'
import AlumnoForm from './components/AlumnoForm'

function AlumnosView () {     
  const dispatch = useDispatch()    
  const { modalView } = useSelector(state => state.alumnos)

  const toggleModalView = (item) => {    
    let est = modalView === true ? false : true;             
    dispatch({type:'ALUMNOS_VIEW',view:est})                
  };

  useEffect(() =>{                    
    return () =>{             
        dispatch(crudActions.setReset('ALUMNOS_RESET'))                       
    };
  }, []);  
  return (
    <div className="content">     
      <div className="main-contenido">   
        
        <h6 className="ml-2 mt-2">Alumnos</h6>
        <AlumnosSearch/>
        <AlumnosTable/>
        
        <Modal isOpen={modalView} toggle={toggleModalView}>
          <Button className="btn-view btn-danger"  onClick={() => toggleModalView()} >
            <FontAwesomeIcon icon={faTimes} />
          </Button>
          <ModalBody>
            <AlumnoForm/>  
          </ModalBody>
        </Modal>

      </div>
    </div> 
  );
}

export default AlumnosView