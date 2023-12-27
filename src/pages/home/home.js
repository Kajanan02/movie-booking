import React from 'react';
import Header from "./header";
import MovieCard from "../../components/movie-card";
import Heading from "../../components/heading";
import MovieAdd from "../movies/movie-add";

function Home(props) {
    return (
        <>
            <Header/>
            <div className={"container my-5 py-5"}>
                <div className={"hadding-area my-5"}>
                    <h2 className={"text-white"}>Latest Movies</h2>
                </div>
                <div className={"row"}>
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

                <Heading heading={"Upcoming Movies"}
                         subTxt={"Lorem Ipsum is simply dummy text of the printing and typesetting industrioy. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown."}/>
                <div className={"row"}>
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
        </>
    );
}

export default Home;