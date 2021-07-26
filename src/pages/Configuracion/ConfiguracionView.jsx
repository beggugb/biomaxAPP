import React, { useCallback, useState,useEffect } from 'react';
import { useDispatch } from 'react-redux'
import {  
  Row,
  Col,  
  Nav,
  NavItem,
  NavLink
} from "reactstrap"
import classnames from 'classnames';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faUsers } from "@fortawesome/free-solid-svg-icons";

import EmpresaForm from '../Configuracion/components/EmpresaForm'
import UsuariosView from '../Usuarios/UsuariosView'
import EditorialesView from '../Editoriales/EditorialesView'
import CarrerasView from '../Carreras/CarrerasView'

function ConfiguracionView () {     
  const dispatch = useDispatch()
  const [mount, setMount] = useState(false)   
  const [activeTab, setActiveTab] = useState('1');
  const [component, setComponent] = useState('datos')
  
  const getComponent = useCallback((name, tab) =>{    
    if(activeTab !== tab) setActiveTab(tab);
    switch(name){
      case 'datos':
      setComponent(<><EmpresaForm/></>)      
      break;
      case 'editoriales':
      setComponent(<EditorialesView/>)
      break;
      case 'carreras':
      setComponent(<CarrerasView/>)
      break;
      case 'usuarios':
      setComponent(<UsuariosView/>)
      break;      
      break;      
      default:
        console.log('nan')
      break;  
    }    
  },[activeTab])

  useEffect(() =>{    
    if(!mount) {
      setMount(true);
      getComponent('datos','1')      
   }
    return () =>{             
        /*dispatch(crudActions.getReset('CLIENTES_RESET'))       */        
    };
  }, []);
  
  return (
    <div className="content">     
    <div className="main-contenido"> 
      <h6 className="ml-2 mt-2">Configuración</h6>
      <Nav tabs>                
        <NavItem>
          <NavLink
              className={classnames({ active: activeTab === '1' })}            
              onClick={() => { getComponent('datos', '1',1)}}>
              <FontAwesomeIcon icon={faChevronDown} />   
              {' '} Datos Iniciales
          </NavLink>
        </NavItem>
        
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { getComponent('editoriales', '2',1)}}>
          <FontAwesomeIcon icon={faChevronDown} />   
          {' '} Editoriales
          </NavLink>  
        </NavItem>

        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '3' })}
            onClick={() => { getComponent('carreras', '3',1)}}>
          <FontAwesomeIcon icon={faChevronDown} />   
          {' '} Carreras
          </NavLink>  
        </NavItem>
        
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '4' })}
            onClick={() => { getComponent('usuarios', '4',1)}}>
          <FontAwesomeIcon icon={faChevronDown} />   
          {' '} Usuarios
          </NavLink>  
        </NavItem>      

      </Nav>
      {component}      
    </div>
  </div> 
  );
}

export default ConfiguracionView