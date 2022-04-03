import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {BsMusicNoteList} from 'react-icons/bs';
import { playMusic } from '../Redux/Action/playMusic';

export const Songcard = () => {
  const [isActive,setIsActive]=useState(false);
  const dispatch=useDispatch();
  const tracks = useSelector((state) => state.track.tracks);
  const preview=useSelector((state)=>state.music.preview);
  const isPlaying=useSelector((state)=>state.music.isPlaying);
  const playTrack = (track) => {
    const music= track.preview;
    dispatch(playMusic(music));
    setIsActive(true);
  }
  console.log(isActive);
  return (
    <>
      <div className="tracklist"><ul className="list-group" style={{ 'padding': '3rem' }}>
        {tracks.slice(0, 9).map((track, index) => (
          <a href="#" id={track.id} className="list-group-item 
          list-group-item-action 
          list-group-item-primary"
          key={track.id} 
          style={{'padding':'1rem 1rem 1rem 1rem'}}
          onClick={()=>playTrack(track)}>
          {track.title} {isPlaying?track.preview===preview?<span style={{'float':'right'}}>Now Playing...  <BsMusicNoteList /></span>:null:null}</a>
        ))}
      </ul>
      </div>

    </>
  )
}
