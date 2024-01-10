import React, {useState} from 'react';
import Layout from "../../../components/layout/layout";
import {sheets} from "../../../utilities/sheets";

function AdminHome(props) {
    const [seat, setSeat] = useState([]);

    return (
        <Layout>
            <div className={"admin-home"}>
                <div className={"d-grid justify-content-center"}>
                    {sheets.map((data, index) => <div className={"d-flex flex-wrap gap-4 mb-4 align-items-center"}
                                                      key={index}>
                        {data[0].slice(0, 1)}
                        {data.map((item, index) => <div
                            className={"sheet " + (seat.includes(item) ? "selected-seat" : "")}
                            key={index + "sheer"} onClick={() => {
                            if (seat.includes(item)) {
                                setSeat(seat.filter((seat) => seat !== item))
                            } else {
                                setSeat([...seat, item])
                            }
                        }}>{item.slice(1)}</div>)}
                    </div>)}
                </div>
            </div>
        </Layout>
    );
}

export default AdminHome;