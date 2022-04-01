import React from 'react'
import { useDispatch } from 'react-redux';
import { fetchGenre } from '../Redux/Action/fetchGenre';

export const Explore = () => {
    const dispatch=useDispatch();
    const Genre=[
        'country','hiphop','jazz','classical','rock','dance','punk','metal'
    ];
    const exploreGenre=(genre)=>{
        dispatch(fetchGenre(genre));
    }

    return (
        <>
            <div className="explore-nav">
                <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{'padding':'1.5rem',justifyContent:'space-evenly'}}>
                    <a className="navbar-brand"  onClick={()=>exploreGenre(Genre[0])}>Country</a>
                    <a className="navbar-brand"  onClick={()=>exploreGenre(Genre[1])}>Hip Hop</a>
                    <a className="navbar-brand"  onClick={()=>exploreGenre(Genre[2])}>Jazz</a>
                    <a className="navbar-brand"  onClick={()=>exploreGenre(Genre[3])}>Classical</a>
                    <a className="navbar-brand"  onClick={()=>exploreGenre(Genre[4])}>Rock</a>
                    <a className="navbar-brand"  onClick={()=>exploreGenre(Genre[5])}>Dance</a>
                    <a className="navbar-brand"  onClick={()=>exploreGenre(Genre[6])}>Punk</a>
                    <a className="navbar-brand"  onClick={()=>exploreGenre(Genre[7])}>Metal</a>
                </nav>
            </div>
        </>
    )
}
