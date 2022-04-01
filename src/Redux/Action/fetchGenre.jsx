import axios from "axios";
import { GENRE_LIST_FETCHING,GENRE_LIST_SUCCESS,URL} from "../Constants";



export const fetchGenre = (genre) => async (dispatch) => {
    dispatch({
      type: GENRE_LIST_FETCHING,
    });
    const response = await axios({
        method: 'get',
        url: `${URL}/search`,
        params: { q: `${genre}` },
        headers: {
            'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
            'X-RapidAPI-Key': '348e950fb3mshf808dc183ac14fap1945c6jsn8685e6b8e93b'
        }
    });
    let data=response.data.data;
    if (response?.data?.data) {
      dispatch({
        type: GENRE_LIST_SUCCESS,
        payload: data,
      });
    }
  };