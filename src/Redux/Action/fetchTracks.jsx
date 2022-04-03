import axios from "axios";
import { TRACKS, TRACKS_LIST_FETCHING, TRACKS_LIST_SUCCESS, TRACK_URL } from "../Constants";


export const fetchTracks = (id) => async (dispatch) => {
    console.log(id);
    dispatch({
      type: TRACKS_LIST_FETCHING,
    });
    const response = await axios({
        method: 'get',
        url: `https://deezerdevs-deezer.p.rapidapi.com/album/${id}`,
        headers: {
            'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
            'X-RapidAPI-Key': '348e950fb3mshf808dc183ac14fap1945c6jsn8685e6b8e93b'
        }
    });
    let data=response.data.tracks.data;
    if (response?.data?.tracks) {
      dispatch({
        type: TRACKS_LIST_SUCCESS,
        payload: data,
      });
    }
  };
  