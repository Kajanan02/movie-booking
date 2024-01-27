import React, { useEffect, useState } from 'react';
import Bell from "../../assets/bell-icon.svg";
import Msg from "../../assets/msg-icon.svg";
// import Profile from "../src/assets/profile-img.svg";
import Profile from "../../assets/layoutDefaultProfile.jpg";
import FeatherIcon from 'feather-icons-react';
import { NavLink } from "react-router-dom";
import Logo from "../../assets/logo.png"
import SideClose from "../../assets/carbon_side-panel-close.svg";
import { useDispatch, useSelector } from 'react-redux'

//
// import {
//     signOut
// } from "../utils/Authentication";

function Layout({ children }) {

    const [open, setOpen] = React.useState(false);
    const [show, setShow] = useState(false);
    const dispatch = useDispatch();

    function settingPath() {

    }

    function toggleDrawer() {
        setOpen(!open);
    }

    return (
        <div className="container-fluid">
            <div className="row flex-nowrap overflow-auto">
                <div className={(!open ? " col-xl-2" : " w-100px") + (!show ? " mobile-navbar-hide " : " mobile-show ") + " col-auto col-md-1 px-0 bg-default border-right min-vh-100 trans"}>
                    <div className={"logo"}>
                        {!open && <div className={"edulogo"}>
                            <img className={"logosvg ms-4"} src={Logo} alt="" />
                            <span className={"mt-3  pt-2 ms-2 fw-semibold text-success"}>Cinemas</span>

                        </div>}
                        <div className={"close-btn-container mobile-hide"} onClick={toggleDrawer}>
                            <img src={SideClose} alt="SideClose" className={!!open ? "rotate-180" : ""} />
                        </div>
                    </div>
                    <div
                        className="d-flex flex-column align-items-center align-items-sm-start px-2 pt-2 text-white pt-4 mt-5">

                        <div className={"w-100 px-sm-2 home-mobile"}>
                            <NavLink end
                                     className={({isActive}) => isActive ? "side-menu-item side-menu-active " : "side-menu-item "}
                                     to={"/admin"}>
                                <div className={'d-flex'}>
                                    <FeatherIcon icon="home" className={!open ? 'me-2' : "ms-1"}/>
                                    {!open && <div className={'trans-1'}>Home</div>}
                                </div>
                            </NavLink>
                        </div>
                        <div className={"w-100 px-sm-2"}>
                            <NavLink
                                className={({isActive}) => isActive ? "side-menu-item side-menu-active " : "side-menu-item "}
                                to={"/admin/movies"}>
                                <div className={'d-flex'}>
                                    <FeatherIcon icon="airplay" className={!open ? 'me-2' : "ms-1"}/>
                                    {!open && <div className={''}>Movies</div>}
                                </div>
                            </NavLink>
                        </div>
                        <div className={"w-100 px-sm-2"}>
                            <NavLink
                                className={({isActive}) => isActive ? "side-menu-item side-menu-active " : "side-menu-item "}
                                to={"/admin/faq"}>
                                <div className={'d-flex'}>
                                    <FeatherIcon icon="message-square" className={!open ? 'me-2' : "ms-1"}/>
                                    {!open && <div className={''}>Faq</div>}
                                </div>
                            </NavLink>
                        </div>
                        <div className={"w-100 px-sm-2"}>
                            <NavLink
                                className={({isActive}) => isActive ? "side-menu-item side-menu-active " : "side-menu-item "}
                                to={"/admin/booking"}>
                                <div className={'d-flex'}>
                                    <FeatherIcon icon="book" className={!open ? 'me-2' : "ms-1"}/>
                                    {!open && <div className={''}>Booking</div>}
                                </div>
                            </NavLink>
                        </div>
                        <div className={"w-100 px-sm-2"}>
                            <NavLink
                                className={({isActive}) => isActive ? "side-menu-item side-menu-active " : "side-menu-item "}
                                to={"/admin/contact"}>
                                <div className={'d-flex'}>
                                    <FeatherIcon icon="package" className={!open ? 'me-2' : "ms-1"}/>
                                    {!open && <div className={''}>Contact</div>}
                                </div>
                            </NavLink>
                        </div>

                        <div className={'w-100 border-bottom-d1d1d1 mb-3'}/>

                        <div className={"w-100 px-sm-2"}>
                            <NavLink
                                className={({isActive}) => isActive ? "side-menu-item side-menu-active" : "side-menu-item"}
                                to={"/settings"}>
                                <div className={'d-flex'}>
                                    <FeatherIcon icon="lock" className={!open ? 'me-2' : "ms-1"}/>
                                    {!open && <div className={''}>Change Password</div>}
                                </div>
                            </NavLink>
                        </div>
                        <div className={"w-100 px-sm-2"}>
                            <NavLink onClick={() => localStorage.clear()}
                                className={({isActive}) => isActive ? "side-menu-item side-menu-active" : "side-menu-item"}
                                to={"/login"}>
                                <div className={'d-flex'}>
                                    <FeatherIcon icon="user" className={!open ? 'me-2' : "ms-1"}/>
                                    {!open && <div className={''}>Sign Out</div>}
                                </div>
                            </NavLink>
                        </div>
                        <div className={"w-100 px-sm-2"}>
                            {/*<NavLink*/}
                            {/*    onClick={signOut}*/}
                            {/*    className={({ isActive }) => isActive ? "side-menu-item side-menu-active" : "side-menu-item"} to={"/login"}>*/}
                            {/*    <div className={'d-flex'}>*/}
                            {/*        <FeatherIcon icon="log-out" className={!open ? 'me-2' : "ms-1"} />*/}
                            {/*        {!open && <div className={''}>Logout</div>}*/}
                            {/*    </div>*/}
                            {/*</NavLink>*/}
                        </div>

                    </div>
                </div>
                <div className="col p-0">
                    <nav className="navbar navbar-expand-lg bg-white border-bottom-d1d1d1 px-4 p-0">
                        <div className="container-fluid">
                            {/*<a className="navbar-brand" href="#">Navbar</a>*/}
                            <button
                                className="navbar-toggler ms-auto toggle-expand-button"
                                type="button"
                                onClick={toggleDrawer}
                            >
                            <FeatherIcon icon="menu" className="justify-content-center" />
                            </button>

                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav ms-auto align-items-center">
                                    <li className="nav-item">
                                        <a className="nav-link active position-relative px-2" aria-current="page"
                                            href="#">
                                            <div className="red-dot" />
                                            <img src={Bell} />
                                        </a>
                                    </li>

                                    <li className="nav-item px-2">
                                        <a className="nav-link  position-relative p-0" aria-current="page" href="#">

                                            <img src={Profile} className="rounded-circle user-profile mr-2" />
                                        </a>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </nav>
                    <div>
                        <div className={show ? "nav-shadow opacity-100" : "invisible opacity-0"} onClick={() => setShow(!show)} />
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Layout;