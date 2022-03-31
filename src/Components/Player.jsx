import React from 'react'
import { ImVolumeHigh } from 'react-icons/im';
import { FaRandom } from 'react-icons/fa';
import { AiFillStepBackward, AiFillStepForward } from 'react-icons/ai';
import { BsFillPlayFill } from 'react-icons/bs';
import { ImLoop2 } from 'react-icons/im';
import { useSelector } from 'react-redux';
import { useAudio } from 'react-use';


export const Player = () => {
    const track=useSelector((state)=>state.music.preview);
    const isPlaying=useSelector((state)=>state.music.isPlaying);
    console.log(isPlaying);
    console.log(track);
    const [audio, state, controls, ref] = useAudio({
        src: track,
        autoPlay: true,
      });
    {isPlaying?controls.play:controls.pause};
    return (
        
        <div className="row" style={{ 'justifyContent': 'center','padding':'3rem 3rem 0 3rem','fontSize':'1.6rem'}}>
        {audio}
        <div className="col-xl-10" style={{ 'display': 'flex' }}>
                <div className="song_info col-xl-2">
                    <div className="song_name">Let Me Go</div>
                    <div className="volume"><ImVolumeHigh /></div>
                </div>
                <div className="timeline col-xl-8">
                    <div className="row controller">
                        <span className="alink1" style={{width:'auto'}}><FaRandom /></span>
                        <span className="alink2" style={{width:'auto'}}><AiFillStepBackward /></span>
                        <span className="alink3" style={{width:'auto'}}><BsFillPlayFill /></span>
                        <span className="alink4" style={{width:'auto'}}><AiFillStepForward /></span>
                        <span className="alink5" style={{width:'auto'}}><ImLoop2 /></span>
                    </div>
                    <div className="row slider">
                        <div className="current-time col-xl-1"><span>0:45</span></div>
                        <div className="progress col-xl-10">
                            <div className="progress-bar" role="progressbar" style={{ width: "25%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <div className="total-time col-xl-1"><span>3:00</span></div>
                    </div>
                </div>
                <div className="song_info col-xl-2" style={{'marginLeft':'2rem'}}>
                    <div className="song_name">Let Me Go</div>
                    <div className="volume"><ImVolumeHigh /></div>
                </div>
            </div>
        </div>
    )
}
