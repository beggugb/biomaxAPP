import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { crudActions } from '../../actions/crud.actions'

import EditorialTable from './components/EditorialTable'
import EditorialForm from './components/EditorialForm'

function EditorialesView () {     
  const dispatch = useDispatch()
  
  useEffect(() =>{        
    return () =>{             
        dispatch(crudActions.setReset('EDITORIALES_RESET'))               
    };
  }, [dispatch]);
  
  return (
    <>         
    <EditorialForm/>
    <EditorialTable/>
    </> 
  );
}

export default EditorialesView