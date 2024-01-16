import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import axios from "axios";
import {toggleLoader} from "../../redux/actions";

function Faq(props) {
    const dispatch = useDispatch();
    const [faqList, setFaqList] = useState([]);


    useEffect(() => {
        dispatch(toggleLoader(true))
        axios.get(`${process.env.REACT_APP_HOST}faq`)
            .then((res) => {
                setFaqList(res.data)
            })
            .catch((err) => {
                console.log(err)
            }).finally(() => {
            dispatch(toggleLoader(false))
        })
    }, []);


    return (
        <div className={"container"}>
            <div className={"pt-170 pb-75"}>
                <div className="accordion" id="accordionPanelsStayOpenExample">
                    {faqList.map((faq,index)=>(<div className="accordion-item" key={"faq+" + index}>
                        <h2 className="accordion-header">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#panelsStayOpen-collapseOne" aria-expanded={index === 0}
                                    aria-controls="panelsStayOpen-collapseOne">
                                {faq.question}
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
                            <div className="accordion-body bg-dark text-white">
                                {faq.answer}
                            </div>
                        </div>
                    </div>))}


                </div>
            </div>
        </div>
    );
}

export default Faq;