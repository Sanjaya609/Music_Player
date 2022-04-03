import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { fetchTracks } from '../Redux/Action/fetchTracks';
import { playMusic } from '../Redux/Action/playMusic';


export const Exploregenre = ({ genre }) => {
    const navigate=useNavigate();
    const dispatch = useDispatch();
    const playSong = () => {
        const song = genre.preview;
        dispatch(playMusic(song));;
    }
    const songCard=(genre)=>{
        console.log(genre.album.id);
        const id=genre.album.id;
        navigate(`tracks`);
        dispatch(fetchTracks(id));
    }
    return (
        <>
            <div className="col-lg-3" style={{ 'height': '300px'}}>
                <div className="card shadow p-3 mb-5 bg-white rounded" style={{ "width": "100%", 'border': 'none' }}>
                    <div className="card-image" style={{ 'height': '175px', display: "flex", justifyContent: "center" }}
                        onClick={playSong} >
                        <img className='image'
                            src={genre.artist.picture_big}
                            alt="Album Photo"
                            style={{ "objectFit": "cover", maxHeight: "100%" }} />
                    </div>
                    <div className="product-description-container" style={{ paddingTop: '1rem' }}>
                        <h5 style={{'textAlign':'center'}}>{genre.title_short}</h5>
                        <div style={{ 'display': 'flex', alignItems: "center", 'justifyContent': 'space-evenly', 'width': '100%' }}>
                            <button className="btn btn-primary rounded-pill" onClick={playSong}>Play</button>
                            <button className="btn btn-primary rounded-pill" onClick={()=>songCard(genre)}>Tracks</button>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}
