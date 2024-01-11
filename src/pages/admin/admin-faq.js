import React, {useEffect, useState} from 'react';
import Layout from "../../components/layout/layout";
import FeatherIcon from "feather-icons-react";
import {Modal} from "react-bootstrap";
import formHandler from "../../utilities/FormHandler";
import {validateFAQ, validateTicketBook} from "../../utilities/validations";
import {useDispatch, useSelector} from "react-redux";
import {toggleConfirmationDialog, toggleLoader} from "../../redux/actions";
import axios from "axios";
import {toast} from "react-toastify";

function AdminFaq(props) {

    const [modalShow, setModalShow] = useState(false);
    const [isSubmit, setIsSubmit] = useState(null);
    const [isUpdate, setIsUpdate] = useState(null);
    const [deletedId, setDeletedId] = useState(null);
    const [faqList, setFaqList] = useState([]);
    const [update, setUpdate] = useState(false);
    const dispatch = useDispatch();

    const confirmationDialog = useSelector(state => {
        return state.setting.confirmationDialog
    });
    const {
        handleChange,
        handleSubmit,
        setValue,
        initForm,
        values,
        deleteErrors,
        errors,
    } = formHandler(faqAdd, validateFAQ);

    function faqAdd() {
        setIsSubmit(true)
    }

    console.log(values)

    function closeModal() {
        setModalShow(false)
        initForm({})
        setIsUpdate(false)
        setDeletedId(null)
    }

    useEffect(() => {
        if (!isSubmit) {
            return
        }
        dispatch(toggleLoader(true))

        if (isUpdate) {
            axios.put(`${process.env.REACT_APP_HOST}faq/${values.id}`, values)
                .then((res) => {
                    console.log(res)
                    toast.success("Successfully updated your FAQ")
                    closeModal()
                    setUpdate(!update)
                }).catch((err) => {
                toast.error("Something went wrong")
                console.log(err)
            }).finally(() => {
                setIsSubmit(false);
                dispatch(toggleLoader(false))

            })

        } else {

            axios.post(`${process.env.REACT_APP_HOST}faq`, values)
                .then((res) => {
                    console.log(res)
                    toast.success("Successfully added your FAQ")
                    closeModal()
                    setUpdate(!update)
                }).catch((err) => {
                toast.error("Something went wrong")
                console.log(err)
            }).finally(() => {
                setIsSubmit(false);
                dispatch(toggleLoader(false))

            })
        }

    }, [isSubmit]);


    useEffect(() => {
        dispatch(toggleLoader(true))
        axios.get(`${process.env.REACT_APP_HOST}faq`)
            .then((res) => {
                console.log(res)
                setFaqList(res.data)
            }).catch((err) => {
            console.log(err)
        }).finally(() => {
            dispatch(toggleLoader(false))
        })
    }, [update]);

    console.log(confirmationDialog)

    function handleDelete(id) {
        dispatch(toggleConfirmationDialog({
            isVisible: true,
            confirmationHeading: ('ARE YOU SURE YOU WANT TO DELETE THIS STUDENT DATA'),
            confirmationDescription: ('THE DELETE ACTION WILL REMOVE THE THIS STUDENT DATA')
        }));
        setDeletedId(id)
        console.log("ads")
    }

    useEffect(() => {
        if (!confirmationDialog || !confirmationDialog.onSuccess || !deletedId) {
            console.log("asdf")
            return;
        }
        console.log("asdasd")
        dispatch(toggleLoader(true))

        //http://localhost:5000/api/career/:id
        axios.delete(`${process.env.REACT_APP_HOST}faq/${deletedId}`)
            .then((res) => {
                setUpdate(!update)
                toast.success(`Successfully Deleted`)

            }).catch((err) => {
            console.log(err)
        }).finally(() => {
            dispatch(toggleLoader(false))
            setDeletedId(null)
        })
    }, [confirmationDialog])


    return (
        <Layout>
            <div className={"container"}>
                <div className={"p-lg-5 m-lg-5 p-4"}>
                    <div className={"d-flex justify-content-end mb-5"}>
                        <button type="button" className={"btn-button btn-no-bg mt-5 text-dark"}
                                onClick={() => setModalShow(true)}
                        >
                            <FeatherIcon className={"action-icons text-dark"} icon={"plus"}/>
                            Add
                        </button>
                    </div>
                    {<div className={"table-container p-1"}>
                        <table className={"table table-hover table-striped"}>
                            <thead className={"top-0 position-sticky h-45"}>
                            <tr>
                                <th scope="col">No</th>
                                <th scope="col">Question</th>
                                <th scope="col">Answer</th>
                                <th scope="col">Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {faqList.map((data, index) => (
                                <tr key={"index+marksReports"} key={index + "Asd"}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{data.question}</td>
                                    <td>{data.answer}</td>
                                    <td><FeatherIcon className={"action-icons"} icon={"edit"}
                                                     onClick={() => {
                                                         setIsUpdate(true)
                                                         initForm(data)
                                                         setModalShow(true)
                                                     }}/>


                                        <FeatherIcon className={"action-icons text-red"} icon={"trash-2"}
                                                     onClick={() => handleDelete(data.id)}/></td>

                                </tr>
                            ))}
                            </tbody>
                        </table>
                        {/*{marksList.length === 0 &&*/}
                        {/*    <div className={"text-center py-5 fw-bold"}>No Report Data Found</div>}*/}

                    </div>}
                </div>
            </div>

            <Modal show={modalShow} onHide={closeModal} size="lg" backdrop="static" centered>
                <Modal.Header closeButton>
                    <Modal.Title>{isUpdate ? "Edit FAQ" : "Add FAQ"}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className={"col-md-12"}>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1"
                                   className="form-label fw-semibold">Question</label>
                            <input value={values.question || ''} onChange={handleChange} type="text"
                                   className="form-control"
                                   id="exampleFormControlInput1" name={"question"}
                                   placeholder="Enter question"/>
                            {errors.question && <p className={"text-danger"}>{errors.question}</p>}
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1"
                               className="form-label fw-semibold">Answer</label>
                        <textarea value={values.answer || ''} onChange={handleChange} className="form-control"
                                  id="exampleFormControlTextarea1"
                                  rows="3" name={"answer"}
                                  placeholder={"Enter your answer"}></textarea>
                        {errors.answer && <p className={"text-danger"}>{errors.answer}</p>}
                    </div>
                    <div className={"d-flex justify-content-end mt-5"}>
                        <button className={"btn btn-outline-success green-bg text-white"} type={"submit"}
                                onClick={handleSubmit}>Submit
                        </button>
                    </div>
                </Modal.Body>
            </Modal>
        </Layout>
    );
}

export default AdminFaq;