import { combineReducers } from "redux";
import { reducer as toastrReducer} from 'react-redux-toastr'
import { users } from "./users.reducers";
import { usuarios } from "./usuarios.reducers";
import { tareas } from "./tareas.reducers";
import { procesos } from "./procesos.reducers";
import { libros } from "./libros.reducers";
import { deweys } from "./deweys.reducers";
import { editoriales } from "./editoriales.reducers";
import { carreras } from "./carreras.reducers";
import { empresas } from "./empresas.reducers";
import { informes } from "./informes.reducers";
import { alumnos } from "./alumnos.reducers";
import { movimientos } from "./movimientos.reducers";

const rootReducer = combineReducers({
  users,
  empresas,
  movimientos,
  libros,  
  alumnos,
  usuarios,
  carreras,
  deweys,
  editoriales,
  informes,
  toastr: toastrReducer
});

export default rootReducer;
