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
import AdminMovies from "../../pages/admin/admin-movies";
import AdminFaq from "../../pages/admin/admin-faq";
import AdminContact from "../../pages/admin/admin-contact";
import AdminBooking from "../../pages/admin/admin-booking";

function RoutesAdmin(props) {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<AdminHome/>}/>
                <Route path="/movies" element={<AdminMovies/>}/>
                <Route path="/contact" element={<AdminContact/>}/>
                <Route path="/faq" element={<AdminFaq/>}/>
                <Route path="/booking" element={<AdminBooking/>}/>

            </Routes>
        </>

    );
}

export default RoutesAdmin;