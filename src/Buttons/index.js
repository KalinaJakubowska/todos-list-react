import React from "react";
import "./style.css";

const Buttons = ({ tasks, isHidingEnabled }) => (

    <div className="buttonContainer">
        {tasks.length > 0 && (
            <>
                <button className="buttonContainer__button">
                    {isHidingEnabled ? "Pokaż" : "Ukryj"} ukończone
                </button>
                <button className="buttonContainer__button" disabled={tasks.every(({ done }) => done)}>
                    Ukończ wszystkie
                </button>
            </>
        )}
    </div>
);
export default Buttons;