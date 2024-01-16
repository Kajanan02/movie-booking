import React, {useEffect, useState} from 'react';
import formHandler from "../../utilities/FormHandler";
import {validateContact, validateTicketBook} from "../../utilities/validations";
import {toggleLoader} from "../../redux/actions";
import axios from "axios";
import {toast} from "react-toastify";
import {useDispatch} from "react-redux";

function Contact(props) {

    const [isSubmit, setIsSubmit] = useState(null);
    const dispatch = useDispatch();


    const {
        handleChange, handleSubmit, setValue, initForm, values, deleteErrors, errors,
    } = formHandler(contactSubmit, validateContact);


    function contactSubmit() {
        setIsSubmit(true)
    }

    useEffect(() => {
        if (!isSubmit) {
            return
        }
        dispatch(toggleLoader(true))


        axios.post(`${process.env.REACT_APP_HOST}contact`, values)
            .then((res) => {
                console.log(res)
                toast.success("Successfully sent your message")
                initForm({})
            }).catch((err) => {
            toast.error("Something went wrong")
            console.log(err)
        }).finally(() => {
            setIsSubmit(false);
            dispatch(toggleLoader(false))

        })

    }, [isSubmit]);


    return (<div className={"container"}>
            <form onSubmit={handleSubmit} className={"contact-form pt-170 pb-75"}>
                <div className={"row"}>
                    <div className={"col-md-6"}>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label fw-semibold">Name</label>
                            <input onChange={handleChange} type="text" className="form-control" id="exampleFormControlInput1" name={"name"}
                                   value={values.name || ""}
                                   placeholder="Enter your name"/>
                            {errors.name && <p className={"text-danger"}>{errors.name}</p>}
                        </div>
                    </div>
                    <div className={"col-md-6"}>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label fw-semibold">Subject</label>
                            <input onChange={handleChange} type="text" className="form-control" id="exampleFormControlInput1" name={"subject"}
                                   value={values.subject || ""}
                                   placeholder="Enter your subject"/>
                            {errors.subject && <p className={"text-danger"}>{errors.subject}</p>}
                        </div>
                    </div>
                    <div className={"col-md-6"}>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label fw-semibold">Contact
                                No</label>
                            <input onChange={handleChange} type="text" className="form-control" id="exampleFormControlInput1" name={"contactNo"}
                                   value={values.contactNo || ""}
                                   placeholder="Enter your Contact No"/>
                            {errors.contactNo && <p className={"text-danger"}>{errors.contactNo}</p>}
                        </div>
                    </div>
                    <div className={"col-md-6"}>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label fw-semibold">Email
                                address</label>
                            <input onChange={handleChange} type="text" className="form-control" id="exampleFormControlInput1" name={"email"}
                                   value={values.email || ""}
                                   placeholder="Enter your Email"/>
                            {errors.email && <p className={"text-danger"}>{errors.email}</p>}
                        </div>
                    </div>

                </div>

                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label fw-semibold">Message</label>
                    <textarea onChange={handleChange} className="form-control" id="exampleFormControlTextarea1" rows="3" name={"message"}
                              value={values.message || ""}
                              placeholder={"Enter your message"}></textarea>
                    {errors.message && <p className={"text-danger"}>{errors.message}</p>}
                </div>
                <div className={"d-flex justify-content-end mt-5"}>
                    <button className={"btn btn-outline-success green-bg text-white"} type={"submit"}>Submit</button>
                </div>
            </form>
        </div>);
}

export default Contact;