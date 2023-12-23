import React from 'react';
import Banner from "../../assets/details.jpg"
import SubBanner from "../../assets/details-sub.jpg"

function Details(props) {
    return (
        <div class="container">
            <div class="details-page">
                <div class="details-big-img mt-0">
                    <img src={Banner} width={"100%"}/>
                    <div class="play-icon">
                        <a href="https://tfhtml.themepul.com/moviestar/details.html" class="flat-icons"
                           data-video-url="https://www.youtube.com/watch?v=CsVJoCKc9rA"
                           style={{cursor: "pointer"}}><span class="fi-rr-play-circle"></span></a>
                    </div>
                </div>
                <div class="details-contents">
                    <div class="row justify-content-end">
                        <div class="col-md-offset-1 col-lg-offset-1 col-lg-11 col-md-11 col-sm-12 col-xs-12">
                            <div class="details-content">
                                <div class="details-reviews">
                                    <div class="row">
                                        <div class="col-lg-5 col-md-5 col-sm-6 col-xs-12">
                                            <div class="dec-review-img">
                                                <img src={SubBanner} alt=""/>
                                            </div>
                                        </div>
                                        <div class="col-lg-7 col-md-7 col-sm-6 col-xs-12">
                                            <div class="dec-review-dec">
                                                <div class="details-title">
                                                    <h2>Hurry Animate Blue Strack New Movie (2018)</h2>
                                                </div>
                                                <div class="ratting">
                                                    <span class="fa fa-star"></span>
                                                    <span class="fa fa-star"></span>
                                                    <span class="fa fa-star"></span>
                                                    <span class="fa fa-star"></span>
                                                    <span class="fa fa-star"></span>
                                                    <a href="https://tfhtml.themepul.com/moviestar/details.html">6/5
                                                        ratitng</a>
                                                </div>
                                                <div class="dec-review-meta">
                                                    <ul>
                                                        <li><span>Category <label>:</label></span><a
                                                            href="https://tfhtml.themepul.com/moviestar/details.html">English
                                                            Animation Movies</a></li>
                                                        <li><span>Actor <label>:</label></span><a
                                                            href="https://tfhtml.themepul.com/moviestar/details.html">Priti
                                                            kapel, Justin orjun</a></li>
                                                        <li><span>Genre <label>:</label></span><a
                                                            href="https://tfhtml.themepul.com/moviestar/details.html">Drama,
                                                            Action Releas</a></li>
                                                        <li><span>releace <label>:</label></span><a
                                                            href="https://tfhtml.themepul.com/moviestar/details.html">15,10,17</a>
                                                        </li>
                                                        <li><span>languase <label>:</label></span><a
                                                            href="https://tfhtml.themepul.com/moviestar/details.html">english</a>
                                                        </li>
                                                    </ul>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="details-dectiontion">
                                    <h2 class="title">Movie story</h2>
                                    <p>Proin fringilla porttitor eros, auctor facilisis neque fringilla eu. Nulla vitae
                                        ultrices justo. Quisque in risus vitae enim fermentum condimentum. Donec
                                        eleifend consequat nulla sed faucibus. Etiam sit amet ex ut eros dignissim
                                        consequat in non risus. Sed placerat eget diam lobortis mollis. Curabitur at dui
                                        vel mauris laoreet euismod ac at nibh. Proin orci sapien, posuere eget hendrerit
                                        non, maximus et erat. Curabitur et semper nunc. Cras ultrices pulvinar leo id
                                        ultrices. Aenean interdum tempor diam, vel porttitor tellus facilisis ut. Nulla
                                        aliquet turpis augue, quis.</p>
                                    <p>interdum lectus lobortis eu. Nulla ornare mauris ac congue cursus. Donec eu urna
                                        sodales, feugiat urna quis, pretium augue. Donec vel massa nec metus dapibus
                                        dignissim. Curabitur at nisi mattis, vestibulum enim at, dictum eros.
                                        Pellentesque sed arcu et elit mattis pulvinar. Suspendisse et risus lacinia nunc
                                        auctor cursus ac sed ipsum. Duis fringilla, tellus eget hendrerit posuere, nisi
                                        quam pretium justo, sed consectetur dui felis sit amet dui. Donec luctus dapibus
                                        scelerisque. Quisque turpis tortor, venenatis eget mattis ac, viverra sit amet
                                        libero. In ut libero sapien. Nam non venenatis mi, vel sodales augue. Donec
                                        fringilla nisi vel est placerat, sed tempor est venenatis. Donec non
                                        sollicitudin felis.Donec eu urna sodales, feugiat urna quis, pretium augue.
                                        Donec vel massa nec.</p>
                                </div>
                                {/*<div class="comment-area">*/}
                                {/*    <h2 class="title">comment's(10)</h2>*/}
                                {/*    <ol class="comment-list">*/}
                                {/*        <li class="single-comment">*/}
                                {/*            <div class="comment-body">*/}
                                {/*                <div class="comment-img">*/}
                                {/*                    <img src="./movie _ Multipurpose HTML5 template_files/1.png" alt=""/>*/}
                                {/*                </div>*/}
                                {/*                <div class="comment-content">*/}
                                {/*                    <div class="comment-header">*/}
                                {/*                        <h3 class="comment-title">Kosmi Kotalia</h3>*/}
                                {/*                    </div>*/}
                                {/*                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which.</p>*/}
                                {/*                    <div class="blog-details-reply-box">*/}
                                {/*                        <div class="comment-time">30 minits ago</div>*/}
                                {/*                        <div class="comment-reply">*/}
                                {/*                            <a href="https://tfhtml.themepul.com/moviestar/details.html" class="Repost">Repost</a>*/}
                                {/*                            <a href="https://tfhtml.themepul.com/moviestar/details.html" class="reply">reply</a>*/}
                                {/*                        </div>*/}
                                {/*                    </div>*/}
                                {/*                </div>*/}
                                {/*            </div>*/}
                                {/*        </li>*/}
                                {/*    </ol>*/}
                                {/*    <ol class="comment-list-reply">*/}
                                {/*        <li class="single-comment">*/}
                                {/*            <div class="comment-body">*/}
                                {/*                <div class="comment-img">*/}
                                {/*                    <img src="./movie _ Multipurpose HTML5 template_files/2.png" alt=""/>*/}
                                {/*                </div>*/}
                                {/*                <div class="comment-content">*/}
                                {/*                    <div class="comment-header">*/}
                                {/*                        <h3 class="comment-title">Kosmi Kotalia</h3>*/}
                                {/*                    </div>*/}
                                {/*                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</p>*/}
                                {/*                    <div class="blog-details-reply-box">*/}
                                {/*                        <div class="comment-time">30 minits ago</div>*/}
                                {/*                        <div class="comment-reply">*/}
                                {/*                            <a href="https://tfhtml.themepul.com/moviestar/details.html" class="Repost">Repost</a>*/}
                                {/*                            <a href="https://tfhtml.themepul.com/moviestar/details.html" class="reply">reply</a>*/}
                                {/*                        </div>*/}
                                {/*                    </div>*/}
                                {/*                </div>*/}
                                {/*            </div>*/}
                                {/*        </li>*/}
                                {/*    </ol>*/}
                                {/*    <ol class="comment-list">*/}
                                {/*        <li class="single-comment">*/}
                                {/*            <div class="comment-body">*/}
                                {/*                <div class="comment-img">*/}
                                {/*                    <img src="./movie _ Multipurpose HTML5 template_files/3.png" alt=""/>*/}
                                {/*                </div>*/}
                                {/*                <div class="comment-content">*/}
                                {/*                    <div class="comment-header">*/}
                                {/*                        <h3 class="comment-title">Kosmi Kotalia</h3>*/}
                                {/*                    </div>*/}
                                {/*                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which.</p>*/}
                                {/*                    <div class="blog-details-reply-box">*/}
                                {/*                        <div class="comment-time">30 minits ago</div>*/}
                                {/*                        <div class="comment-reply">*/}
                                {/*                            <a href="https://tfhtml.themepul.com/moviestar/details.html" class="Repost">Repost</a>*/}
                                {/*                            <a href="https://tfhtml.themepul.com/moviestar/details.html" class="reply">reply</a>*/}
                                {/*                        </div>*/}
                                {/*                    </div>*/}
                                {/*                </div>*/}
                                {/*            </div>*/}
                                {/*        </li>*/}
                                {/*    </ol>*/}

                                {/*</div>*/}
                            </div>
                        </div>
                    </div>
                </div>

                {/*<section class="category-movie pb-75">*/}
                {/*    <div class="haddings">*/}
                {/*        <div class="container">*/}
                {/*            <div class="hadding-area">*/}
                {/*                <h2>This Month Movies</h2>*/}
                {/*                <p>Lorem Ipsum is simply dummy text of the printing and typesettin</p>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <div class="category-movie-items col-4">*/}
                {/*        <div class="container">*/}
                {/*            <div class="cat-menu">*/}
                {/*                <ul class="nav nav-tabs tab-menu">*/}
                {/*                    <li class="active"><a data-toggle="tab" href="https://tfhtml.themepul.com/moviestar/details.html#latestmovie"><span>Letest Movies</span></a></li>*/}
                {/*                    <li><a data-toggle="tab" href="https://tfhtml.themepul.com/moviestar/details.html#top-ratings"><span>Top Ratting</span></a></li>*/}
                {/*                    <li><a data-toggle="tab" href="https://tfhtml.themepul.com/moviestar/details.html#commingsoon"><span>Comming Soon</span></a></li>*/}
                {/*                    <li><a data-toggle="tab" href="https://tfhtml.themepul.com/moviestar/details.html#tvseries"><span>TV Series</span></a></li>*/}
                {/*                </ul>*/}
                {/*            </div>*/}
                {/*            <div class="category-items">*/}
                {/*                <div class="tab-contents">*/}
                {/*                    <div id="latestmovie" class="tab-pane fade active in" role="tabpanel">*/}
                {/*                        <div class="category-slide2 owl-carousel owl-theme owl-loaded">*/}


                {/*                            <div class="owl-stage-outer"><div class="owl-stage" style={{transform:'translate3d(-1170px, 0px, 0px)',transition: "all 0s ease 0s",width:"3510px"}}><div class="owl-item cloned" style={{width:"262.5px",marginRight:"30px"}}><div class="item">*/}
                {/*                                <div class="movie-item-contents gradient">*/}
                {/*                                    <img src="./movie _ Multipurpose HTML5 template_files/1(1).jpg" alt=""/>*/}
                {/*                                        <div class="movie-item-content">*/}
                {/*                                            <div class="movie-item-content-top">*/}
                {/*                                                <div class="pull-left">*/}
                {/*                                                    <span class="movie-count-time hover-left">02.50.20</span>*/}
                {/*                                                </div>*/}
                {/*                                                <div class="pull-right">*/}
                {/*                                                    <div class="movie-ratting">*/}
                {/*                                                        <a href="https://tfhtml.themepul.com/moviestar/details.html"><span class="fa fa-star"></span>2/20</a>*/}
                {/*                                                    </div>*/}
                {/*                                                </div>*/}
                {/*                                            </div>*/}
                {/*                                            <div class="movie-item-content-center">*/}
                {/*                                                <a href="https://tfhtml.themepul.com/moviestar/details.html" class="flat-icons" data-video-url="https://www.youtube.com/watch?v=CsVJoCKc9rA" style={{cursor:"pointer"}}><span class="flaticon-play-button"></span></a>*/}
                {/*                                            </div>*/}
                {/*                                            <div class="movie-item-content-buttom">*/}
                {/*                                                <div class="movie-item-title">*/}
                {/*                                                    <a href="https://tfhtml.themepul.com/moviestar/details.html">Hurry Animate Blue Strack New Movie (2018)</a>*/}
                {/*                                                </div>*/}
                {/*                                                <div class="item-cat">*/}
                {/*                                                    <ul>*/}
                {/*                                                        <li><span>Category :</span><a href="https://tfhtml.themepul.com/moviestar/details.html">English Movies</a></li>*/}
                {/*                                                    </ul>*/}
                {/*                                                    <div class="item-cat-hover">*/}
                {/*                                                        <ul>*/}
                {/*                                                            <li><span>Release :</span><a href="https://tfhtml.themepul.com/moviestar/details.html">October 26, 2017</a></li>*/}
                {/*                                                            <li><span>Genre :</span><a href="https://tfhtml.themepul.com/moviestar/details.html">Action, Drama</a></li>*/}
                {/*                                                        </ul>*/}
                {/*                                                    </div>*/}
                {/*                                                </div>*/}
                {/*                                                <div class="movie-item-beta">*/}
                {/*                                                    <div class="movie-details">*/}
                {/*                                                        <a href="https://tfhtml.themepul.com/moviestar/details.html" class="btn btn-button button-detals blck-bg">details</a>*/}
                {/*                                                    </div>*/}
                {/*                                                    <div class="view-movie hover-right">*/}
                {/*                                                        <a class="blck-bg" href="https://tfhtml.themepul.com/moviestar/details.html">15k view</a>*/}
                {/*                                                    </div>*/}
                {/*                                                </div>*/}
                {/*                                            </div>*/}
                {/*                                        </div>*/}
                {/*                                </div>*/}
                {/*                            </div></div><div class="owl-item cloned" style="width: 262.5px; margin-right: 30px;"><div class="item">*/}
                {/*                                <div class="movie-item-contents gradient">*/}
                {/*                                    <img src="./movie _ Multipurpose HTML5 template_files/2(1).jpg" alt=""/>*/}
                {/*                                        <div class="movie-item-content">*/}
                {/*                                            <div class="movie-item-content-top">*/}
                {/*                                                <div class="pull-left">*/}
                {/*                                                    <span class="movie-count-time hover-left">02.50.20</span>*/}
                {/*                                                </div>*/}
                {/*                                                <div class="pull-right">*/}
                {/*                                                    <div class="movie-ratting">*/}
                {/*                                                        <a href="https://tfhtml.themepul.com/moviestar/details.html"><span class="fa fa-star"></span>2/20</a>*/}
                {/*                                                    </div>*/}
                {/*                                                </div>*/}
                {/*                                            </div>*/}
                {/*                                            <div class="movie-item-content-center">*/}
                {/*                                                <a href="https://tfhtml.themepul.com/moviestar/details.html" class="flat-icons" data-video-url="https://www.youtube.com/watch?v=CsVJoCKc9rA" style="cursor: pointer;"><span class="flaticon-play-button"></span></a>*/}
                {/*                                            </div>*/}
                {/*                                            <div class="movie-item-content-buttom">*/}
                {/*                                                <div class="movie-item-title">*/}
                {/*                                                    <a href="https://tfhtml.themepul.com/moviestar/details.html">Hurry Animate Blue Strack New Movie (2018)</a>*/}
                {/*                                                </div>*/}
                {/*                                                <div class="item-cat">*/}
                {/*                                                    <ul>*/}
                {/*                                                        <li><span>Category :</span><a href="https://tfhtml.themepul.com/moviestar/details.html">English Movies</a></li>*/}
                {/*                                                    </ul>*/}
                {/*                                                    <div class="item-cat-hover">*/}
                {/*                                                        <ul>*/}
                {/*                                                            <li><span>Release :</span><a href="https://tfhtml.themepul.com/moviestar/details.html">October 26, 2017</a></li>*/}
                {/*                                                            <li><span>Genre :</span><a href="https://tfhtml.themepul.com/moviestar/details.html">Action, Drama</a></li>*/}
                {/*                                                        </ul>*/}
                {/*                                                    </div>*/}
                {/*                                                </div>*/}
                {/*                                                <div class="movie-item-beta">*/}
                {/*                                                    <div class="movie-details">*/}
                {/*                                                        <a href="https://tfhtml.themepul.com/moviestar/details.html" class="btn btn-button button-detals blck-bg">details</a>*/}
                {/*                                                    </div>*/}
                {/*                                                    <div class="view-movie hover-right">*/}
                {/*                                                        <a class="blck-bg" href="https://tfhtml.themepul.com/moviestar/details.html">15k view</a>*/}
                {/*                                                    </div>*/}
                {/*                                                </div>*/}
                {/*                                            </div>*/}
                {/*                                        </div>*/}
                {/*                                </div>*/}
                {/*                            </div></div><div class="owl-item cloned" style="width: 262.5px; margin-right: 30px;"><div class="item">*/}
                {/*                                <div class="movie-item-contents gradient">*/}
                {/*                                    <img src="./movie _ Multipurpose HTML5 template_files/3.jpg" alt=""/>*/}
                {/*                                        <div class="movie-item-content">*/}
                {/*                                            <div class="movie-item-content-top">*/}
                {/*                                                <div class="pull-left">*/}
                {/*                                                    <span class="movie-count-time hover-left">02.50.20</span>*/}
                {/*                                                </div>*/}
                {/*                                                <div class="pull-right">*/}
                {/*                                                    <div class="movie-ratting">*/}
                {/*                                                        <a href="https://tfhtml.themepul.com/moviestar/details.html"><span class="fa fa-star"></span>2/20</a>*/}
                {/*                                                    </div>*/}
                {/*                                                </div>*/}
                {/*                                            </div>*/}
                {/*                                            <div class="movie-item-content-center">*/}
                {/*                                                <a href="https://tfhtml.themepul.com/moviestar/details.html" class="flat-icons" data-video-url="https://www.youtube.com/watch?v=CsVJoCKc9rA" style="cursor: pointer;"><span class="flaticon-play-button"></span></a>*/}
                {/*                                            </div>*/}
                {/*                                            <div class="movie-item-content-buttom">*/}
                {/*                                                <div class="movie-item-title">*/}
                {/*                                                    <a href="https://tfhtml.themepul.com/moviestar/details.html">Hurry Animate Blue Strack New Movie (2018)</a>*/}
                {/*                                                </div>*/}
                {/*                                                <div class="item-cat">*/}
                {/*                                                    <ul>*/}
                {/*                                                        <li><span>Category :</span><a href="https://tfhtml.themepul.com/moviestar/details.html">English Movies</a></li>*/}
                {/*                                                    </ul>*/}
                {/*                                                    <div class="item-cat-hover">*/}
                {/*                                                        <ul>*/}
                {/*                                                            <li><span>Release :</span><a href="https://tfhtml.themepul.com/moviestar/details.html">October 26, 2017</a></li>*/}
                {/*                                                            <li><span>Genre :</span><a href="https://tfhtml.themepul.com/moviestar/details.html">Action, Drama</a></li>*/}
                {/*                                                        </ul>*/}
                {/*                                                    </div>*/}
                {/*                                                </div>*/}
                {/*                                                <div class="movie-item-beta">*/}
                {/*                                                    <div class="movie-details">*/}
                {/*                                                        <a href="https://tfhtml.themepul.com/moviestar/details.html" class="btn btn-button button-detals blck-bg">details</a>*/}
                {/*                                                    </div>*/}
                {/*                                                    <div class="view-movie hover-right">*/}
                {/*                                                        <a class="blck-bg" href="https://tfhtml.themepul.com/moviestar/details.html">15k view</a>*/}
                {/*                                                    </div>*/}
                {/*                                                </div>*/}
                {/*                                            </div>*/}
                {/*                                        </div>*/}
                {/*                                </div>*/}
                {/*                            </div></div><div class="owl-item cloned" style="width: 262.5px; margin-right: 30px;"><div class="item">*/}
                {/*                                <div class="movie-item-contents gradient">*/}
                {/*                                    <img src="./movie _ Multipurpose HTML5 template_files/4.jpg" alt=""/>*/}
                {/*                                        <div class="movie-item-content">*/}
                {/*                                            <div class="movie-item-content-top">*/}
                {/*                                                <div class="pull-left">*/}
                {/*                                                    <span class="movie-count-time hover-left">02.50.20</span>*/}
                {/*                                                </div>*/}
                {/*                                                <div class="pull-right">*/}
                {/*                                                    <div class="movie-ratting">*/}
                {/*                                                        <a href="https://tfhtml.themepul.com/moviestar/details.html"><span class="fa fa-star"></span>2/20</a>*/}
                {/*                                                    </div>*/}
                {/*                                                </div>*/}
                {/*                                            </div>*/}
                {/*                                            <div class="movie-item-content-center">*/}
                {/*                                                <a href="https://tfhtml.themepul.com/moviestar/details.html" class="flat-icons" data-video-url="https://www.youtube.com/watch?v=CsVJoCKc9rA" style="cursor: pointer;"><span class="flaticon-play-button"></span></a>*/}
                {/*                                            </div>*/}
                {/*                                            <div class="movie-item-content-buttom">*/}
                {/*                                                <div class="movie-item-title">*/}
                {/*                                                    <a href="https://tfhtml.themepul.com/moviestar/details.html">Hurry Animate Blue Strack New Movie (2018)</a>*/}
                {/*                                                </div>*/}
                {/*                                                <div class="item-cat">*/}
                {/*                                                    <ul>*/}
                {/*                                                        <li><span>Category :</span><a href="https://tfhtml.themepul.com/moviestar/details.html">English Movies</a></li>*/}
                {/*                                                    </ul>*/}
                {/*                                                    <div class="item-cat-hover">*/}
                {/*                                                        <ul>*/}
                {/*                                                            <li><span>Release :</span><a href="https://tfhtml.themepul.com/moviestar/details.html">October 26, 2017</a></li>*/}
                {/*                                                            <li><span>Genre :</span><a href="https://tfhtml.themepul.com/moviestar/details.html">Action, Drama</a></li>*/}
                {/*                                                        </ul>*/}
                {/*                                                    </div>*/}
                {/*                                                </div>*/}
                {/*                                                <div class="movie-item-beta">*/}
                {/*                                                    <div class="movie-details">*/}
                {/*                                                        <a href="https://tfhtml.themepul.com/moviestar/details.html" class="btn btn-button button-detals blck-bg">details</a>*/}
                {/*                                                    </div>*/}
                {/*                                                    <div class="view-movie hover-right">*/}
                {/*                                                        <a class="blck-bg" href="https://tfhtml.themepul.com/moviestar/details.html">15k view</a>*/}
                {/*                                                    </div>*/}
                {/*                                                </div>*/}
                {/*                                            </div>*/}
                {/*                                        </div>*/}
                {/*                                </div>*/}
                {/*                            </div></div><div class="owl-item active" style="width: 262.5px; margin-right: 30px;"><div class="item">*/}
                {/*                                <div class="movie-item-contents gradient">*/}
                {/*                                    <img src="./movie _ Multipurpose HTML5 template_files/1(1).jpg" alt=""/>*/}
                {/*                                        <div class="movie-item-content">*/}
                {/*                                            <div class="movie-item-content-top">*/}
                {/*                                                <div class="pull-left">*/}
                {/*                                                    <span class="movie-count-time hover-left">02.50.20</span>*/}
                {/*                                                </div>*/}
                {/*                                                <div class="pull-right">*/}
                {/*                                                    <div class="movie-ratting">*/}
                {/*                                                        <a href="https://tfhtml.themepul.com/moviestar/details.html"><span class="fa fa-star"></span>2/20</a>*/}
                {/*                                                    </div>*/}
                {/*                                                </div>*/}
                {/*                                            </div>*/}
                {/*                                            <div class="movie-item-content-center">*/}
                {/*                                                <a href="https://tfhtml.themepul.com/moviestar/details.html" class="flat-icons" data-video-url="https://www.youtube.com/watch?v=CsVJoCKc9rA" style="cursor: pointer;"><span class="flaticon-play-button"></span></a>*/}
                {/*                                            </div>*/}
                {/*                                            <div class="movie-item-content-buttom">*/}
                {/*                                                <div class="movie-item-title">*/}
                {/*                                                    <a href="https://tfhtml.themepul.com/moviestar/details.html">Hurry Animate Blue Strack New Movie (2018)</a>*/}
                {/*                                                </div>*/}
                {/*                                                <div class="item-cat">*/}
                {/*                                                    <ul>*/}
                {/*                                                        <li><span>Category :</span><a href="https://tfhtml.themepul.com/moviestar/details.html">English Movies</a></li>*/}
                {/*                                                    </ul>*/}
                {/*                                                    <div class="item-cat-hover">*/}
                {/*                                                        <ul>*/}
                {/*                                                            <li><span>Release :</span><a href="https://tfhtml.themepul.com/moviestar/details.html">October 26, 2017</a></li>*/}
                {/*                                                            <li><span>Genre :</span><a href="https://tfhtml.themepul.com/moviestar/details.html">Action, Drama</a></li>*/}
                {/*                                                        </ul>*/}
                {/*                                                    </div>*/}
                {/*                                                </div>*/}
                {/*                                                <div class="movie-item-beta">*/}
                {/*                                                    <div class="movie-details">*/}
                {/*                                                        <a href="https://tfhtml.themepul.com/moviestar/details.html" class="btn btn-button button-detals blck-bg">details</a>*/}
                {/*                                                    </div>*/}
                {/*                                                    <div class="view-movie hover-right">*/}
                {/*                                                        <a class="blck-bg" href="https://tfhtml.themepul.com/moviestar/details.html">15k view</a>*/}
                {/*                                                    </div>*/}
                {/*                                                </div>*/}
                {/*                                            </div>*/}
                {/*                                        </div>*/}
                {/*                                </div>*/}
                {/*                            </div></div><div class="owl-item active" style="width: 262.5px; margin-right: 30px;"><div class="item">*/}
                {/*                                <div class="movie-item-contents gradient">*/}
                {/*                                    <img src="./movie _ Multipurpose HTML5 template_files/2(1).jpg" alt=""/>*/}
                {/*                                        <div class="movie-item-content">*/}
                {/*                                            <div class="movie-item-content-top">*/}
                {/*                                                <div class="pull-left">*/}
                {/*                                                    <span class="movie-count-time hover-left">02.50.20</span>*/}
                {/*                                                </div>*/}
                {/*                                                <div class="pull-right">*/}
                {/*                                                    <div class="movie-ratting">*/}
                {/*                                                        <a href="https://tfhtml.themepul.com/moviestar/details.html"><span class="fa fa-star"></span>2/20</a>*/}
                {/*                                                    </div>*/}
                {/*                                                </div>*/}
                {/*                                            </div>*/}
                {/*                                            <div class="movie-item-content-center">*/}
                {/*                                                <a href="https://tfhtml.themepul.com/moviestar/details.html" class="flat-icons" data-video-url="https://www.youtube.com/watch?v=CsVJoCKc9rA" style="cursor: pointer;"><span class="flaticon-play-button"></span></a>*/}
                {/*                                            </div>*/}
                {/*                                            <div class="movie-item-content-buttom">*/}
                {/*                                                <div class="movie-item-title">*/}
                {/*                                                    <a href="https://tfhtml.themepul.com/moviestar/details.html">Hurry Animate Blue Strack New Movie (2018)</a>*/}
                {/*                                                </div>*/}
                {/*                                                <div class="item-cat">*/}
                {/*                                                    <ul>*/}
                {/*                                                        <li><span>Category :</span><a href="https://tfhtml.themepul.com/moviestar/details.html">English Movies</a></li>*/}
                {/*                                                    </ul>*/}
                {/*                                                    <div class="item-cat-hover">*/}
                {/*                                                        <ul>*/}
                {/*                                                            <li><span>Release :</span><a href="https://tfhtml.themepul.com/moviestar/details.html">October 26, 2017</a></li>*/}
                {/*                                                            <li><span>Genre :</span><a href="https://tfhtml.themepul.com/moviestar/details.html">Action, Drama</a></li>*/}
                {/*                                                        </ul>*/}
                {/*                                                    </div>*/}
                {/*                                                </div>*/}
                {/*                                                <div class="movie-item-beta">*/}
                {/*                                                    <div class="movie-details">*/}
                {/*                                                        <a href="https://tfhtml.themepul.com/moviestar/details.html" class="btn btn-button button-detals blck-bg">details</a>*/}
                {/*                                                    </div>*/}
                {/*                                                    <div class="view-movie hover-right">*/}
                {/*                                                        <a class="blck-bg" href="https://tfhtml.themepul.com/moviestar/details.html">15k view</a>*/}
                {/*                                                    </div>*/}
                {/*                                                </div>*/}
                {/*                                            </div>*/}
                {/*                                        </div>*/}
                {/*                                </div>*/}
                {/*                            </div></div><div class="owl-item active" style="width: 262.5px; margin-right: 30px;"><div class="item">*/}
                {/*                                <div class="movie-item-contents gradient">*/}
                {/*                                    <img src="./movie _ Multipurpose HTML5 template_files/3.jpg" alt=""/>*/}
                {/*                                        <div class="movie-item-content">*/}
                {/*                                            <div class="movie-item-content-top">*/}
                {/*                                                <div class="pull-left">*/}
                {/*                                                    <span class="movie-count-time hover-left">02.50.20</span>*/}
                {/*                                                </div>*/}
                {/*                                                <div class="pull-right">*/}
                {/*                                                    <div class="movie-ratting">*/}
                {/*                                                        <a href="https://tfhtml.themepul.com/moviestar/details.html"><span class="fa fa-star"></span>2/20</a>*/}
                {/*                                                    </div>*/}
                {/*                                                </div>*/}
                {/*                                            </div>*/}
                {/*                                            <div class="movie-item-content-center">*/}
                {/*                                                <a href="https://tfhtml.themepul.com/moviestar/details.html" class="flat-icons" data-video-url="https://www.youtube.com/watch?v=CsVJoCKc9rA" style="cursor: pointer;"><span class="flaticon-play-button"></span></a>*/}
                {/*                                            </div>*/}
                {/*                                            <div class="movie-item-content-buttom">*/}
                {/*                                                <div class="movie-item-title">*/}
                {/*                                                    <a href="https://tfhtml.themepul.com/moviestar/details.html">Hurry Animate Blue Strack New Movie (2018)</a>*/}
                {/*                                                </div>*/}
                {/*                                                <div class="item-cat">*/}
                {/*                                                    <ul>*/}
                {/*                                                        <li><span>Category :</span><a href="https://tfhtml.themepul.com/moviestar/details.html">English Movies</a></li>*/}
                {/*                                                    </ul>*/}
                {/*                                                    <div class="item-cat-hover">*/}
                {/*                                                        <ul>*/}
                {/*                                                            <li><span>Release :</span><a href="https://tfhtml.themepul.com/moviestar/details.html">October 26, 2017</a></li>*/}
                {/*                                                            <li><span>Genre :</span><a href="https://tfhtml.themepul.com/moviestar/details.html">Action, Drama</a></li>*/}
                {/*                                                        </ul>*/}
                {/*                                                    </div>*/}
                {/*                                                </div>*/}
                {/*                                                <div class="movie-item-beta">*/}
                {/*                                                    <div class="movie-details">*/}
                {/*                                                        <a href="https://tfhtml.themepul.com/moviestar/details.html" class="btn btn-button button-detals blck-bg">details</a>*/}
                {/*                                                    </div>*/}
                {/*                                                    <div class="view-movie hover-right">*/}
                {/*                                                        <a class="blck-bg" href="https://tfhtml.themepul.com/moviestar/details.html">15k view</a>*/}
                {/*                                                    </div>*/}
                {/*                                                </div>*/}
                {/*                                            </div>*/}
                {/*                                        </div>*/}
                {/*                                </div>*/}
                {/*                            </div></div><div class="owl-item active" style="width: 262.5px; margin-right: 30px;"><div class="item">*/}
                {/*                                <div class="movie-item-contents gradient">*/}
                {/*                                    <img src="./movie _ Multipurpose HTML5 template_files/4.jpg" alt=""/>*/}
                {/*                                        <div class="movie-item-content">*/}
                {/*                                            <div class="movie-item-content-top">*/}
                {/*                                                <div class="pull-left">*/}
                {/*                                                    <span class="movie-count-time hover-left">02.50.20</span>*/}
                {/*                                                </div>*/}
                {/*                                                <div class="pull-right">*/}
                {/*                                                    <div class="movie-ratting">*/}
                {/*                                                        <a href="https://tfhtml.themepul.com/moviestar/details.html"><span class="fa fa-star"></span>2/20</a>*/}
                {/*                                                    </div>*/}
                {/*                                                </div>*/}
                {/*                                            </div>*/}
                {/*                                            <div class="movie-item-content-center">*/}
                {/*                                                <a href="https://tfhtml.themepul.com/moviestar/details.html" class="flat-icons" data-video-url="https://www.youtube.com/watch?v=CsVJoCKc9rA" style="cursor: pointer;"><span class="flaticon-play-button"></span></a>*/}
                {/*                                            </div>*/}
                {/*                                            <div class="movie-item-content-buttom">*/}
                {/*                                                <div class="movie-item-title">*/}
                {/*                                                    <a href="https://tfhtml.themepul.com/moviestar/details.html">Hurry Animate Blue Strack New Movie (2018)</a>*/}
                {/*                                                </div>*/}
                {/*                                                <div class="item-cat">*/}
                {/*                                                    <ul>*/}
                {/*                                                        <li><span>Category :</span><a href="https://tfhtml.themepul.com/moviestar/details.html">English Movies</a></li>*/}
                {/*                                                    </ul>*/}
                {/*                                                    <div class="item-cat-hover">*/}
                {/*                                                        <ul>*/}
                {/*                                                            <li><span>Release :</span><a href="https://tfhtml.themepul.com/moviestar/details.html">October 26, 2017</a></li>*/}
                {/*                                                            <li><span>Genre :</span><a href="https://tfhtml.themepul.com/moviestar/details.html">Action, Drama</a></li>*/}
                {/*                                                        </ul>*/}
                {/*                                                    </div>*/}
                {/*                                                </div>*/}
                {/*                                                <div class="movie-item-beta">*/}
                {/*                                                    <div class="movie-details">*/}
                {/*                                                        <a href="https://tfhtml.themepul.com/moviestar/details.html" class="btn btn-button button-detals blck-bg">details</a>*/}
                {/*                                                    </div>*/}
                {/*                                                    <div class="view-movie hover-right">*/}
                {/*                                                        <a class="blck-bg" href="https://tfhtml.themepul.com/moviestar/details.html">15k view</a>*/}
                {/*                                                    </div>*/}
                {/*                                                </div>*/}
                {/*                                            </div>*/}
                {/*                                        </div>*/}
                {/*                                </div>*/}
                {/*                            </div></div><div class="owl-item cloned" style="width: 262.5px; margin-right: 30px;"><div class="item">*/}
                {/*                                <div class="movie-item-contents gradient">*/}
                {/*                                    <img src="./movie _ Multipurpose HTML5 template_files/1(1).jpg" alt=""/>*/}
                {/*                                        <div class="movie-item-content">*/}
                {/*                                            <div class="movie-item-content-top">*/}
                {/*                                                <div class="pull-left">*/}
                {/*                                                    <span class="movie-count-time hover-left">02.50.20</span>*/}
                {/*                                                </div>*/}
                {/*                                                <div class="pull-right">*/}
                {/*                                                    <div class="movie-ratting">*/}
                {/*                                                        <a href="https://tfhtml.themepul.com/moviestar/details.html"><span class="fa fa-star"></span>2/20</a>*/}
                {/*                                                    </div>*/}
                {/*                                                </div>*/}
                {/*                                            </div>*/}
                {/*                                            <div class="movie-item-content-center">*/}
                {/*                                                <a href="https://tfhtml.themepul.com/moviestar/details.html" class="flat-icons" data-video-url="https://www.youtube.com/watch?v=CsVJoCKc9rA" style="cursor: pointer;"><span class="flaticon-play-button"></span></a>*/}
                {/*                                            </div>*/}
                {/*                                            <div class="movie-item-content-buttom">*/}
                {/*                                                <div class="movie-item-title">*/}
                {/*                                                    <a href="https://tfhtml.themepul.com/moviestar/details.html">Hurry Animate Blue Strack New Movie (2018)</a>*/}
                {/*                                                </div>*/}
                {/*                                                <div class="item-cat">*/}
                {/*                                                    <ul>*/}
                {/*                                                        <li><span>Category :</span><a href="https://tfhtml.themepul.com/moviestar/details.html">English Movies</a></li>*/}
                {/*                                                    </ul>*/}
                {/*                                                    <div class="item-cat-hover">*/}
                {/*                                                        <ul>*/}
                {/*                                                            <li><span>Release :</span><a href="https://tfhtml.themepul.com/moviestar/details.html">October 26, 2017</a></li>*/}
                {/*                                                            <li><span>Genre :</span><a href="https://tfhtml.themepul.com/moviestar/details.html">Action, Drama</a></li>*/}
                {/*                                                        </ul>*/}
                {/*                                                    </div>*/}
                {/*                                                </div>*/}
                {/*                                                <div class="movie-item-beta">*/}
                {/*                                                    <div class="movie-details">*/}
                {/*                                                        <a href="https://tfhtml.themepul.com/moviestar/details.html" class="btn btn-button button-detals blck-bg">details</a>*/}
                {/*                                                    </div>*/}
                {/*                                                    <div class="view-movie hover-right">*/}
                {/*                                                        <a class="blck-bg" href="https://tfhtml.themepul.com/moviestar/details.html">15k view</a>*/}
                {/*                                                    </div>*/}
                {/*                                                </div>*/}
                {/*                                            </div>*/}
                {/*                                        </div>*/}
                {/*                                </div>*/}
                {/*                            </div></div><div class="owl-item cloned" style="width: 262.5px; margin-right: 30px;"><div class="item">*/}
                {/*                                <div class="movie-item-contents gradient">*/}
                {/*                                    <img src="./movie _ Multipurpose HTML5 template_files/2(1).jpg" alt=""/>*/}
                {/*                                        <div class="movie-item-content">*/}
                {/*                                            <div class="movie-item-content-top">*/}
                {/*                                                <div class="pull-left">*/}
                {/*                                                    <span class="movie-count-time hover-left">02.50.20</span>*/}
                {/*                                                </div>*/}
                {/*                                                <div class="pull-right">*/}
                {/*                                                    <div class="movie-ratting">*/}
                {/*                                                        <a href="https://tfhtml.themepul.com/moviestar/details.html"><span class="fa fa-star"></span>2/20</a>*/}
                {/*                                                    </div>*/}
                {/*                                                </div>*/}
                {/*                                            </div>*/}
                {/*                                            <div class="movie-item-content-center">*/}
                {/*                                                <a href="https://tfhtml.themepul.com/moviestar/details.html" class="flat-icons" data-video-url="https://www.youtube.com/watch?v=CsVJoCKc9rA" style="cursor: pointer;"><span class="flaticon-play-button"></span></a>*/}
                {/*                                            </div>*/}
                {/*                                            <div class="movie-item-content-buttom">*/}
                {/*                                                <div class="movie-item-title">*/}
                {/*                                                    <a href="https://tfhtml.themepul.com/moviestar/details.html">Hurry Animate Blue Strack New Movie (2018)</a>*/}
                {/*                                                </div>*/}
                {/*                                                <div class="item-cat">*/}
                {/*                                                    <ul>*/}
                {/*                                                        <li><span>Category :</span><a href="https://tfhtml.themepul.com/moviestar/details.html">English Movies</a></li>*/}
                {/*                                                    </ul>*/}
                {/*                                                    <div class="item-cat-hover">*/}
                {/*                                                        <ul>*/}
                {/*                                                            <li><span>Release :</span><a href="https://tfhtml.themepul.com/moviestar/details.html">October 26, 2017</a></li>*/}
                {/*                                                            <li><span>Genre :</span><a href="https://tfhtml.themepul.com/moviestar/details.html">Action, Drama</a></li>*/}
                {/*                                                        </ul>*/}
                {/*                                                    </div>*/}
                {/*                                                </div>*/}
                {/*                                                <div class="movie-item-beta">*/}
                {/*                                                    <div class="movie-details">*/}
                {/*                                                        <a href="https://tfhtml.themepul.com/moviestar/details.html" class="btn btn-button button-detals blck-bg">details</a>*/}
                {/*                                                    </div>*/}
                {/*                                                    <div class="view-movie hover-right">*/}
                {/*                                                        <a class="blck-bg" href="https://tfhtml.themepul.com/moviestar/details.html">15k view</a>*/}
                {/*                                                    </div>*/}
                {/*                                                </div>*/}
                {/*                                            </div>*/}
                {/*                                        </div>*/}
                {/*                                </div>*/}
                {/*                            </div></div><div class="owl-item cloned" style="width: 262.5px; margin-right: 30px;"><div class="item">*/}
                {/*                                <div class="movie-item-contents gradient">*/}
                {/*                                    <img src="./movie _ Multipurpose HTML5 template_files/3.jpg" alt=""/>*/}
                {/*                                        <div class="movie-item-content">*/}
                {/*                                            <div class="movie-item-content-top">*/}
                {/*                                                <div class="pull-left">*/}
                {/*                                                    <span class="movie-count-time hover-left">02.50.20</span>*/}
                {/*                                                </div>*/}
                {/*                                                <div class="pull-right">*/}
                {/*                                                    <div class="movie-ratting">*/}
                {/*                                                        <a href="https://tfhtml.themepul.com/moviestar/details.html"><span class="fa fa-star"></span>2/20</a>*/}
                {/*                                                    </div>*/}
                {/*                                                </div>*/}
                {/*                                            </div>*/}
                {/*                                            <div class="movie-item-content-center">*/}
                {/*                                                <a href="https://tfhtml.themepul.com/moviestar/details.html" class="flat-icons" data-video-url="https://www.youtube.com/watch?v=CsVJoCKc9rA" style="cursor: pointer;"><span class="flaticon-play-button"></span></a>*/}
                {/*                                            </div>*/}
                {/*                                            <div class="movie-item-content-buttom">*/}
                {/*                                                <div class="movie-item-title">*/}
                {/*                                                    <a href="https://tfhtml.themepul.com/moviestar/details.html">Hurry Animate Blue Strack New Movie (2018)</a>*/}
                {/*                                                </div>*/}
                {/*                                                <div class="item-cat">*/}
                {/*                                                    <ul>*/}
                {/*                                                        <li><span>Category :</span><a href="https://tfhtml.themepul.com/moviestar/details.html">English Movies</a></li>*/}
                {/*                                                    </ul>*/}
                {/*                                                    <div class="item-cat-hover">*/}
                {/*                                                        <ul>*/}
                {/*                                                            <li><span>Release :</span><a href="https://tfhtml.themepul.com/moviestar/details.html">October 26, 2017</a></li>*/}
                {/*                                                            <li><span>Genre :</span><a href="https://tfhtml.themepul.com/moviestar/details.html">Action, Drama</a></li>*/}
                {/*                                                        </ul>*/}
                {/*                                                    </div>*/}
                {/*                                                </div>*/}
                {/*                                                <div class="movie-item-beta">*/}
                {/*                                                    <div class="movie-details">*/}
                {/*                                                        <a href="https://tfhtml.themepul.com/moviestar/details.html" class="btn btn-button button-detals blck-bg">details</a>*/}
                {/*                                                    </div>*/}
                {/*                                                    <div class="view-movie hover-right">*/}
                {/*                                                        <a class="blck-bg" href="https://tfhtml.themepul.com/moviestar/details.html">15k view</a>*/}
                {/*                                                    </div>*/}
                {/*                                                </div>*/}
                {/*                                            </div>*/}
                {/*                                        </div>*/}
                {/*                                </div>*/}
                {/*                            </div></div><div class="owl-item cloned" style="width: 262.5px; margin-right: 30px;"><div class="item">*/}
                {/*                                <div class="movie-item-contents gradient">*/}
                {/*                                    <img src="./movie _ Multipurpose HTML5 template_files/4.jpg" alt=""/>*/}
                {/*                                        <div class="movie-item-content">*/}
                {/*                                            <div class="movie-item-content-top">*/}
                {/*                                                <div class="pull-left">*/}
                {/*                                                    <span class="movie-count-time hover-left">02.50.20</span>*/}
                {/*                                                </div>*/}
                {/*                                                <div class="pull-right">*/}
                {/*                                                    <div class="movie-ratting">*/}
                {/*                                                        <a href="https://tfhtml.themepul.com/moviestar/details.html"><span class="fa fa-star"></span>2/20</a>*/}
                {/*                                                    </div>*/}
                {/*                                                </div>*/}
                {/*                                            </div>*/}
                {/*                                            <div class="movie-item-content-center">*/}
                {/*                                                <a href="https://tfhtml.themepul.com/moviestar/details.html" class="flat-icons" data-video-url="https://www.youtube.com/watch?v=CsVJoCKc9rA" style="cursor: pointer;"><span class="flaticon-play-button"></span></a>*/}
                {/*                                            </div>*/}
                {/*                                            <div class="movie-item-content-buttom">*/}
                {/*                                                <div class="movie-item-title">*/}
                {/*                                                    <a href="https://tfhtml.themepul.com/moviestar/details.html">Hurry Animate Blue Strack New Movie (2018)</a>*/}
                {/*                                                </div>*/}
                {/*                                                <div class="item-cat">*/}
                {/*                                                    <ul>*/}
                {/*                                                        <li><span>Category :</span><a href="https://tfhtml.themepul.com/moviestar/details.html">English Movies</a></li>*/}
                {/*                                                    </ul>*/}
                {/*                                                    <div class="item-cat-hover">*/}
                {/*                                                        <ul>*/}
                {/*                                                            <li><span>Release :</span><a href="https://tfhtml.themepul.com/moviestar/details.html">October 26, 2017</a></li>*/}
                {/*                                                            <li><span>Genre :</span><a href="https://tfhtml.themepul.com/moviestar/details.html">Action, Drama</a></li>*/}
                {/*                                                        </ul>*/}
                {/*                                                    </div>*/}
                {/*                                                </div>*/}
                {/*                                                <div class="movie-item-beta">*/}
                {/*                                                    <div class="movie-details">*/}
                {/*                                                        <a href="https://tfhtml.themepul.com/moviestar/details.html" class="btn btn-button button-detals blck-bg">details</a>*/}
                {/*                                                    </div>*/}
                {/*                                                    <div class="view-movie hover-right">*/}
                {/*                                                        <a class="blck-bg" href="https://tfhtml.themepul.com/moviestar/details.html">15k view</a>*/}
                {/*                                                    </div>*/}
                {/*                                                </div>*/}
                {/*                                            </div>*/}
                {/*                                        </div>*/}
                {/*                                </div>*/}
                {/*                            </div></div></div></div><div class="owl-controls"><div class="owl-nav"><div class="owl-prev" style=""><i class="flaticon-send"></i></div><div class="owl-next" style=""><span class="flaticon-send"></span></div></div><div class="owl-dots" style="display: none;"></div></div></div>*/}
                {/*                    </div>*/}
                {/*                    <div id="top-ratings" class="tab-pane fade" role="tabpanel">*/}
                {/*                        <div class="category-slide2 owl-carousel owl-theme owl-hidden owl-loaded">*/}


                {/*                            <div class="owl-stage-outer"><div class="owl-stage" style="transform: translate3d(-1170px, 0px, 0px); transition: all 0s ease 0s; width: 3510px;"><div class="owl-item cloned" style="width: 262.5px; margin-right: 30px;"><div class="item">*/}
                {/*                                <div class="movie-item-contents gradient">*/}
                {/*                                    <img src="./movie _ Multipurpose HTML5 template_files/1(1).jpg" alt=""/>*/}
                {/*                                        <div class="movie-item-content">*/}
                {/*                                            <div class="movie-item-content-top">*/}
                {/*                                                <div class="pull-left">*/}
                {/*                                                    <span class="movie-count-time hover-left">02.50.20</span>*/}
                {/*                                                </div>*/}
                {/*                                                <div class="pull-right">*/}
                {/*                                                    <div class="movie-ratting">*/}
                {/*                                                        <a href="https://tfhtml.themepul.com/moviestar/details.html"><span class="fa fa-star"></span>2/20</a>*/}
                {/*                                                    </div>*/}
                {/*                                                </div>*/}
                {/*                                            </div>*/}
                {/*                                            <div class="movie-item-content-center">*/}
                {/*                                                <a href="https://tfhtml.themepul.com/moviestar/details.html" class="flat-icons" data-video-url="https://www.youtube.com/watch?v=CsVJoCKc9rA" style="cursor: pointer;"><span class="flaticon-play-button"></span></a>*/}
                {/*                                            </div>*/}
                {/*                                            <div class="movie-item-content-buttom">*/}
                {/*                                                <div class="movie-item-title">*/}
                {/*                                                    <a href="https://tfhtml.themepul.com/moviestar/details.html">Hurry Animate Blue Strack New Movie (2018)</a>*/}
                {/*                                                </div>*/}
                {/*                                                <div class="item-cat">*/}
                {/*                                                    <ul>*/}
                {/*                                                        <li><span>Category :</span><a href="https://tfhtml.themepul.com/moviestar/details.html">English Movies</a></li>*/}
                {/*                                                    </ul>*/}
                {/*                                                    <div class="item-cat-hover">*/}
                {/*                                                        <ul>*/}
                {/*                                                            <li><span>Release :</span><a href="https://tfhtml.themepul.com/moviestar/details.html">October 26, 2017</a></li>*/}
                {/*                                                            <li><span>Genre :</span><a href="https://tfhtml.themepul.com/moviestar/details.html">Action, Drama</a></li>*/}
                {/*                                                        </ul>*/}
                {/*                                                    </div>*/}
                {/*                                                </div>*/}
                {/*                                                <div class="movie-item-beta">*/}
                {/*                                                    <div class="movie-details">*/}
                {/*                                                        <a href="https://tfhtml.themepul.com/moviestar/details.html" class="btn btn-button button-detals blck-bg">details</a>*/}
                {/*                                                    </div>*/}
                {/*                                                    <div class="view-movie hover-right">*/}
                {/*                                                        <a class="blck-bg" href="https://tfhtml.themepul.com/moviestar/details.html">15k view</a>*/}
                {/*                                                    </div>*/}
                {/*                                                </div>*/}
                {/*                                            </div>*/}
                {/*                                        </div>*/}
                {/*                                </div>*/}
                {/*                            </div></div><div class="owl-item cloned" style="width: 262.5px; margin-right: 30px;"><div class="item">*/}
                {/*                                <div class="movie-item-contents gradient">*/}
                {/*                                    <img src="./movie _ Multipurpose HTML5 template_files/2(1).jpg" alt=""/>*/}
                {/*                                        <div class="movie-item-content">*/}
                {/*                                            <div class="movie-item-content-top">*/}
                {/*                                                <div class="pull-left">*/}
                {/*                                                    <span class="movie-count-time hover-left">02.50.20</span>*/}
                {/*                                                </div>*/}
                {/*                                                <div class="pull-right">*/}
                {/*                                                    <div class="movie-ratting">*/}
                {/*                                                        <a href="https://tfhtml.themepul.com/moviestar/details.html"><span class="fa fa-star"></span>2/20</a>*/}
                {/*                                                    </div>*/}
                {/*                                                </div>*/}
                {/*                                            </div>*/}
                {/*                                            <div class="movie-item-content-center">*/}
                {/*                                                <a href="https://tfhtml.themepul.com/moviestar/details.html" class="flat-icons" data-video-url="https://www.youtube.com/watch?v=CsVJoCKc9rA" style="cursor: pointer;"><span class="flaticon-play-button"></span></a>*/}
                {/*                                            </div>*/}
                {/*                                            <div class="movie-item-content-buttom">*/}
                {/*                                                <div class="movie-item-title">*/}
                {/*                                                    <a href="https://tfhtml.themepul.com/moviestar/details.html">Hurry Animate Blue Strack New Movie (2018)</a>*/}
                {/*                                                </div>*/}
                {/*                                                <div class="item-cat">*/}
                {/*                                                    <ul>*/}
                {/*                                                        <li><span>Category :</span><a href="https://tfhtml.themepul.com/moviestar/details.html">English Movies</a></li>*/}
                {/*                                                    </ul>*/}
                {/*                                                    <div class="item-cat-hover">*/}
                {/*                                                        <ul>*/}
                {/*                                                            <li><span>Release :</span><a href="https://tfhtml.themepul.com/moviestar/details.html">October 26, 2017</a></li>*/}
                {/*                                                            <li><span>Genre :</span><a href="https://tfhtml.themepul.com/moviestar/details.html">Action, Drama</a></li>*/}
                {/*                                                        </ul>*/}
                {/*                                                    </div>*/}
                {/*                                                </div>*/}
                {/*                                                <div class="movie-item-beta">*/}
                {/*                                                    <div class="movie-details">*/}
                {/*                                                        <a href="https://tfhtml.themepul.com/moviestar/details.html" class="btn btn-button button-detals blck-bg">details</a>*/}
                {/*                                                    </div>*/}
                {/*                                                    <div class="view-movie hover-right">*/}
                {/*                                                        <a class="blck-bg" href="https://tfhtml.themepul.com/moviestar/details.html">15k view</a>*/}
                {/*                                                    </div>*/}
                {/*                                                </div>*/}
                {/*                                            </div>*/}
                {/*                                        </div>*/}
                {/*                                </div>*/}
                {/*                            </div></div><div class="owl-item cloned" style="width: 262.5px; margin-right: 30px;"><div class="item">*/}
                {/*                                <div class="movie-item-contents gradient">*/}
                {/*                                    <img src="./movie _ Multipurpose HTML5 template_files/3.jpg" alt=""/>*/}
                {/*                                        <div class="movie-item-content">*/}
                {/*                                            <div class="movie-item-content-top">*/}
                {/*                                                <div class="pull-left">*/}
                {/*                                                    <span class="movie-count-time hover-left">02.50.20</span>*/}
                {/*                                                </div>*/}
                {/*                                                <div class="pull-right">*/}
                {/*                                                    <div class="movie-ratting">*/}
                {/*                                                        <a href="https://tfhtml.themepul.com/moviestar/details.html"><span class="fa fa-star"></span>2/20</a>*/}
                {/*                                                    </div>*/}
                {/*                                                </div>*/}
                {/*                                            </div>*/}
                {/*                                            <div class="movie-item-content-center">*/}
                {/*                                                <a href="https://tfhtml.themepul.com/moviestar/details.html" class="flat-icons" data-video-url="https://www.youtube.com/watch?v=CsVJoCKc9rA" style="cursor: pointer;"><span class="flaticon-play-button"></span></a>*/}
                {/*                                            </div>*/}
                {/*                                            <div class="movie-item-content-buttom">*/}
                {/*                                                <div class="movie-item-title">*/}
                {/*                                                    <a href="https://tfhtml.themepul.com/moviestar/details.html">Hurry Animate Blue Strack New Movie (2018)</a>*/}
                {/*                                                </div>*/}
                {/*                                                <div class="item-cat">*/}
                {/*                                                    <ul>*/}
                {/*                                                        <li><span>Category :</span><a href="https://tfhtml.themepul.com/moviestar/details.html">English Movies</a></li>*/}
                {/*                                                    </ul>*/}
                {/*                                                    <div class="item-cat-hover">*/}
                {/*                                                        <ul>*/}
                {/*                                                            <li><span>Release :</span><a href="https://tfhtml.themepul.com/moviestar/details.html">October 26, 2017</a></li>*/}
                {/*                                                            <li><span>Genre :</span><a href="https://tfhtml.themepul.com/moviestar/details.html">Action, Drama</a></li>*/}
                {/*                                                        </ul>*/}
                {/*                                                    </div>*/}
                {/*                                                </div>*/}
                {/*                                                <div class="movie-item-beta">*/}
                {/*                                                    <div class="movie-details">*/}
                {/*                                                        <a href="https://tfhtml.themepul.com/moviestar/details.html" class="btn btn-button button-detals blck-bg">details</a>*/}
                {/*                                                    </div>*/}
                {/*                                                    <div class="view-movie hover-right">*/}
                {/*                                                        <a class="blck-bg" href="https://tfhtml.themepul.com/moviestar/details.html">15k view</a>*/}
                {/*                                                    </div>*/}
                {/*                                                </div>*/}
                {/*                                            </div>*/}
                {/*                                        </div>*/}
                {/*                                </div>*/}
                {/*                            </div></div><div class="owl-item cloned" style="width: 262.5px; margin-right: 30px;"><div class="item">*/}
                {/*                                <div class="movie-item-contents gradient">*/}
                {/*                                    <img src="./movie _ Multipurpose HTML5 template_files/4.jpg" alt=""/>*/}
                {/*                                        <div class="movie-item-content">*/}
                {/*                                            <div class="movie-item-content-top">*/}
                {/*                                                <div class="pull-left">*/}
                {/*                                                    <span class="movie-count-time hover-left">02.50.20</span>*/}
                {/*                                                </div>*/}
                {/*                                                <div class="pull-right">*/}
                {/*                                                    <div class="movie-ratting">*/}
                {/*                                                        <a href="https://tfhtml.themepul.com/moviestar/details.html"><span class="fa fa-star"></span>2/20</a>*/}
                {/*                                                    </div>*/}
                {/*                                                </div>*/}
                {/*                                            </div>*/}
                {/*                                            <div class="movie-item-content-center">*/}
                {/*                                                <a href="https://tfhtml.themepul.com/moviestar/details.html" class="flat-icons" data-video-url="https://www.youtube.com/watch?v=CsVJoCKc9rA" style="cursor: pointer;"><span class="flaticon-play-button"></span></a>*/}
                {/*                                            </div>*/}
                {/*                                            <div class="movie-item-content-buttom">*/}
                {/*                                                <div class="movie-item-title">*/}
                {/*                                                    <a href="https://tfhtml.themepul.com/moviestar/details.html">Hurry Animate Blue Strack New Movie (2018)</a>*/}
                {/*                                                </div>*/}
                {/*                                                <div class="item-cat">*/}
                {/*                                                    <ul>*/}
                {/*                                                        <li><span>Category :</span><a href="https://tfhtml.themepul.com/moviestar/details.html">English Movies</a></li>*/}
                {/*                                                    </ul>*/}
                {/*                                                    <div class="item-cat-hover">*/}
                {/*                                                        <ul>*/}
                {/*                                                            <li><span>Release :</span><a href="https://tfhtml.themepul.com/moviestar/details.html">October 26, 2017</a></li>*/}
                {/*                                                            <li><span>Genre :</span><a href="https://tfhtml.themepul.com/moviestar/details.html">Action, Drama</a></li>*/}
                {/*                                                        </ul>*/}
                {/*                                                    </div>*/}
                {/*                                                </div>*/}
                {/*                                                <div class="movie-item-beta">*/}
                {/*                                                    <div class="movie-details">*/}
                {/*                                                        <a href="https://tfhtml.themepul.com/moviestar/details.html" class="btn btn-button button-detals blck-bg">details</a>*/}
                {/*                                                    </div>*/}
                {/*                                                    <div class="view-movie hover-right">*/}
                {/*                                                        <a class="blck-bg" href="https://tfhtml.themepul.com/moviestar/details.html">15k view</a>*/}
                {/*                                                    </div>*/}
                {/*                                                </div>*/}
                {/*                                            </div>*/}
                {/*                                        </div>*/}
                {/*                                </div>*/}
                {/*                            </div></div><div class="owl-item active" style="width: 262.5px; margin-right: 30px;"><div class="item">*/}
                {/*                                <div class="movie-item-contents gradient">*/}
                {/*                                    <img src="./movie _ Multipurpose HTML5 template_files/1(1).jpg" alt=""/>*/}
                {/*                                        <div class="movie-item-content">*/}
                {/*                                            <div class="movie-item-content-top">*/}
                {/*                                                <div class="pull-left">*/}
                {/*                                                    <span class="movie-count-time hover-left">02.50.20</span>*/}
                {/*                                                </div>*/}
                {/*                                                <div class="pull-right">*/}
                {/*                                                    <div class="movie-ratting">*/}
                {/*                                                        <a href="https://tfhtml.themepul.com/moviestar/details.html"><span class="fa fa-star"></span>2/20</a>*/}
                {/*                                                    </div>*/}
                {/*                                                </div>*/}
                {/*                                            </div>*/}
                {/*                                            <div class="movie-item-content-center">*/}
                {/*                                                <a href="https://tfhtml.themepul.com/moviestar/details.html" class="flat-icons" data-video-url="https://www.youtube.com/watch?v=CsVJoCKc9rA" style="cursor: pointer;"><span class="flaticon-play-button"></span></a>*/}
                {/*                                            </div>*/}
                {/*                                            <div class="movie-item-content-buttom">*/}
                {/*                                                <div class="movie-item-title">*/}
                {/*                                                    <a href="https://tfhtml.themepul.com/moviestar/details.html">Hurry Animate Blue Strack New Movie (2018)</a>*/}
                {/*                                                </div>*/}
                {/*                                                <div class="item-cat">*/}
                {/*                                                    <ul>*/}
                {/*                                                        <li><span>Category :</span><a href="https://tfhtml.themepul.com/moviestar/details.html">English Movies</a></li>*/}
                {/*                                                    </ul>*/}
                {/*                                                    <div class="item-cat-hover">*/}
                {/*                                                        <ul>*/}
                {/*                                                            <li><span>Release :</span><a href="https://tfhtml.themepul.com/moviestar/details.html">October 26, 2017</a></li>*/}
                {/*                                                            <li><span>Genre :</span><a href="https://tfhtml.themepul.com/moviestar/details.html">Action, Drama</a></li>*/}
                {/*                                                        </ul>*/}
                {/*                                                    </div>*/}
                {/*                                                </div>*/}
                {/*                                                <div class="movie-item-beta">*/}
                {/*                                                    <div class="movie-details">*/}
                {/*                                                        <a href="https://tfhtml.themepul.com/moviestar/details.html" class="btn btn-button button-detals blck-bg">details</a>*/}
                {/*                                                    </div>*/}
                {/*                                                    <div class="view-movie hover-right">*/}
                {/*                                                        <a class="blck-bg" href="https://tfhtml.themepul.com/moviestar/details.html">15k view</a>*/}
                {/*                                                    </div>*/}
                {/*                                                </div>*/}
                {/*                                            </div>*/}
                {/*                                        </div>*/}
                {/*                                </div>*/}
                {/*                            </div></div><div class="owl-item active" style="width: 262.5px; margin-right: 30px;"><div class="item">*/}
                {/*                                <div class="movie-item-contents gradient">*/}
                {/*                                    <img src="./movie _ Multipurpose HTML5 template_files/2(1).jpg" alt=""/>*/}
                {/*                                        <div class="movie-item-content">*/}
                {/*                                            <div class="movie-item-content-top">*/}
                {/*                                                <div class="pull-left">*/}
                {/*                                                    <span class="movie-count-time hover-left">02.50.20</span>*/}
                {/*                                                </div>*/}
                {/*                                                <div class="pull-right">*/}
                {/*                                                    <div class="movie-ratting">*/}
                {/*                                                        <a href="https://tfhtml.themepul.com/moviestar/details.html"><span class="fa fa-star"></span>2/20</a>*/}
                {/*                                                    </div>*/}
                {/*                                                </div>*/}
                {/*                                            </div>*/}
                {/*                                            <div class="movie-item-content-center">*/}
                {/*                                                <a href="https://tfhtml.themepul.com/moviestar/details.html" class="flat-icons" data-video-url="https://www.youtube.com/watch?v=CsVJoCKc9rA" style="cursor: pointer;"><span class="flaticon-play-button"></span></a>*/}
                {/*                                            </div>*/}
                {/*                                            <div class="movie-item-content-buttom">*/}
                {/*                                                <div class="movie-item-title">*/}
                {/*                                                    <a href="https://tfhtml.themepul.com/moviestar/details.html">Hurry Animate Blue Strack New Movie (2018)</a>*/}
                {/*                                                </div>*/}
                {/*                                                <div class="item-cat">*/}
                {/*                                                    <ul>*/}
                {/*                                                        <li><span>Category :</span><a href="https://tfhtml.themepul.com/moviestar/details.html">English Movies</a></li>*/}
                {/*                                                    </ul>*/}
                {/*                                                    <div class="item-cat-hover">*/}
                {/*                                                        <ul>*/}
                {/*                                                            <li><span>Release :</span><a href="https://tfhtml.themepul.com/moviestar/details.html">October 26, 2017</a></li>*/}
                {/*                                                            <li><span>Genre :</span><a href="https://tfhtml.themepul.com/moviestar/details.html">Action, Drama</a></li>*/}
                {/*                                                        </ul>*/}
                {/*                                                    </div>*/}
                {/*                                                </div>*/}
                {/*                                                <div class="movie-item-beta">*/}
                {/*                                                    <div class="movie-details">*/}
                {/*                                                        <a href="https://tfhtml.themepul.com/moviestar/details.html" class="btn btn-button button-detals blck-bg">details</a>*/}
                {/*                                                    </div>*/}
                {/*                                                    <div class="view-movie hover-right">*/}
                {/*                                                        <a class="blck-bg" href="https://tfhtml.themepul.com/moviestar/details.html">15k view</a>*/}
                {/*                                                    </div>*/}
                {/*                                                </div>*/}
                {/*                                            </div>*/}
                {/*                                        </div>*/}
                {/*                                </div>*/}
                {/*                            </div></div><div class="owl-item active" style="width: 262.5px; margin-right: 30px;"><div class="item">*/}
                {/*                                <div class="movie-item-contents gradient">*/}
                {/*                                    <img src="./movie _ Multipurpose HTML5 template_files/3.jpg" alt=""/>*/}
                {/*                                        <div class="movie-item-content">*/}
                {/*                                            <div class="movie-item-content-top">*/}
                {/*                                                <div class="pull-left">*/}
                {/*                                                    <span class="movie-count-time hover-left">02.50.20</span>*/}
                {/*                                                </div>*/}
                {/*                                                <div class="pull-right">*/}
                {/*                                                    <div class="movie-ratting">*/}
                {/*                                                        <a href="https://tfhtml.themepul.com/moviestar/details.html"><span class="fa fa-star"></span>2/20</a>*/}
                {/*                                                    </div>*/}
                {/*                                                </div>*/}
                {/*                                            </div>*/}
                {/*                                            <div class="movie-item-content-center">*/}
                {/*                                                <a href="https://tfhtml.themepul.com/moviestar/details.html" class="flat-icons" data-video-url="https://www.youtube.com/watch?v=CsVJoCKc9rA" style="cursor: pointer;"><span class="flaticon-play-button"></span></a>*/}
                {/*                                            </div>*/}
                {/*                                            <div class="movie-item-content-buttom">*/}
                {/*                                                <div class="movie-item-title">*/}
                {/*                                                    <a href="https://tfhtml.themepul.com/moviestar/details.html">Hurry Animate Blue Strack New Movie (2018)</a>*/}
                {/*                                                </div>*/}
                {/*                                                <div class="item-cat">*/}
                {/*                                                    <ul>*/}
                {/*                                                        <li><span>Category :</span><a href="https://tfhtml.themepul.com/moviestar/details.html">English Movies</a></li>*/}
                {/*                                                    </ul>*/}
                {/*                                                    <div class="item-cat-hover">*/}
                {/*                                                        <ul>*/}
                {/*                                                            <li><span>Release :</span><a href="https://tfhtml.themepul.com/moviestar/details.html">October 26, 2017</a></li>*/}
                {/*                                                            <li><span>Genre :</span><a href="https://tfhtml.themepul.com/moviestar/details.html">Action, Drama</a></li>*/}
                {/*                                                        </ul>*/}
                {/*                                                    </div>*/}
                {/*                                                </div>*/}
                {/*                                                <div class="movie-item-beta">*/}
                {/*                                                    <div class="movie-details">*/}
                {/*                                                        <a href="https://tfhtml.themepul.com/moviestar/details.html" class="btn btn-button button-detals blck-bg">details</a>*/}
                {/*                                                    </div>*/}
                {/*                                                    <div class="view-movie hover-right">*/}
                {/*                                                        <a class="blck-bg" href="https://tfhtml.themepul.com/moviestar/details.html">15k view</a>*/}
                {/*                                                    </div>*/}
                {/*                                                </div>*/}
                {/*                                            </div>*/}
                {/*                                        </div>*/}
                {/*                                </div>*/}
                {/*                            </div></div><div class="owl-item active" style="width: 262.5px; margin-right: 30px;"><div class="item">*/}
                {/*                                <div class="movie-item-contents gradient">*/}
                {/*                                    <img src="./movie _ Multipurpose HTML5 template_files/4.jpg" alt=""/>*/}
                {/*                                        <div class="movie-item-content">*/}
                {/*                                            <div class="movie-item-content-top">*/}
                {/*                                                <div class="pull-left">*/}
                {/*                                                    <span class="movie-count-time hover-left">02.50.20</span>*/}
                {/*                                                </div>*/}
                {/*                                                <div class="pull-right">*/}
                {/*                                                    <div class="movie-ratting">*/}
                {/*                                                        <a href="https://tfhtml.themepul.com/moviestar/details.html"><span class="fa fa-star"></span>2/20</a>*/}
                {/*                                                    </div>*/}
                {/*                                                </div>*/}
                {/*                                            </div>*/}
                {/*                                            <div class="movie-item-content-center">*/}
                {/*                                                <a href="https://tfhtml.themepul.com/moviestar/details.html" class="flat-icons" data-video-url="https://www.youtube.com/watch?v=CsVJoCKc9rA" style="cursor: pointer;"><span class="flaticon-play-button"></span></a>*/}
                {/*                                            </div>*/}
                {/*                                            <div class="movie-item-content-buttom">*/}
                {/*                                                <div class="movie-item-title">*/}
                {/*                                                    <a href="https://tfhtml.themepul.com/moviestar/details.html">Hurry Animate Blue Strack New Movie (2018)</a>*/}
                {/*                                                </div>*/}
                {/*                                                <div class="item-cat">*/}
                {/*                                                    <ul>*/}
                {/*                                                        <li><span>Category :</span><a href="https://tfhtml.themepul.com/moviestar/details.html">English Movies</a></li>*/}
                {/*                                                    </ul>*/}
                {/*                                                    <div class="item-cat-hover">*/}
                {/*                                                        <ul>*/}
                {/*                                                            <li><span>Release :</span><a href="https://tfhtml.themepul.com/moviestar/details.html">October 26, 2017</a></li>*/}
                {/*                                                            <li><span>Genre :</span><a href="https://tfhtml.themepul.com/moviestar/details.html">Action, Drama</a></li>*/}
                {/*                                                        </ul>*/}
                {/*                                                    </div>*/}
                {/*                                                </div>*/}
                {/*                                                <div class="movie-item-beta">*/}
                {/*                                                    <div class="movie-details">*/}
                {/*                                                        <a href="https://tfhtml.themepul.com/moviestar/details.html" class="btn btn-button button-detals blck-bg">details</a>*/}
                {/*                                                    </div>*/}
                {/*                                                    <div class="view-movie hover-right">*/}
                {/*                                                        <a class="blck-bg" href="https://tfhtml.themepul.com/moviestar/details.html">15k view</a>*/}
                {/*                                                    </div>*/}
                {/*                                                </div>*/}
                {/*                                            </div>*/}
                {/*                                        </div>*/}
                {/*                                </div>*/}
                {/*                            </div></div><div class="owl-item cloned" style="width: 262.5px; margin-right: 30px;"><div class="item">*/}
                {/*                                <div class="movie-item-contents gradient">*/}
                {/*                                    <img src="./movie _ Multipurpose HTML5 template_files/1(1).jpg" alt=""/>*/}
                {/*                                        <div class="movie-item-content">*/}
                {/*                                            <div class="movie-item-content-top">*/}
                {/*                                                <div class="pull-left">*/}
                {/*                                                    <span class="movie-count-time hover-left">02.50.20</span>*/}
                {/*                                                </div>*/}
                {/*                                                <div class="pull-right">*/}
                {/*                                                    <div class="movie-ratting">*/}
                {/*                                                        <a href="https://tfhtml.themepul.com/moviestar/details.html"><span class="fa fa-star"></span>2/20</a>*/}
                {/*                                                    </div>*/}
                {/*                                                </div>*/}
                {/*                                            </div>*/}
                {/*                                            <div class="movie-item-content-center">*/}
                {/*                                                <a href="https://tfhtml.themepul.com/moviestar/details.html" class="flat-icons" data-video-url="https://www.youtube.com/watch?v=CsVJoCKc9rA" style="cursor: pointer;"><span class="flaticon-play-button"></span></a>*/}
                {/*                                            </div>*/}
                {/*                                            <div class="movie-item-content-buttom">*/}
                {/*                                                <div class="movie-item-title">*/}
                {/*                                                    <a href="https://tfhtml.themepul.com/moviestar/details.html">Hurry Animate Blue Strack New Movie (2018)</a>*/}
                {/*                                                </div>*/}
                {/*                                                <div class="item-cat">*/}
                {/*                                                    <ul>*/}
                {/*                                                        <li><span>Category :</span><a href="https://tfhtml.themepul.com/moviestar/details.html">English Movies</a></li>*/}
                {/*                                                    </ul>*/}
                {/*                                                    <div class="item-cat-hover">*/}
                {/*                                                        <ul>*/}
                {/*                                                            <li><span>Release :</span><a href="https://tfhtml.themepul.com/moviestar/details.html">October 26, 2017</a></li>*/}
                {/*                                                            <li><span>Genre :</span><a href="https://tfhtml.themepul.com/moviestar/details.html">Action, Drama</a></li>*/}
                {/*                                                        </ul>*/}
                {/*                                                    </div>*/}
                {/*                                                </div>*/}
                {/*                                                <div class="movie-item-beta">*/}
                {/*                                                    <div class="movie-details">*/}
                {/*                                                        <a href="https://tfhtml.themepul.com/moviestar/details.html" class="btn btn-button button-detals blck-bg">details</a>*/}
                {/*                                                    </div>*/}
                {/*                                                    <div class="view-movie hover-right">*/}
                {/*                                                        <a class="blck-bg" href="https://tfhtml.themepul.com/moviestar/details.html">15k view</a>*/}
                {/*                                                    </div>*/}
                {/*                                                </div>*/}
                {/*                                            </div>*/}
                {/*                                        </div>*/}
                {/*                                </div>*/}
                {/*                            </div></div><div class="owl-item cloned" style="width: 262.5px; margin-right: 30px;"><div class="item">*/}
                {/*                                <div class="movie-item-contents gradient">*/}
                {/*                                    <img src="./movie _ Multipurpose HTML5 template_files/2(1).jpg" alt=""/>*/}
                {/*                                        <div class="movie-item-content">*/}
                {/*                                            <div class="movie-item-content-top">*/}
                {/*                                                <div class="pull-left">*/}
                {/*                                                    <span class="movie-count-time hover-left">02.50.20</span>*/}
                {/*                                                </div>*/}
                {/*                                                <div class="pull-right">*/}
                {/*                                                    <div class="movie-ratting">*/}
                {/*                                                        <a href="https://tfhtml.themepul.com/moviestar/details.html"><span class="fa fa-star"></span>2/20</a>*/}
                {/*                                                    </div>*/}
                {/*                                                </div>*/}
                {/*                                            </div>*/}
                {/*                                            <div class="movie-item-content-center">*/}
                {/*                                                <a href="https://tfhtml.themepul.com/moviestar/details.html" class="flat-icons" data-video-url="https://www.youtube.com/watch?v=CsVJoCKc9rA" style="cursor: pointer;"><span class="flaticon-play-button"></span></a>*/}
                {/*                                            </div>*/}
                {/*                                            <div class="movie-item-content-buttom">*/}
                {/*                                                <div class="movie-item-title">*/}
                {/*                                                    <a href="https://tfhtml.themepul.com/moviestar/details.html">Hurry Animate Blue Strack New Movie (2018)</a>*/}
                {/*                                                </div>*/}
                {/*                                                <div class="item-cat">*/}
                {/*                                                    <ul>*/}
                {/*                                                        <li><span>Category :</span><a href="https://tfhtml.themepul.com/moviestar/details.html">English Movies</a></li>*/}
                {/*                                                    </ul>*/}
                {/*                                                    <div class="item-cat-hover">*/}
                {/*                                                        <ul>*/}
                {/*                                                            <li><span>Release :</span><a href="https://tfhtml.themepul.com/moviestar/details.html">October 26, 2017</a></li>*/}
                {/*                                                            <li><span>Genre :</span><a href="https://tfhtml.themepul.com/moviestar/details.html">Action, Drama</a></li>*/}
                {/*                                                        </ul>*/}
                {/*                                                    </div>*/}
                {/*                                                </div>*/}
                {/*                                                <div class="movie-item-beta">*/}
                {/*                                                    <div class="movie-details">*/}
                {/*                                                        <a href="https://tfhtml.themepul.com/moviestar/details.html" class="btn btn-button button-detals blck-bg">details</a>*/}
                {/*                                                    </div>*/}
                {/*                                                    <div class="view-movie hover-right">*/}
                {/*                                                        <a class="blck-bg" href="https://tfhtml.themepul.com/moviestar/details.html">15k view</a>*/}
                {/*                                                    </div>*/}
                {/*                                                </div>*/}
                {/*                                            </div>*/}
                {/*                                        </div>*/}
                {/*                                </div>*/}
                {/*                            </div></div><div class="owl-item cloned" style="width: 262.5px; margin-right: 30px;"><div class="item">*/}
                {/*                                <div class="movie-item-contents gradient">*/}
                {/*                                    <img src="./movie _ Multipurpose HTML5 template_files/3.jpg" alt=""/>*/}
                {/*                                        <div class="movie-item-content">*/}
                {/*                                            <div class="movie-item-content-top">*/}
                {/*                                                <div class="pull-left">*/}
                {/*                                                    <span class="movie-count-time hover-left">02.50.20</span>*/}
                {/*                                                </div>*/}
                {/*                                                <div class="pull-right">*/}
                {/*                                                    <div class="movie-ratting">*/}
                {/*                                                        <a href="https://tfhtml.themepul.com/moviestar/details.html"><span class="fa fa-star"></span>2/20</a>*/}
                {/*                                                    </div>*/}
                {/*                                                </div>*/}
                {/*                                            </div>*/}
                {/*                                            <div class="movie-item-content-center">*/}
                {/*                                                <a href="https://tfhtml.themepul.com/moviestar/details.html" class="flat-icons" data-video-url="https://www.youtube.com/watch?v=CsVJoCKc9rA" style="cursor: pointer;"><span class="flaticon-play-button"></span></a>*/}
                {/*                                            </div>*/}
                {/*                                            <div class="movie-item-content-buttom">*/}
                {/*                                                <div class="movie-item-title">*/}
                {/*                                                    <a href="https://tfhtml.themepul.com/moviestar/details.html">Hurry Animate Blue Strack New Movie (2018)</a>*/}
                {/*                                                </div>*/}
                {/*                                                <div class="item-cat">*/}
                {/*                                                    <ul>*/}
                {/*                                                        <li><span>Category :</span><a href="https://tfhtml.themepul.com/moviestar/details.html">English Movies</a></li>*/}
                {/*                                                    </ul>*/}
                {/*                                                    <div class="item-cat-hover">*/}
                {/*                                                        <ul>*/}
                {/*                                                            <li><span>Release :</span><a href="https://tfhtml.themepul.com/moviestar/details.html">October 26, 2017</a></li>*/}
                {/*                                                            <li><span>Genre :</span><a href="https://tfhtml.themepul.com/moviestar/details.html">Action, Drama</a></li>*/}
                {/*                                                        </ul>*/}
                {/*                                                    </div>*/}
                {/*                                                </div>*/}
                {/*                                                <div class="movie-item-beta">*/}
                {/*                                                    <div class="movie-details">*/}
                {/*                                                        <a href="https://tfhtml.themepul.com/moviestar/details.html" class="btn btn-button button-detals blck-bg">details</a>*/}
                {/*                                                    </div>*/}
                {/*                                                    <div class="view-movie hover-right">*/}
                {/*                                                        <a class="blck-bg" href="https://tfhtml.themepul.com/moviestar/details.html">15k view</a>*/}
                {/*                                                    </div>*/}
                {/*                                                </div>*/}
                {/*                                            </div>*/}
                {/*                                        </div>*/}
                {/*                                </div>*/}
                {/*                            </div></div><div class="owl-item cloned" style="width: 262.5px; margin-right: 30px;"><div class="item">*/}
                {/*                                <div class="movie-item-contents gradient">*/}
                {/*                                    <img src="./movie _ Multipurpose HTML5 template_files/4.jpg" alt=""/>*/}
                {/*                                        <div class="movie-item-content">*/}
                {/*                                            <div class="movie-item-content-top">*/}
                {/*                                                <div class="pull-left">*/}
                {/*                                                    <span class="movie-count-time hover-left">02.50.20</span>*/}
                {/*                                                </div>*/}
                {/*                                                <div class="pull-right">*/}
                {/*                                                    <div class="movie-ratting">*/}
                {/*                                                        <a href="https://tfhtml.themepul.com/moviestar/details.html"><span class="fa fa-star"></span>2/20</a>*/}
                {/*                                                    </div>*/}
                {/*                                                </div>*/}
                {/*                                            </div>*/}
                {/*                                            <div class="movie-item-content-center">*/}
                {/*                                                <a href="https://tfhtml.themepul.com/moviestar/details.html" class="flat-icons" data-video-url="https://www.youtube.com/watch?v=CsVJoCKc9rA" style="cursor: pointer;"><span class="flaticon-play-button"></span></a>*/}
                {/*                                            </div>*/}
                {/*                                            <div class="movie-item-content-buttom">*/}
                {/*                                                <div class="movie-item-title">*/}
                {/*                                                    <a href="https://tfhtml.themepul.com/moviestar/details.html">Hurry Animate Blue Strack New Movie (2018)</a>*/}
                {/*                                                </div>*/}
                {/*                                                <div class="item-cat">*/}
                {/*                                                    <ul>*/}
                {/*                                                        <li><span>Category :</span><a href="https://tfhtml.themepul.com/moviestar/details.html">English Movies</a></li>*/}
                {/*                                                    </ul>*/}
                {/*                                                    <div class="item-cat-hover">*/}
                {/*                                                        <ul>*/}
                {/*                                                            <li><span>Release :</span><a href="https://tfhtml.themepul.com/moviestar/details.html">October 26, 2017</a></li>*/}
                {/*                                                            <li><span>Genre :</span><a href="https://tfhtml.themepul.com/moviestar/details.html">Action, Drama</a></li>*/}
                {/*                                                        </ul>*/}
                {/*                                                    </div>*/}
                {/*                                                </div>*/}
                {/*                                                <div class="movie-item-beta">*/}
                {/*                                                    <div class="movie-details">*/}
                {/*                                                        <a href="https://tfhtml.themepul.com/moviestar/details.html" class="btn btn-button button-detals blck-bg">details</a>*/}
                {/*                                                    </div>*/}
                {/*                                                    <div class="view-movie hover-right">*/}
                {/*                                                        <a class="blck-bg" href="https://tfhtml.themepul.com/moviestar/details.html">15k view</a>*/}
                {/*                                                    </div>*/}
                {/*                                                </div>*/}
                {/*                                            </div>*/}
                {/*                                        </div>*/}
                {/*                                </div>*/}
                {/*                            </div></div></div></div><div class="owl-controls"><div class="owl-nav"><div class="owl-prev" style=""><i class="flaticon-send"></i></div><div class="owl-next" style=""><span class="flaticon-send"></span></div></div><div class="owl-dots" style="display: none;"></div></div></div>*/}
                {/*                    </div>*/}
                {/*                    <div id="commingsoon" class="tab-pane fade" role="tabpanel">*/}
                {/*                        <div class="category-slide2 owl-carousel owl-theme owl-hidden owl-loaded">*/}


                {/*                            <div class="owl-stage-outer"><div class="owl-stage" style="transform: translate3d(-1170px, 0px, 0px); transition: all 0s ease 0s; width: 3510px;"><div class="owl-item cloned" style="width: 262.5px; margin-right: 30px;"><div class="item">*/}
                {/*                                <div class="movie-item-contents gradient">*/}
                {/*                                    <img src="./movie _ Multipurpose HTML5 template_files/1(1).jpg" alt=""/>*/}
                {/*                                        <div class="movie-item-content">*/}
                {/*                                            <div class="movie-item-content-top">*/}
                {/*                                                <div class="pull-left">*/}
                {/*                                                    <span class="movie-count-time hover-left">02.50.20</span>*/}
                {/*                                                </div>*/}
                {/*                                                <div class="pull-right">*/}
                {/*                                                    <div class="movie-ratting">*/}
                {/*                                                        <a href="https://tfhtml.themepul.com/moviestar/details.html"><span class="fa fa-star"></span>2/20</a>*/}
                {/*                                                    </div>*/}
                {/*                                                </div>*/}
                {/*                                            </div>*/}
                {/*                                            <div class="movie-item-content-center">*/}
                {/*                                                <a href="https://tfhtml.themepul.com/moviestar/details.html" class="flat-icons" data-video-url="https://www.youtube.com/watch?v=CsVJoCKc9rA" style="cursor: pointer;"><span class="flaticon-play-button"></span></a>*/}
                {/*                                            </div>*/}
                {/*                                            <div class="movie-item-content-buttom">*/}
                {/*                                                <div class="movie-item-title">*/}
                {/*                                                    <a href="https://tfhtml.themepul.com/moviestar/details.html">Hurry Animate Blue Strack New Movie (2018)</a>*/}
                {/*                                                </div>*/}
                {/*                                                <div class="item-cat">*/}
                {/*                                                    <ul>*/}
                {/*                                                        <li><span>Category :</span><a href="https://tfhtml.themepul.com/moviestar/details.html">English Movies</a></li>*/}
                {/*                                                    </ul>*/}
                {/*                                                    <div class="item-cat-hover">*/}
                {/*                                                        <ul>*/}
                {/*                                                            <li><span>Release :</span><a href="https://tfhtml.themepul.com/moviestar/details.html">October 26, 2017</a></li>*/}
                {/*                                                            <li><span>Genre :</span><a href="https://tfhtml.themepul.com/moviestar/details.html">Action, Drama</a></li>*/}
                {/*                                                        </ul>*/}
                {/*                                                    </div>*/}
                {/*                                                </div>*/}
                {/*                                                <div class="movie-item-beta">*/}
                {/*                                                    <div class="movie-details">*/}
                {/*                                                        <a href="https://tfhtml.themepul.com/moviestar/details.html" class="btn btn-button button-detals blck-bg">details</a>*/}
                {/*                                                    </div>*/}
                {/*                                                    <div class="view-movie hover-right">*/}
                {/*                                                        <a class="blck-bg" href="https://tfhtml.themepul.com/moviestar/details.html">15k view</a>*/}
                {/*                                                    </div>*/}
                {/*                                                </div>*/}
                {/*                                            </div>*/}
                {/*                                        </div>*/}
                {/*                                </div>*/}
                {/*                            </div></div><div class="owl-item cloned" style="width: 262.5px; margin-right: 30px;"><div class="item">*/}
                {/*                                <div class="movie-item-contents gradient">*/}
                {/*                                    <img src="./movie _ Multipurpose HTML5 template_files/2(1).jpg" alt=""/>*/}
                {/*                                        <div class="movie-item-content">*/}
                {/*                                            <div class="movie-item-content-top">*/}
                {/*                                                <div class="pull-left">*/}
                {/*                                                    <span class="movie-count-time hover-left">02.50.20</span>*/}
                {/*                                                </div>*/}
                {/*                                                <div class="pull-right">*/}
                {/*                                                    <div class="movie-ratting">*/}
                {/*                                                        <a href="https://tfhtml.themepul.com/moviestar/details.html"><span class="fa fa-star"></span>2/20</a>*/}
                {/*                                                    </div>*/}
                {/*                                                </div>*/}
                {/*                                            </div>*/}
                {/*                                            <div class="movie-item-content-center">*/}
                {/*                                                <a href="https://tfhtml.themepul.com/moviestar/details.html" class="flat-icons" data-video-url="https://www.youtube.com/watch?v=CsVJoCKc9rA" style="cursor: pointer;"><span class="flaticon-play-button"></span></a>*/}
                {/*                                            </div>*/}
                {/*                                            <div class="movie-item-content-buttom">*/}
                {/*                                                <div class="movie-item-title">*/}
                {/*                                                    <a href="https://tfhtml.themepul.com/moviestar/details.html">Hurry Animate Blue Strack New Movie (2018)</a>*/}
                {/*                                                </div>*/}
                {/*                                                <div class="item-cat">*/}
                {/*                                                    <ul>*/}
                {/*                                                        <li><span>Category :</span><a href="https://tfhtml.themepul.com/moviestar/details.html">English Movies</a></li>*/}
                {/*                                                    </ul>*/}
                {/*                                                    <div class="item-cat-hover">*/}
                {/*                                                        <ul>*/}
                {/*                                                            <li><span>Release :</span><a href="https://tfhtml.themepul.com/moviestar/details.html">October 26, 2017</a></li>*/}
                {/*                                                            <li><span>Genre :</span><a href="https://tfhtml.themepul.com/moviestar/details.html">Action, Drama</a></li>*/}
                {/*                                                        </ul>*/}
                {/*                                                    </div>*/}
                {/*                                                </div>*/}
                {/*                                                <div class="movie-item-beta">*/}
                {/*                                                    <div class="movie-details">*/}
                {/*                                                        <a href="https://tfhtml.themepul.com/moviestar/details.html" class="btn btn-button button-detals blck-bg">details</a>*/}
                {/*                                                    </div>*/}
                {/*                                                    <div class="view-movie hover-right">*/}
                {/*                                                        <a class="blck-bg" href="https://tfhtml.themepul.com/moviestar/details.html">15k view</a>*/}
                {/*                                                    </div>*/}
                {/*                                                </div>*/}
                {/*                                            </div>*/}
                {/*                                        </div>*/}
                {/*                                </div>*/}
                {/*                            </div></div><div class="owl-item cloned" style="width: 262.5px; margin-right: 30px;"><div class="item">*/}
                {/*                                <div class="movie-item-contents gradient">*/}
                {/*                                    <img src="./movie _ Multipurpose HTML5 template_files/3.jpg" alt=""/>*/}
                {/*                                        <div class="movie-item-content">*/}
                {/*                                            <div class="movie-item-content-top">*/}
                {/*                                                <div class="pull-left">*/}
                {/*                                                    <span class="movie-count-time hover-left">02.50.20</span>*/}
                {/*                                                </div>*/}
                {/*                                                <div class="pull-right">*/}
                {/*                                                    <div class="movie-ratting">*/}
                {/*                                                        <a href="https://tfhtml.themepul.com/moviestar/details.html"><span class="fa fa-star"></span>2/20</a>*/}
                {/*                                                    </div>*/}
                {/*                                                </div>*/}
                {/*                                            </div>*/}
                {/*                                            <div class="movie-item-content-center">*/}
                {/*                                                <a href="https://tfhtml.themepul.com/moviestar/details.html" class="flat-icons" data-video-url="https://www.youtube.com/watch?v=CsVJoCKc9rA" style="cursor: pointer;"><span class="flaticon-play-button"></span></a>*/}
                {/*                                            </div>*/}
                {/*                                            <div class="movie-item-content-buttom">*/}
                {/*                                                <div class="movie-item-title">*/}
                {/*                                                    <a href="https://tfhtml.themepul.com/moviestar/details.html">Hurry Animate Blue Strack New Movie (2018)</a>*/}
                {/*                                                </div>*/}
                {/*                                                <div class="item-cat">*/}
                {/*                                                    <ul>*/}
                {/*                                                        <li><span>Category :</span><a href="https://tfhtml.themepul.com/moviestar/details.html">English Movies</a></li>*/}
                {/*                                                    </ul>*/}
                {/*                                                    <div class="item-cat-hover">*/}
                {/*                                                        <ul>*/}
                {/*                                                            <li><span>Release :</span><a href="https://tfhtml.themepul.com/moviestar/details.html">October 26, 2017</a></li>*/}
                {/*                                                            <li><span>Genre :</span><a href="https://tfhtml.themepul.com/moviestar/details.html">Action, Drama</a></li>*/}
                {/*                                                        </ul>*/}
                {/*                                                    </div>*/}
                {/*                                                </div>*/}
                {/*                                                <div class="movie-item-beta">*/}
                {/*                                                    <div class="movie-details">*/}
                {/*                                                        <a href="https://tfhtml.themepul.com/moviestar/details.html" class="btn btn-button button-detals blck-bg">details</a>*/}
                {/*                                                    </div>*/}
                {/*                                                    <div class="view-movie hover-right">*/}
                {/*                                                        <a class="blck-bg" href="https://tfhtml.themepul.com/moviestar/details.html">15k view</a>*/}
                {/*                                                    </div>*/}
                {/*                                                </div>*/}
                {/*                                            </div>*/}
                {/*                                        </div>*/}
                {/*                                </div>*/}
                {/*                            </div></div><div class="owl-item cloned" style="width: 262.5px; margin-right: 30px;"><div class="item">*/}
                {/*                                <div class="movie-item-contents gradient">*/}
                {/*                                    <img src="./movie _ Multipurpose HTML5 template_files/4.jpg" alt=""/>*/}
                {/*                                        <div class="movie-item-content">*/}
                {/*                                            <div class="movie-item-content-top">*/}
                {/*                                                <div class="pull-left">*/}
                {/*                                                    <span class="movie-count-time hover-left">02.50.20</span>*/}
                {/*                                                </div>*/}
                {/*                                                <div class="pull-right">*/}
                {/*                                                    <div class="movie-ratting">*/}
                {/*                                                        <a href="https://tfhtml.themepul.com/moviestar/details.html"><span class="fa fa-star"></span>2/20</a>*/}
                {/*                                                    </div>*/}
                {/*                                                </div>*/}
                {/*                                            </div>*/}
                {/*                                            <div class="movie-item-content-center">*/}
                {/*                                                <a href="https://tfhtml.themepul.com/moviestar/details.html" class="flat-icons" data-video-url="https://www.youtube.com/watch?v=CsVJoCKc9rA" style="cursor: pointer;"><span class="flaticon-play-button"></span></a>*/}
                {/*                                            </div>*/}
                {/*                                            <div class="movie-item-content-buttom">*/}
                {/*                                                <div class="movie-item-title">*/}
                {/*                                                    <a href="https://tfhtml.themepul.com/moviestar/details.html">Hurry Animate Blue Strack New Movie (2018)</a>*/}
                {/*                                                </div>*/}
                {/*                                                <div class="item-cat">*/}
                {/*                                                    <ul>*/}
                {/*                                                        <li><span>Category :</span><a href="https://tfhtml.themepul.com/moviestar/details.html">English Movies</a></li>*/}
                {/*                                                    </ul>*/}
                {/*                                                    <div class="item-cat-hover">*/}
                {/*                                                        <ul>*/}
                {/*                                                            <li><span>Release :</span><a href="https://tfhtml.themepul.com/moviestar/details.html">October 26, 2017</a></li>*/}
                {/*                                                            <li><span>Genre :</span><a href="https://tfhtml.themepul.com/moviestar/details.html">Action, Drama</a></li>*/}
                {/*                                                        </ul>*/}
                {/*                                                    </div>*/}
                {/*                                                </div>*/}
                {/*                                                <div class="movie-item-beta">*/}
                {/*                                                    <div class="movie-details">*/}
                {/*                                                        <a href="https://tfhtml.themepul.com/moviestar/details.html" class="btn btn-button button-detals blck-bg">details</a>*/}
                {/*                                                    </div>*/}
                {/*                                                    <div class="view-movie hover-right">*/}
                {/*                                                        <a class="blck-bg" href="https://tfhtml.themepul.com/moviestar/details.html">15k view</a>*/}
                {/*                                                    </div>*/}
                {/*                                                </div>*/}
                {/*                                            </div>*/}
                {/*                                        </div>*/}
                {/*                                </div>*/}
                {/*                            </div></div><div class="owl-item active" style="width: 262.5px; margin-right: 30px;"><div class="item">*/}
                {/*                                <div class="movie-item-contents gradient">*/}
                {/*                                    <img src="./movie _ Multipurpose HTML5 template_files/1(1).jpg" alt=""/>*/}
                {/*                                        <div class="movie-item-content">*/}
                {/*                                            <div class="movie-item-content-top">*/}
                {/*                                                <div class="pull-left">*/}
                {/*                                                    <span class="movie-count-time hover-left">02.50.20</span>*/}
                {/*                                                </div>*/}
                {/*                                                <div class="pull-right">*/}
                {/*                                                    <div class="movie-ratting">*/}
                {/*                                                        <a href="https://tfhtml.themepul.com/moviestar/details.html"><span class="fa fa-star"></span>2/20</a>*/}
                {/*                                                    </div>*/}
                {/*                                                </div>*/}
                {/*                                            </div>*/}
                {/*                                            <div class="movie-item-content-center">*/}
                {/*                                                <a href="https://tfhtml.themepul.com/moviestar/details.html" class="flat-icons" data-video-url="https://www.youtube.com/watch?v=CsVJoCKc9rA" style="cursor: pointer;"><span class="flaticon-play-button"></span></a>*/}
                {/*                                            </div>*/}
                {/*                                            <div class="movie-item-content-buttom">*/}
                {/*                                                <div class="movie-item-title">*/}
                {/*                                                    <a href="https://tfhtml.themepul.com/moviestar/details.html">Hurry Animate Blue Strack New Movie (2018)</a>*/}
                {/*                                                </div>*/}
                {/*                                                <div class="item-cat">*/}
                {/*                                                    <ul>*/}
                {/*                                                        <li><span>Category :</span><a href="https://tfhtml.themepul.com/moviestar/details.html">English Movies</a></li>*/}
                {/*                                                    </ul>*/}
                {/*                                                    <div class="item-cat-hover">*/}
                {/*                                                        <ul>*/}
                {/*                                                            <li><span>Release :</span><a href="https://tfhtml.themepul.com/moviestar/details.html">October 26, 2017</a></li>*/}
                {/*                                                            <li><span>Genre :</span><a href="https://tfhtml.themepul.com/moviestar/details.html">Action, Drama</a></li>*/}
                {/*                                                        </ul>*/}
                {/*                                                    </div>*/}
                {/*                                                </div>*/}
                {/*                                                <div class="movie-item-beta">*/}
                {/*                                                    <div class="movie-details">*/}
                {/*                                                        <a href="https://tfhtml.themepul.com/moviestar/details.html" class="btn btn-button button-detals blck-bg">details</a>*/}
                {/*                                                    </div>*/}
                {/*                                                    <div class="view-movie hover-right">*/}
                {/*                                                        <a class="blck-bg" href="https://tfhtml.themepul.com/moviestar/details.html">15k view</a>*/}
                {/*                                                    </div>*/}
                {/*                                                </div>*/}
                {/*                                            </div>*/}
                {/*                                        </div>*/}
                {/*                                </div>*/}
                {/*                            </div></div><div class="owl-item active" style="width: 262.5px; margin-right: 30px;"><div class="item">*/}
                {/*                                <div class="movie-item-contents gradient">*/}
                {/*                                    <img src="./movie _ Multipurpose HTML5 template_files/2(1).jpg" alt=""/>*/}
                {/*                                        <div class="movie-item-content">*/}
                {/*                                            <div class="movie-item-content-top">*/}
                {/*                                                <div class="pull-left">*/}
                {/*                                                    <span class="movie-count-time hover-left">02.50.20</span>*/}
                {/*                                                </div>*/}
                {/*                                                <div class="pull-right">*/}
                {/*                                                    <div class="movie-ratting">*/}
                {/*                                                        <a href="https://tfhtml.themepul.com/moviestar/details.html"><span class="fa fa-star"></span>2/20</a>*/}
                {/*                                                    </div>*/}
                {/*                                                </div>*/}
                {/*                                            </div>*/}
                {/*                                            <div class="movie-item-content-center">*/}
                {/*                                                <a href="https://tfhtml.themepul.com/moviestar/details.html" class="flat-icons" data-video-url="https://www.youtube.com/watch?v=CsVJoCKc9rA" style="cursor: pointer;"><span class="flaticon-play-button"></span></a>*/}
                {/*                                            </div>*/}
                {/*                                            <div class="movie-item-content-buttom">*/}
                {/*                                                <div class="movie-item-title">*/}
                {/*                                                    <a href="https://tfhtml.themepul.com/moviestar/details.html">Hurry Animate Blue Strack New Movie (2018)</a>*/}
                {/*                                                </div>*/}
                {/*                                                <div class="item-cat">*/}
                {/*                                                    <ul>*/}
                {/*                                                        <li><span>Category :</span><a href="https://tfhtml.themepul.com/moviestar/details.html">English Movies</a></li>*/}
                {/*                                                    </ul>*/}
                {/*                                                    <div class="item-cat-hover">*/}
                {/*                                                        <ul>*/}
                {/*                                                            <li><span>Release :</span><a href="https://tfhtml.themepul.com/moviestar/details.html">October 26, 2017</a></li>*/}
                {/*                                                            <li><span>Genre :</span><a href="https://tfhtml.themepul.com/moviestar/details.html">Action, Drama</a></li>*/}
                {/*                                                        </ul>*/}
                {/*                                                    </div>*/}
                {/*                                                </div>*/}
                {/*                                                <div class="movie-item-beta">*/}
                {/*                                                    <div class="movie-details">*/}
                {/*                                                        <a href="https://tfhtml.themepul.com/moviestar/details.html" class="btn btn-button button-detals blck-bg">details</a>*/}
                {/*                                                    </div>*/}
                {/*                                                    <div class="view-movie hover-right">*/}
                {/*                                                        <a class="blck-bg" href="https://tfhtml.themepul.com/moviestar/details.html">15k view</a>*/}
                {/*                                                    </div>*/}
                {/*                                                </div>*/}
                {/*                                            </div>*/}
                {/*                                        </div>*/}
                {/*                                </div>*/}
                {/*                            </div></div><div class="owl-item active" style="width: 262.5px; margin-right: 30px;"><div class="item">*/}
                {/*                                <div class="movie-item-contents gradient">*/}
                {/*                                    <img src="./movie _ Multipurpose HTML5 template_files/3.jpg" alt=""/>*/}
                {/*                                        <div class="movie-item-content">*/}
                {/*                                            <div class="movie-item-content-top">*/}
                {/*                                                <div class="pull-left">*/}
                {/*                                                    <span class="movie-count-time hover-left">02.50.20</span>*/}
                {/*                                                </div>*/}
                {/*                                                <div class="pull-right">*/}
                {/*                                                    <div class="movie-ratting">*/}
                {/*                                                        <a href="https://tfhtml.themepul.com/moviestar/details.html"><span class="fa fa-star"></span>2/20</a>*/}
                {/*                                                    </div>*/}
                {/*                                                </div>*/}
                {/*                                            </div>*/}
                {/*                                            <div class="movie-item-content-center">*/}
                {/*                                                <a href="https://tfhtml.themepul.com/moviestar/details.html" class="flat-icons" data-video-url="https://www.youtube.com/watch?v=CsVJoCKc9rA" style="cursor: pointer;"><span class="flaticon-play-button"></span></a>*/}
                {/*                                            </div>*/}
                {/*                                            <div class="movie-item-content-buttom">*/}
                {/*                                                <div class="movie-item-title">*/}
                {/*                                                    <a href="https://tfhtml.themepul.com/moviestar/details.html">Hurry Animate Blue Strack New Movie (2018)</a>*/}
                {/*                                                </div>*/}
                {/*                                                <div class="item-cat">*/}
                {/*                                                    <ul>*/}
                {/*                                                        <li><span>Category :</span><a href="https://tfhtml.themepul.com/moviestar/details.html">English Movies</a></li>*/}
                {/*                                                    </ul>*/}
                {/*                                                    <div class="item-cat-hover">*/}
                {/*                                                        <ul>*/}
                {/*                                                            <li><span>Release :</span><a href="https://tfhtml.themepul.com/moviestar/details.html">October 26, 2017</a></li>*/}
                {/*                                                            <li><span>Genre :</span><a href="https://tfhtml.themepul.com/moviestar/details.html">Action, Drama</a></li>*/}
                {/*                                                        </ul>*/}
                {/*                                                    </div>*/}
                {/*                                                </div>*/}
                {/*                                                <div class="movie-item-beta">*/}
                {/*                                                    <div class="movie-details">*/}
                {/*                                                        <a href="https://tfhtml.themepul.com/moviestar/details.html" class="btn btn-button button-detals blck-bg">details</a>*/}
                {/*                                                    </div>*/}
                {/*                                                    <div class="view-movie hover-right">*/}
                {/*                                                        <a class="blck-bg" href="https://tfhtml.themepul.com/moviestar/details.html">15k view</a>*/}
                {/*                                                    </div>*/}
                {/*                                                </div>*/}
                {/*                                            </div>*/}
                {/*                                        </div>*/}
                {/*                                </div>*/}
                {/*                            </div></div><div class="owl-item active" style="width: 262.5px; margin-right: 30px;"><div class="item">*/}
                {/*                                <div class="movie-item-contents gradient">*/}
                {/*                                    <img src="./movie _ Multipurpose HTML5 template_files/4.jpg" alt=""/>*/}
                {/*                                        <div class="movie-item-content">*/}
                {/*                                            <div class="movie-item-content-top">*/}
                {/*                                                <div class="pull-left">*/}
                {/*                                                    <span class="movie-count-time hover-left">02.50.20</span>*/}
                {/*                                                </div>*/}
                {/*                                                <div class="pull-right">*/}
                {/*                                                    <div class="movie-ratting">*/}
                {/*                                                        <a href="https://tfhtml.themepul.com/moviestar/details.html"><span class="fa fa-star"></span>2/20</a>*/}
                {/*                                                    </div>*/}
                {/*                                                </div>*/}
                {/*                                            </div>*/}
                {/*                                            <div class="movie-item-content-center">*/}
                {/*                                                <a href="https://tfhtml.themepul.com/moviestar/details.html" class="flat-icons" data-video-url="https://www.youtube.com/watch?v=CsVJoCKc9rA" style="cursor: pointer;"><span class="flaticon-play-button"></span></a>*/}
                {/*                                            </div>*/}
                {/*                                            <div class="movie-item-content-buttom">*/}
                {/*                                                <div class="movie-item-title">*/}
                {/*                                                    <a href="https://tfhtml.themepul.com/moviestar/details.html">Hurry Animate Blue Strack New Movie (2018)</a>*/}
                {/*                                                </div>*/}
                {/*                                                <div class="item-cat">*/}
                {/*                                                    <ul>*/}
                {/*                                                        <li><span>Category :</span><a href="https://tfhtml.themepul.com/moviestar/details.html">English Movies</a></li>*/}
                {/*                                                    </ul>*/}
                {/*                                                    <div class="item-cat-hover">*/}
                {/*                                                        <ul>*/}
                {/*                                                            <li><span>Release :</span><a href="https://tfhtml.themepul.com/moviestar/details.html">October 26, 2017</a></li>*/}
                {/*                                                            <li><span>Genre :</span><a href="https://tfhtml.themepul.com/moviestar/details.html">Action, Drama</a></li>*/}
                {/*                                                        </ul>*/}
                {/*                                                    </div>*/}
                {/*                                                </div>*/}
                {/*                                                <div class="movie-item-beta">*/}
                {/*                                                    <div class="movie-details">*/}
                {/*                                                        <a href="https://tfhtml.themepul.com/moviestar/details.html" class="btn btn-button button-detals blck-bg">details</a>*/}
                {/*                                                    </div>*/}
                {/*                                                    <div class="view-movie hover-right">*/}
                {/*                                                        <a class="blck-bg" href="https://tfhtml.themepul.com/moviestar/details.html">15k view</a>*/}
                {/*                                                    </div>*/}
                {/*                                                </div>*/}
                {/*                                            </div>*/}
                {/*                                        </div>*/}
                {/*                                </div>*/}
                {/*                            </div></div><div class="owl-item cloned" style="width: 262.5px; margin-right: 30px;"><div class="item">*/}
                {/*                                <div class="movie-item-contents gradient">*/}
                {/*                                    <img src="./movie _ Multipurpose HTML5 template_files/1(1).jpg" alt=""/>*/}
                {/*                                        <div class="movie-item-content">*/}
                {/*                                            <div class="movie-item-content-top">*/}
                {/*                                                <div class="pull-left">*/}
                {/*                                                    <span class="movie-count-time hover-left">02.50.20</span>*/}
                {/*                                                </div>*/}
                {/*                                                <div class="pull-right">*/}
                {/*                                                    <div class="movie-ratting">*/}
                {/*                                                        <a href="https://tfhtml.themepul.com/moviestar/details.html"><span class="fa fa-star"></span>2/20</a>*/}
                {/*                                                    </div>*/}
                {/*                                                </div>*/}
                {/*                                            </div>*/}
                {/*                                            <div class="movie-item-content-center">*/}
                {/*                                                <a href="https://tfhtml.themepul.com/moviestar/details.html" class="flat-icons" data-video-url="https://www.youtube.com/watch?v=CsVJoCKc9rA" style="cursor: pointer;"><span class="flaticon-play-button"></span></a>*/}
                {/*                                            </div>*/}
                {/*                                            <div class="movie-item-content-buttom">*/}
                {/*                                                <div class="movie-item-title">*/}
                {/*                                                    <a href="https://tfhtml.themepul.com/moviestar/details.html">Hurry Animate Blue Strack New Movie (2018)</a>*/}
                {/*                                                </div>*/}
                {/*                                                <div class="item-cat">*/}
                {/*                                                    <ul>*/}
                {/*                                                        <li><span>Category :</span><a href="https://tfhtml.themepul.com/moviestar/details.html">English Movies</a></li>*/}
                {/*                                                    </ul>*/}
                {/*                                                    <div class="item-cat-hover">*/}
                {/*                                                        <ul>*/}
                {/*                                                            <li><span>Release :</span><a href="https://tfhtml.themepul.com/moviestar/details.html">October 26, 2017</a></li>*/}
                {/*                                                            <li><span>Genre :</span><a href="https://tfhtml.themepul.com/moviestar/details.html">Action, Drama</a></li>*/}
                {/*                                                        </ul>*/}
                {/*                                                    </div>*/}
                {/*                                                </div>*/}
                {/*                                                <div class="movie-item-beta">*/}
                {/*                                                    <div class="movie-details">*/}
                {/*                                                        <a href="https://tfhtml.themepul.com/moviestar/details.html" class="btn btn-button button-detals blck-bg">details</a>*/}
                {/*                                                    </div>*/}
                {/*                                                    <div class="view-movie hover-right">*/}
                {/*                                                        <a class="blck-bg" href="https://tfhtml.themepul.com/moviestar/details.html">15k view</a>*/}
                {/*                                                    </div>*/}
                {/*                                                </div>*/}
                {/*                                            </div>*/}
                {/*                                        </div>*/}
                {/*                                </div>*/}
                {/*                            </div></div><div class="owl-item cloned" style="width: 262.5px; margin-right: 30px;"><div class="item">*/}
                {/*                                <div class="movie-item-contents gradient">*/}
                {/*                                    <img src="./movie _ Multipurpose HTML5 template_files/2(1).jpg" alt=""/>*/}
                {/*                                        <div class="movie-item-content">*/}
                {/*                                            <div class="movie-item-content-top">*/}
                {/*                                                <div class="pull-left">*/}
                {/*                                                    <span class="movie-count-time hover-left">02.50.20</span>*/}
                {/*                                                </div>*/}
                {/*                                                <div class="pull-right">*/}
                {/*                                                    <div class="movie-ratting">*/}
                {/*                                                        <a href="https://tfhtml.themepul.com/moviestar/details.html"><span class="fa fa-star"></span>2/20</a>*/}
                {/*                                                    </div>*/}
                {/*                                                </div>*/}
                {/*                                            </div>*/}
                {/*                                            <div class="movie-item-content-center">*/}
                {/*                                                <a href="https://tfhtml.themepul.com/moviestar/details.html" class="flat-icons" data-video-url="https://www.youtube.com/watch?v=CsVJoCKc9rA" style="cursor: pointer;"><span class="flaticon-play-button"></span></a>*/}
                {/*                                            </div>*/}
                {/*                                            <div class="movie-item-content-buttom">*/}
                {/*                                                <div class="movie-item-title">*/}
                {/*                                                    <a href="https://tfhtml.themepul.com/moviestar/details.html">Hurry Animate Blue Strack New Movie (2018)</a>*/}
                {/*                                                </div>*/}
                {/*                                                <div class="item-cat">*/}
                {/*                                                    <ul>*/}
                {/*                                                        <li><span>Category :</span><a href="https://tfhtml.themepul.com/moviestar/details.html">English Movies</a></li>*/}
                {/*                                                    </ul>*/}
                {/*                                                    <div class="item-cat-hover">*/}
                {/*                                                        <ul>*/}
                {/*                                                            <li><span>Release :</span><a href="https://tfhtml.themepul.com/moviestar/details.html">October 26, 2017</a></li>*/}
                {/*                                                            <li><span>Genre :</span><a href="https://tfhtml.themepul.com/moviestar/details.html">Action, Drama</a></li>*/}
                {/*                                                        </ul>*/}
                {/*                                                    </div>*/}
                {/*                                                </div>*/}
                {/*                                                <div class="movie-item-beta">*/}
                {/*                                                    <div class="movie-details">*/}
                {/*                                                        <a href="https://tfhtml.themepul.com/moviestar/details.html" class="btn btn-button button-detals blck-bg">details</a>*/}
                {/*                                                    </div>*/}
                {/*                                                    <div class="view-movie hover-right">*/}
                {/*                                                        <a class="blck-bg" href="https://tfhtml.themepul.com/moviestar/details.html">15k view</a>*/}
                {/*                                                    </div>*/}
                {/*                                                </div>*/}
                {/*                                            </div>*/}
                {/*                                        </div>*/}
                {/*                                </div>*/}
                {/*                            </div></div><div class="owl-item cloned" style="width: 262.5px; margin-right: 30px;"><div class="item">*/}
                {/*                                <div class="movie-item-contents gradient">*/}
                {/*                                    <img src="./movie _ Multipurpose HTML5 template_files/3.jpg" alt=""/>*/}
                {/*                                        <div class="movie-item-content">*/}
                {/*                                            <div class="movie-item-content-top">*/}
                {/*                                                <div class="pull-left">*/}
                {/*                                                    <span class="movie-count-time hover-left">02.50.20</span>*/}
                {/*                                                </div>*/}
                {/*                                                <div class="pull-right">*/}
                {/*                                                    <div class="movie-ratting">*/}
                {/*                                                        <a href="https://tfhtml.themepul.com/moviestar/details.html"><span class="fa fa-star"></span>2/20</a>*/}
                {/*                                                    </div>*/}
                {/*                                                </div>*/}
                {/*                                            </div>*/}
                {/*                                            <div class="movie-item-content-center">*/}
                {/*                                                <a href="https://tfhtml.themepul.com/moviestar/details.html" class="flat-icons" data-video-url="https://www.youtube.com/watch?v=CsVJoCKc9rA" style="cursor: pointer;"><span class="flaticon-play-button"></span></a>*/}
                {/*                                            </div>*/}
                {/*                                            <div class="movie-item-content-buttom">*/}
                {/*                                                <div class="movie-item-title">*/}
                {/*                                                    <a href="https://tfhtml.themepul.com/moviestar/details.html">Hurry Animate Blue Strack New Movie (2018)</a>*/}
                {/*                                                </div>*/}
                {/*                                                <div class="item-cat">*/}
                {/*                                                    <ul>*/}
                {/*                                                        <li><span>Category :</span><a href="https://tfhtml.themepul.com/moviestar/details.html">English Movies</a></li>*/}
                {/*                                                    </ul>*/}
                {/*                                                    <div class="item-cat-hover">*/}
                {/*                                                        <ul>*/}
                {/*                                                            <li><span>Release :</span><a href="https://tfhtml.themepul.com/moviestar/details.html">October 26, 2017</a></li>*/}
                {/*                                                            <li><span>Genre :</span><a href="https://tfhtml.themepul.com/moviestar/details.html">Action, Drama</a></li>*/}
                {/*                                                        </ul>*/}
                {/*                                                    </div>*/}
                {/*                                                </div>*/}
                {/*                                                <div class="movie-item-beta">*/}
                {/*                                                    <div class="movie-details">*/}
                {/*                                                        <a href="https://tfhtml.themepul.com/moviestar/details.html" class="btn btn-button button-detals blck-bg">details</a>*/}
                {/*                                                    </div>*/}
                {/*                                                    <div class="view-movie hover-right">*/}
                {/*                                                        <a class="blck-bg" href="https://tfhtml.themepul.com/moviestar/details.html">15k view</a>*/}
                {/*                                                    </div>*/}
                {/*                                                </div>*/}
                {/*                                            </div>*/}
                {/*                                        </div>*/}
                {/*                                </div>*/}
                {/*                            </div></div><div class="owl-item cloned" style="width: 262.5px; margin-right: 30px;"><div class="item">*/}
                {/*                                <div class="movie-item-contents gradient">*/}
                {/*                                    <img src="./movie _ Multipurpose HTML5 template_files/4.jpg" alt=""/>*/}
                {/*                                        <div class="movie-item-content">*/}
                {/*                                            <div class="movie-item-content-top">*/}
                {/*                                                <div class="pull-left">*/}
                {/*                                                    <span class="movie-count-time hover-left">02.50.20</span>*/}
                {/*                                                </div>*/}
                {/*                                                <div class="pull-right">*/}
                {/*                                                    <div class="movie-ratting">*/}
                {/*                                                        <a href="https://tfhtml.themepul.com/moviestar/details.html"><span class="fa fa-star"></span>2/20</a>*/}
                {/*                                                    </div>*/}
                {/*                                                </div>*/}
                {/*                                            </div>*/}
                {/*                                            <div class="movie-item-content-center">*/}
                {/*                                                <a href="https://tfhtml.themepul.com/moviestar/details.html" class="flat-icons" data-video-url="https://www.youtube.com/watch?v=CsVJoCKc9rA" style="cursor: pointer;"><span class="flaticon-play-button"></span></a>*/}
                {/*                                            </div>*/}
                {/*                                            <div class="movie-item-content-buttom">*/}
                {/*                                                <div class="movie-item-title">*/}
                {/*                                                    <a href="https://tfhtml.themepul.com/moviestar/details.html">Hurry Animate Blue Strack New Movie (2018)</a>*/}
                {/*                                                </div>*/}
                {/*                                                <div class="item-cat">*/}
                {/*                                                    <ul>*/}
                {/*                                                        <li><span>Category :</span><a href="https://tfhtml.themepul.com/moviestar/details.html">English Movies</a></li>*/}
                {/*                                                    </ul>*/}
                {/*                                                    <div class="item-cat-hover">*/}
                {/*                                                        <ul>*/}
                {/*                                                            <li><span>Release :</span><a href="https://tfhtml.themepul.com/moviestar/details.html">October 26, 2017</a></li>*/}
                {/*                                                            <li><span>Genre :</span><a href="https://tfhtml.themepul.com/moviestar/details.html">Action, Drama</a></li>*/}
                {/*                                                        </ul>*/}
                {/*                                                    </div>*/}
                {/*                                                </div>*/}
                {/*                                                <div class="movie-item-beta">*/}
                {/*                                                    <div class="movie-details">*/}
                {/*                                                        <a href="https://tfhtml.themepul.com/moviestar/details.html" class="btn btn-button button-detals blck-bg">details</a>*/}
                {/*                                                    </div>*/}
                {/*                                                    <div class="view-movie hover-right">*/}
                {/*                                                        <a class="blck-bg" href="https://tfhtml.themepul.com/moviestar/details.html">15k view</a>*/}
                {/*                                                    </div>*/}
                {/*                                                </div>*/}
                {/*                                            </div>*/}
                {/*                                        </div>*/}
                {/*                                </div>*/}
                {/*                            </div></div></div></div><div class="owl-controls"><div class="owl-nav"><div class="owl-prev" style=""><i class="flaticon-send"></i></div><div class="owl-next" style=""><span class="flaticon-send"></span></div></div><div class="owl-dots" style="display: none;"></div></div></div>*/}
                {/*                    </div>*/}
                {/*                    <div id="tvseries" class="tab-pane fade" role="tabpanel">*/}
                {/*                        <div class="category-slide2 owl-carousel owl-theme owl-hidden owl-loaded">*/}


                {/*                            <div class="owl-stage-outer"><div class="owl-stage" style="transform: translate3d(-1170px, 0px, 0px); transition: all 0s ease 0s; width: 3510px;"><div class="owl-item cloned" style="width: 262.5px; margin-right: 30px;"><div class="item">*/}
                {/*                                <div class="movie-item-contents gradient">*/}
                {/*                                    <img src="./movie _ Multipurpose HTML5 template_files/1(1).jpg" alt=""/>*/}
                {/*                                        <div class="movie-item-content">*/}
                {/*                                            <div class="movie-item-content-top">*/}
                {/*                                                <div class="pull-left">*/}
                {/*                                                    <span class="movie-count-time hover-left">02.50.20</span>*/}
                {/*                                                </div>*/}
                {/*                                                <div class="pull-right">*/}
                {/*                                                    <div class="movie-ratting">*/}
                {/*                                                        <a href="https://tfhtml.themepul.com/moviestar/details.html"><span class="fa fa-star"></span>2/20</a>*/}
                {/*                                                    </div>*/}
                {/*                                                </div>*/}
                {/*                                            </div>*/}
                {/*                                            <div class="movie-item-content-center">*/}
                {/*                                                <a href="https://tfhtml.themepul.com/moviestar/details.html" class="flat-icons" data-video-url="https://www.youtube.com/watch?v=CsVJoCKc9rA" style="cursor: pointer;"><span class="flaticon-play-button"></span></a>*/}
                {/*                                            </div>*/}
                {/*                                            <div class="movie-item-content-buttom">*/}
                {/*                                                <div class="movie-item-title">*/}
                {/*                                                    <a href="https://tfhtml.themepul.com/moviestar/details.html">Hurry Animate Blue Strack New Movie (2018)</a>*/}
                {/*                                                </div>*/}
                {/*                                                <div class="item-cat">*/}
                {/*                                                    <ul>*/}
                {/*                                                        <li><span>Category :</span><a href="https://tfhtml.themepul.com/moviestar/details.html">English Movies</a></li>*/}
                {/*                                                    </ul>*/}
                {/*                                                    <div class="item-cat-hover">*/}
                {/*                                                        <ul>*/}
                {/*                                                            <li><span>Release :</span><a href="https://tfhtml.themepul.com/moviestar/details.html">October 26, 2017</a></li>*/}
                {/*                                                            <li><span>Genre :</span><a href="https://tfhtml.themepul.com/moviestar/details.html">Action, Drama</a></li>*/}
                {/*                                                        </ul>*/}
                {/*                                                    </div>*/}
                {/*                                                </div>*/}
                {/*                                                <div class="movie-item-beta">*/}
                {/*                                                    <div class="movie-details">*/}
                {/*                                                        <a href="https://tfhtml.themepul.com/moviestar/details.html" class="btn btn-button button-detals blck-bg">details</a>*/}
                {/*                                                    </div>*/}
                {/*                                                    <div class="view-movie hover-right">*/}
                {/*                                                        <a class="blck-bg" href="https://tfhtml.themepul.com/moviestar/details.html">15k view</a>*/}
                {/*                                                    </div>*/}
                {/*                                                </div>*/}
                {/*                                            </div>*/}
                {/*                                        </div>*/}
                {/*                                </div>*/}
                {/*                            </div></div><div class="owl-item cloned" style="width: 262.5px; margin-right: 30px;"><div class="item">*/}
                {/*                                <div class="movie-item-contents gradient">*/}
                {/*                                    <img src="./movie _ Multipurpose HTML5 template_files/2(1).jpg" alt=""/>*/}
                {/*                                        <div class="movie-item-content">*/}
                {/*                                            <div class="movie-item-content-top">*/}
                {/*                                                <div class="pull-left">*/}
                {/*                                                    <span class="movie-count-time hover-left">02.50.20</span>*/}
                {/*                                                </div>*/}
                {/*                                                <div class="pull-right">*/}
                {/*                                                    <div class="movie-ratting">*/}
                {/*                                                        <a href="https://tfhtml.themepul.com/moviestar/details.html"><span class="fa fa-star"></span>2/20</a>*/}
                {/*                                                    </div>*/}
                {/*                                                </div>*/}
                {/*                                            </div>*/}
                {/*                                            <div class="movie-item-content-center">*/}
                {/*                                                <a href="https://tfhtml.themepul.com/moviestar/details.html" class="flat-icons" data-video-url="https://www.youtube.com/watch?v=CsVJoCKc9rA" style="cursor: pointer;"><span class="flaticon-play-button"></span></a>*/}
                {/*                                            </div>*/}
                {/*                                            <div class="movie-item-content-buttom">*/}
                {/*                                                <div class="movie-item-title">*/}
                {/*                                                    <a href="https://tfhtml.themepul.com/moviestar/details.html">Hurry Animate Blue Strack New Movie (2018)</a>*/}
                {/*                                                </div>*/}
                {/*                                                <div class="item-cat">*/}
                {/*                                                    <ul>*/}
                {/*                                                        <li><span>Category :</span><a href="https://tfhtml.themepul.com/moviestar/details.html">English Movies</a></li>*/}
                {/*                                                    </ul>*/}
                {/*                                                    <div class="item-cat-hover">*/}
                {/*                                                        <ul>*/}
                {/*                                                            <li><span>Release :</span><a href="https://tfhtml.themepul.com/moviestar/details.html">October 26, 2017</a></li>*/}
                {/*                                                            <li><span>Genre :</span><a href="https://tfhtml.themepul.com/moviestar/details.html">Action, Drama</a></li>*/}
                {/*                                                        </ul>*/}
                {/*                                                    </div>*/}
                {/*                                                </div>*/}
                {/*                                                <div class="movie-item-beta">*/}
                {/*                                                    <div class="movie-details">*/}
                {/*                                                        <a href="https://tfhtml.themepul.com/moviestar/details.html" class="btn btn-button button-detals blck-bg">details</a>*/}
                {/*                                                    </div>*/}
                {/*                                                    <div class="view-movie hover-right">*/}
                {/*                                                        <a class="blck-bg" href="https://tfhtml.themepul.com/moviestar/details.html">15k view</a>*/}
                {/*                                                    </div>*/}
                {/*                                                </div>*/}
                {/*                                            </div>*/}
                {/*                                        </div>*/}
                {/*                                </div>*/}
                {/*                            </div></div><div class="owl-item cloned" style="width: 262.5px; margin-right: 30px;"><div class="item">*/}
                {/*                                <div class="movie-item-contents gradient">*/}
                {/*                                    <img src="./movie _ Multipurpose HTML5 template_files/3.jpg" alt=""/>*/}
                {/*                                        <div class="movie-item-content">*/}
                {/*                                            <div class="movie-item-content-top">*/}
                {/*                                                <div class="pull-left">*/}
                {/*                                                    <span class="movie-count-time hover-left">02.50.20</span>*/}
                {/*                                                </div>*/}
                {/*                                                <div class="pull-right">*/}
                {/*                                                    <div class="movie-ratting">*/}
                {/*                                                        <a href="https://tfhtml.themepul.com/moviestar/details.html"><span class="fa fa-star"></span>2/20</a>*/}
                {/*                                                    </div>*/}
                {/*                                                </div>*/}
                {/*                                            </div>*/}
                {/*                                            <div class="movie-item-content-center">*/}
                {/*                                                <a href="https://tfhtml.themepul.com/moviestar/details.html" class="flat-icons" data-video-url="https://www.youtube.com/watch?v=CsVJoCKc9rA" style="cursor: pointer;"><span class="flaticon-play-button"></span></a>*/}
                {/*                                            </div>*/}
                {/*                                            <div class="movie-item-content-buttom">*/}
                {/*                                                <div class="movie-item-title">*/}
                {/*                                                    <a href="https://tfhtml.themepul.com/moviestar/details.html">Hurry Animate Blue Strack New Movie (2018)</a>*/}
                {/*                                                </div>*/}
                {/*                                                <div class="item-cat">*/}
                {/*                                                    <ul>*/}
                {/*                                                        <li><span>Category :</span><a href="https://tfhtml.themepul.com/moviestar/details.html">English Movies</a></li>*/}
                {/*                                                    </ul>*/}
                {/*                                                    <div class="item-cat-hover">*/}
                {/*                                                        <ul>*/}
                {/*                                                            <li><span>Release :</span><a href="https://tfhtml.themepul.com/moviestar/details.html">October 26, 2017</a></li>*/}
                {/*                                                            <li><span>Genre :</span><a href="https://tfhtml.themepul.com/moviestar/details.html">Action, Drama</a></li>*/}
                {/*                                                        </ul>*/}
                {/*                                                    </div>*/}
                {/*                                                </div>*/}
                {/*                                                <div class="movie-item-beta">*/}
                {/*                                                    <div class="movie-details">*/}
                {/*                                                        <a href="https://tfhtml.themepul.com/moviestar/details.html" class="btn btn-button button-detals blck-bg">details</a>*/}
                {/*                                                    </div>*/}
                {/*                                                    <div class="view-movie hover-right">*/}
                {/*                                                        <a class="blck-bg" href="https://tfhtml.themepul.com/moviestar/details.html">15k view</a>*/}
                {/*                                                    </div>*/}
                {/*                                                </div>*/}
                {/*                                            </div>*/}
                {/*                                        </div>*/}
                {/*                                </div>*/}
                {/*                            </div></div><div class="owl-item cloned" style="width: 262.5px; margin-right: 30px;"><div class="item">*/}
                {/*                                <div class="movie-item-contents gradient">*/}
                {/*                                    <img src="./movie _ Multipurpose HTML5 template_files/4.jpg" alt=""/>*/}
                {/*                                        <div class="movie-item-content">*/}
                {/*                                            <div class="movie-item-content-top">*/}
                {/*                                                <div class="pull-left">*/}
                {/*                                                    <span class="movie-count-time hover-left">02.50.20</span>*/}
                {/*                                                </div>*/}
                {/*                                                <div class="pull-right">*/}
                {/*                                                    <div class="movie-ratting">*/}
                {/*                                                        <a href="https://tfhtml.themepul.com/moviestar/details.html"><span class="fa fa-star"></span>2/20</a>*/}
                {/*                                                    </div>*/}
                {/*                                                </div>*/}
                {/*                                            </div>*/}
                {/*                                            <div class="movie-item-content-center">*/}
                {/*                                                <a href="https://tfhtml.themepul.com/moviestar/details.html" class="flat-icons" data-video-url="https://www.youtube.com/watch?v=CsVJoCKc9rA" style="cursor: pointer;"><span class="flaticon-play-button"></span></a>*/}
                {/*                                            </div>*/}
                {/*                                            <div class="movie-item-content-buttom">*/}
                {/*                                                <div class="movie-item-title">*/}
                {/*                                                    <a href="https://tfhtml.themepul.com/moviestar/details.html">Hurry Animate Blue Strack New Movie (2018)</a>*/}
                {/*                                                </div>*/}
                {/*                                                <div class="item-cat">*/}
                {/*                                                    <ul>*/}
                {/*                                                        <li><span>Category :</span><a href="https://tfhtml.themepul.com/moviestar/details.html">English Movies</a></li>*/}
                {/*                                                    </ul>*/}
                {/*                                                    <div class="item-cat-hover">*/}
                {/*                                                        <ul>*/}
                {/*                                                            <li><span>Release :</span><a href="https://tfhtml.themepul.com/moviestar/details.html">October 26, 2017</a></li>*/}
                {/*                                                            <li><span>Genre :</span><a href="https://tfhtml.themepul.com/moviestar/details.html">Action, Drama</a></li>*/}
                {/*                                                        </ul>*/}
                {/*                                                    </div>*/}
                {/*                                                </div>*/}
                {/*                                                <div class="movie-item-beta">*/}
                {/*                                                    <div class="movie-details">*/}
                {/*                                                        <a href="https://tfhtml.themepul.com/moviestar/details.html" class="btn btn-button button-detals blck-bg">details</a>*/}
                {/*                                                    </div>*/}
                {/*                                                    <div class="view-movie hover-right">*/}
                {/*                                                        <a class="blck-bg" href="https://tfhtml.themepul.com/moviestar/details.html">15k view</a>*/}
                {/*                                                    </div>*/}
                {/*                                                </div>*/}
                {/*                                            </div>*/}
                {/*                                        </div>*/}
                {/*                                </div>*/}
                {/*                            </div></div><div class="owl-item active" style="width: 262.5px; margin-right: 30px;"><div class="item">*/}
                {/*                                <div class="movie-item-contents gradient">*/}
                {/*                                    <img src="./movie _ Multipurpose HTML5 template_files/1(1).jpg" alt=""/>*/}
                {/*                                        <div class="movie-item-content">*/}
                {/*                                            <div class="movie-item-content-top">*/}
                {/*                                                <div class="pull-left">*/}
                {/*                                                    <span class="movie-count-time hover-left">02.50.20</span>*/}
                {/*                                                </div>*/}
                {/*                                                <div class="pull-right">*/}
                {/*                                                    <div class="movie-ratting">*/}
                {/*                                                        <a href="https://tfhtml.themepul.com/moviestar/details.html"><span class="fa fa-star"></span>2/20</a>*/}
                {/*                                                    </div>*/}
                {/*                                                </div>*/}
                {/*                                            </div>*/}
                {/*                                            <div class="movie-item-content-center">*/}
                {/*                                                <a href="https://tfhtml.themepul.com/moviestar/details.html" class="flat-icons" data-video-url="https://www.youtube.com/watch?v=CsVJoCKc9rA" style="cursor: pointer;"><span class="flaticon-play-button"></span></a>*/}
                {/*                                            </div>*/}
                {/*                                            <div class="movie-item-content-buttom">*/}
                {/*                                                <div class="movie-item-title">*/}
                {/*                                                    <a href="https://tfhtml.themepul.com/moviestar/details.html">Hurry Animate Blue Strack New Movie (2018)</a>*/}
                {/*                                                </div>*/}
                {/*                                                <div class="item-cat">*/}
                {/*                                                    <ul>*/}
                {/*                                                        <li><span>Category :</span><a href="https://tfhtml.themepul.com/moviestar/details.html">English Movies</a></li>*/}
                {/*                                                    </ul>*/}
                {/*                                                    <div class="item-cat-hover">*/}
                {/*                                                        <ul>*/}
                {/*                                                            <li><span>Release :</span><a href="https://tfhtml.themepul.com/moviestar/details.html">October 26, 2017</a></li>*/}
                {/*                                                            <li><span>Genre :</span><a href="https://tfhtml.themepul.com/moviestar/details.html">Action, Drama</a></li>*/}
                {/*                                                        </ul>*/}
                {/*                                                    </div>*/}
                {/*                                                </div>*/}
                {/*                                                <div class="movie-item-beta">*/}
                {/*                                                    <div class="movie-details">*/}
                {/*                                                        <a href="https://tfhtml.themepul.com/moviestar/details.html" class="btn btn-button button-detals blck-bg">details</a>*/}
                {/*                                                    </div>*/}
                {/*                                                    <div class="view-movie hover-right">*/}
                {/*                                                        <a class="blck-bg" href="https://tfhtml.themepul.com/moviestar/details.html">15k view</a>*/}
                {/*                                                    </div>*/}
                {/*                                                </div>*/}
                {/*                                            </div>*/}
                {/*                                        </div>*/}
                {/*                                </div>*/}
                {/*                            </div></div><div class="owl-item active" style="width: 262.5px; margin-right: 30px;"><div class="item">*/}
                {/*                                <div class="movie-item-contents gradient">*/}
                {/*                                    <img src="./movie _ Multipurpose HTML5 template_files/2(1).jpg" alt=""/>*/}
                {/*                                        <div class="movie-item-content">*/}
                {/*                                            <div class="movie-item-content-top">*/}
                {/*                                                <div class="pull-left">*/}
                {/*                                                    <span class="movie-count-time hover-left">02.50.20</span>*/}
                {/*                                                </div>*/}
                {/*                                                <div class="pull-right">*/}
                {/*                                                    <div class="movie-ratting">*/}
                {/*                                                        <a href="https://tfhtml.themepul.com/moviestar/details.html"><span class="fa fa-star"></span>2/20</a>*/}
                {/*                                                    </div>*/}
                {/*                                                </div>*/}
                {/*                                            </div>*/}
                {/*                                            <div class="movie-item-content-center">*/}
                {/*                                                <a href="https://tfhtml.themepul.com/moviestar/details.html" class="flat-icons" data-video-url="https://www.youtube.com/watch?v=CsVJoCKc9rA" style="cursor: pointer;"><span class="flaticon-play-button"></span></a>*/}
                {/*                                            </div>*/}
                {/*                                            <div class="movie-item-content-buttom">*/}
                {/*                                                <div class="movie-item-title">*/}
                {/*                                                    <a href="https://tfhtml.themepul.com/moviestar/details.html">Hurry Animate Blue Strack New Movie (2018)</a>*/}
                {/*                                                </div>*/}
                {/*                                                <div class="item-cat">*/}
                {/*                                                    <ul>*/}
                {/*                                                        <li><span>Category :</span><a href="https://tfhtml.themepul.com/moviestar/details.html">English Movies</a></li>*/}
                {/*                                                    </ul>*/}
                {/*                                                    <div class="item-cat-hover">*/}
                {/*                                                        <ul>*/}
                {/*                                                            <li><span>Release :</span><a href="https://tfhtml.themepul.com/moviestar/details.html">October 26, 2017</a></li>*/}
                {/*                                                            <li><span>Genre :</span><a href="https://tfhtml.themepul.com/moviestar/details.html">Action, Drama</a></li>*/}
                {/*                                                        </ul>*/}
                {/*                                                    </div>*/}
                {/*                                                </div>*/}
                {/*                                                <div class="movie-item-beta">*/}
                {/*                                                    <div class="movie-details">*/}
                {/*                                                        <a href="https://tfhtml.themepul.com/moviestar/details.html" class="btn btn-button button-detals blck-bg">details</a>*/}
                {/*                                                    </div>*/}
                {/*                                                    <div class="view-movie hover-right">*/}
                {/*                                                        <a class="blck-bg" href="https://tfhtml.themepul.com/moviestar/details.html">15k view</a>*/}
                {/*                                                    </div>*/}
                {/*                                                </div>*/}
                {/*                                            </div>*/}
                {/*                                        </div>*/}
                {/*                                </div>*/}
                {/*                            </div></div><div class="owl-item active" style="width: 262.5px; margin-right: 30px;"><div class="item">*/}
                {/*                                <div class="movie-item-contents gradient">*/}
                {/*                                    <img src="./movie _ Multipurpose HTML5 template_files/3.jpg" alt=""/>*/}
                {/*                                        <div class="movie-item-content">*/}
                {/*                                            <div class="movie-item-content-top">*/}
                {/*                                                <div class="pull-left">*/}
                {/*                                                    <span class="movie-count-time hover-left">02.50.20</span>*/}
                {/*                                                </div>*/}
                {/*                                                <div class="pull-right">*/}
                {/*                                                    <div class="movie-ratting">*/}
                {/*                                                        <a href="https://tfhtml.themepul.com/moviestar/details.html"><span class="fa fa-star"></span>2/20</a>*/}
                {/*                                                    </div>*/}
                {/*                                                </div>*/}
                {/*                                            </div>*/}
                {/*                                            <div class="movie-item-content-center">*/}
                {/*                                                <a href="https://tfhtml.themepul.com/moviestar/details.html" class="flat-icons" data-video-url="https://www.youtube.com/watch?v=CsVJoCKc9rA" style="cursor: pointer;"><span class="flaticon-play-button"></span></a>*/}
                {/*                                            </div>*/}
                {/*                                            <div class="movie-item-content-buttom">*/}
                {/*                                                <div class="movie-item-title">*/}
                {/*                                                    <a href="https://tfhtml.themepul.com/moviestar/details.html">Hurry Animate Blue Strack New Movie (2018)</a>*/}
                {/*                                                </div>*/}
                {/*                                                <div class="item-cat">*/}
                {/*                                                    <ul>*/}
                {/*                                                        <li><span>Category :</span><a href="https://tfhtml.themepul.com/moviestar/details.html">English Movies</a></li>*/}
                {/*                                                    </ul>*/}
                {/*                                                    <div class="item-cat-hover">*/}
                {/*                                                        <ul>*/}
                {/*                                                            <li><span>Release :</span><a href="https://tfhtml.themepul.com/moviestar/details.html">October 26, 2017</a></li>*/}
                {/*                                                            <li><span>Genre :</span><a href="https://tfhtml.themepul.com/moviestar/details.html">Action, Drama</a></li>*/}
                {/*                                                        </ul>*/}
                {/*                                                    </div>*/}
                {/*                                                </div>*/}
                {/*                                                <div class="movie-item-beta">*/}
                {/*                                                    <div class="movie-details">*/}
                {/*                                                        <a href="https://tfhtml.themepul.com/moviestar/details.html" class="btn btn-button button-detals blck-bg">details</a>*/}
                {/*                                                    </div>*/}
                {/*                                                    <div class="view-movie hover-right">*/}
                {/*                                                        <a class="blck-bg" href="https://tfhtml.themepul.com/moviestar/details.html">15k view</a>*/}
                {/*                                                    </div>*/}
                {/*                                                </div>*/}
                {/*                                            </div>*/}
                {/*                                        </div>*/}
                {/*                                </div>*/}
                {/*                            </div></div><div class="owl-item active" style="width: 262.5px; margin-right: 30px;"><div class="item">*/}
                {/*                                <div class="movie-item-contents gradient">*/}
                {/*                                    <img src="./movie _ Multipurpose HTML5 template_files/4.jpg" alt=""/>*/}
                {/*                                        <div class="movie-item-content">*/}
                {/*                                            <div class="movie-item-content-top">*/}
                {/*                                                <div class="pull-left">*/}
                {/*                                                    <span class="movie-count-time hover-left">02.50.20</span>*/}
                {/*                                                </div>*/}
                {/*                                                <div class="pull-right">*/}
                {/*                                                    <div class="movie-ratting">*/}
                {/*                                                        <a href="https://tfhtml.themepul.com/moviestar/details.html"><span class="fa fa-star"></span>2/20</a>*/}
                {/*                                                    </div>*/}
                {/*                                                </div>*/}
                {/*                                            </div>*/}
                {/*                                            <div class="movie-item-content-center">*/}
                {/*                                                <a href="https://tfhtml.themepul.com/moviestar/details.html" class="flat-icons" data-video-url="https://www.youtube.com/watch?v=CsVJoCKc9rA" style="cursor: pointer;"><span class="flaticon-play-button"></span></a>*/}
                {/*                                            </div>*/}
                {/*                                            <div class="movie-item-content-buttom">*/}
                {/*                                                <div class="movie-item-title">*/}
                {/*                                                    <a href="https://tfhtml.themepul.com/moviestar/details.html">Hurry Animate Blue Strack New Movie (2018)</a>*/}
                {/*                                                </div>*/}
                {/*                                                <div class="item-cat">*/}
                {/*                                                    <ul>*/}
                {/*                                                        <li><span>Category :</span><a href="https://tfhtml.themepul.com/moviestar/details.html">English Movies</a></li>*/}
                {/*                                                    </ul>*/}
                {/*                                                    <div class="item-cat-hover">*/}
                {/*                                                        <ul>*/}
                {/*                                                            <li><span>Release :</span><a href="https://tfhtml.themepul.com/moviestar/details.html">October 26, 2017</a></li>*/}
                {/*                                                            <li><span>Genre :</span><a href="https://tfhtml.themepul.com/moviestar/details.html">Action, Drama</a></li>*/}
                {/*                                                        </ul>*/}
                {/*                                                    </div>*/}
                {/*                                                </div>*/}
                {/*                                                <div class="movie-item-beta">*/}
                {/*                                                    <div class="movie-details">*/}
                {/*                                                        <a href="https://tfhtml.themepul.com/moviestar/details.html" class="btn btn-button button-detals blck-bg">details</a>*/}
                {/*                                                    </div>*/}
                {/*                                                    <div class="view-movie hover-right">*/}
                {/*                                                        <a class="blck-bg" href="https://tfhtml.themepul.com/moviestar/details.html">15k view</a>*/}
                {/*                                                    </div>*/}
                {/*                                                </div>*/}
                {/*                                            </div>*/}
                {/*                                        </div>*/}
                {/*                                </div>*/}
                {/*                            </div></div><div class="owl-item cloned" style="width: 262.5px; margin-right: 30px;"><div class="item">*/}
                {/*                                <div class="movie-item-contents gradient">*/}
                {/*                                    <img src="./movie _ Multipurpose HTML5 template_files/1(1).jpg" alt=""/>*/}
                {/*                                        <div class="movie-item-content">*/}
                {/*                                            <div class="movie-item-content-top">*/}
                {/*                                                <div class="pull-left">*/}
                {/*                                                    <span class="movie-count-time hover-left">02.50.20</span>*/}
                {/*                                                </div>*/}
                {/*                                                <div class="pull-right">*/}
                {/*                                                    <div class="movie-ratting">*/}
                {/*                                                        <a href="https://tfhtml.themepul.com/moviestar/details.html"><span class="fa fa-star"></span>2/20</a>*/}
                {/*                                                    </div>*/}
                {/*                                                </div>*/}
                {/*                                            </div>*/}
                {/*                                            <div class="movie-item-content-center">*/}
                {/*                                                <a href="https://tfhtml.themepul.com/moviestar/details.html" class="flat-icons" data-video-url="https://www.youtube.com/watch?v=CsVJoCKc9rA" style="cursor: pointer;"><span class="flaticon-play-button"></span></a>*/}
                {/*                                            </div>*/}
                {/*                                            <div class="movie-item-content-buttom">*/}
                {/*                                                <div class="movie-item-title">*/}
                {/*                                                    <a href="https://tfhtml.themepul.com/moviestar/details.html">Hurry Animate Blue Strack New Movie (2018)</a>*/}
                {/*                                                </div>*/}
                {/*                                                <div class="item-cat">*/}
                {/*                                                    <ul>*/}
                {/*                                                        <li><span>Category :</span><a href="https://tfhtml.themepul.com/moviestar/details.html">English Movies</a></li>*/}
                {/*                                                    </ul>*/}
                {/*                                                    <div class="item-cat-hover">*/}
                {/*                                                        <ul>*/}
                {/*                                                            <li><span>Release :</span><a href="https://tfhtml.themepul.com/moviestar/details.html">October 26, 2017</a></li>*/}
                {/*                                                            <li><span>Genre :</span><a href="https://tfhtml.themepul.com/moviestar/details.html">Action, Drama</a></li>*/}
                {/*                                                        </ul>*/}
                {/*                                                    </div>*/}
                {/*                                                </div>*/}
                {/*                                                <div class="movie-item-beta">*/}
                {/*                                                    <div class="movie-details">*/}
                {/*                                                        <a href="https://tfhtml.themepul.com/moviestar/details.html" class="btn btn-button button-detals blck-bg">details</a>*/}
                {/*                                                    </div>*/}
                {/*                                                    <div class="view-movie hover-right">*/}
                {/*                                                        <a class="blck-bg" href="https://tfhtml.themepul.com/moviestar/details.html">15k view</a>*/}
                {/*                                                    </div>*/}
                {/*                                                </div>*/}
                {/*                                            </div>*/}
                {/*                                        </div>*/}
                {/*                                </div>*/}
                {/*                            </div></div><div class="owl-item cloned" style="width: 262.5px; margin-right: 30px;"><div class="item">*/}
                {/*                                <div class="movie-item-contents gradient">*/}
                {/*                                    <img src="./movie _ Multipurpose HTML5 template_files/2(1).jpg" alt=""/>*/}
                {/*                                        <div class="movie-item-content">*/}
                {/*                                            <div class="movie-item-content-top">*/}
                {/*                                                <div class="pull-left">*/}
                {/*                                                    <span class="movie-count-time hover-left">02.50.20</span>*/}
                {/*                                                </div>*/}
                {/*                                                <div class="pull-right">*/}
                {/*                                                    <div class="movie-ratting">*/}
                {/*                                                        <a href="https://tfhtml.themepul.com/moviestar/details.html"><span class="fa fa-star"></span>2/20</a>*/}
                {/*                                                    </div>*/}
                {/*                                                </div>*/}
                {/*                                            </div>*/}
                {/*                                            <div class="movie-item-content-center">*/}
                {/*                                                <a href="https://tfhtml.themepul.com/moviestar/details.html" class="flat-icons" data-video-url="https://www.youtube.com/watch?v=CsVJoCKc9rA" style="cursor: pointer;"><span class="flaticon-play-button"></span></a>*/}
                {/*                                            </div>*/}
                {/*                                            <div class="movie-item-content-buttom">*/}
                {/*                                                <div class="movie-item-title">*/}
                {/*                                                    <a href="https://tfhtml.themepul.com/moviestar/details.html">Hurry Animate Blue Strack New Movie (2018)</a>*/}
                {/*                                                </div>*/}
                {/*                                                <div class="item-cat">*/}
                {/*                                                    <ul>*/}
                {/*                                                        <li><span>Category :</span><a href="https://tfhtml.themepul.com/moviestar/details.html">English Movies</a></li>*/}
                {/*                                                    </ul>*/}
                {/*                                                    <div class="item-cat-hover">*/}
                {/*                                                        <ul>*/}
                {/*                                                            <li><span>Release :</span><a href="https://tfhtml.themepul.com/moviestar/details.html">October 26, 2017</a></li>*/}
                {/*                                                            <li><span>Genre :</span><a href="https://tfhtml.themepul.com/moviestar/details.html">Action, Drama</a></li>*/}
                {/*                                                        </ul>*/}
                {/*                                                    </div>*/}
                {/*                                                </div>*/}
                {/*                                                <div class="movie-item-beta">*/}
                {/*                                                    <div class="movie-details">*/}
                {/*                                                        <a href="https://tfhtml.themepul.com/moviestar/details.html" class="btn btn-button button-detals blck-bg">details</a>*/}
                {/*                                                    </div>*/}
                {/*                                                    <div class="view-movie hover-right">*/}
                {/*                                                        <a class="blck-bg" href="https://tfhtml.themepul.com/moviestar/details.html">15k view</a>*/}
                {/*                                                    </div>*/}
                {/*                                                </div>*/}
                {/*                                            </div>*/}
                {/*                                        </div>*/}
                {/*                                </div>*/}
                {/*                            </div></div><div class="owl-item cloned" style="width: 262.5px; margin-right: 30px;"><div class="item">*/}
                {/*                                <div class="movie-item-contents gradient">*/}
                {/*                                    <img src="./movie _ Multipurpose HTML5 template_files/3.jpg" alt=""/>*/}
                {/*                                        <div class="movie-item-content">*/}
                {/*                                            <div class="movie-item-content-top">*/}
                {/*                                                <div class="pull-left">*/}
                {/*                                                    <span class="movie-count-time hover-left">02.50.20</span>*/}
                {/*                                                </div>*/}
                {/*                                                <div class="pull-right">*/}
                {/*                                                    <div class="movie-ratting">*/}
                {/*                                                        <a href="https://tfhtml.themepul.com/moviestar/details.html"><span class="fa fa-star"></span>2/20</a>*/}
                {/*                                                    </div>*/}
                {/*                                                </div>*/}
                {/*                                            </div>*/}
                {/*                                            <div class="movie-item-content-center">*/}
                {/*                                                <a href="https://tfhtml.themepul.com/moviestar/details.html" class="flat-icons" data-video-url="https://www.youtube.com/watch?v=CsVJoCKc9rA" style="cursor: pointer;"><span class="flaticon-play-button"></span></a>*/}
                {/*                                            </div>*/}
                {/*                                            <div class="movie-item-content-buttom">*/}
                {/*                                                <div class="movie-item-title">*/}
                {/*                                                    <a href="https://tfhtml.themepul.com/moviestar/details.html">Hurry Animate Blue Strack New Movie (2018)</a>*/}
                {/*                                                </div>*/}
                {/*                                                <div class="item-cat">*/}
                {/*                                                    <ul>*/}
                {/*                                                        <li><span>Category :</span><a href="https://tfhtml.themepul.com/moviestar/details.html">English Movies</a></li>*/}
                {/*                                                    </ul>*/}
                {/*                                                    <div class="item-cat-hover">*/}
                {/*                                                        <ul>*/}
                {/*                                                            <li><span>Release :</span><a href="https://tfhtml.themepul.com/moviestar/details.html">October 26, 2017</a></li>*/}
                {/*                                                            <li><span>Genre :</span><a href="https://tfhtml.themepul.com/moviestar/details.html">Action, Drama</a></li>*/}
                {/*                                                        </ul>*/}
                {/*                                                    </div>*/}
                {/*                                                </div>*/}
                {/*                                                <div class="movie-item-beta">*/}
                {/*                                                    <div class="movie-details">*/}
                {/*                                                        <a href="https://tfhtml.themepul.com/moviestar/details.html" class="btn btn-button button-detals blck-bg">details</a>*/}
                {/*                                                    </div>*/}
                {/*                                                    <div class="view-movie hover-right">*/}
                {/*                                                        <a class="blck-bg" href="https://tfhtml.themepul.com/moviestar/details.html">15k view</a>*/}
                {/*                                                    </div>*/}
                {/*                                                </div>*/}
                {/*                                            </div>*/}
                {/*                                        </div>*/}
                {/*                                </div>*/}
                {/*                            </div></div><div class="owl-item cloned" style="width: 262.5px; margin-right: 30px;"><div class="item">*/}
                {/*                                <div class="movie-item-contents gradient">*/}
                {/*                                    <img src="./movie _ Multipurpose HTML5 template_files/4.jpg" alt=""/>*/}
                {/*                                        <div class="movie-item-content">*/}
                {/*                                            <div class="movie-item-content-top">*/}
                {/*                                                <div class="pull-left">*/}
                {/*                                                    <span class="movie-count-time hover-left">02.50.20</span>*/}
                {/*                                                </div>*/}
                {/*                                                <div class="pull-right">*/}
                {/*                                                    <div class="movie-ratting">*/}
                {/*                                                        <a href="https://tfhtml.themepul.com/moviestar/details.html"><span class="fa fa-star"></span>2/20</a>*/}
                {/*                                                    </div>*/}
                {/*                                                </div>*/}
                {/*                                            </div>*/}
                {/*                                            <div class="movie-item-content-center">*/}
                {/*                                                <a href="https://tfhtml.themepul.com/moviestar/details.html" class="flat-icons" data-video-url="https://www.youtube.com/watch?v=CsVJoCKc9rA" style="cursor: pointer;"><span class="flaticon-play-button"></span></a>*/}
                {/*                                            </div>*/}
                {/*                                            <div class="movie-item-content-buttom">*/}
                {/*                                                <div class="movie-item-title">*/}
                {/*                                                    <a href="https://tfhtml.themepul.com/moviestar/details.html">Hurry Animate Blue Strack New Movie (2018)</a>*/}
                {/*                                                </div>*/}
                {/*                                                <div class="item-cat">*/}
                {/*                                                    <ul>*/}
                {/*                                                        <li><span>Category :</span><a href="https://tfhtml.themepul.com/moviestar/details.html">English Movies</a></li>*/}
                {/*                                                    </ul>*/}
                {/*                                                    <div class="item-cat-hover">*/}
                {/*                                                        <ul>*/}
                {/*                                                            <li><span>Release :</span><a href="https://tfhtml.themepul.com/moviestar/details.html">October 26, 2017</a></li>*/}
                {/*                                                            <li><span>Genre :</span><a href="https://tfhtml.themepul.com/moviestar/details.html">Action, Drama</a></li>*/}
                {/*                                                        </ul>*/}
                {/*                                                    </div>*/}
                {/*                                                </div>*/}
                {/*                                                <div class="movie-item-beta">*/}
                {/*                                                    <div class="movie-details">*/}
                {/*                                                        <a href="https://tfhtml.themepul.com/moviestar/details.html" class="btn btn-button button-detals blck-bg">details</a>*/}
                {/*                                                    </div>*/}
                {/*                                                    <div class="view-movie hover-right">*/}
                {/*                                                        <a class="blck-bg" href="https://tfhtml.themepul.com/moviestar/details.html">15k view</a>*/}
                {/*                                                    </div>*/}
                {/*                                                </div>*/}
                {/*                                            </div>*/}
                {/*                                        </div>*/}
                {/*                                </div>*/}
                {/*                            </div></div></div></div><div class="owl-controls"><div class="owl-nav"><div class="owl-prev" style=""><i class="flaticon-send"></i></div><div class="owl-next" style=""><span class="flaticon-send"></span></div></div><div class="owl-dots" style="display: none;"></div></div></div>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</section>*/}
            </div>
        </div>
    );
}

export default Details;