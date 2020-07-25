import React, { useEffect } from "react";
import "./style.css";

const List = ({ tasks, isHidingEnabled, deleteTask, toggleTaskDone }) => {
    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks))
    }, [tasks]);

    if (!tasks.length) {
        return (
            <p>
                Aktualnie nie masz żadnych zadań do wykonania. Ciesz się wolnym czasem :)
            </p>
        );
    }

    return (
        <ul className="list">
            {tasks.map(({ id, name, done }) => (
                <li
                    key={id}
                    className={`list__item${done && isHidingEnabled ? " list__item--hidden" : ""}`}
                >
                    <button
                        onClick={() => toggleTaskDone(id)}
                        className="list__button"
                    >
                        {done ? "✔" : ""}
                    </button>
                    <span className={`list__taskName ${done ? "list__taskName--done" : ""}`}>
                        {name}
                    </span>
                    <button
                        onClick={() => deleteTask(id)}
                        className="list__button list__button--delete"
                    >
                        🗑
                    </button>
                </li>
            ))}
        </ul>
    )
}
export default List;