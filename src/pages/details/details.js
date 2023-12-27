import React, {useState} from 'react';
import Banner from "../../assets/details.jpg"
import SubBanner from "../../assets/details-sub.jpg"
import MovieAdd from "../movies/movie-add";

function Details(props) {
    const [show, setShow] = useState(false);

    function onClose() {
        setShow(false)
    }

    return (
        <div className="container">
            <div className="details-page">
                <div className="details-big-img mt-0">
                    <img src={Banner} width={"100%"}/>
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
                                                <img src={SubBanner} alt=""/>
                                            </div>
                                        </div>
                                        <div className="col-lg-7 col-md-7 col-sm-6 col-xs-12">
                                            <div className="dec-review-dec">
                                                <div className="details-title">
                                                    <h2>Hurry Animate Blue Strack New Movie (2018)</h2>
                                                </div>
                                                <div className="ratting">
                                                    <span className="fa fa-star"></span>
                                                    <span className="fa fa-star"></span>
                                                    <span className="fa fa-star"></span>
                                                    <span className="fa fa-star"></span>
                                                    <span className="fa fa-star"></span>
                                                    <a href="https://tfhtml.themepul.com/moviestar/details.html">6/5
                                                        ratitng</a>
                                                </div>
                                                <div className="dec-review-meta">
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
                                                        <div className="btn-button btn-no-bg mt-5" onClick={()=> setShow(true)}>Book Now</div>
                                                    </ul>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="details-dectiontion">
                                    <h2 className="title">Movie story</h2>
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
            <MovieAdd show={show} close={onClose}/>
        </div>
    );
}

export default Details;