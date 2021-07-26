const initialState = {
    data: [],
    pagina: 0,
    paginas: 0,
    total: 0,
    modalView: false,
    item:{
      codigo: '',
      nombre: '',      
      telefono: '',  
      email:'',    
      estado: true,      
      habilitado: true,
      carreraId:0,
      Carrera:{
        id: '',
        nombre:''
      }
    }    
  };
  
export function alumnos(state = initialState, action) {
    switch (action.type) {
      case "ALUMNOS_VIEW":
        return {
          ...state,
          modalView: action.view
        }; 
      case "ALUMNOS_CHANGE":
        return {          
          ...state,
          item:
          {...state.item,
            [action.props]: action.value
          }
        };
      case "ALUMNOS_ADD":
        return {
          ...state,
          item: action.response.alumno
        };
      case "ALUMNOS_ITEM":
          return {
            ...state,
            item: action.response
          };  
      case "ALUMNOS_DATA":
          return {
            ...state,
            data: action.response.data,
            pagina: action.response.pagina,
            paginas: action.response.paginas,
            total: action.response.total
          };            
      case "ALUMNOS_RESET":
        return {
          ...state,
          item: initialState.item,
          data: [],
          pagina: 0,
          paginas: 0,
          total: 0
        };
      case "ALUMNOS_RESET_ITEM":
        return {
          ...state,
          item: initialState.item          
        };  
      default:
        return state;
    }
  }
  