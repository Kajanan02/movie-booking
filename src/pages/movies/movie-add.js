import React, {useState} from 'react';
import {Button, Modal} from "react-bootstrap";
import {sheets} from "../../utilities/sheets";
import screenImg from "../../assets/screen.svg";

function MovieAdd(props) {
    const [seat, setSeat] = useState([]);
    const [step, setStep] = useState(1);



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
                {step ===1 &&<div>

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


            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.close}>
                    Close
                </Button>
                <Button variant="primary" onClick={props.close}>
                    Save
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default MovieAdd;