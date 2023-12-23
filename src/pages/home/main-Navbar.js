import React, {useEffect, useState} from 'react';
import logo from "../../assets/logo.png"
import {NavLink, useLocation} from "react-router-dom";

function MainNavbar(props) {
    const [navbarBg, setNavbarBg] = useState(false);
    const [navbarFixed, setNavbarFixed] = useState(false);
    const location = useLocation()

    useEffect(() => {
        if (location.pathname === "/") {
            setNavbarBg(true)
        } else {
            setNavbarBg(false)
        }
    }, [location.pathname]);

    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset);
        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, {passive: true});
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        if (offset > 100) {
            setNavbarFixed(true)
        } else {
            setNavbarFixed(false)
        }
    }, [offset]);

    return (
        <nav
            className={"navbar navbar-expand-lg nav-modify " + ((!navbarFixed && navbarBg) ? " bg-transparent " : " bg-dark ") + (navbarFixed ? "position-fixed bg-dark" : "")}>
            <div className="container">
                <NavLink className="navbar-brand text-white fw-bolder" to={"/"}><img src={logo} alt={"logo"}
                                                                                     width={"79px"}/>Cinemas</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item text-white">
                            <NavLink className={({isActive, isPending, isTransitioning}) =>
                                [
                                    isActive ? "nav-link text-green" : "nav-link",
                                ].join(" nav-link ")
                            }
                                     to={"/"}>Home</NavLink>
                        </li>
                        <li className="nav-item text-white">
                            <NavLink className="nav-link" to={"/movies"}>Movies</NavLink>
                        </li>
                        <li className="nav-item text-white">
                            <NavLink className="nav-link" to={"/contact"}>Contact</NavLink>
                        </li>
                        <li className="nav-item text-white">
                            <NavLink className="nav-link" to={"/faq"}>FAQ</NavLink>
                        </li>

                    </ul>

                </div>
            </div>
        </nav>
    );
}

export default MainNavbar;