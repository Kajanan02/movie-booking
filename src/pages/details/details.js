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
                                                        <div className="btn-button btn-no-bg mt-5">Book Now</div>
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

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Details;