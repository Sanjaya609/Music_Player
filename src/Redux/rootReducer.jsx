import { combineReducers } from "redux";
import genreReducer from "./Reducer/genreReducer";
import musicReducer from "./Reducer/musicReducer";


const rootReducer = combineReducers({
  music:musicReducer,
  genre:genreReducer,
});

export default rootReducer;
