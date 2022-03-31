import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';


import { NavBar } from '../Components/NavBar';
import { Player } from '../Components/Player';
import Music from '../Pages/Music';


const Musicplayer = () => {
    const songList=useSelector((state)=>state.music.musics);
    return (
        <div className="container">
            <div className="header shadow bg-white rounded">
                <NavBar />
            </div>
            <div className="container">
            <div className="row body-container">
                {songList?songList[0]?<Music songList={songList}/>:null:null}
            </div>
                <Player/>
            </div>

        </div>
    )
}

export default Musicplayer
