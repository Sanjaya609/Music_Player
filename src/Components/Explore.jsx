import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchGenre } from '../Redux/Action/fetchGenre';
import { Exploregenre } from './Exploregenre';

export const Explore = () => {
    const dispatch=useDispatch();
    const Genre=[
        'country','hiphop','jazz','classical','rock','dance','punk','metal'
    ];
    const genreList= useSelector((state)=>state.genre.genre);
    const exploreGenre=(genre)=>{
        dispatch(fetchGenre(genre));
        console.log(genre);
    }
    console.log(genreList);

    return (
        <>
            <div className="explore-nav">
                <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{'padding':'1.5rem',justifyContent:'space-evenly'}}>
                    <button className="navbar-brand" style={{border:'none','background':'white'}}  onClick={()=>exploreGenre(Genre[0])}>Country</button>
                    <button className="navbar-brand"  style={{border:'none','background':'white'}} onClick={()=>exploreGenre(Genre[1])}>Hip Hop</button>
                    <button className="navbar-brand" style={{border:'none','background':'white'}} onClick={()=>exploreGenre(Genre[2])}>Jazz</button>
                    <button className="navbar-brand" style={{border:'none','background':'white'}} onClick={()=>exploreGenre(Genre[3])}>Classical</button>
                    <button className="navbar-brand" style={{border:'none','background':'white'}} onClick={()=>exploreGenre(Genre[4])}>Rock</button>
                    <button className="navbar-brand" style={{border:'none','background':'white'}} onClick={()=>exploreGenre(Genre[5])}>Dance</button>
                    <button className="navbar-brand" style={{border:'none','background':'white'}} onClick={()=>exploreGenre(Genre[6])}>Punk</button>
                    <button className="navbar-brand" style={{border:'none','background':'white'}} onClick={()=>exploreGenre(Genre[7])}>Metal</button>
                </nav>
            </div>
            <div className="row scrollbar scrollbar-lady-lips" style={{'overflow':'scroll','overflowX':'hidden','height':'80%'}}>
            {genreList.map((genre)=>(
                // console.log(genre);
                <Exploregenre genre={genre} key={genre.id}/>
            ))}
            </div>
           
        </>
    )
}
