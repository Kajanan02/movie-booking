import React, {useEffect, useState} from 'react';
import Layout from "../../../components/layout/layout";
import {sheets} from "../../../utilities/sheets";
import DatePicker from "react-horizontal-datepicker";
import {toggleLoader} from "../../../redux/actions";
import axios from "axios";
import {useDispatch} from "react-redux";
import {flatten, pluck} from "underscore";
import {toast} from "react-toastify";

function AdminHome(props) {
    const [seat, setSeat] = useState([]);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [movieList, setMovieList] = useState([]);
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [bookedData, setBookedData] = useState([]);
    const dispatch = useDispatch();


    const selectedDay = (val) => {
        // console.log(val.toLocaleString("sv-SE", { timeZone: "Asia/Colombo" }))
        setSelectedDate(val)
    };

    useEffect(() => {
        let date = selectedDate.toLocaleString("sv-SE", { timeZone: "Asia/Colombo" }).split(" ")[0]
        let selectedDateData = bookedData.filter((item) => item.movieDate.split(" ")[0] === date && item.movieName === selectedMovie)

        console.log(selectedDateData)
        console.log(date)
        console.log(bookedData)
        setSelectedSeats(flatten(pluck(selectedDateData, "seats")))

    }, [movieList,selectedDate,bookedData,selectedMovie]);

    console.log(selectedSeats)

    function handleChange(e) {
        setSelectedMovie(e.target.value)

    }

    useEffect(() => {
        dispatch(toggleLoader(true))
        axios.get(`${process.env.REACT_APP_HOST}booking`)
            .then((res) => {
                setBookedData(res.data)
                console.log(res)

            }).catch((err) => {
            toast.error("Something went wrong")
            console.log(err)
        }).finally(() => {
            dispatch(toggleLoader(false))
        })
    }, []);

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
    }, []);

    return (
        <Layout>
<h3 className={"ms-5 my-3 fw-semibold admin-heading"}>Booked Seats</h3>
            <div className={"container"}>
                <div className={"date-pick-admin m-auto"}>
                    <div className={"my-2"}>
                        <DatePicker getSelectedDay={selectedDay}
                                    endDate={100}
                                    selectDate={selectedDate}
                                    labelFormat={"MMMM"}
                                    color={"#229933"}
                        /></div>

                    <select name={"category"} id="exampleInputAddress"
                            placeholder={"Select Movie"}
                            className={`form-control`}
                            onChange={handleChange}
                    >
                        <option value={""} hidden={true}>Select Movie</option>
{movieList.map((item, index) => <option value={item.name} key={index}>{item.name}</option>)}
                    </select>
                </div>
            </div>


            <div className={"admin-home"}>
                <div className={"d-grid justify-content-center"}>
                    {sheets.map((data, index) => <div className={"d-flex flex-wrap gap-4 mb-4 align-items-center"}
                                                      key={index}>
                        {data[0].slice(0, 1)}
                        {data.map((item, index) => <div
                            className={"sheet " + (selectedSeats.includes(item) ? "selected-seat" : "")}
                            key={index + "sheer"}

                        >{item.slice(1)}</div>)}
                    </div>)}
                </div>
            </div>
        </Layout>
    );
}

export default AdminHome;