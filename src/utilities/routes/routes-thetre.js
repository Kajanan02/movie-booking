import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "../../pages/home/home";
import Details from "../../pages/details/details";
import Movies from "../../pages/movies/movies";
import Contact from "../../pages/contact/contact";
import Faq from "../../pages/faq/faq";
import MainNavbar from "../../pages/home/main-Navbar";
import Footer from "../../components/footer";
import LoginForm from "../../pages/Login/LoginForm";

function RoutesTheatre(props) {
    return (
        <div className={"app"}>
            <MainNavbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/details/:movieId" element={<Details/>}/>
                <Route path="/movies" element={<Movies/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/faq" element={<Faq/>}/>

            </Routes>
            <Footer/>
        </div>

    );
}

export default RoutesTheatre;