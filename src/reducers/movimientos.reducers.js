const initialState = {
    data: [],
    items: [],
    devoluciones:[],
    cantidadTotal:0,
    pagina: 0,
    paginas: 0,
    total: 0,
    modalView: false,
    item:{
      id:'',
      fechaPrestamo:'',
      fechaPrevista:'',
      fechaDevolucion:'',
      estado:false,
      observaciones:'',
      estudianteId:0,
      libroId:0,
      usuarioId:0,
      Estudiante:{
        id:'',
        nombre:''
      } 
    },   
  };
  
export function movimientos(state = initialState, action) {
    switch (action.type) {
        case "DEVOLUCIONES_DATA":
          return {
            ...state,
            devoluciones: action.response.data,
            pagina: action.response.pagina,
            paginas: action.response.paginas,
            total: action.response.total
          };
       case "MOVIMIENTOS_DIRECTA_LISTA": 
        return {            
         ...state,
          items: action.items,          
          cantidadTotal: action.cantidad      
        }; 
       case "MOVIMIENTOS_ITEMS_DATAS": 
        return {            
         ...state,
          items: action.response
        }; 
      case "MOVIMIENTOS_CHANGE":
        return {          
          ...state,
          item:
          {...state.item,
            [action.props]: action.value
          }
        };
      case "MOVIMIENTOS_ADD":
        return {
          ...state,
            data: action.response.data,
            pagina: action.response.pagina,
            paginas: action.response.paginas,
            total: action.response.total,
            item: initialState.item
        };
      case "MOVIMIENTOS_ITEM":
          return {
            ...state,
            item: action.response
          };  
      case "MOVIMIENTOS_DATA":
          return {
            ...state,
            data: action.response.data,
            pagina: action.response.pagina,
            paginas: action.response.paginas,
            total: action.response.total
          };
      case "MOVIMIENTOS_LISTA":
            return {
              ...state,
              data: action.response
            }; 
      case "MOVIMIENTOS_VIEW":
        return {
          ...state,
          modalView: action.view
        };                      
      case "MOVIMIENTOS_RESET":
        return {
          ...state,
          item: initialState.item,
          data: [],
          items: [],
          pagina: 0,
          paginas: 0,
          total: 0
        };
      case "MOVIMIENTOS_RESET_ITEMS":
        return {
          ...state,
          item: initialState.item,          
          items: [],          
          cantidadTotal:0
        };
      case "MOVIMIENTOS_RESET_DATA":
        return {
          ...state,          
          data: [],
          items: [],
          pagina: 0,
          paginas: 0,
          total: 0,
          cantidadTotal:0
        };  
      default:
        return state;
    }
  }
  