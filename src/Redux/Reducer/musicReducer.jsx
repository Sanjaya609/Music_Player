import { MUSIC_LIST_FETCHING,MUSIC_LIST_SUCCESS, PREVIEW_PLAYING} from "../Constants";

const initialState = {
  musics: [],
  isLoading: false,
  preview:"",
  isPlaying:false,
};

const musicReducer = (state = initialState, action) => {
  switch (action.type) {
    case MUSIC_LIST_FETCHING:
      return {
        ...state,
        isLoading: true,
      };
    case MUSIC_LIST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        musics: action.payload,
      };
    case PREVIEW_PLAYING:
        return{
            ...state,
            isPlaying:true,
            preview:action.payload,
        };
    default:
      return state;
  }
};

export default musicReducer;
