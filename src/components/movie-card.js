import React from 'react';
import movie from "../assets/card-img.jpg"

function MovieCard(props) {
    return (
        <div class="owl-item cloned" style={{width:"360px",marginRight:0}}>
            <li class="item">
                <div class="movie-item-contents gradient">
                    <img src={movie} alt=""/>
                        <div class="movie-item-content">
                            <div class="movie-item-content-top">
                                <div class="float-start">
                                                                <span
                                                                    class="movie-count-time hover-left">02.50.20</span>
                                </div>
                                <div class="float-end">
                                    <div class="movie-ratting">
                                        <a href="https://tfhtml.themepul.com/moviestar/"><span
                                            class="fa fa-star"></span>2/20</a>
                                    </div>
                                </div>
                            </div>
                            <div class="movie-item-content-center">
                                <a href="https://tfhtml.themepul.com/moviestar/"
                                   class="flat-icons"
                                   data-video-url="https://www.youtube.com/watch?v=CsVJoCKc9rA"
                                   style={{cursor:"pointer"}}><span
                                    class="flaticon-play-button"></span></a>
                            </div>
                            <div class="movie-item-content-buttom">
                                <div class="movie-item-title">
                                    <a href="https://tfhtml.themepul.com/moviestar/">Hurry
                                        Animate Blue Strack New Movie (2018)</a>
                                </div>
                                <div class="item-cat">
                                    <ul>
                                        <li><span>Category :</span><a
                                            href="https://tfhtml.themepul.com/moviestar/">English
                                            Animation Movies</a></li>
                                    </ul>
                                    <div class="item-cat-hover">
                                        <ul>
                                            <li><span>Release :</span><a
                                                href="https://tfhtml.themepul.com/moviestar/">October
                                                26, 2017</a></li>
                                            <li><span>Genre :</span><a
                                                href="https://tfhtml.themepul.com/moviestar/">Action,
                                                Drama</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="movie-item-beta">
                                    <div class="movie-details">
                                        <a href="https://tfhtml.themepul.com/moviestar/"
                                           class="btn btn-button button-detals blck-bg">details</a>
                                    </div>
                                    <div class="view-movie">
                                        <a class="blck-bg"
                                           href="https://tfhtml.themepul.com/moviestar/">15k
                                            view</a>
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