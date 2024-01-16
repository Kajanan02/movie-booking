import React, {useEffect, useState} from 'react';
import Banner from "./banner";
import Heading from "../../components/heading";
import MovieCard from "../../components/movie-card";
import {useDispatch} from "react-redux";
import {toggleLoader} from "../../redux/actions";
import axios from "axios";

function Movies(props) {

    const [movieList, setMovieList] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(toggleLoader(true))
        axios.get(`${process.env.REACT_APP_HOST}movie`)
            .then((res) => {
                setMovieList(res.data)
            })
            .catch((err) => {
                console.log(err)
            }).finally(() => {
            dispatch(toggleLoader(false))
        })
    }, []);

    return (
        <div>
            <Banner/>
            <Heading heading={"Latest Movies"}
                     subTxt={"Lorem Ipsum is simply dummy text of the printing and typesetting industrioy. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown."}/>
            <div className={"container "}>
                <div className={"row pb-75"}>
                    {movieList?.slice(0,3).map((movie, index) =>
                        <div className={"col-md-4"} key={"movie" + index}>
                            <MovieCard movie={movie} key={index}/>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Movies;