import React, { useEffect } from 'react';

import { URL } from '../Redux/Constants';
import axios from 'axios';
import { useFormik } from 'formik';
import { NavBar } from '../Components/NavBar';
import { Player } from '../Components/Player';

const initialValues = {
    song: "",
}

const Musicplayer = () => {

    // //const [musicList,setMusicList]=useState([]);
    // const { values, error, handleSubmit, handleChange, resetForm } = useFormik({
    //     initialValues,
    //     onSubmit: (values, { resetForm }) => {
    //         console.log(values);
    //         fetchSong(values.song);
    //         resetForm();
    //     },

    // });
    // const fetchSong = async (song) => {
    //     await axios({
    //         method: 'get',
    //         url: `${URL}/search`,
    //         params: { q: `${song}` },
    //         headers: {
    //             'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
    //             'X-RapidAPI-Key': '348e950fb3mshf808dc183ac14fap1945c6jsn8685e6b8e93b'
    //         }
    //     }).then((response) => {
    //         console.log(response);
    //     }).catch((err) => console.log(err));
    // }



    // const fetchInfo = async () => {
    //     await axios({
    //         method: 'get',
    //         url: `${URL}/infos`,
    //         headers: {
    //             'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
    //             'X-RapidAPI-Key': '348e950fb3mshf808dc183ac14fap1945c6jsn8685e6b8e93b'
    //         }
    //     }).then((response) => console.log(response)).catch((err) => console.log(err));
    // }

    // useEffect(() => { fetchInfo() }, []);
    return (
        <div className="container">
            <div className="header shadow bg-white rounded">
                <NavBar />
            </div>
            <div className="container">
                <div className="row body-container">
                    <div className="col-xl-8 left-body" >
                        <div className="col-xl-5">
                            <div className="card shadow p-3 bg-white rounded" style={{ "padding": "1.5rem", "width": "100%", 'border': 'none' }}>
                                <div className="card-image" style={{ 'height': '250px', display: "flex", justifyContent: "center" }} >
                                </div>
                            </div>
                            <h3>Now Playing</h3>
                            <h5>Eminem Lose Yourself</h5>
                        </div>
                        <div className="col-xl-7">
                            <h3>Rank:1234</h3>
                            <h5>Release Date: 2020</h5>
                        </div>

                    </div>
                    <div className="col-xl-4 right-body" >
                        <h3>Explore</h3>
                        <h4>Select your Genre</h4>
                        <div className="row" style={{ 'justifyContent': 'space-evenly' }}>
                            <div className=" col-xl-5 card shadow p-3 bg-white rounded" style={{ "padding": "1.5rem", 'border': 'none', 'height': '210px' }}>
                                <div className="card-image" style={{ 'height': '80%', display: "flex", justifyContent: "center" }} >
                                </div>
                            </div>
                            <div className="  col-xl-5 card shadow p-3 bg-white rounded" style={{ "padding": "1.5rem", 'border': 'none', 'height': '210px' }}>
                                <div className="card-image" style={{ 'height': '80%', display: "flex", justifyContent: "center" }} >
                                </div>
                            </div>
                        </div>
                        <div className="row" style={{ 'justifyContent': 'space-evenly', marginTop: '1rem' }}>
                            <div className=" col-xl-5 card shadow p-3 bg-white rounded" style={{ "padding": "1.5rem", 'border': 'none', 'height': '210px' }}>
                                <div className="card-image" style={{ 'height': '80%', display: "flex", justifyContent: "center" }} >
                                </div>
                            </div>
                            <div className="  col-xl-5 card shadow p-3 bg-white rounded" style={{ "padding": "1.5rem", 'border': 'none', 'height': '210px' }}>
                                <div className="card-image" style={{ 'height': '80%', display: "flex", justifyContent: "center" }} >
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <Player/>
            </div>

        </div>
    )
}

export default Musicplayer
