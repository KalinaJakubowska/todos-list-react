import React from "react";
import "./style.css";

const Buttons = ({ tasks, isHidingEnabled, toggleHideDone }) => (
    <div className="buttons">
        {tasks.length > 0 && (
            <>
                <button
                    className="buttons__button"
                    onClick={toggleHideDone}
                >
                    {isHidingEnabled ? "Pokaż" : "Ukryj"} ukończone
                </button>
                <button className="buttons__button" disabled={tasks.every(({ done }) => done)}>
                    Ukończ wszystkie
                </button>
            </>
        )}
    </div>
);
export default Buttons;