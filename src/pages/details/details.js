import React, {useEffect, useState} from 'react';
import Banner from "../../assets/details.jpg"
import SubBanner from "../../assets/details-sub.jpg"
import MovieAdd from "../movies/movie-add";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import axios from "axios";
import {toggleLoader} from "../../redux/actions";

function Details(props) {
    const [show, setShow] = useState(false);
    const {movieId} = useParams()
    const dispatch = useDispatch();
    const [selectedMovie, setSelectedMovie] = useState(null);


    useEffect(() => {
        dispatch(toggleLoader(true))
        axios.get(`${process.env.REACT_APP_HOST}movie`)
            .then((res) => {
                if(movieId){
                    setSelectedMovie(res.data.find((item)=> item.id == movieId))
                }
            })
            .catch((err) => {
                console.log(err)
            }).finally(() => {
            dispatch(toggleLoader(false))
        })
    }, []);


    function onClose() {
        setShow(false)
    }


    return (
        <div className="container">
            <div className="details-page">
                <div className="details-big-img mt-0">
                    <img src={selectedMovie?.imageBanner} width={"100%"}/>
                    <div className="play-icon">
                        <a href="https://tfhtml.themepul.com/moviestar/details.html" className="flat-icons"
                           data-video-url="https://www.youtube.com/watch?v=CsVJoCKc9rA"
                           style={{cursor: "pointer"}}><span className="fi-rr-play-circle"></span></a>
                    </div>
                </div>
                <div className="details-contents">
                    <div className="row justify-content-end">
                        <div className="col-md-offset-1 col-lg-offset-1 col-lg-11 col-md-11 col-sm-12 col-xs-12">
                            <div className="details-content">
                                <div className="details-reviews">
                                    <div className="row">
                                        <div className="col-lg-5 col-md-5 col-sm-6 col-xs-12">
                                            <div className="dec-review-img">
                                                <img src={selectedMovie?.image} alt=""/>
                                            </div>
                                        </div>
                                        <div className="col-lg-7 col-md-7 col-sm-6 col-xs-12">
                                            <div className="dec-review-dec">
                                                <div className="details-title">
                                                    <h2>{selectedMovie?.name}</h2>
                                                </div>
                                                <div className="ratting">
                                                    <span className="fa fa-star"></span>
                                                    <span className="fa fa-star"></span>
                                                    <span className="fa fa-star"></span>
                                                    <span className="fa fa-star"></span>
                                                    <span className="fa fa-star"></span>
                                                    <a className={"text-white"}>{selectedMovie?.rate}/5
                                                        ratitng</a>
                                                </div>
                                                <div className="dec-review-meta">
                                                    <ul>
                                                        <li><span>Category <label>:</label></span><a
                                                            >{selectedMovie?.category}</a></li>
                                                        <li><span>Actor <label>:</label></span><a
                                                            >{selectedMovie?.actor}</a></li>
                                                        <li><span>Genre <label>:</label></span><a
                                                            >{selectedMovie?.genre}</a></li>
                                                        <li><span>releace <label>:</label></span><a
                                                            >{selectedMovie?.release}</a>
                                                        </li>
                                                        <li><span>languase <label>:</label></span><a
                                                            >{selectedMovie?.language}</a>
                                                        </li>
                                                        <li><span>Time <label>:</label></span><a
                                                            >{"10.00 A.M"}</a>
                                                        </li>
                                                        <div className="btn-button btn-no-bg mt-5" onClick={()=> setShow(true)}>Book Now</div>
                                                    </ul>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="details-dectiontion">
                                    <h2 className="title">Movie story</h2>
                                    <p>{selectedMovie?.description}</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <MovieAdd show={show} close={onClose} movieData={selectedMovie}/>
        </div>
    );
}

export default Details;