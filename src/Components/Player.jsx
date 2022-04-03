import React, { useState } from 'react'
import { ImVolumeHigh } from 'react-icons/im';
import { FaRandom } from 'react-icons/fa';
import { AiFillStepBackward, AiFillStepForward,AiOutlineFastForward,AiOutlineFastBackward } from 'react-icons/ai';
import { BsFillPlayFill,BsFillPauseCircleFill } from 'react-icons/bs';
import { ImLoop2,ImVolumeMute2 } from 'react-icons/im';
import { useDispatch, useSelector } from 'react-redux';
import { useAudio } from 'react-use';
import { muteMusic, pauseMusic, playMusic, resumeMusic } from '../Redux/Action/playMusic';
import { Timer } from './Timer';


export const Player = () => {
    const dispatch=useDispatch();
    const track=useSelector((state)=>state.music.preview);
    const isPlaying=useSelector((state)=>state.music.isPlaying);
    const songList = useSelector((state) => state.music.musics);
    const isMute= useSelector((state)=>state.music.isMute);
    const index =songList.findIndex(song=>song.preview===track);
    //console.log(songList);
    const [audio, state, controls, ref] = useAudio({
        src: track,
        autoPlay: true,
      });
    //{isPlaying?controls.play:controls.pause};
    //console.log(state.playing);
    const handlePause=(controls)=>{
        dispatch(pauseMusic());
        //console.log("pressed")
        controls.pause();
    };
    const handlePlay=(controls)=>{
        dispatch(resumeMusic());
        controls.play();
    }
    const playNext=(track)=>{
        const index =songList.findIndex(song=>song.preview===track);
        const music=songList[index+1].preview;
        dispatch(playMusic(music));
    };
    const playPrevious=(track)=>{
        const index =songList.findIndex(song=>song.preview===track);
        const music=songList[index-1].preview;
        dispatch(playMusic(music));
    };
    const mute=(controls)=>{
        controls.mute();
        dispatch(muteMusic());
    }
    const unMute=(controls)=>{
        controls.unmute();
        dispatch(muteMusic());
    }
    return (
        <div className="row" style={{ 'justifyContent': 'center',height:"7rem",'padding':'2rem 3rem 0 3rem','fontSize':'1.6rem'}}>
        {audio}
        <div className="col-xl-10" style={{ 'display': 'flex', height:"100%"}}>
                <div className="song_info col-xl-2">
                    <div className="song_name" style={{'overflow':'hidden'}}>{isPlaying?songList[index]?.title_short:null}</div>
                </div>
                <div className="timeline col-xl-8">
                    <div className="row controller">
                        {Timer(state.time)}
                        <span className="alink1" style={{width:'auto'}}><FaRandom /></span>
                        <span className="alink2" style={{width:'auto'}}><AiFillStepBackward onClick={()=>playPrevious(track)} /></span>
                        <span className="alink1" style={{width:'auto'}}><AiOutlineFastBackward onClick={() => controls.seek(state.time - 5)} /></span>
                        <span className="alink3" style={{width:'auto'}}>{state.playing?<BsFillPauseCircleFill onClick={()=>handlePause(controls)}/>:songList[0]?<BsFillPlayFill onClick={()=>handlePlay(controls)} />:<BsFillPlayFill onClick={()=>handlePlay(controls)} disabled={true} />}</span>
                        <span className="alink1" style={{width:'auto'}}><AiOutlineFastForward  onClick={() => controls.seek(state.time + 5)}/></span>
                        <span className="alink4" style={{width:'auto'}}><AiFillStepForward onClick={()=>playNext(track)}/></span>
                        <span className="alink5" style={{width:'auto'}}><ImLoop2 /></span>
                        {Timer(state.duration)}
                    </div>
                </div>
                <div className="song_info col-xl-2" style={{'marginLeft':'2rem'}}>
                    <div className="volume">{state.muted?<ImVolumeMute2 onClick={controls.unmute}/>:<ImVolumeHigh onClick={controls.mute}/>}</div>
                </div>
            </div>
        </div>
    )
}
