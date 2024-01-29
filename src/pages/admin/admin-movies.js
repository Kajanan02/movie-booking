import React, {useEffect, useState} from 'react';
import Layout from "../../components/layout/layout";
import FeatherIcon from "feather-icons-react";
import MovieAdd from "../movies/movie-add";
import MovieDataAdd from "./movieDataAdd";
import {useDispatch, useSelector} from "react-redux";
import {toggleConfirmationDialog, toggleLoader} from "../../redux/actions";
import axios from "axios";
import {toast} from "react-toastify";

function AdminMovies(props) {
    const [movieList, setMovieList] = useState([]);
    const [show, setShow] = useState(false);
    const [update, setUpdate] = useState(false);
    const [selectedData, setSelectedData] = useState(null);
    const [deletedId, setDeletedId] = useState(null);
    const [type, setType] = useState(null);

    const dispatch = useDispatch();

    const confirmationDialog = useSelector(state => {
        return state.setting.confirmationDialog
    });
    useEffect(() => {
        dispatch(toggleLoader(true))
        axios.get(`${process.env.REACT_APP_HOST}movie`)
            .then((res) => {
                setMovieList(res.data)
            })
            .catch((err) => {
                console.log(err)
            }).finally(() => {
            dispatch(toggleLoader(false))
        })
    }, [update]);


    function handleDelete(id) {
        dispatch(toggleConfirmationDialog({
            isVisible: true,
            confirmationHeading: ('ARE YOU SURE YOU WANT TO DELETE THIS MOVIE DATA'),
            confirmationDescription: ('THE DELETE ACTION WILL REMOVE THE THIS MOVIE DATA')
        }));
        setDeletedId(id)
        console.log("ads")
    }

    useEffect(() => {
        if (!confirmationDialog || !confirmationDialog.onSuccess || !deletedId) {
            console.log("asdf")
            return;
        }
        console.log("asdasd")
        dispatch(toggleLoader(true))

        //http://localhost:5000/api/career/:id
        axios.delete(`${process.env.REACT_APP_HOST}movie/${deletedId}`)
            .then((res) => {
                setUpdate(!update)
                toast.success(`Successfully Deleted`)

            }).catch((err) => {
            console.log(err)
        }).finally(() => {
            dispatch(toggleLoader(false))
            setDeletedId(null)
        })
    }, [confirmationDialog])

    return (
        <Layout>
            <div className={"container"}>
                <h3 className={"ms-5 my-3 fw-semibold admin-heading"}>Movie Details</h3>
                <div className={"p-lg-5 m-lg-5 p-4"}>
                    <div className={"d-flex justify-content-end mb-5"}>
                        <button type="button" className={"btn-button btn-no-bg mt-5 text-dark"}
                                onClick={() => {
                                    setType("ADD")
                                    setShow(true)
                                }}
                        >
                            <FeatherIcon className={"action-icons text-dark"} icon={"plus"}/>
                            Add
                        </button>
                    </div>
                    {<div className={"table-container p-1"}>
                        <table className={"table table-hover table-striped"}>
                            <thead className={"top-0 position-sticky h-45"}>
                            <tr>
                                <th scope="col">No</th>
                                <th scope="col">Name</th>
                                <th scope="col">Category</th>
                                <th scope="col">Actor</th>
                                <th scope="col">Language</th>
                                <th scope="col">Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {movieList.map((data, index) => (
                                <tr key={index + "movie"}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{data.name}</td>
                                    <td>{data.category}</td>
                                    <td>{data.actor}</td>
                                    <td>{data.language}</td>
                                    <td>{data.language}</td>
                                    <td>
                                        <FeatherIcon className={"action-icons"} icon={"eye"}
                                                     onClick={() => {
                                                         setSelectedData(data)
                                                         setShow(true)
                                                         setType("VIEW")
                                                     }}/>
                                        <FeatherIcon className={"action-icons"} icon={"edit"}
                                                     onClick={() => {
                                                         setSelectedData(data)
                                                         setShow(true)
                                                         setType("EDIT")
                                                     }}/>


                                        <FeatherIcon className={"action-icons text-red"} icon={"trash-2"}
                                                     onClick={() => handleDelete(data.id)}/></td>

                                </tr>
                            ))}
                            </tbody>
                        </table>
                        {movieList.length === 0 &&
                            <div className={"text-center py-5 fw-bold"}>No Movies Data Found</div>}

                    </div>}
                </div>
            </div>
            <MovieDataAdd show={show}
                          selectedData={selectedData}
                          close={() => {
                              setShow(false)
                              setType(null)
                          }} type={type} update={() => setUpdate(!update)}/>
        </Layout>
    );
}

export default AdminMovies;