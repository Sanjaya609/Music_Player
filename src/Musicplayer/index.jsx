import React, { useEffect } from 'react';
import { Route, Router, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { NavBar } from '../Components/NavBar';
import { Player } from '../Components/Player';
import { Bodymain } from '../Pages/Bodymain';
import Music from '../Pages/Music';
import Loader from '../Components/Loader';
import { Explore } from '../Components/Explore';
import { useNavigate } from 'react-router';

const Musicplayer = () => {
    const songList = useSelector((state) => state.music.musics);
    const isLoading = useSelector((state) => state.music.isLoading);
    const navigate = useNavigate();
    return (
        <>
            <div className="header shadow bg-white rounded sticky">
                <NavBar />
            </div>
            <div className="container">
                <div className="row body-container" style={{ 'justifyContent': 'center', height: "650px" }}>
                    <Routes>
                        <Route path='' element={<Bodymain />}></Route>
                        <Route path='/explore/*' element={<Explore />} >
                            
                        </Route>

                        <Route path='/song' element={<Music songList={songList} />}></Route>
                    </Routes>
                    {isLoading ? <Loader /> : null}
                </div>
                <Player />
            </div>

        </>

    )
}

export default Musicplayer
