import React, { useState } from "react";
import "./style.css";

const Form = ({ addNewTask }) => {
    const [newTaskName, setNewTaskName] = useState("");
    const onFormSubmit = (event) => {
        event.preventDefault();
        addNewTask(newTaskName);
        setNewTaskName("");
    }

    return (
        <form onSubmit={onFormSubmit} className="form">
            <input value={newTaskName} onChange={({ target }) => setNewTaskName(target.value)} autoFocus placeholder="Co jest do zrobienia?" className="form__input" />
            <button className="form__button">Dodaj zadanie</button>
        </form>
    )
};
export default Form;