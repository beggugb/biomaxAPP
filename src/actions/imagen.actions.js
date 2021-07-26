import { imagenService } from "../services";
import {toastr} from 'react-redux-toastr'
export const imagenActions = {  
  uploadLibro,
  uploadAlumno,
  uploadEmpresa,
  uploadArticulo
};

/*--------------------------------------------------------------------*/
function uploadArticulo(xredux, payload, data, datoId) {
  return (dispatch) => {    
    imagenService
      .uploadArticulo(payload, data, datoId)
      .then((response) => {       
       toastr.success(payload, 'Imagen cargada') 
      })
      .catch((err) => {        
       
      });
  };
}
/*--------------------------------------------------------------------*/
function uploadEmpresa(xredux, payload, data, datoId) {
  return (dispatch) => {    
    imagenService
      .uploadEmpresa(payload, data, datoId)
      .then((response) => {       
       toastr.success(payload, 'Imagen cargada') 
      })
      .catch((err) => {        
       
      });
  };
}
/*--------------------------------------------------------------------*/
function uploadLibro(xredux, payload, data, datoId) {
  return (dispatch) => {    
    imagenService
      .uploadLibro(payload, data, datoId)
      .then((response) => {       
        toastr.success(payload, 'Imagen Cargada')
      })
      .catch((err) => {        
       
      });
  };
}

/*--------------------------------------------------------------------*/
function uploadAlumno(xredux, payload, data, datoId) {
  return (dispatch) => {    
    imagenService
      .uploadAlumno(payload, data, datoId)
      .then((response) => {
       toastr.success(payload, 'Imagen cargada') 
      })
      .catch((err) => {
       
      });
  };
}
/*--------------------------------------------------------------------*/