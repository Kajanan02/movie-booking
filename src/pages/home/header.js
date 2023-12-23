import React from 'react';

function Header(props) {
    return (
        <div className={"header-banner"}>
            <div className={"header-mask"}>
                <div className={"container"}>
                    <div className={"col-md-6 text-center"}>
                        <div className={"text-white  text fw-bolder"}>Welcome to Our movie site</div>
                        <h2 className={"text-white header-sub-txt"}>Our special <span
                            className={"text-green"}>Movies</span></h2>
                        <div className={"text-white"}>Lorem Ipsum is simply dummy text of the printing and typesetting
                            industrioy. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown. className={"text-white"} </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Header;