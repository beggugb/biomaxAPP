const initialState = {
    data: [],
    pagina: 0,
    paginas: 0,
    total: 0,
    modalView: false,
    modalPdf: false,
     item:{
        id: '',
        titulo: '',
        subTitulo: '',
        isbn: '',
        nroCopias: 0,
        nroTomos: 0,
        anio: '',
        filename: 'default.jpg',
        codigo: '',
        nroPaginas: 0,
        origen: 'Compra',
        autor: '',
        subAutor: '',
        edicion: '',
        clasificacion:'',
        dewey: '',
        cutter: '',
        pais:'',
        tipo: 'Libro',
        estado: true,
        disponible: true,            
        deweyId: 1,
        cutterId: 148,
        pais:'',
        editorialId: 1,
        carreraId: 22,
        observaciones: '',
        tags:'',
        Carrera: {
          id: 0,
          nombre: ''
        },
        Editorial: {
          id: 0,
          nombre: ''
        },
        Dewey: {
          id: 0,
          label: '',
          codigo: ''
        },
        Editorial: {
          id: 0,
          codigo: ''
        },
    },    
  };
  
export function libros(state = initialState, action) {
    switch (action.type) {
      case "LIBROS_VIEW":
        return {
          ...state,
          modalView: action.view
        }; 
      case "LIBROS_VIEW_PDF":
        return {
          ...state,
          modalPdf: action.pdf
        };   
      case "LIBROS_CHANGE":
        return {          
          ...state,
          item:
          {...state.item,
            [action.props]: action.value
          }
        };
      case "LIBROS_ADD":
        return {
          ...state,
          item: action.response
        };
      case "LIBROS_ITEM":
          return {
            ...state,
            item: action.response
          };  
      case "LIBROS_DATA":
          return {
            ...state,
            data: action.response.data,
            pagina: action.response.pagina,
            paginas: action.response.paginas,
            total: action.response.total
          };            
      case "LIBROS_RESET":
        return {
          ...state,
          item: initialState.item,
          data: [],
          pagina: 0,
          paginas: 0,
          total: 0
        };
      case "LIBROS_RESET_ITEM":
        return {
          ...state,
          item: initialState.item          
        };
      case "LIBROS_RESET_DATA":
        return {
          ...state,
          data: [],
          pagina: 0,
          paginas: 0,
          total: 0
        };    
      case "LIBROS_CUTTER":
        return {
          ...state,              
          item:
           {...state.item,                
             ['cutter']: action.response.codigo,
             ['cutterId']: action.response.id
           }         
        };    
      default:
        return state;
    }
  }
  