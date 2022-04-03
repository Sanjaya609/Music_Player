import React from 'react'
import { Route, Router, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGenre } from '../Redux/Action/fetchGenre';
import { Exploregenre } from './Exploregenre';
import { Songcard } from './Songcard';


export const Explore = () => {
    const dispatch=useDispatch();
    const Genre=[
        'Country','HipHop','Jazz','Classical','Rock','Dance','Punk','Metal','International'
    ];
    const genreList= useSelector((state)=>state.genre.genre);
    const exploreGenre=(genre)=>{
        dispatch(fetchGenre(genre));
        // console.log(genre);
    }
    // console.log(genreList);

    return (
            <Routes>
                <Route path='/' element={<>
                    <div className="explore-nav">
                <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{'padding':'1.5rem',justifyContent:'space-evenly'}}>
                    {Genre.map((genre,index)=>(
                        <button key={index} className="navbar-brand" style={{border:'none','background':'white'}}  onClick={()=>exploreGenre(genre)}>{genre}</button>
                    ))}
                </nav>
            </div>
                    <div className="row scrollbar scrollbar-lady-lips" style={{'overflow':'scroll','overflowX':'hidden','height':'80%'}}>
                {genreList.map((genre)=>(
                    // console.log(genre);
                    <Exploregenre genre={genre} key={genre.id}/>
                ))}
                </div>
                    </>
                    }></Route>
                <Route path='/tracks' element={<Songcard genre={genreList}/>}></Route>
            </Routes>
    )
}
