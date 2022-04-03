import React, { useEffect } from 'react';
import { Route, Router, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { NavBar } from '../Components/NavBar';
import { Player } from '../Components/Player';
import { Bodymain } from '../Pages/Bodymain';
import Music from '../Pages/Music';
import Loader from '../Components/Loader';
import { Explore } from '../Components/Explore';
import { useNavigate } from 'react-router';
import { fetchGenre } from '../Redux/Action/fetchGenre';

const Musicplayer = () => {
    const dispatch= useDispatch();
    const songList = useSelector((state) => state.music.musics);
    const isLoading = useSelector((state) => state.music.isLoading);
    const navigate = useNavigate();
    useEffect(() => {
        const genre='country';
        dispatch(fetchGenre(genre));
    }, []);
    
    return (
        <>
            <div className="header shadow bg-white rounded sticky">
                <NavBar />
            </div>
            <div className="container">
                <div className="row body-container" style={{ 'justifyContent': 'center', height: "480px" }}>
                    <Routes>
                        <Route path='' element={<Explore />}></Route>
                        <Route path='/explore/*' element={<Explore />} >
                            
                        </Route>

                        <Route path='/song' element={isLoading ? <Loader /> :<Music songList={songList} />}></Route>
                    </Routes>
                </div>
                <Player />
            </div>

        </>

    )
}

export default Musicplayer
