import React, {useEffect, useState} from 'react';
import Layout from "../../components/layout/layout";
import FeatherIcon from "feather-icons-react";
import axios from "axios";
import {useDispatch} from "react-redux";
import {toggleLoader} from "../../redux/actions";

function AdminContact(props) {

    const [contactList, setContactList] = useState([]);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(toggleLoader(true))
        axios.get(`${process.env.REACT_APP_HOST}contact`)
            .then((res) => {
                console.log(res)
                setContactList(res.data)
            })
            .catch((err) => {
                console.log(err)
            }).finally(() => {
            dispatch(toggleLoader(false))
        })
    }, [])

    console.log(contactList)

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
                                <th scope="col">Email</th>
                                <th scope="col">Contact No</th>
                                <th scope="col">Subject</th>
                                <th scope="col">Message</th>
                            </tr>
                            </thead>
                            <tbody>
                            {contactList.map((data, index) => (
                            <tr key={index+"marksReports"}>
                                <th scope="row">{index + 1}</th>
                                <td>{data.name}</td>
                                <td>{data.email}</td>
                                <td>{data.contactNo}</td>
                                <td>{data.subject}</td>
                                <td>{data.message}</td>

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

export default AdminContact;