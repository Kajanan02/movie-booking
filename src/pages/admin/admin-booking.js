import React from 'react';
import Layout from "../../components/layout/layout";
import FeatherIcon from "feather-icons-react";

function AdminBooking(props) {
    return (
        <Layout>
            <div className={"container"}>
                <div className={"p-lg-5 m-lg-5 p-4"}>
                    {<div className={"table-container p-1"}>
                        <table className={"table table-hover table-striped"}>
                            <thead className={"top-0 position-sticky h-45"}>
                            <tr>
                                <th scope="col">No</th>
                                <th scope="col">Date</th>
                                <th scope="col">Subject</th>
                                <th scope="col">Marks</th>
                                <th scope="col">Rank</th>
                            </tr>
                            </thead>
                            <tbody>
                            {/*{marksList.sort((a,b)=> new Date(b.createdAt) - new Date(a.createdAt)).map((data, index) => (*/}
                            <tr key={"index+marksReports"}>
                                <th scope="row">{"index + 1"}</th>
                                <td>{"data.date?.slice(0,10)"}</td>
                                <td>{"data.subject"}</td>
                                <td>{"data.marks"}</td>
                                <td>{"data.rank"}</td>

                            </tr>
                            {/*))}*/}
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