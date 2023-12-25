import React from 'react';
import Banner from "./banner";
import Heading from "../../components/heading";
import MovieCard from "../../components/movie-card";

function Movies(props) {
    return (
        <div>
            <Banner/>
            <Heading heading={"Latest Movies"}
                     subTxt={"Lorem Ipsum is simply dummy text of the printing and typesetting industrioy. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown."}/>
            <div className={"container "}>
                <div className={"row pb-75"}>
                    <div className={"col-md-4"}>
                        <MovieCard/>
                    </div>
                    <div className={"col-md-4"}>
                        <MovieCard/>
                    </div>
                    <div className={"col-md-4"}>
                        <MovieCard/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Movies;