import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { userActions } from '../../actions/user.actions'
import LoginForm from './components/LoginForm'
import {  
  Row,
  Col,
  Button
} from "reactstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import {    
  faEdit,
  faTags
} from "@fortawesome/free-solid-svg-icons";
function LoginView () {          
  const dispatch = useDispatch()    
  const [user, setUser] = useState({
    username:"",
    password:""
  })
  let token = JSON.parse(localStorage.getItem('token'))
  console.log(token)

    
  const handleChange = prop => event => {                         
    setUser({      
        ...user,
        [prop]: event.target.value
    })        
  } 

  const submitHandle = event => {       
    event.preventDefault()        
    dispatch(userActions.login(user))
 }
  
  return (    
    <div className="pos">
      <div className="contenedor">
         <img
          alt="..."
          className="avatari"
          src={require("../../assets/img/logo.png")}
        />
          <LoginForm
           submitHandle={submitHandle}
           handleChange={handleChange}
           username={ user.username }
           password={ user.password }
          />  
          <div className="about">        
            <div className="labout">
                <img
                  alt="..."
                  className="avataro"
                  src={require("../../assets/img/logob.png")}
                  />
                <p>beggu-bo.com</p>              
            </div>
                  
            <div className="rabout mt-3">
              <Link to={`/consultas`}>
                  <Button className={"btn btn-success btn-md"}>
                    Consultas
                  </Button>
              </Link>
          </div>        
      </div>   
    </div>
  </div>  
  );
}

export default LoginView