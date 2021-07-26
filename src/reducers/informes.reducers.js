const initialState = {
    libros: [],        
    consolidado: [], 
    movimientos:[],     
    data: [],    
    pagina: 0,
    paginas: 0,
    total: 0,    
    detalle:0

  };
  
export function informes(state = initialState, action) {
    switch (action.type) {      
      case "INFORMES_LIBROS":
        return {          
          ...state,
          detalle: action.response.detalle,
          libros: action.response.data,
          total: action.response.data.total
        };
      case "INFORMES_MOVIMIENTOS":
        return {          
          ...state,
          detalle: action.response.detalle,
          movimientos: action.response.data,
          total: action.response.data.total
        };         
      case "INFORMES_CONSOLIDADO":
        return {          
          ...state,
          detalle: action.response.detalle,
          consolidado: action.response.data,
          total: action.response.data.total
        };      

     case "INFORMES_RESET":
        return {
          ...state,
          libros: [],                    
          consolidado:[],
          movimientos:[],
          pagina: 0,
          paginas: 0,
          total: 0,
          desde:'2021-01-01',
          hasta:'2021-12-01',
          detalle:0
        };          
        
      default:
        return state;
    }
  }
  