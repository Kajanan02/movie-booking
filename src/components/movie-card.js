import React, {useState} from 'react';
// import movie from "../assets/card-img.jpg"
import {NavLink, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setSelectedMovieDetail} from "../redux/actions";

function MovieCard(props) {
// const {movie} = props;
    console.log(props)
    const dispatch = useDispatch();
    // const [isOpen, setOpen] = useState(false);
    // const navigate = useNavigate()

    return (
        <div className="owl-item cloned" style={{width: "360px", marginRight: 0}}>
            <li className="item">
                <div className="movie-item-contents gradient">
                    <img src={props?.movie?.image} alt=""/>
                    <div className="movie-item-content">
                        <div className="movie-item-content-top">
                            <div className="float-start"><span className="movie-count-time hover-left">02.50.20</span>
                            </div>
                            <div className="float-end">
                                <div className="movie-ratting">
                                    <NavLink to={"/details/" + props?.movie?.id} onClick={()=> dispatch(setSelectedMovieDetail(props.movie))}><span
                                        className="fi fi-rr-star"></span>{props?.movie?.rate}/10</NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="movie-item-content-center">
                            <NavLink to={"/details/" + props?.movie?.id}
                                     onClick={()=> dispatch(setSelectedMovieDetail(props.movie))}
                                     className="flat-icons"
                                     data-video-url="https://www.youtube.com/watch?v=CsVJoCKc9rA"
                                     style={{cursor: "pointer"}}><i className="fi fi-rr-play-circle"></i></NavLink>
                        </div>
                        <div className="movie-item-content-buttom">
                            <div className="movie-item-title">
                                <NavLink to={"/details/" + props?.movie?.id} onClick={()=> dispatch(setSelectedMovieDetail(props.movie))}>{props?.movie?.name}</NavLink>
                            </div>
                            <div className="item-cat">
                                <ul>
                                    <li><span>Category :</span><NavLink
                                        to={"/details/" + props?.movie?.id} onClick={()=> dispatch(setSelectedMovieDetail(props.movie))}>{props?.movie?.category}</NavLink></li>
                                </ul>
                                <div className="item-cat-hover">
                                    <ul>
                                        <li><span>Release :</span><NavLink
                                            to={"/details/" + props?.movie?.id} onClick={()=> dispatch(setSelectedMovieDetail(props.movie))}>{props?.movie?.release}</NavLink></li>
                                        <li><span>Genre :</span><NavLink
                                            to={"/details/" + props?.movie?.id} onClick={()=> dispatch(setSelectedMovieDetail(props.movie))}>{props?.movie?.genre}</NavLink></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="movie-item-beta">
                                <div className="movie-details">
                                    <NavLink to={"/details/" + props?.movie?.id}
                                             onClick={()=> dispatch(setSelectedMovieDetail(props.movie))}
                                             className="btn btn-button button-detals blck-bg">details</NavLink>
                                </div>
                                <div className="view-movie">
                                    <NavLink className="blck-bg"
                                             onClick={()=> dispatch(setSelectedMovieDetail(props.movie))}
                                             to={"/details/" + props?.movie?.id}>15k
                                        view</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        </div>
    );
}

export default MovieCard;