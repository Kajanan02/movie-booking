import React, {useEffect, useState} from 'react';
import Layout from "../../components/layout/layout";
import FeatherIcon from "feather-icons-react";
import {useDispatch} from "react-redux";
import {toggleLoader} from "../../redux/actions";
import axios from "axios";

function AdminBooking(props) {

    const [bookingList, setBookingList] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(toggleLoader(true))
        axios.get(`${process.env.REACT_APP_HOST}booking`)
            .then((res) => {
                console.log(res)
                setBookingList(res.data)
            })
            .catch((err) => {
                console.log(err)
            }).finally(() => {
            dispatch(toggleLoader(false))
        })
    }, [])

    console.log(bookingList)

    return (
        <Layout>
            <div className={"container"}>
                <div className={"p-lg-5 m-lg-5 p-4"}>
                    {<div className={"table-container p-1"}>
                        <table className={"table table-hover table-striped"}>
                            <thead className={"top-0 position-sticky h-45"}>
                            <tr>
                                <th scope="col">No</th>
                                <th scope="col">Name</th>
                                <th scope="col">Contact No</th>
                                <th scope="col">Seats</th>
                                <th scope="col">Address</th>
                                <th scope="col">Movie Date</th>
                                <th scope="col">Movie Name</th>
                            </tr>
                            </thead>
                            <tbody>
                            {bookingList.map((data, index) => (
                            <tr key={index+"marksReportsasd"}>
                                <th scope="row">{index + 1}</th>
                                <td>{data.name}</td>
                                <td>{data.contactNo}</td>
                                <td>{data.seats?.join(", ")}</td>
                                <td>{data.address}</td>
                                <td>{data.movieDate?.slice(0,10)}</td>
                                <td>{data.movieName}</td>

                            </tr>
                            ))}
                            </tbody>
                        </table>
                        {/*{marksList.length === 0 &&*/}
                        {/*    <div className={"text-center py-5 fw-bold"}>No Report Data Found</div>}*/}

                    </div>}
                </div>
            </div>
        </Layout>
    );
}

export default AdminBooking;