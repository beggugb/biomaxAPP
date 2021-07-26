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
  
export function editoriales(state = initialState, action) {
    switch (action.type) {
      case "EDITORIALES_CHANGE":
        return {          
          ...state,
          item:
          {...state.item,
            [action.props]: action.value
          }
        };
      case "EDITORIALES_ADD":
        return {
          ...state,
          data: action.response.data,
            pagina: action.response.pagina,
            paginas: action.response.paginas,
            total: action.response.total,
            item: initialState.item
        };
      case "EDITORIALES_ITEM":
          return {
            ...state,
            item: action.response
          };  
      case "EDITORIALES_DATA":
          return {
            ...state,
            data: action.response.data,
            pagina: action.response.pagina,
            paginas: action.response.paginas,
            total: action.response.total
          };
      case "EDITORIALES_LISTA":
            return {
              ...state,
              data: action.response
            };                
      case "EDITORIALES_RESET":
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
  