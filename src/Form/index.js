import React, { useState, useRef } from "react";
import "./style.css";

const Form = ({ addNewTask }) => {
    const [newTaskName, setNewTaskName] = useState("");

    const inputRef = useRef(null);

    const focusInput = () => {
        inputRef.current.focus();
    }
    const onFormSubmit = (event) => {
        event.preventDefault();
        addNewTask(newTaskName.trim());
        setNewTaskName("");
    }

    return (
        <form onSubmit={onFormSubmit} className="form">
            <input
                ref={inputRef}
                value={newTaskName}
                onChange={({ target }) => setNewTaskName(target.value)}
                autoFocus
                placeholder="Co jest do zrobienia?"
                className="form__input"
            />
            <button onClick={focusInput} className="form__button">
                Dodaj zadanie
            </button>
        </form>
    )
};
export default Form;