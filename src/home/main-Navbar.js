import React from 'react';
import logo from "../assets/logo.png"
import {NavLink} from "react-router-dom";

function MainNavbar(props) {
    return (
        <nav className="navbar navbar-expand-lg bg-transparent nav-modify">
            <div className="container">
                <NavLink className="navbar-brand text-white fw-bolder"  to={"/"}><img src={logo} alt={"logo"} width={"79px"}/>Cinemas</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item text-white">
                            <NavLink className={({ isActive, isPending, isTransitioning }) =>
                                [
                                    isActive ? "nav-link text-green" : "nav-link",
                                ].join(" nav-link ")
                            }
                            to={"/"}>Home</NavLink>
                        </li>
                        <li className="nav-item text-white">
                            <NavLink className="nav-link"  to={"/movies"}>Movies</NavLink>
                        </li>
                        <li className="nav-item text-white">
                            <NavLink className="nav-link"  to={"/contact"}>Contact</NavLink>
                        </li>
                        <li className="nav-item text-white">
                            <NavLink className="nav-link"  to={"/faq"}>FAQ</NavLink>
                        </li>

                    </ul>

                </div>
            </div>
        </nav>
    );
}

export default MainNavbar;