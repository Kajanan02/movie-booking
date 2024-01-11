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
import AdminHome from "./pages/admin/home/admin-home";
import RoutesTheatre from "./utilities/routes/routes-thetre";
import RoutesAdmin from "./utilities/routes/routes-admin";
import Loader from "./components/loader";
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from "react-toastify";
import ConfirmationDialog from "./components/confirmation-dialog";

function App() {
    return (
        <>
            <Loader/>
            <ToastContainer />
            <ConfirmationDialog/>
            <Routes>
                <Route path="/*" element={<RoutesTheatre/>}/>
                <Route path="/admin/*" element={<RoutesAdmin/>}/>
            </Routes>


        </>
    );
}

export default App;
