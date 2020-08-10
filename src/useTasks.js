import { useState, useEffect } from "react";

export const useTasks = () => {
    const [tasks, setTasks] =
        useState(JSON.parse(localStorage.getItem("tasks")) || []);

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks))
    }, [tasks]);

    const deleteTask = id => {
        setTasks(tasks => tasks.filter(task => task.id !== id));
    };
    const toggleTaskDone = id => {
        setTasks(tasks => tasks.map(task => {
            if (task.id === id) {
                return { ...task, done: !task.done }
            }

            return task
        }));
    };
    const doAllTasks = () => {
        setTasks(tasks => tasks.map(task => ({ ...task, done: true })));
    };
    const addNewTask = (name) => {
        if (!name) {
            return;
        }

        setTasks(tasks => [
            ...tasks,
            {
                name,
                done: false,
                id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
            },
        ]);
    };

    return {
        tasks,
        deleteTask,
        toggleTaskDone,
        doAllTasks,
        addNewTask,
    }
}