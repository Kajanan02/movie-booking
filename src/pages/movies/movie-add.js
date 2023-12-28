import React, {useState} from 'react';
import {Button, Modal} from "react-bootstrap";
import {sheets} from "../../utilities/sheets";
import screenImg from "../../assets/screen.svg";
import formHandler from "../../utilities/FormHandler";
import {validateTicketBook} from "../../utilities/validations";

function MovieAdd(props) {
    const [seat, setSeat] = useState([]);
    const [step, setStep] = useState(1);


    const {
        handleChange,
        handleSubmit,
        setValue,
        initForm,
        values,
        errors,
    } = formHandler(ticketBook, validateTicketBook);


    function ticketBook() {

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

    console.log(seat)
    return (
        <Modal show={props.show} onHide={props.close} size="lg" backdrop="static" centered>
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
                </div>}
                <div className={"row"}>
                    <div className={"col-md-6"}>
                        <div className={"mb-3"}>
                            <h6><label htmlFor="exampleInputEmail1"
                                       className="settings-form-text">Name</label></h6>
                            <input type="password" name={"name"} id="exampleInputAddress"
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
                            <input type="password" name={"address"} id="exampleInputAddress"
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
                            <input type="password" name={"contactNumber"} id="exampleInputAddress"
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
                            <input type="password" name={"email"} id="exampleInputAddress"
                                   placeholder={"Enter Email"}
                                   className={`form-control ${errors.email ? "border-danger" : ""}`}
                                   onChange={handleChange}
                            />
                            {errors.email && <p className={"text-danger"}>{errors.email}</p>}
                        </div>
                    </div>
                </div>


            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.close}>
                    Close
                </Button>
                <Button variant="primary" onClick={() => {
                    if (step === 1) {
                        setStep(2)
                    } else {
                        handleSubmit()
                    }
                }}>
                    Save
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default MovieAdd;