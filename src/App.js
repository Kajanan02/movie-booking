import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import './App.css';
import "@flaticon/flaticon-uicons/css/all/all.css";
import 'react-modal-video/css/modal-video.css'
import {Route, Routes} from "react-router-dom";
import Home from "./pages/home/home";
import Details from "./pages/details/details";
import MainNavbar from "./pages/home/main-Navbar";
import React from "react";
import Footer from "./components/footer";
import Movies from "./pages/movies/movies";
import Contact from "./pages/contact/contact";
import Faq from "./pages/faq/faq";

function App() {
    return (
        <>
            <MainNavbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/details" element={<Details/>}/>
                <Route path="/movies" element={<Movies/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/faq" element={<Faq/>}/>

            </Routes>
            <Footer/>

        </>
    );
}

export default App;
