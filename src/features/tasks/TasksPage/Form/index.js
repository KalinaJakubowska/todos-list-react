import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { FormSheet, Button } from "./styled"
import { addTasks } from "./../../tasksSlice";
import Input from "../../Input";

const Form = () => {
    const [newTaskName, setNewTaskName] = useState("");

    const inputRef = useRef(null);

    const dispatch = useDispatch();

    const focusInput = () => {
        inputRef.current.focus();
    }
    const onFormSubmit = (event) => {
        event.preventDefault();

        focusInput();

        if (!newTaskName.trim()) {
            return 0;
        }

        dispatch(addTasks([
            {
                name: newTaskName.trim(),
                done: false,
            },
        ]));
        setNewTaskName("");
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