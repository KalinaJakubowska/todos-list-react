import React from "react";
import "./style.css";

const Tasks = ({ tasks, isHidingEnabled }) => (
    <ul className="list">
        {tasks.map(({ id, name, done }) => (
            <li key={id}
                className={`list__item${done && isHidingEnabled ? " list__item--hidden" : ""}`}
            >
                <button className="list__button">{done ? "✔" : ""}</button>
                <span className={`list__taskName ${done ? "list__taskName--done" : ""}`}>
                    {name}
                </span>
                <button className="list__button list__button--delete">🗑</button>
            </li>
        ))}
    </ul>
)
export default Tasks;