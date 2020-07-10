import React from "react";
import "./style.css";

const Section = ({ title, extraHeaderContent, body }) => (
    <section className="section">
        <div className="section__container">
            <h2 className="section__title"> {title} </h2>
            {extraHeaderContent}
        </div>
        <div className="section__body">
            {body}
        </div>
    </section>
)
export default Section;