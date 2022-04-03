import { combineReducers } from "redux";
import genreReducer from "./Reducer/genreReducer";
import musicReducer from "./Reducer/musicReducer";
import trackReducer from "./Reducer/trackReducer";


const rootReducer = combineReducers({
  music:musicReducer,
  genre:genreReducer,
  track:trackReducer,
});

export default rootReducer;
