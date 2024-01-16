import React, {useEffect, useState} from 'react';
import {Button, Modal} from "react-bootstrap";
import {sheets} from "../../utilities/sheets";
import formHandler from "../../utilities/FormHandler";
import uploadIcon from "../../assets/uplod-icon.svg";
import {validateMovieData} from "../../utilities/validations";
import {FileUploader} from "react-drag-drop-files";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {toggleConfirmationDialog, toggleLoader} from "../../redux/actions";
import {toast} from "react-toastify";

function MovieDataAdd(props) {
    const [image, setImage] = useState(null);
    const [imageBanner, setImageBanner] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const dispatch = useDispatch();

    const handleChangeImage = (file) => {
        setImage(file);
        imageUpload(file, "image")
    };
    const handleChangeImageBanner = (file) => {
        setImageBanner(file);
        imageUpload(file, "imageBanner")
    };

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
    } = formHandler(ticketBook, validateMovieData);


    function ticketBook() {
        setIsSubmitting(true)
    }

    useEffect(() => {
        if (!isSubmitting) return;
        if (props.type === "EDIT") {
            dispatch(toggleLoader(true))
            axios.put(`${process.env.REACT_APP_HOST}movie/${props.selectedData.id}`, values)
                .then((res) => {
                    console.log(res.data)
                    closeModal()
                    toast.success("Movie Updated Successfully")
                    props.update()
                }).catch((err) => {
                console.log(err)
                toast.error("Something went wrong")
            }).finally(() => {
                dispatch(toggleLoader(false))
                setIsSubmitting(false)
            })
        } else {
            dispatch(toggleLoader(true))
            axios.post(`${process.env.REACT_APP_HOST}movie`, values)
                .then((res) => {
                    console.log(res.data)
                    closeModal()
                    toast.success("Movie Added Successfully")
                    props.update()
                }).catch((err) => {
                console.log(err)
                toast.error("Something went wrong")
            }).finally(() => {
                dispatch(toggleLoader(false))
                setIsSubmitting(false)

            })
        }

    }, [isSubmitting]);



    useEffect(() => {
        console.log(props.selectedData)
        if (!props.selectedData && !["VIEW","EDIT"].includes(props.type)) {
        initForm({})
            return
        }

        console.log("asd")
        initForm(props.selectedData)
    }, [props.selectedData,props.type]);


    useEffect(() => {

        if(props.type === "ADD"){
            initForm({})
        }

    }, [props.type]);


    function closeModal() {
        props.close()
        initForm({})
        deleteErrors(errors)
    }


    function imageUpload(file, key) {
        console.log("Fille")

        dispatch(toggleLoader(true))
        const data = new FormData()
        data.append("file", file)
        data.append("upload_preset", "xi7icexi")
        data.append("cloud_name", "dacrccjrm")
        axios.put("https://api.cloudinary.com/v1_1/dacrccjrm/image/upload", data)
            .then((res) => {
                console.log(res.data.url)
                setValue({[key]: res.data.url})
            }).finally(() => dispatch(toggleLoader(false)))
    }

    console.log(values)

    return (
        <Modal show={props.show} onHide={closeModal} size="lg" backdrop="static" centered>
            <Modal.Header closeButton>
                <Modal.Title>{props.type === "VIEW" ? "Move Details" : props.type === "EDIT" ? "Edit Movie" : "Add Movie"}</Modal.Title>
            </Modal.Header>
            <Modal.Body>


                {<div className={"row"}>
                    <div className={"col-md-6"}>
                        <div className={"mb-3"}>
                            <h6><label htmlFor="exampleInputEmail1"
                                       className="settings-form-text">Name</label></h6>
                            <input type="text" name={"name"} id="exampleInputAddress"
                                   placeholder={"Enter Name"}
                                   className={`form-control ${errors.name ? "border-danger" : ""}`}
                                   onChange={handleChange}
                                   disabled={props.type === "VIEW"}
                                   value={values.name || ""}
                            />
                            {errors.name && <p className={"text-danger"}>{errors.name}</p>}
                        </div>
                    </div>
                    <div className={"col-md-6"}>
                        <div className={"mb-3"}>
                            <h6><label htmlFor="exampleInputEmail1"
                                       className="settings-form-text">Category</label></h6>
                            <select name={"category"} id="exampleInputAddress"
                                    placeholder={"Enter Category"}
                                    value={values.category || ""}
                                    disabled={props.type === "VIEW"}
                                    className={`form-control ${errors.category ? "border-danger" : ""}`}
                                    onChange={handleChange}
                            >
                                <option value={""}>Select Category</option>
                                <option value={"Fantasy"}>Fantasy</option>
                                <option value={"Action"}>Action</option>
                                <option value={"Adventure"}>Adventure</option>
                                <option value={"Comedy"}>Comedy</option>
                                <option value={"Crime"}>Crime</option>
                                <option value={"Drama"}>Drama</option>
                                <option value={"Historical"}>Historical</option>
                                <option value={"Horror"}>Horror</option>
                                <option value={"Mystery"}>Mystery</option>
                                <option value={"Romance"}>Romance</option>
                                <option value={"Science Fiction"}>Science Fiction</option>
                            </select>
                            {errors.category && <p className={"text-danger"}>{errors.category}</p>}
                        </div>
                    </div>
                    <div className={"col-md-6"}>
                        <div className={"mb-3"}>
                            <h6><label htmlFor="exampleInputEmail1"
                                       className="settings-form-text">Actor</label></h6>
                            <input type="text" name={"actor"} id="exampleInputAddress"
                                   placeholder={"Enter Actor"}
                                   disabled={props.type === "VIEW"}
                                   value={values.actor || ""}
                                   className={`form-control ${errors.actor ? "border-danger" : ""}`}
                                   onChange={handleChange}
                            />
                            {errors.actor && <p className={"text-danger"}>{errors.actor}</p>}
                        </div>
                    </div>
                    <div className={"col-md-6"}>
                        <div className={"mb-3"}>
                            <h6><label htmlFor="exampleInputEmail1"
                                       className="settings-form-text">Genre</label></h6>
                            <input type="text" name={"genre"} id="exampleInputAddress"
                                   placeholder={"Enter Genre"}
                                   value={values.genre || ""}
                                   disabled={props.type === "VIEW"}
                                   className={`form-control ${errors.genre ? "border-danger" : ""}`}
                                   onChange={handleChange}
                            />
                            {errors.genre && <p className={"text-danger"}>{errors.genre}</p>}
                        </div>
                    </div>
                    <div className={"col-md-6"}>
                        <div className={"mb-3"}>
                            <h6><label htmlFor="exampleInputEmail1"
                                       className="settings-form-text">Release Date</label></h6>
                            <input type="date" name={"release"} id="exampleInputAddress"
                                   placeholder={"Enter Release Date"}
                                   value={values.release || ""}
                                   disabled={props.type === "VIEW"}
                                   className={`form-control ${errors.release ? "border-danger" : ""}`}
                                   onChange={handleChange}
                            />
                            {errors.release && <p className={"text-danger"}>{errors.release}</p>}
                        </div>
                    </div>
                    <div className={"col-md-6"}>
                        <div className={"mb-3"}>
                            <h6><label htmlFor="exampleInputEmail1"
                                       className="settings-form-text">Language</label></h6>
                            <input type="text" name={"language"} id="exampleInputAddress"
                                   placeholder={"Enter Language"}
                                   value={values.language || ""}
                                   disabled={props.type === "VIEW"}
                                   className={`form-control ${errors.language ? "border-danger" : ""}`}
                                   onChange={handleChange}
                            />
                            {errors.language && <p className={"text-danger"}>{errors.language}</p>}
                        </div>
                    </div>
                    <div className={"col-md-6"}>
                        <div className={"mb-3"}>
                            <h6><label htmlFor="exampleInputEmail1"
                                       className="settings-form-text">Rate</label></h6>
                            <input type="number" name={"rate"} id="exampleInputAddress"
                                   placeholder={"Enter Rate"}
                                   value={values.rate || ""}
                                   disabled={props.type === "VIEW"}
                                   className={`form-control ${errors.rate ? "border-danger" : ""}`}
                                   onChange={handleChange}
                            />
                            {errors.rate && <p className={"text-danger"}>{errors.rate}</p>}
                        </div>
                    </div>
                    {/*<div className={"col-md-6"}>*/}
                    {/*    <div className={"mb-3"}>*/}
                    {/*        <h6><label htmlFor="exampleInputEmail1"*/}
                    {/*            className="settings-form-text">Fee</label></h6>*/}
                    {/*        <input type="text" name={"fee"} id="exampleInputAddress"*/}
                    {/*            placeholder={"Enter Fee"}*/}
                    {/*            className={`form-control ${errors.fee ? "border-danger" : ""}`}*/}
                    {/*            onChange={handleChange}*/}
                    {/*        />*/}
                    {/*        {errors.fee && <p className={"text-danger"}>{errors.fee}</p>}*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    <div className={"col-md-6"}>
                        <div className={"mb-3"}>
                            <h6><label htmlFor="exampleInputEmail1"
                                       className="settings-form-text">Duration</label></h6>
                            <input type="text" name={"duration"} id="exampleInputAddress"
                                   placeholder={"Enter Duration"}
                                   value={values.duration || ""}
                                   disabled={props.type === "VIEW"}
                                   className={`form-control ${errors.duration ? "border-danger" : ""}`}
                                   onChange={handleChange}
                            />
                            {errors.duration && <p className={"text-danger"}>{errors.duration}</p>}
                        </div>
                    </div>
                    <div className="mb-3 ">
                        <label htmlFor="exampleFormControlTextarea1" className={"form-label"}>Description</label>
                        <textarea className={`form-control ${errors.description ? "border-danger" : ""}`}
                                  id="exampleFormControlTextarea1" name={"description"} onChange={handleChange}
                                  value={values.description || ""}
                                  disabled={props.type === "VIEW"}
                                  placeholder="Message" rows="5"></textarea>
                        {errors.description && <p className={"text-danger"}>{errors.description}</p>}
                    </div>
                    {props.type !== "VIEW" &&<div className={"col-md-6"}>
                        <div className="mb-3">
                            <h6>
                                <label htmlFor="exampleInputEmail1"
                                       className={`form-label settings-form-text d-block ${props.type !== "View" ? "" : ""}`}
                                       width={"100%"}>Image</label>
                            </h6>
                            <FileUploader handleChange={handleChangeImage}>
                                <div className={"file-uploader-container form-control label1"}>
                                    <img src={uploadIcon} width={"27%"}/>
                                    {!image?.name ? <div>
                                            <div className={"fw-semibold my-2"}>Drop or Select file
                                            </div>
                                            <div className={""}>Drop files here or click <span
                                                className={"text-success text-decoration-underline mt-3"}>browse</span> thorough
                                                your machine
                                            </div>
                                        </div> :
                                        <div className={"fw-semibold my-2"}>{image?.name}</div>
                                    }
                                </div>
                            </FileUploader>
                        </div>
                    </div>}
                    {props.type === "VIEW" && <div className={"col-md-12"}>
                        <label htmlFor="exampleInputEmail1"
                               className={`form-label settings-form-text d-block ${props.type !== "View" ? "" : ""}`}
                               width={"100%"}>Image</label>
                        <img src={values.image} width={"100%"}/>
                    </div>}
                    {props.type === "VIEW" && <div className={"col-md-12"}>
                        <label htmlFor="exampleInputEmail1"
                               className={`form-label settings-form-text d-block ${props.type !== "View" ? "" : ""}`}
                               width={"100%"}>Image Banner</label>
                        <img src={values.imageBanner} width={"100%"}/>
                    </div>}
                    {props.type !== "VIEW" && <div className={"col-md-6"}>
                        <div className="mb-3">
                            <h6>
                                <label htmlFor="exampleInputEmail1"
                                       className={`form-label settings-form-text d-block ${props.type !== "View" ? "" : ""}`}
                                       width={"100%"}>Image Banner</label>
                            </h6>
                            <FileUploader handleChange={handleChangeImageBanner}>
                                <div className={"file-uploader-container form-control label1"}>
                                    <img src={uploadIcon} width={"27%"}/>
                                    {!imageBanner?.name ? <div>
                                            <div className={"fw-semibold my-2"}>Drop or Select file
                                            </div>
                                            <div className={""}>Drop files here or click <span
                                                className={"text-success text-decoration-underline mt-3"}>browse</span> thorough
                                                your machine
                                            </div>
                                        </div> :
                                        <div className={"fw-semibold my-2"}>{imageBanner?.name}</div>
                                    }
                                </div>
                            </FileUploader>
                        </div>
                    </div>}
                </div>}


            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={closeModal}>
                    Close
                </Button>
                {props.type !== "VIEW" && <Button variant="success" onClick={() => {
                    handleSubmit()
                }}>
                    {"Save"}
                </Button>}
            </Modal.Footer>
        </Modal>
    );
}

export default MovieDataAdd;