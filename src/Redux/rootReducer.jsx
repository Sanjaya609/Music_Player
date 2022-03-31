import { combineReducers } from "redux";
import musicReducer from "./Reducer/musicReducer";


const rootReducer = combineReducers({
  music:musicReducer,

});

export default rootReducer;