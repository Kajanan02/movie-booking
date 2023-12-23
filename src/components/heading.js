import React from 'react';

function Heading({heading, subTxt}) {
    return (
        <section className="category-movie pb-75 pt-75">
            <div className="haddings">
                <div className="container">
                    <div className="hadding-area">
                        <h2>{heading}</h2>
                        <p>{subTxt}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Heading;