import React from 'react';

function Contact(props) {
    return (
        <div className={"container"}>
            <div className={"contact-form pt-170 pb-75"}>
                <div className={"row"}>
                    <div className={"col-md-6"}>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label fw-semibold">Name</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1"
                                   placeholder="name@example.com"/>
                        </div>
                    </div>
                    <div className={"col-md-6"}>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label fw-semibold">Subject</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1"
                                   placeholder="name@example.com"/>
                        </div>
                    </div>
                    <div className={"col-md-6"}>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label fw-semibold">Contact
                                No</label>
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

                </div>

                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label fw-semibold">Message</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div className={"d-flex justify-content-end mt-5"}>
                    <button className={"btn btn-outline-success green-bg text-white"}>Submit</button>
                </div>
            </div>
        </div>
    );
}

export default Contact;