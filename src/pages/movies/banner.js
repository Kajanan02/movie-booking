import React from 'react';
import banner from '../../assets/movies-banner.png';


function Banner(props) {
    return (
        <div class="container">
            <div class="full-withbanner pt-170 pb-75">
                <div class="banner-img zoom">
                    <img src={banner} alt="" width={"100%"}/>
                    <div class="full-withcon">
                        <h2 class="fullwithhadidng"><span>New Movie Banner</span></h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has
                            been the industry s standard</p>
                        <a href="https://tfhtml.themepul.com/moviestar/grid-page.html" class="btn-button btn-no-bg">view
                            now</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;