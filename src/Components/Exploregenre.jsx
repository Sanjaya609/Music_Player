import React from 'react'
import { useDispatch } from 'react-redux';
import { playMusic } from '../Redux/Action/playMusic';


export const Exploregenre = ({genre}) => {
    const dispatch=useDispatch();
    const playSong=()=>{
        const song=genre.preview;
        dispatch(playMusic(song));;
    }
  return (
    <>
      <div className="col-lg-3" style={{ 'height': '250px',marginTop:'2rem' }}>
        <div className="card shadow p-3 mb-5 bg-white rounded" style={{ "width": "100%", 'border': 'none' }}>
          <div className="card-image" style={{ 'height': '175px', display: "flex", justifyContent: "center"}} 
          onClick={playSong} >
            <img className='image'
              src={genre.artist.picture_big}
              alt="Album Photo"
              style={{ "objectFit": "cover", maxHeight: "100%" }} />
          </div>
          <div className="product-description-container" style={{'display':"flex","justifyContent":"center"}}>
            <div style={{'display':'flex',flexDirection:'column'}}>
            <h5 >{genre.title_short}</h5>
            </div>
          </div>
        </div>
      </div>

    </>

  )
}
