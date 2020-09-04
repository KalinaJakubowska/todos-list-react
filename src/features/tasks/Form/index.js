import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { FormSheet, Input, Button } from "./styled"
import { addTask } from "../tasksSlice";

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

        dispatch(addTask({
            name: newTaskName.trim(),
            done: false,
            id: nanoid(),
        }));
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