import { crudService } from "../services";
import {toastr} from 'react-redux-toastr'
export const crudActions = {  
 postData,
 getData,
 createList,
 createUnit,
 getItem,
 getLis,
 getList,
 searchList,
 searchLista,
 searchListu,
 setReset,
 changeValue,
 putUnit,
 putList,
 deleteList
};

function postData(xredux, payload, dato) {  
  return (dispatch) => {
    crudService
      .postList(payload, dato)
      .then((response) => {                                        
        dispatch(rList(xredux, response.result));                
      })
      .catch((err) => {
        toastr.error(payload, err)                       
      });
  };
}

function deleteList(xredux, payload, dato) { 
  return (dispatch) => {
    crudService
      .deleteList(payload, dato)
      .then((response) => {                                            
        dispatch(rList(xredux, response.result));    
        toastr.error(payload, 'Dato eliminado')       
     
      })
      .catch((err) => {        
        
      });
  };
}

function putList(xredux, payload, dato) {    
  return (dispatch) => {
    crudService
      .putList(payload, dato)
      .then((response) => {                                                 
        dispatch(rList(xredux, response.result));    
        toastr.success(payload, 'Dato actualizado')                          
      })
      .catch((err) => {
        
      });
  };
}

function getData(xredux, payload, page,num,prop,orden) {  
  return (dispatch) => {
    crudService
      .getData(payload, page,num,prop,orden)
      .then((response) => {                       
        dispatch(rList(xredux, response.result));
      })
      .catch((err) => {
        toastr.error(payload, err)         
      });
  };
}

function createList(xredux, payload, dato) {  
  return (dispatch) => {
    crudService
      .createList(payload, dato)
      .then((response) => {                          
        dispatch(rList(xredux, response.result));             
        toastr.success(payload, 'Dato creado')
      })
      .catch((err) => {
        toastr.error(payload, err)        
      });
  };
}

function getItem(xredux, payload, pky) {  
  return (dispatch) => {
    crudService
      .getItem(payload, pky)
      .then((response) => {    
        if(xredux === 'LIBROS_ITEM'){
          dispatch(rList('DEWEY_LISTA', response.deweys));
        }
        dispatch(rList(xredux, response.result));
      })
      .catch((err) => {
        toastr.error(payload, err)        
      });
  };
}

function searchList(xredux, payload, dato) {    
  return (dispatch) => {
    crudService
      .searchList(payload, dato)
      .then((response) => {                            
        dispatch(rList(xredux, response.result));        
      })
      .catch((err) => {        
        toastr.error(payload, err)
      });
  };
}

function searchLista(xredux, payload, dato) {    
  return (dispatch) => {
    crudService
      .searchLista(payload, dato)
      .then((response) => {                            
        dispatch(rList(xredux, response.result));        
      })
      .catch((err) => {        
        toastr.error(payload, err)
      });
  };
}

function searchListu(xredux, payload, dato) {    
  return (dispatch) => {
    crudService
      .searchListu(payload, dato)
      .then((response) => {                            
        dispatch(rList(xredux, response.result));        
      })
      .catch((err) => {        
        toastr.error(payload, err)
      });
  };
}

function getLis(xredux, payload) {  
  return (dispatch) => {
    crudService
      .getLis(payload)
      .then((response) => {               
        dispatch(rList(xredux, response.result));
      })
      .catch((err) => {
        toastr.error(payload, err)
      });
  };
}

function getList(xredux, payload, dato) {  
  return (dispatch) => {
    crudService
      .getList(payload, dato)
      .then((response) => {         
       console.log(response)              
        dispatch(rList(xredux, response.result));
      })
      .catch((err) => {
        toastr.error(payload, err)
      });
  };
}

function setReset(xredux) {  
  return {
    type: xredux
  };
}

function changeValue(xredux, props, values) {  
  return {
    type: xredux, props: props, value: values
  };
}

function putUnit(payload, dato) {  
  return (dispatch) => {
    crudService
      .putUnit(payload, dato)
      .then((response) => {      
        toastr.success(payload, 'Dato actualizado') 
      })
      .catch((err) => {
        toastr.success(payload, err) 
      });
  };
}

function createUnit(xredux, payload, dato) {  
  return (dispatch) => {
    crudService
      .createUnit(payload, dato)
      .then((response) => {          
        console.log(response)
        if(response.result){
          dispatch(rList(xredux, response.result));  
        }                              
        toastr.success(payload, 'Dato creado')       
      })
      .catch((err) => {       
        toastr.error(payload, err)       
      });
  };
}

export function rList(xredux, result) {     
  return {  
    type: xredux,
    response: result
  };
}


