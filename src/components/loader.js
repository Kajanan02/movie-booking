import React from 'react';
import {InfinitySpin} from "react-loader-spinner";
import {useSelector} from "react-redux";

function Loader(props) {
    const isLoading = useSelector(state => {
        return state.loader.isLoading
    });
    console.log(isLoading)
    return (
        <>
            {isLoading &&
                <div className={"loader-model-bg-visible"}>
                    <div className={"sa-modal-bg-inner"}>
                        <div className={"loader-model"}>
                            <InfinitySpin
                                visible={isLoading}
                                width="200"
                                color="#4fa94d"
                                ariaLabel="infinity-spin-loading"
                            />
                        </div>
                    </div>
                </div>}
        </>

    )

}

export default Loader;