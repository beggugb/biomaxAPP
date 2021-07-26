const initialState = {
    data: [],
    pagina: 0,
    paginas: 0,
    total: 0,
    item:{
      id:'',
      nombre:'',
      codigo:'',
      pais:'Argentina'
    },   
  };
  
export function carreras(state = initialState, action) {
    switch (action.type) {
      case "CARRERAS_CHANGE":
        return {          
          ...state,
          item:
          {...state.item,
            [action.props]: action.value
          }
        };
      case "CARRERAS_ADD":
        return {
          ...state,
          data: action.response.data,
            pagina: action.response.pagina,
            paginas: action.response.paginas,
            total: action.response.total,
            item: initialState.item
        };
      case "CARRERAS_ITEM":
          return {
            ...state,
            item: action.response
          };  
      case "CARRERAS_DATA":
          return {
            ...state,
            data: action.response.data,
            pagina: action.response.pagina,
            paginas: action.response.paginas,
            total: action.response.total
          };
      case "CARRERAS_LISTA":
            return {
              ...state,
              data: action.response
            };                
      case "CARRERAS_RESET":
        return {
          ...state,
          item: initialState.item,
          data: [],
          pagina: 0,
          paginas: 0,
          total: 0
        };
      default:
        return state;
    }
  }
  