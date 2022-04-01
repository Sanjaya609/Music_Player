import React, { useEffect } from 'react';
import { Route, Router, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { NavBar } from '../Components/NavBar';
import { Player } from '../Components/Player';
import { Bodymain } from '../Pages/Bodymain';
import Music from '../Pages/Music';
import Loader from '../Components/Loader';


const Musicplayer = () => {
    const songList = useSelector((state) => state.music.musics);
    const isLoading=useSelector((state)=>state.music.isLoading);
    return (

        <div className="container">
            <div className="header shadow bg-white rounded">
                <NavBar />
            </div>
            <div className="container">
                <div className="row body-container" style={{'justifyContent':'center',height:"650px"}}>
                {isLoading?<Loader/>:songList[0] ? <Music songList={songList} /> : <Bodymain />}
                </div>
                <Player />
            </div>

        </div>
    )
}

export default Musicplayer
