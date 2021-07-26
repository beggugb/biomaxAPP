import { informeService } from "../services";
import {toastr} from 'react-redux-toastr'
export const informeActions = {  
  informes
};

function informes(xredux, payload, dato) {
  return (dispatch) => {    
    informeService
      .informes(payload, dato)
      .then((response) => {         
        console.log(response)
        dispatch(inf(xredux, response.result));                
      })
      .catch((err) => {
        toastr.error('Login', err) 
      });
  };
}

export function inf(redu, response, desde, hasta) {
  
  return {
    type: redu,
    response: response

  };
}


/*--------------------------------------------------------------------*/