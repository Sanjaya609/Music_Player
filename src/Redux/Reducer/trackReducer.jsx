import { TRACKS, TRACKS_LIST_FETCHING, TRACKS_LIST_SUCCESS } from "../Constants";

const initialState={
    tracks:[],
    isLoading:false,
}
const trackReducer=(state=initialState,action)=>{
    switch (action.type){
    case TRACKS_LIST_FETCHING:
            return {
              ...state,
              isLoading: true,
            };
    case TRACKS_LIST_SUCCESS:
            return {
              ...state,
              isLoading: false,
              tracks: action.payload,
            };
    default:
      return state;
    }
    
}
export default trackReducer;