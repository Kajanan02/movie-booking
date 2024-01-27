import React, {useEffect, useState} from 'react'
// import '../loginForm/Login.css'
import {Link, useNavigate} from 'react-router-dom'
import axios from "axios";
import formHandler from "../../utilities/FormHandler";
import {validateLogin, validateTicketBook} from "../../utilities/validations";
import {toast} from "react-toastify";
import {toggleLoader} from "../../redux/actions";
import {useDispatch} from "react-redux";

export default function LoginForm() {

    const [submit, setSubmit] = useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();



    const {
        handleChange,
        handleSubmit,
        setValue,
        initForm,
        values,
        deleteErrors,
        errors,
    } = formHandler(loginAdmin, validateLogin);


    function loginAdmin() {

        setSubmit(true)
        console.log("asd")
    }



    useEffect(() => {
        if(!submit){
            return;
        }
        axios.post(`${process.env.REACT_APP_HOST}login`, values)
            .then((res) => {
                console.log(res)
                toast.success("Successfully Login")
                localStorage.setItem("ACCESS_TOKEN",res.data.token)
                navigate("/admin")


            }).catch((err) => {
            toast.error("Something went wrong")
            console.log(err)
        }).finally(() => {
            setSubmit(false);
            dispatch(toggleLoader(false))
        })
    }, [submit]);


    return (

        <div id="loginPageBody">

            <div className="wrapper">
                <form onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    <div className="input-box">
                        <input  placeholder="Username" onChange={handleChange} name={"username"}/>
                        <i className='bx bxs-user'></i>
                        {errors.username && <p className={"text-danger"}>{errors.username}</p>}

                    </div>
                    <div className="input-box">
                        <input type="password" placeholder="Password" onChange={handleChange} name={"password"}/>
                        {errors.password && <p className={"text-danger mb-2"}>{errors.password}</p>}

                        <i className='bx bxs-lock-alt' ></i>
                    </div>
                    <div className="remember-forgot mt-4">
                        <label><input type="checkbox"/>Remember Me</label>
                        <a href="#">Forgot Password</a>
                    </div>
                    <button type="submit" className="btn">Login</button>
                    {/*<div className="register-link">*/}
                    {/*    <p>Dont have an account? <Link to="/signup" >Register</Link></p>*/}
                    {/*</div>*/}
                </form>
            </div>

        </div>

    )
}
