import { MUSIC_LIST_FETCHING,MUSIC_LIST_SUCCESS, MUTE_MUSIC, PREVIEW_PAUSE, PREVIEW_PLAYING, PREVIEW_RESUME} from "../Constants";

const initialState = {
  musics: [],
  isLoading: false,
  preview:"",
  isPlaying:false,
  isMute:false,
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
    case PREVIEW_RESUME:
      return{
        ...state,
        isPlaying:true,
      };
    case PREVIEW_PAUSE:
      return{
        ...state,
        isPlaying:false,
      }
    case MUTE_MUSIC:
      return {
        ...state,
        isMute:!state.isMute,
      }
    default:
      return state;
  }
};

export default musicReducer;
