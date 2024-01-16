import React, {useEffect, useState} from 'react';
import {Button, Modal} from "react-bootstrap";
import {sheets} from "../../utilities/sheets";
import screenImg from "../../assets/screen.svg";
import formHandler from "../../utilities/FormHandler";
import {validateTicketBook} from "../../utilities/validations";
import DatePicker from "react-horizontal-datepicker";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {toggleLoader} from "../../redux/actions";
import {toast} from "react-toastify";



function MovieAdd(props) {
    const [seat, setSeat] = useState([]);
    const [step, setStep] = useState(1);
    const [seatValidate, setSeatValidate] = useState(null);
    const [submit, setSubmit] = useState(null);
    const dispatch = useDispatch();


    const {
        handleChange,
        handleSubmit,
        setValue,
        initForm,
        values,
        deleteErrors,
        errors,
    } = formHandler(ticketBook, validateTicketBook);


    function ticketBook(data) {
        setSubmit(true)
    }

    console.log(seat)

    function getSelectedSeat(row, col) {
        let selectedSeat = seat.filter((item) => Object.keys(item)[0] === row)
        if (selectedSeat.length > 0) {
            if (selectedSeat[0][row].includes(col)) {
                return true
            } else {
                return false
            }
        } else {
            return false
        }

    }

    const selectedMovie = useSelector(state => {
        return state?.selectedMovieDetails?.data
    });

 function closeModal() {
        setSeatValidate(false)
     setSeat([])
     props.close()
     setStep(1)
     deleteErrors(errors)
 }

    const selectedDay = (val) =>{
        console.log(val)
        setValue({movieDate:val.toISOString()})
    };

    useEffect(() => {
        if(!submit){
            return
        }
        dispatch(toggleLoader(true))
console.log(values)
const data = {}
    data.name = values.name
    data.email = values.email
    data.contactNo = values.contactNumber
    data.address = values.address
    data.seats = seat
    data.movieName = selectedMovie?.name
    data.movieDate = values.movieDate
    data.movieTime = "10.00 AM"

        console.log(data)
        axios.post(`${process.env.REACT_APP_HOST}booking`, data)
            .then((res) => {
                console.log(res)
                closeModal()
                toast.success("Successfully Booked")

            }).catch((err) => {
            toast.error("Something went wrong")
            console.log(err)
        }).finally(() => {
            // dispatch(toggleLoader(false));
            // setFormSubmitted(false)
            setSubmit(false);
            dispatch(toggleLoader(false))

        })

    }, [submit]);

    return (
        <Modal show={props.show} onHide={closeModal} size="lg" backdrop="static" centered>
            <Modal.Header closeButton>
                <Modal.Title>How Many Seats?</Modal.Title>
            </Modal.Header>
            <Modal.Body>

                {/*{[].map((item)=><div className={"sheet"}>{item}</div>)}*/}
                {step === 1 && <div>

                    <div className={"d-grid justify-content-center"}>
                        {sheets.map((data, index) => <div className={"d-flex flex-wrap gap-3 mb-3 align-items-center"}
                                                          key={index}>
                            {data[0].slice(0, 1)}
                            {data.map((item, index) => <div
                                className={"sheet " + (seat.includes(item) ? "selected-seat" : "")}
                                key={index + "sheer"} onClick={() => {
                                    seatValidate && setSeatValidate(false)
                                if (seat.includes(item)) {
                                    setSeat(seat.filter((seat) => seat !== item))
                                } else {
                                    setSeat([...seat, item])
                                }
                            }}>{item.slice(1)}</div>)}
                        </div>)}
                    </div>
                    <div className={"d-grid justify-content-center mt-5"}>

                        <img src={screenImg}/>
                        <div className={"text-center"}>All eyes this way please!</div>
                    </div>
                    {seatValidate &&<div className={"text-danger fw-semibold text-center mt-4"}>Please select seats</div>}
                </div>}
                {step === 2 &&<div className={"row"}>
                    <div className={"col-md-12 mb-5"}>
                    <DatePicker getSelectedDay={selectedDay}
                                endDate={100}
                                selectDate={new Date("2020-04-30")}
                                labelFormat={"MMMM"}
                                color={"#229933"}
                    /></div>
                    <div className={"col-md-6"}>
                        <div className={"mb-3"}>
                            <h6><label htmlFor="exampleInputEmail1"
                                       className="settings-form-text">Name</label></h6>
                            <input type="text" name={"name"} id="exampleInputAddress"
                                   placeholder={"Enter Name"}
                                   className={`form-control ${errors.name ? "border-danger" : ""}`}
                                   onChange={handleChange}
                            />
                            {errors.name && <p className={"text-danger"}>{errors.name}</p>}
                        </div>
                    </div>
                    <div className={"col-md-6"}>
                        <div className={"mb-3"}>
                            <h6><label htmlFor="exampleInputEmail1"
                                       className="settings-form-text">Address</label></h6>
                            <input type="text" name={"address"} id="exampleInputAddress"
                                   placeholder={"Enter Address"}
                                   className={`form-control ${errors.address ? "border-danger" : ""}`}
                                   onChange={handleChange}
                            />
                            {errors.address && <p className={"text-danger"}>{errors.address}</p>}
                        </div>
                    </div>
                    <div className={"col-md-6"}>
                        <div className={"mb-3"}>
                            <h6><label htmlFor="exampleInputEmail1"
                                       className="settings-form-text">Contact Number</label></h6>
                            <input type="text" name={"contactNumber"} id="exampleInputAddress"
                                   placeholder={"Enter Contact Number"}
                                   className={`form-control ${errors.contactNumber ? "border-danger" : ""}`}
                                   onChange={handleChange}
                            />
                            {errors.contactNumber && <p className={"text-danger"}>{errors.contactNumber}</p>}
                        </div>
                    </div>
                    <div className={"col-md-6"}>
                        <div className={"mb-3"}>
                            <h6><label htmlFor="exampleInputEmail1"
                                       className="settings-form-text">Email</label></h6>
                            <input type="text" name={"email"} id="exampleInputAddress"
                                   placeholder={"Enter Email"}
                                   className={`form-control ${errors.email ? "border-danger" : ""}`}
                                   onChange={handleChange}
                            />
                            {errors.email && <p className={"text-danger"}>{errors.email}</p>}
                        </div>
                    </div>
                </div>}


            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={closeModal}>
                    Close
                </Button>
                <Button variant="success" onClick={() => {
                    if (step === 1) {
                        if(seat.length === 0){
                            setSeatValidate(true)
                            return
                        }
                        setStep(2)
                    } else {

                        handleSubmit()
                    }
                }}>
                    {step === 1 ? "Next": "Save"}
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default MovieAdd;