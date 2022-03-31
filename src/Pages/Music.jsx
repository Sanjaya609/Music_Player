import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { playMusic } from '../Redux/Action/playMusic';



const Music = ({ songList }) => {
  const dispatch=useDispatch();
  const playPreview=()=>{
    const track=songList[0].preview;
    //console.log(track);
    dispatch(playMusic(track));
  }
  return (
    <>
      <div className="col-xl-8 left-body" >
        <div className="col-xl-5">
          <div className="card shadow p-3 bg-white rounded" style={{ "padding": "1.5rem", "width": "100%", 'border': 'none' }}>
            <div className="card-image" style={{ 'height': '250px', display: "flex", justifyContent: "center" }} >
              <img src={songList[0].artist.picture_big} alt='Artist image' style={{ 'width': '100%' }} />
            </div>
          </div>
          <div className="preview" style={{'display':'flex','justifyContent':'center','paddingTop':'2rem'}}>
            <button className="btn btn-primary btn-lg rounded-pill" type="submit" onClick={playPreview}>Preview</button>
          </div>

          {/* <h3 style={{'textAlign':'center',marginTop:'1rem'}}>{songList[0].artist.name}</h3> */}
        </div>
        <div className="col-xl-7" style={{ 'padding': '3rem' }}>
          <h5>{songList[0].artist.name} {songList[0].title}</h5>
          <h3>Deezer Rank: {songList[0].rank}</h3>
          <h5><a href={songList[0].link}>{songList[0].link}</a></h5>
        </div>

      </div>
      <div className="col-xl-4 right-body" >
        <h3>Explore</h3>
        <h4>Select Track</h4>
        <div className="row" style={{ 'justifyContent': 'flex-start','overflow': 'scroll',
        'height':'450px',
        'overflowX': 'hidden'}}>
          {songList.map((song)=>(
            <div key={song.id} className=" col-xl-5 card shadow p-3 bg-white rounded" style={{ "marginTop": "1rem",marginRight:'2rem', 'border': 'none', 'height': '210px' }}>
              <div className="card-image" style={{ 'height': '80%', display: "flex", justifyContent: "center" }} >
                <img src={song.artist.picture_big} alt='Artist image' style={{ 'width': '100%' }} />
              </div>
            </div>
          ))}
        </div>


        {/* <div className="  col-xl-5 card shadow p-3 bg-white rounded" style={{ "padding": "1.5rem", 'border': 'none', 'height': '210px' }}>
              <div className="card-image" style={{ 'height': '80%', display: "flex", justifyContent: "center" }} >
              </div>
            </div>
          <div className="row" style={{ 'justifyContent': 'space-evenly', marginTop: '1rem' }}>
            <div className=" col-xl-5 card shadow p-3 bg-white rounded" style={{ "padding": "1.5rem", 'border': 'none', 'height': '210px' }}>
              <div className="card-image" style={{ 'height': '80%', display: "flex", justifyContent: "center" }} >
              </div>
            </div>
            <div className="  col-xl-5 card shadow p-3 bg-white rounded" style={{ "padding": "1.5rem", 'border': 'none', 'height': '210px' }}>
              <div className="card-image" style={{ 'height': '80%', display: "flex", justifyContent: "center" }} >
              </div>
            </div>
          </div> */}
      </div></>
  )
}
export default Music;