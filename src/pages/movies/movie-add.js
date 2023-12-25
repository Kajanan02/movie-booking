import React, {useState} from 'react';
import {Button, Modal} from "react-bootstrap";
import {sheets} from "../../utilities/sheets";

function MovieAdd(props) {
    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Modal show={show} onHide={handleClose}  size="lg"  backdrop="static" centered>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className={"row"}>
                    <div className={"col-md-6"}>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label fw-semibold">Email
                                address</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1"
                                   placeholder="name@example.com"/>
                        </div>
                    </div>
                    <div className={"col-md-6"}>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label fw-semibold">Email
                                address</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1"
                                   placeholder="name@example.com"/>
                        </div>
                    </div>
                    <div className={"col-md-6"}>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label fw-semibold">Email
                                address</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1"
                                   placeholder="name@example.com"/>
                        </div>
                    </div>
                    <div className={"col-md-6"}>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label fw-semibold">How Many Seats?</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1"
                                   placeholder="name@example.com"/>
                        </div>
                    </div>
                </div>
                <div>
                    {sheets.map((data,index)=><div className={"d-flex flex-wrap gap-3 mb-3 align-items-center"} key={index}>
                        {Object.keys(data)[0]}
                        {data[Object.keys(data)[0]].map((item)=><div className={"sheet"}>{item}</div>)}
                    </div>)}
                </div>

            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default MovieAdd;