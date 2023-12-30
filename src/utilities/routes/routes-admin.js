import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "../../pages/home/home";
import Details from "../../pages/details/details";
import Movies from "../../pages/movies/movies";
import Contact from "../../pages/contact/contact";
import Faq from "../../pages/faq/faq";
import MainNavbar from "../../pages/home/main-Navbar";
import Footer from "../../components/footer";
import AdminHome from "../../pages/admin/home/admin-home";
import AdminMovies from "../../pages/admin/movies/admin-movies";

function RoutesAdmin(props) {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<AdminHome/>}/>
                <Route path="/movies" element={<AdminMovies/>}/>
                <Route path="/movies" element={<Movies/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/faq" element={<Faq/>}/>

            </Routes>
        </>

    );
}

export default RoutesAdmin;