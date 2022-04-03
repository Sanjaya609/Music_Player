import axios from "axios";
import { MUSIC_LIST_FETCHING,MUSIC_LIST_SUCCESS,URL} from "../Constants";



export const fetchMusic = (song) => async (dispatch) => {
    dispatch({
      type: MUSIC_LIST_FETCHING,
    });
    const response = await axios({
        method: 'get',
        url: `${URL}/search`,
        params: { q: `${song}` },
        headers: {
            'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
            'X-RapidAPI-Key': '348e950fb3mshf808dc183ac14fap1945c6jsn8685e6b8e93b'
        }
    });
    let data=response.data.data;
    if (response?.data?.data) {
      dispatch({
        type: MUSIC_LIST_SUCCESS,
        payload: data,
      });
    }
  };
  

