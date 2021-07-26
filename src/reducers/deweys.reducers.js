const initialState = {
     data:[],    
    pagina:0,
    paginas:0,
    total:0,
    item:{
      id:'',
      codigo:'',
      label:'',
      grupo:''
    },
    items:[]   
  };
  
export function deweys(state = initialState, action) {
    switch (action.type) {
      case 'DEWEY_DATA':
      return {                   
        ...state,
        data: action.response.data,
        pagina:action.response.pagina,
        paginas:action.response.paginas,
        total:action.response.total
      }; 
    case 'DEWEY_LISTA':
      return {                   
        ...state,
        items: action.response
      };
    case 'DEWEY_CHANGE':
      return {
        ...state,              
          item:
           {...state.item,                
             [action.props]: action.value 
           }
      };  
    case 'DEWEY_RESET':
      return {                   
        ...state,
        data: [],
        items: [],
        item: initialState.item
      };     
      
      default:
        return state;
    }
  }
  