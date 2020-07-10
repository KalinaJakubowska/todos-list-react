import React from "react";
import "./style.css";


const Buttons = ({ tasks, isHidingEnabled }) => (

    <div className="section__buttonContainer">
        {tasks.length > 0 && (
            <React.Fragment>
                <button className="section__button js-hideAllButton">
                    {isHidingEnabled ? "Pokaż" : "Ukryj"} ukończone
                </button>
                <button className=" section__button" disabled={tasks.every(({ done }) => done)}>
                    Ukończ wszystkie
                </button>
            </React.Fragment>
        )
        }


    </div>
);

export default Buttons;