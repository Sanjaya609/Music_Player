import { GENRE_LIST_FETCHING, GENRE_LIST_SUCCESS } from "../Constants";

const initialState={
    genre:[],
    isLoading: false,
    preview:"",
    isPlaying:false,
    isMute:false,
};
const genreReducer=(state=initialState,action)=>{
    switch (action.type){
        case GENRE_LIST_FETCHING:
      return {
        ...state,
        isLoading: true,
      };
    case GENRE_LIST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        genre: action.payload,
      };
    default:
      return state;
    }
}
export default genreReducer;