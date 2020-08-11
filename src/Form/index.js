import React, { useState, useRef } from "react";
import {FormSheet, Input, Button} from "./styled"

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
        focusInput();
    }

    return (
        <FormSheet onSubmit={onFormSubmit}>
            <Input
                ref={inputRef}
                value={newTaskName}
                onChange={({ target }) => setNewTaskName(target.value)}
                autoFocus
                placeholder="Co jest do zrobienia?"
            />
            <Button>
                Dodaj zadanie
            </Button>
        </FormSheet>
    )
};
export default Form;