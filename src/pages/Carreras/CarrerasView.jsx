import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { crudActions } from '../../actions/crud.actions'

import CarreraTable from './components/CarreraTable'
import CarreraForm from './components/CarreraForm'

function CarrerasView () {     
  const dispatch = useDispatch()
  
  useEffect(() =>{        
    return () =>{             
        dispatch(crudActions.setReset('CARRERAS_RESET'))               
    };
  }, [dispatch]);
  
  return (
    <>         
    <CarreraForm/>
    <CarreraTable/>
    </> 
  );
}

export default CarrerasView